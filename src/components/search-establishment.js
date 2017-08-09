import React from 'react';

export default class SearchEstablishment extends React.Component {

	render () {
		return (
			<div className="search__bg search__bg--2">
				<div className="search__overlay search__overlay--2">
					<div className="search">
						<label className="search__label search__label--location" htmlFor="location">What type of establishment?</label><br />
						<input
							className="search__input"
							name="establishment"
							id="establishment"
							placeholder="park, restaurant, coffee..."
							autoFocus
							ref={(input)=> this._establishment = input}
							/><br />
						<br />
						<button
							type="submit"
							className="search__button search__button--2"
							onClick={this._storeEstablishment.bind(this)}
						>
							Next
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
}