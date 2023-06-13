import React from 'react';

const Questions = () => {
  return (
    <div style={{ backgroundColor: '#0B0B45', color: '#4d5974', display: 'flex', minHeight: '100vh' }}>
      <div style={{ margin: '0 auto', padding: '4rem', width: '48rem' }}>
        <h2>Frequently Asked Questions</h2>
        <div style={{ borderBottom: '1px solid #e5e5e5' }}>
          <button id="accordion-button-2" aria-expanded="false" style={{ position: 'relative', display: 'block', textAlign: 'left', width: '100%', padding: '1em 0', color: '#7288a2', fontSize: '1.15rem', fontWeight: '400', border: 'none', background: 'none', outline: 'none' }}>
            <span style={{ padding: '1em 1.5em 1em 0' }} className="accordion-title">What's a storage token?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content" style={{ opacity: '0', maxHeight: '0', overflow: 'hidden', transition: 'opacity 200ms linear, max-height 200ms linear', willChange: 'opacity, max-height' }}>
            <p style={{ fontSize: '1rem', fontWeight: '300', margin: '2em 0' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div style={{ borderBottom: '1px solid #e5e5e5' }}>
          <button id="accordion-button-4" aria-expanded="false" style={{ position: 'relative', display: 'block', textAlign: 'left', width: '100%', padding: '1em 0', color: '#7288a2', fontSize: '1.15rem', fontWeight: '400', border: 'none', background: 'none', outline: 'none' }}>
            <span style={{ padding: '1em 1.5em 1em 0' }} className="accordion-title">How secure are my documents?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content" style={{ opacity: '0', maxHeight: '0', overflow: 'hidden', transition: 'opacity 200ms linear, max-height 200ms linear', willChange: 'opacity, max-height' }}>
            <p style={{ fontSize: '1rem', fontWeight: '300', margin: '2em 0' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div style={{ borderBottom: '1px solid #e5e5e5' }}>
          <button id="accordion-button-5" aria-expanded="false" style={{ position: 'relative', display: 'block', textAlign: 'left', width: '100%', padding: '1em 0', color: '#7288a2', fontSize: '1.15rem', fontWeight: '400', border: 'none', background: 'none', outline: 'none' }}>
            <span style={{ padding: '1em 1.5em 1em 0' }} className="accordion-title">What's a message token?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content" style={{ opacity: '0', maxHeight: '0', overflow: 'hidden', transition: 'opacity 200ms linear, max-height 200ms linear', willChange: 'opacity, max-height' }}>
            <p style={{ fontSize: '1rem', fontWeight: '300', margin: '2em 0' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;

