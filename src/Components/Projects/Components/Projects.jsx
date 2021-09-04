import React from 'react';

export default function Jobs(props) {
  const { classN, titleSection } = props;
  return (
    <div className="project-card" className={ classN }>
      <div className="project-card-cover">
        <p className="project-card-title">{titleSection}</p>
        <p className="project-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi porro, quae corporis aperiam voluptates quasi aut eligendi ratione sed placeat laborum doloremque accusantium aliquid ad iste distinctio optio doloribus et.</p>
      </div>
    </div>
  );
}
