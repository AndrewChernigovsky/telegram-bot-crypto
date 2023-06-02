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
export const walletOpitons = {
	chat_id: 'CHAT_ID',
	reply_markup: JSON.stringify({
		inline_keyboard: [[{ text: 'Участвовать в AirDrop', callback_data: '/getWallet' }],],
	}),
};
export const helpOptions = {
	chat_id: 'CHAT_ID',
	reply_markup: JSON.stringify({
		inline_keyboard: [[{ text: 'Все команды', callback_data: '/help' }]],
	}),
};
