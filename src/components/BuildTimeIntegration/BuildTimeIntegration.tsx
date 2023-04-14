import { FC, useEffect } from 'react';

const BuildTimeIntegration: FC = () => {
  useEffect(() => {
    console.log('BuildTimeIntegration hooks?');
  });

  return <h2>Build Time Integration</h2>;
};

export default BuildTimeIntegration;
