import React, { Component } from 'react';
import { Roadmap } from './roadmap';

export default class RoadmapLayout extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 820px)").addEventListener('change', handler);
  }
  render() {
    return (
      <div >
      {this.state.matches && (<Roadmap/>)}
      {!this.state.matches && (<h3>Small Screen</h3>)}
      </div>
    );
  }
}