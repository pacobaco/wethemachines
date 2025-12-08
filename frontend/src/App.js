import React, { useState, useEffect } from 'react';
import PinupMap from './components/PinupMap';
import PaywallModal from './components/PaywallModal';
import PremiumContent from './components/PremiumContent';

function App() {
  const [nodes, setNodes] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/pinups")  // Replace with deployed backend URL
      .then(res => res.json())
      .then(data => setNodes(data));
  }, []);

  const handleNodeClick = (node) => {
    if (node.locked) {
      setSelectedNode(node);
      setShowModal(true);
    }
  };

  const handleUnlock = () => {
    // Call unlock API
    fetch("http://localhost:5000/api/unlock", { method: 'POST', body: JSON.stringify({ id: selectedNode.id }), headers: { 'Content-Type': 'application/json' } })
      .then(res => res.json())
      .then(() => {
        setNodes(nodes.map(n => n.id === selectedNode.id ? { ...n, locked: false } : n));
        setShowModal(false);
      });
  };

  return (
    <div>
      <h1>Wethemachines Demo</h1>
      <PinupMap nodes={nodes} onNodeClick={handleNodeClick} />
      {showModal && <PaywallModal node={selectedNode} onUnlock={handleUnlock} onClose={() => setShowModal(false)} />}
      <PremiumContent nodes={nodes.filter(n => !n.locked)} />
    </div>
  );
}

export default App;
