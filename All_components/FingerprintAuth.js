import FingerprintScanner from 'react-native-fingerprint-scanner';

export const authenticateFingerprint = () => {
  return new Promise((resolve, reject) => {
    FingerprintScanner
      .authenticate({ title: 'Log in with fingerprint' })
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
