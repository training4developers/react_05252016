import React from 'react';
import ReactDOM from 'react-dom';
import ItemForm from './components/item-form';

const colors = ['red','gold','green','white','saffron','blue'];

const ItemTable = props => <div>
	<ul>
		{props.items.map(item => <li key={item}>{item}</li>)}
	</ul>
	<button type='button' onClick={props.showAddItem}>Add Item</button>
</div>;

// function ItemTable(props) {
// 	return React.createElement('ul', null, null);
// }

class ItemTool extends React.Component {

	static get propTypes() {
		return {
			title: React.PropTypes.string.isRequired,
			items: React.PropTypes.array.isRequired
		};
	}

	constructor(props) {
		super(props);

		this.state = {
			items: props.items.concat()
		};

		this.addItem = this.addItem.bind(this);
		this.showAddItem = this.showAddItem.bind(this);
	}

	showAddItem() {
		this.setState({
			view: 'form'
		});
	}



	addItem(newItem) {

		this.setState({
			items: this.state.items.concat(newItem),
			view: 'list'
		});

	}

	render() {

		let currentView = 'list';

		switch(this.state.view) {
			case 'form':
				currentView = <ItemForm addItem={this.addItem} />;
				break;
			default:
				currentView = <ItemTable items={this.state.items} showAddItem={this.showAddItem} />;
				break;
		}

		return <div>
			<h1>{this.props.title}</h1>
			{currentView}
		</div>;
	}

}

const widgets = [
	{ id: 1, name: 'Widget 1', description: 'Widget 1 Desc', color: 'red', size: 'large', quantity: 1},
	{ id: 2, name: 'Widget 2', description: 'Widget 2 Desc', color: 'blue', size: 'small', quantity: 2},
	{ id: 3, name: 'Widget 3', description: 'Widget 3 Desc', color: 'black', size: 'medium', quantity: 3}
];

class WidgetTable extends React.Component {

	static get propTypes() {
		return {
			widgets: React.PropTypes.array
		};
	}

	render() {
		return <table className='table table-striped'>
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Description</th>
					<th>Color</th>
					<th>Size</th>
					<th>Quantity</th>
				</tr>
			</thead>
			<tbody>
				{this.props.widgets.map(widget =>
					<tr key={widget.id}>
						<td>{widget.id}</td>
						<td>{widget.name}</td>
						<td>{widget.description}</td>
						<td>{widget.color}</td>
						<td>{widget.size}</td>
						<td>{widget.quantity}</td>
					</tr>)}
			</tbody>
		</table>;
	}

}

ReactDOM.render(<ItemTool items={colors} title='ADP Items' />, document.querySelector('main'));
//ReactDOM.render(<WidgetTable widgets={widgets} />, document.querySelector('main'));
