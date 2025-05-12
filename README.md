# Web3Methods

A development sandbox for testing and experimenting with Ethereum and other EVM-compatible blockchain interactions. This project provides a collection of scripts and utilities for common Web3 operations during development, including account management, token interactions, NFT operations, and transaction handling.

> **Note**: This is not a production-ready library, but rather a development environment for testing blockchain interactions and experimenting with different Web3 functionalities.

## Features

- Account Management
  - Create and import Ethereum accounts
  - Manage private keys and wallets
- Token Operations
  - Query token balances
  - Transfer tokens
  - Get token metadata
- NFT Support
  - Query NFT balances
  - Get NFT metadata
  - Transfer NFTs
- Transaction Management
  - Send transactions
  - Query transaction status
  - Gas estimation
- Network Utilities
  - Multi-chain support
  - Network configuration management
  - Provider management

## Prerequisites

- Node.js (v14 or higher)
- Yarn or npm package manager
- TypeScript knowledge
- A development environment for blockchain testing (e.g., local testnet, testnet RPC endpoints)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/web3methods.git
cd web3methods
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

## Project Structure

```
web3methods/
├── abi/              # Smart contract ABIs
├── packages/         # Core functionality modules
│   ├── web3-account.ts
│   ├── web3-balance.ts
│   ├── web3-import.ts
│   ├── web3-nft.ts
│   ├── web3-tokens.ts
│   └── web3-transactions.ts
├── provider/         # Web3 provider configurations
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── networks/        # Network configurations
```

## Usage

The project provides several scripts for testing different blockchain functionalities:

### Account Management
```bash
yarn start-account
```

### Token Operations
```bash
yarn start-tokens
```

### NFT Operations
```bash
yarn start-nft
```

### Transaction Management
```bash
yarn start-transactions
```

### Balance Checking
```bash
yarn start-balance
```

### Network Configuration
```bash
yarn start-network
```

## Development

This sandbox is designed for development and testing purposes. It's recommended to use test networks (like Sepolia, Goerli, or local testnets) when running these scripts.

### Building the Project
```bash
yarn babel
```

### Running Tests
```bash
# Add test commands when implemented
```

## Dependencies

### Core Dependencies
- ethers.js
- web3.js
- axios
- graphql-request
- bip39
- ethereumjs-wallet

### Development Dependencies
- TypeScript
- ESLint
- Babel
- Various TypeScript type definitions

## Contributing

This is primarily a development sandbox, but contributions are welcome for:
- Adding new testing scenarios
- Improving existing test scripts
- Adding support for new blockchain networks
- Enhancing error handling and logging

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Security

This is a development sandbox and should not be used in production environments. Please report any security issues to the repository maintainers.

## Support

For support or questions about using this development sandbox, please open an issue in the GitHub repository.
