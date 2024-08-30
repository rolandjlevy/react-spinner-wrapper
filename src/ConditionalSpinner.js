import React from 'react';
import './spinner.css';

const Animation = () => (
  <section className="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
);

const ConditionalSpinner = ({
  condition,
  size = 80,
  relativePosition = true,
  centreScreen = true,
  absolutePosition = false,
  message,
  children
}) => {
  return (
    <>
      <article className={condition ? 'active' : ''}>
        {condition && (
          <section
            className={centreScreen ? 'centre-screen' : ''}
            style={{
              position:
                (absolutePosition && 'absolute') ||
                (relativePosition ? 'relative' : 'fixed'),
              minHeight: relativePosition ? 710 : 'auto',
              display: condition ? 'flex' : 'none',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              margin: relativePosition ? 'auto' : '0 auto',
              clear: 'both',
              zIndex: '5000'
            }}
          >
            <Animation />
            {message?.length ? <h4 className="message">{message}</h4> : null}
          </section>
        )}
      </article>
      {children}
    </>
  );
};

export default ConditionalSpinner;
