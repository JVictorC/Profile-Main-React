import React from 'react';

export default function Wave({ component }) {
  return (
    <section>
      <div className={ `wave wave-${component} wave2` } />
      <div className={ `wave wave-${component} wave2` } />
      <div className={ `wave wave-${component} wave3` } />
      <div className={ `wave wave-${component} wave4` } />
    </section>
  );
}
