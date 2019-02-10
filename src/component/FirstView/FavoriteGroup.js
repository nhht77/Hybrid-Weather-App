import React, { Component } from 'react';
import FavoriteItem from "./FavoriteItem";

export class FavoriteGroup extends Component {
  render() {
    return (
        this.props.favorite.map( f => <FavoriteItem onSave={this.props.onSave} key={f.id} f={f}/>)
    )
  }
}

export default FavoriteGroup
