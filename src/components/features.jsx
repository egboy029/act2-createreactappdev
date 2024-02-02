import React from 'react';

function Features({ featureList }) {
  return (
    <div className="features_ENLn">
      <div className="container">
        <div className="row">
          {featureList.map((feature, index) => (
            <div key={index} className="col col--4">
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
