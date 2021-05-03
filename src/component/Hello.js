import React from 'react';

const Hello = () => {
	// return (
	// 	<div className="class">
	// 		<h1>Hello Raghunandan</h1>
	// 	</div>
	// )
	return React.createElement(
		'div', 
		{id: 'hello', className: 'cLass'}, 
		React.createElement('h1', null, 'Hello Raghunandan')
	);
}

export default Hello;