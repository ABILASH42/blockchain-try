import { useState, useEffect } from 'react';
import getWeb3 from '../config/web3';
import LandContract from '../artifacts/Land.json';

export const useWeb3 = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        // Get network provider and web3 instance
        const web3Instance = await getWeb3();
        
        // Get accounts
        const accounts = await web3Instance.eth.getAccounts();
        
        // Get network ID and contract instance
        const networkId = await web3Instance.eth.net.getId();
        const deployedNetwork = LandContract.networks[networkId];
        
        if (!deployedNetwork) {
          throw new Error('Contract not deployed on current network');
        }
        
        const contractInstance = new web3Instance.eth.Contract(
          LandContract.abi,
          deployedNetwork.address
        );

        setWeb3(web3Instance);
        setAccounts(accounts);
        setContract(contractInstance);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load web3, accounts, or contract:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    initWeb3();
  }, []);

  // Listen for account changes
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        setAccounts(accounts);
        window.location.reload();
      });

      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners('accountsChanged');
        window.ethereum.removeAllListeners('chainChanged');
      }
    };
  }, []);

  return {
    web3,
    accounts,
    contract,
    currentAccount: accounts[0],
    loading,
    error
  };
};