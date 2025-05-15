---
sidebar_label: Zero-Knowledge Proofs (2/2)
title: "Zero-Knowledge Proofs - From Circuits to Cross-Chain Verification"
description: "Zero-Knowledge Proofs - From Circuits to Cross-Chain Verification"
---

Zero-Knowledge Proof systems have emerged as a critical infrastructure for blockchain scalability, privacy and verification. This report provides a comprehensive analysis of ZK circuits, arithmetization techniques, implementation frameworks and cross-chain verification solutions.

## Introduction to Arithmetic Circuits in Zero-Knowledge Proofs

In the context of zero-knowledge proofs, an arithmetic circuit is a system of equations that models a problem in NP. These circuits serve as the foundation for creating mathematical proofs that can be verified without revealing the underlying data.

An arithmetic circuit consists of an ordered collection of operations (primarily additions and multiplications) represented by gates, which are connected by wires. Given inputs, these operations propagate through the circuit to produce outputs. The circuit satisfiability problem-finding inputs that produce a desired output-is NP-complete, making it ideal for constructing proof systems for generic statements.

The basic workflow of a zero-knowledge proof system involves:

1. **Computation**: Defining a program that takes inputs (some secret, some public) and produces outputs
1. **Arithmetization**: Converting the program into a set of mathematical constraints
1. **Proof Generation**: Creating a proof that the constraints are satisfied
1. **Verification**: Checking the validity of the proof without learning the secret inputs

## Arithmetization: The Bridge Between Programs and Mathematics

Arithmetization is the critical process of converting a program with complex statements into a sequence of mathematical constraints that can be proven and verified. This transformation allows us to reason about the correctness of a computation using mathematical objects.

## Types of Arithmetization

## R1CS (Rank-1 Constraint Systems)

R1CS represents constraints in the form AZ ∘ BZ = CZ, where matrices A, B and C are selectors for multiplication gates' inputs and outputs and Z is the witness vector containing all variables. One significant advantage of R1CS is that "you get addition for free," meaning addition operations are inherently part of the matrix-vector multiplication and don't require additional constraints.

## PLONK Arithmetization

PLONK (Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge) represents a more flexible arithmetization approach. It encodes constraints as:

q_L(X) · a(X) + q_R(X) · b(X) + q_O(X) · c(X) + q_M(X) · a(X) · b(X) + q_C(X) = 0

Where q_L, q_R, q_O, q_M and q_C are selector polynomials that specify the gate type and a(X), b(X) and c(X) represent the left input, right input and output values.

In PLONK, the circuit is represented as a table where each row corresponds to a gate, with columns for inputs and outputs. Selector polynomials determine which operation each gate performs (addition, multiplication, etc.).

## AIRs (Algebraic Intermediate Representations)

AIRs, used in STARK systems, define constraints over consecutive rows in an execution trace. A constraint polynomial evaluates to zero when values from consecutive rows are substituted.

For example, in a Fibonacci sequence circuit with width w=2, the constraint polynomials would be:

f₁(X₁,X₂,Y₁,Y₂) = Y₁-X₂-X₁

f₂(X₁,X₂,Y₁,Y₂) = Y₂-Y₁-X₂

Where (X₁,X₂) represents one row and (Y₁,Y₂) represents the next row.

## Circom Constraint Generation

Circom, a domain-specific language for defining arithmetic circuits, generates constraints that are quadratic expressions of the form A*B + C = 0, where A, B and C are linear combinations of signals. The language allows programmers to define these constraints through a high-level syntax that is compiled into a formal representation called R1CS (Rank-1 Constraint System).

## Prime Fields in Zero-Knowledge Proofs

The efficiency of ZK proof systems is heavily influenced by the underlying finite field operations. Different prime fields offer various trade-offs between security, computational efficiency and compatibility with different proof systems.

## Goldilocks Prime

The Goldilocks prime, of the form p = φ² - φ + 1, has special properties that make it particularly efficient for zero-knowledge proof systems. When φ is a power of two, field operations can be implemented very efficiently. More importantly, the +1 term guarantees that the field has a φ-th root of unity, which is crucial for performing large number-theoretic transforms.

