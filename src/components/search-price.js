import React from 'react';
import DollarButton from './dollar-button';

export default class SearchLocation extends React.Component {
	constructor() {
		
		super();

		this.state = {
			priceRange: []
		}
	}
	
	render () {
		return (
			<div className="search__bg search__bg--3">
				<div className="search__overlay search__overlay--3">
					<div className="search">
						<label className="search__label search__label--location" htmlFor="location">Choose a Price Range:</label><br />
							<DollarButton
								dollar="$"
								priceValue="1"
								storePriceValue={this._storePriceValue.bind(this)}
							/>
							<DollarButton
								dollar="$$"
								priceValue="2"
								storePriceValue={this._storePriceValue.bind(this)}
								/>
							<DollarButton
								dollar="$$$"
								priceValue="3"
								storePriceValue={this._storePriceValue.bind(this)}
								/>
							<DollarButton
								dollar="$$$$"
								priceValue="4"
								storePriceValue={this._storePriceValue.bind(this)}
								/>
						<button
							type="submit"
							className="search__button search__button--3"
							onClick={this._seeResult.bind(this)}
						>
							See Result!
						</button>
					</div>
				</div>
			</div>
		);
	}

	_storeEstablishment() {
		const ESTABLISHMENT = this._establishment.value;

		this.props.storeEstablishment(ESTABLISHMENT);
	}

	_storePriceValue(price) {
		this.props.storePrice(price);
	}

	_seeResult() {
		this.props.getResult();
	}
}