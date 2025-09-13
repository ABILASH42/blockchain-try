// Application Constants
export const APP_NAME = process.env.REACT_APP_APP_NAME || 'Land Registry System';
export const APP_VERSION = process.env.REACT_APP_VERSION || '2.0.0';

// Validation Constants
export const AADHAR_LENGTH = 12;
export const PAN_LENGTH = 10;
export const MIN_AGE_BUYER = 18;
export const MIN_AGE_SELLER = 21;

// Email Validation Regex
export const EMAIL_REGEX = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

// Currency Conversion
export const ETH_TO_INR_RATE = 0.0000057;

// Gas Limits
export const DEFAULT_GAS_LIMIT = 2100000;

// IPFS Gateway
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs/';