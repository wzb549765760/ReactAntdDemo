import React, { Component } from 'react'
import Header from "./Header"
import Swiper from './Swiper'
import Search from "@components/search/Search";
export default class CookBook extends Component {
  render() {
    return (
      <div>
        <Header name="美食大全"></Header>
        <Swiper />
        <Search />
      </div>
    )
  }
}
