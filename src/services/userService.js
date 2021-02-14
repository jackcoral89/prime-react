import axios from 'axios';

export default class UserService {

	async getUsers() {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		return response.data;
	}
	
}