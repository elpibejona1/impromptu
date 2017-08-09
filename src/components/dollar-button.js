import React from 'react';

export default class DollarButton extends React.Component {

	render() {
		return(
			<div
				className="search__price"
				onClick={this._togglePrice.bind(this)}
				>{this.props.dollar}</div>
		);
	}

	_togglePrice(e) {

		if (e.target.className === 'search__price') {
			e.target.className = 'search__price search__price--checked';
		} else {
			e.target.className = 'search__price';
		}

		const PRICE = this.props.priceValue;

		this.props.storePriceValue(PRICE);
	}
}