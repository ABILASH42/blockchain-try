# Land Registration System with Blockchain

[![Ethereum](https://img.shields.io/badge/Ethereum-20232A?style=for-the-badge&logo=ethereum&logoColor=white)](https://ethereum.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Solidity](https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white)](https://soliditylang.org/)

## 🏗️ Project Overview

This is a modernized blockchain-based Land Registration System that revolutionizes the traditional land registration process by leveraging Ethereum blockchain technology. The system provides a transparent, secure, and efficient way to register, verify, and transfer land ownership.

### 🎯 Key Features

- **Blockchain Security**: Immutable land records stored on Ethereum blockchain
- **IPFS Integration**: Decentralized document storage
- **Role-based Access**: Separate dashboards for Buyers, Sellers, and Land Inspectors
- **Smart Contract Automation**: Automated land transfer and payment processing
- **Document Verification**: Secure document upload and verification system
- **Real-time Notifications**: Email notifications for important updates

## 🏛️ System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Client  │    │  Ethereum Node  │    │   IPFS Network  │
│                 │    │   (Ganache)     │    │                 │
│  - User Interface│◄──►│  - Smart Contract│◄──►│ - Document Store│
│  - Web3 Integration│    │  - Transaction  │    │ - File Hashing  │
│  - State Management│    │    Processing   │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🛠️ Technology Stack

### Frontend
- **React 18.2+** - Modern React with Hooks
- **React Router v6** - Client-side routing
- **Bootstrap 5** - Responsive UI framework
- **Web3.js v4** - Ethereum blockchain interaction
- **Chart.js** - Data visualization
- **EmailJS** - Email notifications

### Blockchain
- **Solidity** - Smart contract development
- **Truffle Suite** - Development framework
- **Ganache** - Local blockchain for development
- **MetaMask** - Wallet integration

### Storage
- **IPFS** - Decentralized file storage
- **Ethereum** - Transaction and ownership records

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

### Required Software
- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v8.0.0 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **MetaMask Browser Extension** - [Install](https://metamask.io/)
- **Ganache** - [Download](https://trufflesuite.com/ganache/)

### System Requirements
- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: At least 2GB free space
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

## 🚀 Installation Guide

### 1. Clone the Repository
```bash
git clone https://github.com/vrii14/Land-Registration-with-Blockchain.git
cd Land-Registration-with-Blockchain
```

### 2. Blockchain Setup

#### Start Ganache
1. Open Ganache application
2. Create a new workspace or use Quickstart
3. Note the RPC Server URL (usually `http://127.0.0.1:7545`)
4. Keep Ganache running in the background

#### Deploy Smart Contracts
```bash
# Install Truffle globally (if not already installed)
npm install -g truffle

# Compile and deploy contracts
truffle compile
truffle migrate --reset
```

### 3. Frontend Setup

#### Install Dependencies
```bash
cd client
npm install
```

#### Environment Configuration
```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your configuration
nano .env  # or use your preferred editor
```

#### Required Environment Variables
```env
# Blockchain Configuration
REACT_APP_GANACHE_URL=http://127.0.0.1:7545
REACT_APP_NETWORK_ID=5777

# IPFS Configuration  
REACT_APP_IPFS_HOST=ipfs.infura.io
REACT_APP_IPFS_PORT=5001
REACT_APP_IPFS_PROTOCOL=https

# Email Service (Optional)
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

### 4. MetaMask Configuration

#### Add Ganache Network to MetaMask
1. Open MetaMask extension
2. Click on network dropdown (usually shows "Ethereum Mainnet")
3. Select "Add Network" or "Custom RPC"
4. Enter the following details:
   - **Network Name**: Ganache Local
   - **New RPC URL**: http://127.0.0.1:7545
   - **Chain ID**: 1337
   - **Currency Symbol**: ETH
5. Save the network

#### Import Ganache Accounts
1. In Ganache, click on the key icon next to any account
2. Copy the private key
3. In MetaMask, click account icon → Import Account
4. Paste the private key and import

## 🏃‍♂️ Running the Application

### Development Mode
```bash
# Make sure Ganache is running
# Navigate to client directory
cd client

# Start the development server
npm start
```

The application will open at `http://localhost:3000`

### Production Build
```bash
cd client
npm run build
```

## 📱 User Roles & Workflows

### 🏠 Land Inspector (Admin)
- **Default Account**: First account in Ganache
- **Responsibilities**:
  - Verify buyer and seller registrations
  - Approve land transfer transactions
  - Manage system integrity

### 🏪 Seller Workflow
1. **Registration**: Register with personal details and documents
2. **Verification**: Wait for Land Inspector approval
3. **Add Land**: List properties with details and images
4. **Manage Requests**: Approve/reject buyer requests
5. **Receive Payment**: Get paid through smart contract

### 🏡 Buyer Workflow
1. **Registration**: Register with personal details and documents
2. **Verification**: Wait for Land Inspector approval
3. **Browse Lands**: View available properties
4. **Request Land**: Submit purchase requests
5. **Make Payment**: Pay through blockchain transaction
6. **Ownership Transfer**: Receive land ownership

## 🔧 API Endpoints & Smart Contract Methods

### Core Contract Methods

#### Registration Methods
- `registerBuyer(name, age, city, aadhar, pan, document, email)`
- `registerSeller(name, age, aadhar, pan, landsOwned, document)`

#### Verification Methods
- `verifyBuyer(address)` - Land Inspector only
- `verifySeller(address)` - Land Inspector only
- `rejectBuyer(address)` - Land Inspector only
- `rejectSeller(address)` - Land Inspector only

#### Land Management
- `addLand(area, city, state, price, pid, survey, image, document)`
- `requestLand(sellerAddress, landId)`
- `approveRequest(requestId)`
- `payment(receiverAddress, landId)` - Payable function

#### Query Methods
- `getLandsCount()` - Get total registered lands
- `getBuyersCount()` - Get total registered buyers
- `getSellersCount()` - Get total registered sellers
- `isVerified(address)` - Check verification status
- `getLandOwner(landId)` - Get current land owner

## 🧪 Testing

### Run Tests
```bash
# Run smart contract tests
truffle test

# Run frontend tests
cd client
npm test
```

### Test Coverage
- Smart contract functionality
- User registration flows
- Land transfer processes
- Payment mechanisms

## 🚀 Deployment

### Local Deployment
1. Ensure Ganache is running
2. Deploy contracts: `truffle migrate --reset`
3. Start frontend: `cd client && npm start`

### Production Deployment

#### Smart Contracts
```bash
# Deploy to testnet (e.g., Ropsten)
truffle migrate --network ropsten
```

#### Frontend
```bash
cd client
npm run build

# Deploy build folder to your hosting service
# (Netlify, Vercel, AWS S3, etc.)
```

## 🔒 Security Considerations

### Smart Contract Security
- **Access Control**: Role-based permissions implemented
- **Input Validation**: All inputs validated on-chain
- **Reentrancy Protection**: Safe transfer patterns used
- **Gas Optimization**: Efficient contract design

### Frontend Security
- **Input Sanitization**: All user inputs validated
- **XSS Protection**: React's built-in protections
- **HTTPS**: Use HTTPS in production
- **Environment Variables**: Sensitive data in environment files

## 🐛 Troubleshooting

### Common Issues

#### MetaMask Connection Issues
```bash
# Solution: Reset MetaMask account
# MetaMask → Settings → Advanced → Reset Account
```

#### Contract Not Found Error
```bash
# Solution: Redeploy contracts
truffle migrate --reset
```

#### IPFS Upload Failures
```bash
# Solution: Check IPFS configuration
# Verify IPFS_HOST, IPFS_PORT, and IPFS_PROTOCOL in .env
```

#### Transaction Failures
- **Insufficient Gas**: Increase gas limit in MetaMask
- **Network Mismatch**: Ensure MetaMask is on correct network
- **Account Issues**: Check account has sufficient ETH

### Debug Mode
```bash
# Enable debug logging
export DEBUG=true
npm start
```

## 📊 Performance Optimization

### Frontend Optimizations
- **Code Splitting**: Lazy loading of components
- **Image Optimization**: Compressed images and lazy loading
- **Bundle Analysis**: Use `npm run build` and analyze bundle

### Blockchain Optimizations
- **Gas Optimization**: Efficient smart contract design
- **Batch Operations**: Group multiple operations when possible
- **Event Indexing**: Proper event emission for frontend listening

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Standards
- **ESLint**: Follow configured linting rules
- **Prettier**: Use for code formatting
- **Comments**: Document complex logic
- **Testing**: Write tests for new features

### Commit Message Format
```
type(scope): description

feat(auth): add user authentication
fix(contract): resolve payment calculation bug
docs(readme): update installation instructions
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Vrinda Ahuja** - Lead Developer
- **Mrunal Kotkar** - Blockchain Developer  
- **Divya Kharode** - Frontend Developer

## 🙏 Acknowledgments

- **Ethereum Foundation** - For blockchain technology
- **IPFS** - For decentralized storage
- **Truffle Suite** - For development tools
- **React Team** - For the amazing framework

## 📞 Support

For support and queries:
- **Email**: support@landregistry.com
- **GitHub Issues**: [Create an issue](https://github.com/vrii14/Land-Registration-with-Blockchain/issues)
- **Documentation**: [Wiki](https://github.com/vrii14/Land-Registration-with-Blockchain/wiki)

## 🔄 Version History

### v2.0.0 (Current)
- ✅ Modernized to React 18
- ✅ Updated all dependencies
- ✅ Improved security
- ✅ Enhanced user experience
- ✅ Better error handling
- ✅ Comprehensive documentation

### v1.0.0 (Legacy)
- ✅ Basic blockchain integration
- ✅ Core land registration features
- ✅ IPFS document storage

---

**⭐ Star this repository if you find it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/vrii14/Land-Registration-with-Blockchain?style=social)](https://github.com/vrii14/Land-Registration-with-Blockchain/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/vrii14/Land-Registration-with-Blockchain?style=social)](https://github.com/vrii14/Land-Registration-with-Blockchain/network/members)