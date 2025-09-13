import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import { useWeb3 } from '../hooks/useWeb3';
import { useContract } from '../hooks/useContract';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { APP_NAME } from '../utils/constants';

const Login = () => {
  const navigate = useNavigate();
  const { web3, contract, currentAccount, loading: web3Loading, error: web3Error } = useWeb3();
  const { callMethod } = useContract(contract, currentAccount);
  
  const [userRoles, setUserRoles] = useState({
    isSeller: false,
    isBuyer: false,
    isLandInspector: false
  });
  const [selectedRole, setSelectedRole] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUserRoles = async () => {
      if (!contract || !currentAccount) return;

      try {
        setLoading(true);
        const [isSeller, isBuyer, isLandInspector] = await Promise.all([
          callMethod('isSeller', [currentAccount]),
          callMethod('isBuyer', [currentAccount]),
          callMethod('isLandInspector', [currentAccount])
        ]);

        setUserRoles({ isSeller, isBuyer, isLandInspector });
      } catch (error) {
        console.error('Error checking user roles:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUserRoles();
  }, [contract, currentAccount, callMethod]);

  const handleRoleSelection = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleRegistration = () => {
    if (!selectedRole) {
      alert('Please select a role');
      return;
    }
    navigate(`/register-${selectedRole.toLowerCase()}`);
  };

  const navigateToDashboard = (role) => {
    switch (role) {
      case 'seller':
        navigate('/seller/dashboard');
        break;
      case 'buyer':
        navigate('/admin/dashboard');
        break;
      case 'landInspector':
        navigate('/li/dashboard');
        break;
      default:
        break;
    }
  };

  if (web3Loading || loading) {
    return <LoadingSpinner message="Connecting to blockchain..." />;
  }

  if (web3Error) {
    return (
      <div className="container mt-5">
        <Alert variant="danger">
          <Alert.Heading>Connection Error</Alert.Heading>
          <p>Failed to connect to the blockchain. Please ensure MetaMask is installed and connected.</p>
          <p>Error: {web3Error}</p>
        </Alert>
      </div>
    );
  }

  // If user is already registered, show dashboard options
  if (userRoles.isSeller || userRoles.isBuyer || userRoles.isLandInspector) {
    return (
      <div className="bodyC">
        <div className="img-wrapper">
          <img 
            src="https://i.pinimg.com/originals/71/6e/00/716e00537e8526347390d64ec900107d.png" 
            className="logo" 
            alt="Logo"
          />
          <div className="wine-text-container">
            <div className="site-title wood-text">{APP_NAME}</div>
          </div>
        </div>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <h1>Welcome Back!</h1>
            <p>You are already registered. Choose your dashboard:</p>
            
            <Button 
              onClick={() => navigateToDashboard('seller')}
              disabled={!userRoles.isSeller} 
              className="btn-block mb-2" 
              style={{ backgroundColor: "peru" }}
            >
              Seller Dashboard
            </Button>
            
            <Button 
              onClick={() => navigateToDashboard('buyer')}
              disabled={!userRoles.isBuyer} 
              className="btn-block mb-2" 
              style={{ backgroundColor: "peru" }}
            >
              Buyer Dashboard
            </Button>
            
            <Button 
              onClick={() => navigateToDashboard('landInspector')}
              disabled={!userRoles.isLandInspector} 
              className="btn-block mb-2" 
              style={{ backgroundColor: "peru" }}
            >
              Land Inspector Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Registration form for new users
  return (
    <div className="bodyC">
      <a href="/help" className="faq" style={{ borderRadius: "10%", textDecoration: "none", fontWeight: "bolder" }}>
        <h3 style={{ color: "wheat" }}>Help?</h3>
      </a>
      
      <div className="img-wrapper">
        <img 
          src="https://i.pinimg.com/originals/71/6e/00/716e00537e8526347390d64ec900107d.png" 
          className="logo" 
          alt="Logo"
        />
        <div className="wine-text-container">
          <div className="site-title wood-text">{APP_NAME}</div>
        </div>
      </div>
      
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h1 style={{ letterSpacing: "3px", fontWeight: 500, color: "black" }}>Welcome!</h1>
          <h4 style={{ letterSpacing: "2px", color: 'black' }}>Making the Most of Digital Era!</h4>
          <hr style={{ color: "#696969", height: 1 }} />

          <div className="form-group" style={{ color: "black" }}>
            <label className="control-label" style={{ fontSize: "18px", padding: "2px" }}>
              Select Role
            </label>
            <select 
              className="form-control" 
              value={selectedRole}
              onChange={handleRoleSelection}
            >
              <option value="">Select Role</option>
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
            </select>
          </div>

          <button 
            onClick={handleRegistration} 
            className="btn btn-primary btn-block" 
            style={{ marginBottom: "10px", marginTop: "10px" }}
            disabled={!selectedRole}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;