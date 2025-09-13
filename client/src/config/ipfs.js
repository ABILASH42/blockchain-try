import { create } from 'ipfs-http-client';

const ipfs = create({
  host: process.env.REACT_APP_IPFS_HOST || 'ipfs.infura.io',
  port: process.env.REACT_APP_IPFS_PORT || 5001,
  protocol: process.env.REACT_APP_IPFS_PROTOCOL || 'https'
});

export default ipfs;