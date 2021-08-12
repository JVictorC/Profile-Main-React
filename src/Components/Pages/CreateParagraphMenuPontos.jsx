import React, { Component } from 'react';

export default class ParagraphMenu extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { title, textParagrph, id, callBack, className } = this.props;
    return (
      <>

        <button type="button" onClick={ (e) => { callBack(e, className); } }>
          <h1
            className="my-5 header-sections header-menu"
            id={ id }
          >
            {title}
          </h1>
        </button>

        <section className={ className }>
          <p className="text-white lead fs-3">
            {textParagrph}
          </p>
        </section>
      </>
    );
  }
}
