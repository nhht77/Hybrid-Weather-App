import React, { Component } from 'react';
import Item from "./Item";

export class ItemGroup extends Component {
  render() {
    return (
        this.props.weathers.map( w => <Item onSave={this.props.onSave} key={w.id} w={w}/>)
    )
  }
}

export default ItemGroup
