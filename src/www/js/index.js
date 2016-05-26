import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['red','gold','green','white','saffron','blue'];

class HelloWorld extends React.Component {

	static get propTypes() {
		return {
			title: React.PropTypes.string.isRequired,
			items: React.PropTypes.array.isRequired
		};
	}

	constructor(props) {
		super(props);

		this.state = {
			newItem: ''
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		//return React.createElement('h1', null, 'Hello World!');
		//return <h1>Hello World!</h1>;

		const listItems = [];

		this.props.items.forEach(function(item) {
			listItems.push(<li key={item}>{item}</li>);
		});

		return <div>
			<h1>{this.props.title}</h1>
			<ul>
				{listItems}
			</ul>
			<form>
				<label>
					New Item:
					<input type='text' name='newItem' value={this.state.newItem} onChange={this.onChange} />
				</label>
			</form>
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

ReactDOM.render(<HelloWorld items={colors} title='ADP Rocks!' />, document.querySelector('main'));
//ReactDOM.render(<WidgetTable widgets={widgets} />, document.querySelector('main'));
