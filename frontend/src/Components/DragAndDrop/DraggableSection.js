import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DraggableSection = ({ sectionId, onDrop, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'SECTION',
    item: { id: sectionId },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'SECTION',
    drop: (item) => onDrop(item.id, sectionId),
  });

  return (
    <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

export default DraggableSection;
