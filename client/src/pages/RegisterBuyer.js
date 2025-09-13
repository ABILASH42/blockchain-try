import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { useWeb3 } from '../hooks/useWeb3';
import { useContract } from '../hooks/useContract';
import { validateBuyerRegistration } from '../utils/validation';
import { uploadToIPFS } from '../utils/ipfs';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { APP_NAME } from '../utils/constants';

const RegisterBuyer = () => {
  const navigate = useNavigate();
  const { contract, currentAccount, loading: web3Loading } = useWeb3();
  const { sendTransaction, loading: contractLoading } = useContract(contract, currentAccount);
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    email: '',
    aadharNumber: '',
    panNumber: ''
  });
  const [document, setDocument] = useState(null);
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setDocument(file);
    } else {
      alert('Please select a PDF file');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateBuyerRegistration(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    if (!document) {
      alert('Please upload your Aadhar card document');
      return;
    }

    try {
      setUploading(true);
      
      // Upload document to IPFS
      const documentHash = await uploadToIPFS(document);
      
      // Register buyer on blockchain
      await sendTransaction('registerBuyer', [
        formData.name,
        parseInt(formData.age),
        formData.city,
        formData.aadharNumber,
        formData.panNumber,
        documentHash,
        formData.email
      ]);

      alert('Registration successful! Please wait for verification.');
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  if (web3Loading) {
    return <LoadingSpinner message="Connecting to blockchain..." />;
  }

  const isLoading = contractLoading || uploading;

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
          <h1 style={{ color: "black" }}>Buyer Registration</h1>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                isInvalid={!!errors.name}
                disabled={isLoading}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                isInvalid={!!errors.age}
                disabled={isLoading}
              />
              <Form.Control.Feedback type="invalid">
                {errors.age}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                isInvalid={!!errors.city}
                disabled={isLoading}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                isInvalid={!!errors.email}
                disabled={isLoading}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Aadhar Number</Form.Label>
              <Form.Control
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleInputChange}
                isInvalid={!!errors.aadharNumber}
                disabled={isLoading}
                maxLength="12"
              />
              <Form.Control.Feedback type="invalid">
                {errors.aadharNumber}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>PAN Number</Form.Label>
              <Form.Control
                type="text"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleInputChange}
                isInvalid={!!errors.panNumber}
                disabled={isLoading}
                maxLength="10"
              />
              <Form.Control.Feedback type="invalid">
                {errors.panNumber}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Aadhar Card Document (PDF)</Form.Label>
              <Form.Control
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                disabled={isLoading}
              />
            </Form.Group>

            <Button 
              type="submit" 
              className="btn-block"
              disabled={isLoading}
              style={{ backgroundColor: '#e14eca', border: 'none' }}
            >
              {isLoading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  {uploading ? 'Uploading...' : 'Registering...'}
                </>
              ) : (
                'Register as Buyer'
              )}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterBuyer;