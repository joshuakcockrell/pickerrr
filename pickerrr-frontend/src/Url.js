import React, { Component } from 'react';
import './Url.css';

class Url extends Component {

  render() {

		return (
			<a href={this.props.url} id="url" target="_blank">{this.props.url}</a>
		);
  }
}


export default Url;
