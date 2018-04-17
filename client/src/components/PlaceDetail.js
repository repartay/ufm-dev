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
		const {
			nameCity,
			nameState,
			name,
			address,
			phoneNumber,
			twoWordDescription
		} = this.props;
		const tel = `tel:${phoneNumber}`;
		return (
			<div>
				<div onClick={this.handleClick} className="header-wrapper">
					<div className="place-wrapper">
						<div className="place-title">{name}</div>
						<div className="place-desc">{twoWordDescription}</div>
					</div>
					<div className="expand-icon">{this.state.active ? '--' : '+'}</div>
				</div>
				{this.state.active && 
					<div className="content-wrapper">
						<div className="address-sect">
							<div className="address-text"><p>{address}</p></div>
							<div className="address-text"><p>{nameCity}, {nameState}</p></div>
							<div className="phone-text"><a href={tel}>{phoneNumber}</a></div>
						</div>
						<div className="amen-sect">
							<div className="yesOrNo-sect">
								<div className="yesOrNo-question">Breakfast Served?</div>
								<div>Y/N</div>
							</div>
							<div className="yesOrNo-sect">
								<div className="yesOrNo-question">Alcohol Served?</div>
								<div>Y/N</div>
							</div>
							<div className="social-sect">
								<div className="social-icon">Ggl</div>
								<div className="social-icon">Fb</div>
								<div className="social-icon">Ylp</div>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default PlaceDetail;