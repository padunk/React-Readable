import React, { Component } from "react";

export default class Spacer extends Component {
  render() {
    let height = this.props.height + "px";

    return <div style={{ height: height }}></div>;
  }
}
