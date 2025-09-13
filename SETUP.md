# Quick Setup Guide

## 🚀 Quick Start (5 minutes)

### 1. Prerequisites Check
```bash
# Check Node.js version (should be 16+)
node --version

# Check npm version (should be 8+)
npm --version

# Check if Git is installed
git --version
```

### 2. Install MetaMask
- Visit [metamask.io](https://metamask.io/)
- Install browser extension
- Create or import wallet
- **Important**: Save your seed phrase securely!

### 3. Install Ganache
- Download from [trufflesuite.com/ganache](https://trufflesuite.com/ganache/)
- Install and run
- Use "Quickstart" for immediate setup

### 4. Clone & Setup Project
```bash
# Clone repository
git clone https://github.com/vrii14/Land-Registration-with-Blockchain.git
cd Land-Registration-with-Blockchain

# Install all dependencies
npm run install:all

# Deploy smart contracts
truffle migrate --reset
```

### 5. Configure MetaMask
```bash
# Add Ganache network to MetaMask:
Network Name: Ganache Local
RPC URL: http://127.0.0.1:7545  
Chain ID: 1337
Currency: ETH
```

### 6. Import Test Account
```bash
# In Ganache, click key icon next to any account
# Copy private key
# In MetaMask: Account menu → Import Account → Paste private key
```

### 7. Start Application
```bash
# Start development server
npm run dev

# Application opens at http://localhost:3000
```

## ✅ Verification Checklist

- [ ] Node.js 16+ installed
- [ ] MetaMask extension installed
- [ ] Ganache running on port 7545
- [ ] Smart contracts deployed successfully
- [ ] MetaMask connected to Ganache network
- [ ] Test account imported to MetaMask
- [ ] Application running on localhost:3000
- [ ] Can connect wallet on login page

## 🆘 Quick Troubleshooting

### "Contract not deployed" error
```bash
truffle migrate --reset
```

### MetaMask connection issues
```bash
# Reset MetaMask account:
# MetaMask → Settings → Advanced → Reset Account
```

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### IPFS upload failures
```bash
# Check internet connection
# Verify IPFS configuration in .env file
```

## 🎯 First Steps After Setup

1. **Register as Land Inspector**: Use first Ganache account
2. **Register Test Seller**: Use second Ganache account  
3. **Register Test Buyer**: Use third Ganache account
4. **Verify Users**: Use Land Inspector to verify seller/buyer
5. **Add Test Land**: Use verified seller account
6. **Test Purchase Flow**: Use verified buyer account

## 📞 Need Help?

- **Quick Issues**: Check [Troubleshooting](README.md#troubleshooting)
- **Detailed Guide**: Read full [README.md](README.md)
- **Report Bugs**: [GitHub Issues](https://github.com/vrii14/Land-Registration-with-Blockchain/issues)