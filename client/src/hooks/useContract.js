import { useState, useCallback } from 'react';
import { DEFAULT_GAS_LIMIT } from '../utils/constants';

export const useContract = (contract, account) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callMethod = useCallback(async (methodName, args = [], options = {}) => {
    if (!contract || !account) {
      throw new Error('Contract or account not available');
    }

    setLoading(true);
    setError(null);

    try {
      const result = await contract.methods[methodName](...args).call({
        from: account,
        ...options
      });
      setLoading(false);
      return result;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  }, [contract, account]);

  const sendTransaction = useCallback(async (methodName, args = [], options = {}) => {
    if (!contract || !account) {
      throw new Error('Contract or account not available');
    }

    setLoading(true);
    setError(null);

    try {
      const result = await contract.methods[methodName](...args).send({
        from: account,
        gas: DEFAULT_GAS_LIMIT,
        ...options
      });
      setLoading(false);
      return result;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  }, [contract, account]);

  return {
    callMethod,
    sendTransaction,
    loading,
    error
  };
};