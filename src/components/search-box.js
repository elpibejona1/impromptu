import React from 'react';
import SearchLocation from './search-location';
import SearchEstablishment from './search-establishment';
import SearchPrice from './search-price';

import jQuery from 'jquery';

export default class SearchBox extends React.Component {

	constructor() {
		super();

		this.state = {
			location: '',
			establishment: '',
			price: []
		}
	}

	render() {
		return(
			<div className="search__box">
				<SearchLocation 
					storeLocation={this._storeLocation.bind(this)}

					sectionVisible="search__bg search__bg--1"
					sectionInactive="search__bg search__bg--1 hidden"
				/>

				<SearchEstablishment
					storeEstablishment={this._storeEstablishment.bind(this)}

					sectionVisible="search__bg search__bg--2"
					sectionInactive="search__bg search__bg--2 hidden"
				/>
				
				<SearchPrice
					storePrice={this._storePrice.bind(this)}
					getResult={this._getResult.bind(this)}

					sectionVisible="search__bg search__bg--3 visible"
					sectionInactive="search__bg search__bg--3"
					
					buttonUnchecked="search__price"
					buttonChecked="search__price search__price--checked"
				/>
			</div>
		);
	}

	_storeLocation(userInput) {
		this.setState({
			location: userInput
		}, function() { console.log(this.state.location); });
	}

	_storeEstablishment(userChoice) {
		this.setState({
			establishment: userChoice
		}, function() { console.log(this.state.establishment); });
	}

	_storePrice(price) {
		const ARRAY = this.state.price;
		const ARRAY_LENGTH = ARRAY.length;

		if ( ARRAY_LENGTH === 0) {
			ARRAY.push(price);
		} else {
			let contains = false;
			for ( let i = 0; i < ARRAY_LENGTH; i++) {
				if (price == ARRAY[i]) {
					contains = true;
					ARRAY.splice(i, 1);
				}
			}
			if (!contains) {
				ARRAY.push(price);
			}
		}

		this.setState({
			price: ARRAY
		}, function() { console.log(this.state.price); });
	}

	/* {
		"access_token": "7_PGtx5eLw9FwjdCkYJ67HNKnOce9wQHK47G2mfbh48PMBBY_UMUpuo1EhMy7Jeej7JUIp_CTEE0cIoPxhnvf6Dg5uHY8gAqOaflxRRex9aB2HefSaFZKAsx0nl_WXYx",
		"expires_in": 15544182,
		"token_type": "Bearer"
	} */

	_getResult() {
		let url = "https://api.yelp.com/v3/businesses/search";
		const PRICE_ARRAY = this.state.price;
		const priceRange = PRICE_ARRAY.toString();

		const PARAMETERS = {
			term: this.state.establishment,
			location: this.state.location,
			limit: 1,
			price: priceRange

		}
		url += '?' + jQuery.param(PARAMETERS);
		jQuery.ajax({
			method: 'GET',
			url: url,
			headers: { 
				'Bearer': '7_PGtx5eLw9FwjdCkYJ67HNKnOce9wQHK47G2mfbh48PMBBY_UMUpuo1EhMy7Jeej7JUIp_CTEE0cIoPxhnvf6Dg5uHY8gAqOaflxRRex9aB2HefSaFZKAsx0nl_WXYx',
			},
			success: (place) => {
				const CONTENT = place.response.docs;
				console.log(CONTENT);
				/* this.setState({ articles: CONTENT }) */
			}
		});
	}

}

