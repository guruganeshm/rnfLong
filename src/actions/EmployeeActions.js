import {
	EMPLOYEE_UPDATE
} from './types';

emport const employeeUpdate =({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	}
}