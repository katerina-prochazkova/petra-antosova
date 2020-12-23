import React from 'react';
import './style.css';

export const OMne = () => {
  return (
    <>
      <main>
        <div className="omne">
          <div className="omne-foto"></div>

          <h1>Petra Antošová</h1>
          <div className="omne-info">
            <div>
              {' '}
              <p className="omne-text">Můj příběh</p>
            </div>
            <div>
              <p className="omne-text">Mé vzdělání </p>
            </div>
            <div>
              <p className="omne-text">Jak pracuji a co mne inspiruje </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
