import React, { useState, useEffect } from 'react';
import './CmsPage.css';

const MAX_LENGTH = 100;

const CmsPage = () => {
  const [heading, setHeading] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/heading')
      .then(res => res.json())
      .then(data => setHeading(data.heading || ''))
      .catch(() => setStatus('Failed to load heading'));
  }, []);

  const handleSave = () => {
    if (heading.length > MAX_LENGTH) {
      setStatus('Text exceeds 100 character limit');
      return;
    }

    fetch('http://localhost:5000/api/heading', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: heading }),
    })
      .then(res => res.json())
      .then(() => {
        setStatus('Heading saved!');
        setTimeout(() => setStatus(''), 2000);
      })
      .catch(() => setStatus('Save failed'));
  };

  return (
    <div className="cms-wrapper">
      <div className="cms-container">
        <h2>ABC Company CMS Page</h2>
        <label htmlFor="heading">Main Heading:</label>
        <textarea
          id="heading"
          maxLength={MAX_LENGTH}
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          rows="3"
          placeholder="Enter new heading..."
        />
        <div className="char-count">{heading.length}/{MAX_LENGTH} characters</div>
        <button onClick={handleSave} disabled={heading.length > MAX_LENGTH}>
          Save
        </button>
        {status && <p className="status">{status}</p>}
      </div>
    </div>
  );
};

export default CmsPage;
