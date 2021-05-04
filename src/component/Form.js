import React, { Component } from 'react'

class Form extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 username: '',
			 comments: '',
			 topic: 'react'
		}
	}

	handleUsernameChange = (event) => {
		this.setState({
			username: event.target.value
		})
	}
	handleCommentChange = (event) => {
		this.setState({
			comments: event.target.value
		})
	}
	handleTopicChange = (event) => {
		this.setState({
			topic: event.target.value
		})
	}
	handelSubmit = event => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
		event.preventDefault()
	}
	
	render() {
		const {username, comments, topic} = this.state;
		return (
			<div>
				<form onSubmit={this.handelSubmit} >
					<div>
						<label>Username</label>
						<input 
							type='text' 
							value={username} 
							onChange={this.handleUsernameChange} 
						/>
					</div>
					<div>
						<label>Comments</label>
						<textarea 
							value={comments} 
							onChange={this.handleCommentChange}
						/>
					</div>
					<div>
						<label>Topic</label>
						<select 
							value={topic} 
							onChange={this.handleTopicChange}
						>
							<option value="react" >React</option>
							<option value="angular" >Angular</option>
							<option value="vue" >Vue</option>
						</select>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default Form