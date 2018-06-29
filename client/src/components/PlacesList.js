import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCityReadOnly } from '../actions';
// import { fetchLogo } from '../helpers';
import PlaceDetail from './PlaceDetail';
import Loading from './Loading';
import './PlacesList.css';

class PlacesList extends Component {
  constructor() {
    super();
    this.state = { isFetching: true };
  }
  componentDidMount() {
    this.props.fetchCityReadOnly(this.props.match.params.cityId);
    setTimeout(() => this.setState({ isFetching: false }), 1500);
  }
  renderTitle() {
    const { city } = this.props;
    const hasLogo = city[0] && city[0].svgUri;
    const cityLogo = city[0].svgUri;
    const thisCityName = city[0] && city[0].namePretty;
    const thisStateName = city[0] && city[0].nameState;
    if (thisCityName && thisStateName) {
      if (hasLogo) {
        return <img src={cityLogo} alt="logo" />
      }
      return (<h2>{thisCityName}, {thisStateName} </h2>);
    }
    return null;
  }
  renderRestaurants() {
    const { city } = this.props;
    const thisCityRestaurants = city[0] && city[0].restaurants;
    if (thisCityRestaurants) {
      return thisCityRestaurants.map(r =>
        <div className="card darken-1" key={r._id}>
          <div className="card-content place-wrap">
            <span className="card-title">
              <PlaceDetail
                nameCity={r.cityName}
                nameState={r.stateName}
                name={r.name}
                address={r.address}
                phoneNumberBase={r.phoneNumberBase}
                phoneNumberPrefix={r.phoneNumberPrefix}
                twoWordDescription={r.twoWordDescription}
                hasAlcohol={r.hasAlcohol}
                hasBreakfast={r.hasBreakfast}
                linkYelp={r.linkYelp}
                linkFb={r.linkFb}
                isChamberMember={r.isChamberMember}
                price={r.price}
              />
            </span>
          </div>
        </div>);
    }
    return null;
  }
  render() {
    const { isFetching } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        {isFetching ?
          <Loading /> :
          <div>
            {this.renderTitle()}
            {this.renderRestaurants()}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  city: state.city,
});

PlacesList.propTypes = {
  city: PropTypes.array,
  fetchCityReadOnly: PropTypes.func,
};

export default connect(mapStateToProps, { fetchCityReadOnly })(PlacesList);