In the Goldilocks prime field, φ satisfies the relation φ² = φ - 1, which leads to additional useful relations:

- φ³ = -1
- φ⁴ = -φ
- φ⁵ = 1-φ
- φ⁶ = 1

These relations enable particularly efficient modular reduction algorithms.

## Mersenne Primes for STARKs

Mersenne primes (of the form 2ᵏ-1) provide very efficient field arithmetic, particularly for modular reduction. However, their structure traditionally made them unsuitable for STARKs because they couldn't efficiently accommodate FRI/STIR algorithms.

Recent innovations like Circle STARKs have enabled the use of these fields for STARKs. Circle STARKs are suitable for prime fields Fₚ where 2ᵏ divides p+1, with Mersenne primes being a notable example. This approach leverages the unit circle as a group to implement efficient Fast Fourier Transforms for these fields.

## Circom: A Domain-Specific Language for ZK Circuits

Circom is a novel domain-specific language designed specifically for defining arithmetic circuits, with a compiler written in Rust. It provides a high-level syntax for expressing the constraints that make up a zero-knowledge proof circuit.

## Basic Circom Workflow

1. **Write the Circuit**: Define the circuit using Circom language, specifying private and public inputs and the constraints between them.

```
text// Example: A circuit proving knowledge of factors of n
pragma circom 2.0.0;
template Factor() {
    // Private Inputs:
    signal input p;
    signal input q;
    // Public Inputs:
    signal output n;
    
    assert(p > 1);
    assert(q > 1);
    n <== p * q;
}
component main = Factor();
```



2. **Compile the Circuit**:

```
textcircom circuit.circom --r1cs --wasm --c --sym --inspect
```



This generates several outputs:

- circuit.r1cs: The R1CS constraint system in binary format
- circuit.wasm: WebAssembly code to generate the witness
- C++ witness calculator code
- circuit.sym: A symbols file for debugging
1. **Setup the Powers of Tau**:

```
textsnarkjs powersoftau new bn128 12 pot12_0000.ptau
snarkjs powersoftau contribute pot12_0000.ptau pot12_0001.ptau --name="First contribution" -e="$(openssl rand -base64 20)"
snarkjs powersoftau prepare phase2 pot12_0001.ptau pot12_final.ptau
```



3. **Setup the Proving System**: Either PLONK or Groth16:

```
text# For PLONK
snarkjs plonk setup circuit.r1cs pot12_final.ptau circuit_final.zkey

# For Groth16
snarkjs groth16 setup circuit.r1cs pot12_final.ptau circuit_0000.zkey
```



## snarkJS: Building and Verifying ZK Proofs

snarkJS is a JavaScript library for zkSNARK schemes that works with circuits generated by the Circom compiler. It provides functionalities for generating and verifying zero-knowledge proofs and can be extended to work with various blockchains.

## Key Components of snarkJS

1. **Proof Generation**: After compiling a circuit and setting up the proving system, snarkJS can generate proofs for specific inputs:

```
text# Generate a witness
node generate_witness.js circuit.wasm input.json witness.wtns

# Generate a proof
snarkjs groth16 prove circuit_final.zkey witness.wtns proof.json public.json
```



2. **Verification**: Proofs can be verified using:

```
textsnarkjs groth16 verify verification_key.json public.json proof.json
```



3. **On-chain Verification**: snarkJS can generate Solidity verifier contracts:

```
textsnarkjs zkey export solidityverifier circuit_final.zkey verifier.sol
```



This allows for on-chain verification of proofs, which is essential for blockchain applications.

## Supported Proof Systems

snarkJS supports multiple proving systems, including:

- Groth16: Requires a trusted setup for each circuit, but is very efficient for verification
- PLONK: More flexible and doesn't require a circuit-specific trusted setup
- FFlonk: Newer system with different efficiency characteristics

## zkVerify: Efficient Multi-Chain ZK Proof Verification

