import React, { Component } from 'react';
import { Roadmap } from './roadmap';
import { RoadmapMobile } from './roadmapMobile';

export default class RoadmapLayout extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 992px)").addEventListener('change', handler);
  }
  render() {
    return (
      <div >
      {this.state.matches && (<Roadmap/>)}
      {!this.state.matches && (<RoadmapMobile/>)}
      </div>
    );
  }
}