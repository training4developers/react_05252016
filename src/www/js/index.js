import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {

	render() {
		//return React.createElement('h1', null, 'Hello World!');
		return <h1>Hello World!</h1>;
	}

}

ReactDOM.render(<HelloWorld />, document.querySelector('main'));
