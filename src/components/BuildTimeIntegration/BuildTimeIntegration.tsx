import { FC, useEffect } from 'react';

const BuildTimeIntegration: FC = () => {
  useEffect(() => {
    console.log('BuildTimeIntegration hooks?');
  });

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'skyblue',
      }}
    >
      <h2 style={{ marginTop: 0 }}>Build Time Integration</h2>

      <p>This is an installed package.</p>
    </div>
  );
};

export default BuildTimeIntegration;
