import React, { Component } from 'react';
import './PlacesDetail.css';

class PlaceDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState(prevState => ({
			active: !prevState.active
		}));
	}
	render() {
		const { name, address, phoneNumber } = this.props;
		return (
			<div>
				<div onClick={this.handleClick} className="header-wrapper">
					<div>{name}</div>
					<div>{this.state.active ? '--' : '+'}</div>
				</div>
				{this.state.active && 
					<ul> 
						<li>Address: {address}</li>
						<li>Phone: {phoneNumber}</li>
					</ul>
				}
			</div>
		);
	}
}

export default PlaceDetail;