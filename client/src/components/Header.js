import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<div className="nav-wrapper teal darken-4">
				<Link 
					className="left brand-logo" 
					style={{ marginLeft: '10px' }}
					to="/ufm-redirect"
				>
				Round Here Logo
				</Link>
			</div>
		</nav>
	);
};

export default Header;