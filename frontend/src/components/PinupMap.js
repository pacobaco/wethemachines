import React from 'react';
import ForceGraph2D from 'react-force-graph-2d';

const PinupMap = ({ nodes, onNodeClick }) => {
  const graphData = { nodes: nodes.map(n => ({ id: n.id, title: n.title, locked: n.locked })), links: [] };

  return (
    <ForceGraph2D
      graphData={graphData}
      nodeLabel="title"
      nodeCanvasObject={(node, ctx, globalScale) => {
        ctx.fillStyle = node.locked ? 'red' : 'green';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
        ctx.fill();
      }}
      onNodeClick={onNodeClick}
    />
  );
};

export default PinupMap;
