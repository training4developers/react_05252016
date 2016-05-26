import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['red','gold','green','white','saffron','blue'];

class HelloWorld extends React.Component {

	render() {
		//return React.createElement('h1', null, 'Hello World!');
		//return <h1>Hello World!</h1>;

		const listItems = [];

		this.props.colors.forEach(function(item) {
			listItems.push(<li key={item}>{item}</li>);
		});

		return <div>
			<h1>{this.props.title}</h1>
			<ul>
				{listItems}
			</ul>
		</div>;
	}

}

class WidgetTable extends React.Component {

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
			</tbody>
		</table>;
	}

}

ReactDOM.render(<HelloWorld colors={colors} title='ADP Rocks!' />, document.querySelector('main'));
