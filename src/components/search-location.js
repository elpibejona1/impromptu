import React from 'react';

export default class SearchLocation extends React.Component {

	render () {
		return (
			<div className={this.props.sectionVisible}>
				<div className="search__overlay search__overlay--1">
					<div className="search">
						<label className="search__label search__label--location" htmlFor="location">Where do you want to explore?</label><br />
						<input
							className="search__input"
							name="location"
							id="location"
							placeholder="neighborhood, city, zip"
							autoFocus
							ref={(input)=> this._location = input}
							/><br />
						<button
							type="button"
							className="search__button search__button--1"
							onClick={this._storeLocation.bind(this)}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		);
	}


	_storeLocation() {
		const LOCATION = this._location.value;

		this.props.storeLocation(LOCATION);
	}
}