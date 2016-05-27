import React from 'react';
import BaseComponent from './base-component';

export default class ItemForm extends BaseComponent {

	constructor(props) {
		super(props);

		this.state = {
			newItem: ''
		};

		this.childAddItem = this.childAddItem.bind(this);
	}

	childAddItem() {
		this.props.addItem(this.state.newItem);
	}

	render() {
		return <form>
			<label>
				New Item:
				<input type='text' name='newItem' value={this.state.newItem} onChange={this.onChange} />
			</label>
			<button type='button' onClick={this.childAddItem}>Add Item</button>
		</form>;
	}
}