zkVerify is an L1 blockchain specifically designed for zero-knowledge proof verification, built on the Substrate framework. It addresses key challenges in the ZK ecosystem:

## The Problem: Prohibitive Verification Costs

Proof verification on general-purpose blockchains like Ethereum is expensive, costing 200,000 to 300,000 gas units per ZK proof, depending on the type. The verification market is estimated to incur over $100 million in security expenses for zkRollups in 2024, potentially growing to $1.5 billion by 2028.

## zkVerify Architecture

1. **Core Blockchain**: A proof-of-stake L1 blockchain with built-in verifier pallets for different types of ZK proofs
2. **Proof Submission Interface**: Entry point for submitting transactions and making RPC calls, with an SDK (zkVerifyJS) for easy interaction
3. **Proof Receipt Mechanism**: After verification, generates proof receipts (Merkle roots of verified proofs) that are published to destination chains
4. **Aggregation Engine**: Permissionless system allowing anyone to participate in aggregation and earn fees
5. **On-Chain Verification**: Users submit Merkle proofs to the zkVerify contract on target chains to verify that their proofs were verified on the zkVerify blockchain

## Supported Proof Systems

zkVerify supports multiple proof systems including:

- FFlonk
- Groth16 (with BN128, BN254, BLS12-381 elliptic curves)
- Plonky2
- Risc0 (various versions)
- Ultraplonk
- Space and Time

## Implementing Cross-Chain ZK Verification with zkVerify

Here's a practical implementation approach for using zkVerify to enable efficient cross-chain ZK proof verification:

### Step 1: Install the SDK

```
javascriptnpm install zkverifyjs
```



### Step 2: Initialize a Session

```
javascriptimport { ZkVerifySession } from 'zkverifyjs';

// Initialize session
const session = await ZkVerifySession.start({
  endpoint: 'wss://testnet.zkverify.io',
  signer: keyPair, // Your signer/wallet
});
```



### Step 3: Verify a Proof

For a Groth16 proof:

```
javascriptconst { events, transactionResult } = await session
  .verify()
  .groth16({ 
    library: Library.snarkjs, 
    curve: CurveType.bn254 
  })
  .execute({
    verificationKey: vkHex,
    proof: proofHex,
    publicInputs: publicInputsHex,
    domain: 'my-domain' // Aggregation domain
  });
```



For a Plonky2 proof:

```
javascriptconst { events, transactionResult } = await session
  .verify()
  .plonky2({ 
    hashFunction: Plonky2HashFunction.Poseidon 
  })
  .execute({
    proof: uncompressedProofHex,
    publicInputs: publicInputsHex,
    verificationKey: vkHex,
    domain: 'my-domain' 
  });
```



### Step 4: Wait for Aggregation Receipt

```
javascriptconst receipt = await session.waitForAggregationReceipt(
  transactionResult.hash
);
```



### Step 5: Verify on Target Chain

The proof receipt can then be verified on any supported target chain by submitting a Merkle proof to the zkVerify contract. Currently supported chains include Sepolia Testnet, Base Sepolia Testnet, Arbitrum Sepolia Testnet, Optimism Sepolia Testnet and EDU Chain Testnet.

## Conclusion

Zero-knowledge proof systems represent a powerful cryptographic technique with applications ranging from privacy-preserving verification to blockchain scalability. The ecosystem consists of multiple interconnected components:

1. **Arithmetic Circuits**: The fundamental building blocks representing computational problems
2. **Arithmetization**: The process of converting programs to mathematical constraints
3. **Prime Fields**: The mathematical domains providing efficient operations
4. **Development Tools**: Languages like Circom and libraries like snarkJS enabling practical implementations
5. **Verification Infrastructure**: Solutions like zkVerify addressing the cost and cross-chain challenges

As the technology matures, specialized infrastructure like zkVerify becomes increasingly important, offering efficient verification across multiple blockchains and supporting diverse proof systems. This enables a new generation of scalable, private and interoperable blockchain applications powered by zero-knowledge proofs.
