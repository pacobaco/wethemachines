import React from 'react';

const PaywallModal = ({ node, onUnlock, onClose }) => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', width: '400px' }}>
      <h2>Unlock Premium Content</h2>
      <p>{node.title}</p>
      <button onClick={onUnlock}>Unlock Now</button>
      <button onClick={onClose} style={{ marginLeft: '10px' }}>Cancel</button>
    </div>
  </div>
);

export default PaywallModal;
