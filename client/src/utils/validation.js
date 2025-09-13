import { EMAIL_REGEX, AADHAR_LENGTH, PAN_LENGTH, MIN_AGE_BUYER, MIN_AGE_SELLER } from './constants';

export const validateBuyerRegistration = (formData) => {
  const errors = {};

  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!formData.age || !Number(formData.age) || Number(formData.age) < MIN_AGE_BUYER) {
    errors.age = `Age must be a number and at least ${MIN_AGE_BUYER}`;
  }

  if (!formData.city?.trim()) {
    errors.city = 'City is required';
  }

  if (!formData.email?.trim() || !EMAIL_REGEX.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.aadharNumber || !Number(formData.aadharNumber) || formData.aadharNumber.length !== AADHAR_LENGTH) {
    errors.aadharNumber = `Aadhar Number should be ${AADHAR_LENGTH} digits long`;
  }

  if (!formData.panNumber || formData.panNumber.length !== PAN_LENGTH) {
    errors.panNumber = `Pan Number should be ${PAN_LENGTH} characters long`;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateSellerRegistration = (formData) => {
  const errors = {};

  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!formData.age || !Number(formData.age) || Number(formData.age) < MIN_AGE_SELLER) {
    errors.age = `Age must be a number and at least ${MIN_AGE_SELLER}`;
  }

  if (!formData.aadharNumber || !Number(formData.aadharNumber) || formData.aadharNumber.length !== AADHAR_LENGTH) {
    errors.aadharNumber = `Aadhar Number should be ${AADHAR_LENGTH} digits long`;
  }

  if (!formData.panNumber || formData.panNumber.length !== PAN_LENGTH) {
    errors.panNumber = `Pan Number should be ${PAN_LENGTH} characters long`;
  }

  if (!formData.landsOwned?.trim()) {
    errors.landsOwned = 'Owned lands information is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateLandDetails = (formData) => {
  const errors = {};

  if (!formData.area || !Number(formData.area)) {
    errors.area = 'Land area must be a valid number';
  }

  if (!formData.city?.trim()) {
    errors.city = 'City is required';
  }

  if (!formData.stateLoc?.trim()) {
    errors.stateLoc = 'State is required';
  }

  if (!formData.price || !Number(formData.price)) {
    errors.price = 'Price must be a valid number';
  }

  if (!formData.propertyPID?.trim()) {
    errors.propertyPID = 'Property PID is required';
  }

  if (!formData.surveyNum?.trim()) {
    errors.surveyNum = 'Survey number is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};