import React, { Component } from "react";
export default class NavHeader extends Component {
  render() {
    return (
      <div id="header">
        <button>ShowTime</button>
        <ul>
          <li>Term Insurance</li>
          <li>Customer Service</li>
          <li>About Us</li>
        </ul>
      </div>
    );
  }
}
