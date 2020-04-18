import { SEND_MESSAGE } from '../actions/actions';

const initialState = {
	dialogs: [
		{id: 1, name: 'Oleg'},
		{id: 2, name: 'Pavel'},
		{id: 3, name: 'Dmitry'},
		{id: 4, name: 'Ksenia'},
		{id: 5, name: 'Fedor'},
	],
	messages: [
		{id: 1, message: 'hello'},
		{id: 2, message: 'how are u?'},
		{id: 3, message: 'fine, u?'},
		{id: 4, message: 'too'},
		{id: 5, message: 'good'},
	]
}

export const dialogsPage = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			return Object.assign({}, state, {
				messages: [
					...state.messages,
					{
						id: state.messages[state.messages.length - 1].id++,
						message: action.message,
					}
				]
			})
		default:
			return state
	}
}