import React, { Component } from 'react'
import { AppBar } from 'material-ui'
import { Leftside, Rightside } from './index' 


class Header extends Component {
  state = {
    filters: [
      { id: 1, name: "Eletronics" },
      { id: 2, name: "Household Items" },
      { id: 3, name: "Musical Instruments" },
      { id: 4, name: "Physical Media" },
      { id: 5, name: "Recreational Equipment" },
      { id: 6, name: "Sporting Goods" },
      { id: 7, name: "Eletronics" }
    ]
  }

  render() {
    return (
      <AppBar
        title="Title"
        iconElementLeft={<Leftside filters={this.state.filters} />}
        iconElementRight={<Rightside />}
        style={{ backgroundColor: "#ffffff", display: "flex", alignItems: "center" }}
      >
      </AppBar>
    )
  }
}

export default Header