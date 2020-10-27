import React, { Component } from 'react'
import searchImg from "@assets/search.png"
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { SearchWrap } from "./styledSearch"
export default class Search extends Component {
  render() {
    return (
      <SearchWrap width="0">
        <div>
          {/* <SearchBar placeholder="Search" maxLength={8} /> */}
          <img src={searchImg} />
          <span>想吃什么搜索这里，如川菜</span>
        </div>
      </SearchWrap>

    )
  }
}
