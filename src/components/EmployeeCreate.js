import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input
					label="Name"
					placeholder="Guru"
					/>	
				</CardSection>

				<CardSection>
					<Input
					label="phone"
					placeholder="96299 87793"
					/>
				</CardSection>
				
				<CardSection>
					<Button>
						Create Employee
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default EmployeeCreate;