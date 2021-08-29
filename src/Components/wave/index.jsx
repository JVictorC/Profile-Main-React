import React from 'react';

export default function Wave({ component }) {
  return (
    <section>
      <div className={ `wave wave-${component} wave1` } />
      <div className={ `wave wave-${component} wave2` } />
    </section>
  );
}
