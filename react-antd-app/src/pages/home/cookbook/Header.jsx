import React, { Component } from 'react'
import { HeaderWrap } from "./styledCookbook"
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    }
  }
  render() {
    return (
      <div>
        <HeaderWrap>
          {this.state.name}
        </HeaderWrap>
      </div>
    )
  }
}
