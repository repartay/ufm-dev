import React, { Component } from 'react';
import MdRemove from 'react-icons/lib/md/remove';
import FaStarO from 'react-icons/lib/fa/star-o';
import MdAdd from 'react-icons/lib/md/add';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaYelp from 'react-icons/lib/fa/yelp';
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
      phoneNumberPrefix,
      phoneNumberBase,
      twoWordDescription,
      hasAlcohol,
      hasBreakfast,
      linkYelp,
      linkFb,
      isChamberMember,
      price
    } = this.props;
    const phoneFull = phoneNumberPrefix + '-' + phoneNumberBase;
    const tel = `tel:${phoneFull}`;
    const doesHaveBooze = hasAlcohol && hasAlcohol === 'A';
    const doesHaveBfast = hasBreakfast && hasBreakfast === 'B';
    const hasYelpLink = linkYelp && linkYelp !== '';
    const hasFbLink = linkFb && linkFb !== '';
    const isMember = isChamberMember && isChamberMember === 'Y';
    const hasPriceInfo = price && price !== '';
    return (
      <div>
        <div onClick={this.handleClick} className="header-wrapper">
          <div className="place-wrapper">
            <div className="place-title">
              <div className="title-wrapper">
                {(!this.state.active && isMember) ?
                  <div className="icon-spacer">
                    <FaStarO color="blue" size={22}/>
                  </div>
                  : <div className="spacer"></div>
                 }
                 <div className="title-text">{name}</div>
            </div>
            </div>
            <div className="place-desc">
              {twoWordDescription}&nbsp;
              {this.state.active && hasPriceInfo && <span>/ {price}</span>}
            </div>
          </div>
          <div className="expand-icon">{this.state.active ? <MdRemove size={25} /> : <MdAdd size={25} />}</div>
        </div>
        {this.state.active &&
          <div className="content-wrapper">
            <div className="chamber-wrapper">
              {isMember ?
                <div style={{ maxWidth: '50px' }}>
                  <div className="icon-spacer"><FaStarO color="blue" size={22}/></div>
                  <div className="chamber-text">
                    Chamber Member
                  </div>
                </div>
                : <div className="spacer"></div>
              }
              <div className="address-sect">
                <div className="address-text"><p>{address}</p></div>
                <div className="address-text"><p>{nameCity}, {nameState}</p></div>
                <div className="phone-text"><a href={tel}>{phoneFull}</a></div>
              </div>

            </div>
            <div className="amenities-sect">
              <div className="yesOrNo-sect">
                <div className="yesOrNo-question">Breakfast Served?</div>
                {doesHaveBfast ? <div>Y</div> : <div>N</div>}
              </div>
              <div className="yesOrNo-sect">
                <div className="yesOrNo-question">Alcohol Served?</div>
                {doesHaveBooze ? <div>Y</div> : <div>N</div>}
              </div>
              <div className="social-sect">
                {hasYelpLink && (
                  <div className="social-icon">
                    <a href={linkYelp}>
                      <FaYelp color="#c41200" size={42}/>
                    </a>
                  </div>
                )}
                {hasFbLink && (
                  <div className="social-icon">
                    <a href={linkFb}>
                      <FaFacebookSquare color="#3b5998" size={42} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default PlaceDetail;
