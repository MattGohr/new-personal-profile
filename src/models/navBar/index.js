import React, { Component } from "react";
import className from "classnames";

class Navbar extends Component {
  get className() {
    return this._className;
  }

  set className(value) {
    this._className = value;
  }

  render() {
    return <input className="class" />;
  }
}

module.export = Navbar;
