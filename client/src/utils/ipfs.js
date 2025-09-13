import ipfs from '../config/ipfs';

export const uploadToIPFS = async (file) => {
  try {
    const result = await ipfs.add(file);
    return result.path;
  } catch (error) {
    console.error('Error uploading to IPFS:', error);
    throw new Error('Failed to upload file to IPFS');
  }
};

export const getIPFSUrl = (hash) => {
  return `https://ipfs.io/ipfs/${hash}`;
};