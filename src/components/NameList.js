import React from 'react'
// import Person from './Person'

// var persons = [
// 	{
// 		id: 1,
// 		name: 'Ryo',
// 		age: 21,
// 		skill: 'React'
// 	},
// 	{
// 		id: 2,
// 		name: 'Diana',
// 		age: 20,
// 		skill: 'Angular'
// 	}
// ]
function NameList() {
	const names = ['Ryo', 'Diana']
	
	// const personList = persons.map((person) => (
	// 	<Person key={person.id} person={person} />
	// ))

	const nameList = names.map((name, index) => <h2 key={index}> {index} {name}</h2>)
	return (
		<div>{nameList}</div>
	)
}

export default NameList
