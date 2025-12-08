import React from 'react';

const PremiumContent = ({ nodes }) => (
  <div>
    <h2>Unlocked Content</h2>
    {nodes.map(node => (
      <div key={node.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
        <h3>{node.title}</h3>
        <p>Premium content placeholder</p>
      </div>
    ))}
  </div>
);

export default PremiumContent;
