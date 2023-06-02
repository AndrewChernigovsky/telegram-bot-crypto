export const againOptions = {
	chat_id: 'CHAT_ID',
	reply_markup: JSON.stringify({
		inline_keyboard: [[{ text: 'Крутить', callback_data: '/again' }]],
	}),
};
export const gameOptions = {
	chat_id: 'CHAT_ID',
	reply_markup: JSON.stringify({
		inline_keyboard: [[{ text: 'Начать игру', callback_data: '/go' }]],
	}),
};
export const helpOptions = {
	chat_id: 'CHAT_ID',
	reply_markup: JSON.stringify({
		inline_keyboard: [[{ text: 'все команды', callback_data: '/help' }]],
	}),
};

// export const optionsBOT = {
// 	againOptions: {
// 		chat_id: 'CHAT_ID',
// 		reply_markup: JSON.stringify({
// 			inline_keyboard: [[{ text: 'Крутить', callback_data: '/again' }]],
// 		}),
// 	},
// 	gameOptions: {
// 		chat_id: 'CHAT_ID',
// 		reply_markup: JSON.stringify({
// 			inline_keyboard: [[{ text: 'Начать игру', callback_data: '/go' }]],
// 		}),
// 	},
// };

// export optionsBOT;