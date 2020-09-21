import React from 'react';
// import LesMisData from './les-mis-data.json';
import Brexit from './brexit.json';

import './force-directed.scss';
import ForceDirectedGraph from './ForceDirectedGraph';

export default class ForceDirectedExample extends React.Component {
  state = {
    strength: Math.random() * 60 - 30
  };

  render() {
    const {strength} = this.state;
    return (
      <div className="force-directed-example">
        <button
          className="showcase-button"
          onClick={() => this.setState({strength: Math.random() * 60 - 30})}
        >
          {' '}
          REWEIGHT{' '}
        </button>
        <ForceDirectedGraph
          data={Brexit}
          height={500}
          width={500}
          strength={50}
        />
      </div>
    );
  }
}
