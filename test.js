import axios from 'axios';
import TelegramApi from 'node-telegram-bot-api';
import { againOptions, gameOptions } from './options.js';
import { COMMANDS  } from './commands.js'

process.env.NTBA_FIX_319 = 1;

const token = '6032976284:AAFk3IgzIblR-jD6gb0c6bqtbhwyBPxOTWc';
const bot = new TelegramApi(token, { polling: true });

const options = {
	method: 'POST',
	url: 'https://api.telegram.org/bot6032976284%3AAAFk3IgzIblR-jD6gb0c6bqtbhwyBPxOTWc/getMe',
	headers: {
		accept: 'application/json',
		'User-Agent':
			'Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)',
	},
};

var result = [];
var res = '';
var user = '';
var userBotName = '';
var commandStart = '/start';
var commandGame = '/game';

axios
	.request(options)
		.then(function (response) {
			console.log(response.data);
			userBotName = response.data.result.username;
			console.log(userBotName);
		})
		.catch(function (error) {
			console.error(error);
		});


const list = [
	'🍎',
	'🍐',
	'🍊',
	'🍋',
	'🍌',
	'🍉',
	'🍇',
	'🍓',
	'🫐',
	'🍈',
	'🍒',
	'🍑',
];


function chance() {
	let a = [
		{ id: 0, int: 61 },
		{ id: 1, int: 20 },
		{ id: 2, int: 20 },
		{ id: 3, int: 8.99 },
		{ id: 4, int: 6 },
		{ id: 5, int: 2 },
		{ id: 6, int: 0.1 },
	];

	let sum = 0;
	for (let i = 0; i < a.length; i++) {
		sum += a[i].int;
	}

	let rand = Math.floor(Math.random() * sum);

	let i = 0;
	for (let s = a[0].int; s <= rand; s += a[i].int) {
		i++;
	}

	return a[i].id;
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = async (chatId) => {

	let chance1 = chance();
	let countCycles;

	if (chance1 == '0') {
		for (let i = 1; i <= 12; i++) {
			result.push(i);
		}

		for (countCycles = 1; countCycles <= 5; countCycles++) {
			result.splice(Math.random() * result.length, 1)[0];
		}

		for (let i = 0; i < 5; i++) {
			res += list[result[i]];
		}

		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${user}, К сожалению, ни одна комбинация не выпала, вы проиграли:(`
		);

		res = '';
		result = [];

		await bot.sendMessage(chatId, `Играть еще раз`, againOptions);
	} else if (chance1 == '1') {
		for (let i = 1; i <= 12; i++) {
			result.push(i);
		}

		for (countCycles = 1; countCycles <= 5; countCycles++) {
			result.splice(Math.random() * result.length, 1)[0];
		}

		let a = getRandomIntInclusive(0, 3);
		result[a + 1] = result[a];

		for (let i = 0; i < 5; i++) {
			res += list[result[i]];
		}

		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${user}, Поздравляю, выпала комбинация фруктов - ` +
				list[result[a]] +
				'. И вы получили выигрыш в размере X0.5 от вашей ставки.'
		);
		res = '';
		result = [];
		await bot.sendMessage(chatId, `Играть еще раз`, againOptions);
	} else if (chance1 == '2') {
		for (let i = 1; i <= 12; i++) {
			result.push(i);
		}

		for (countCycles = 1; countCycles <= 5; countCycles++) {
			result.splice(Math.random() * result.length, 1)[0];
		}

		let a = getRandomIntInclusive(0, 2);

		if (a == 0) {
			result[0] = result[a];
			result[1] = result[a];
			result[2] = result[a + 2];
			result[3] = result[a + 2];
		} else if (a == 1) {
			result[0] = result[a];
			result[1] = result[a];
			result[3] = result[a + 2];
			result[4] = result[a + 2];
		} else if (a == 2) {
			result[1] = result[a];
			result[2] = result[a];
			result[3] = result[a + 2];
			result[4] = result[a + 2];
		}

		for (let i = 0; i < 5; i++) {
			res += list[result[i]];
		}

		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${user}, Поздравляю, выпала комбинация фруктов - ` +
				list[result[a]] +
				' и ' +
				list[result[a + 2]] +
				'. И вы получили выигрыш в размере X2 от вашей ставки.'
		);
		res = '';
		result = [];
		await bot.sendMessage(chatId, `Играть еще раз`, againOptions);
	} else if (chance1 == '3') {
		for (let i = 1; i <= 12; i++) {
			result.push(i);
		}

		for (countCycles = 1; countCycles <= 5; countCycles++) {
			result.splice(Math.random() * result.length, 1)[0];
		}

		let a = getRandomIntInclusive(0, 2);
		result[a + 1] = result[a];
		result[a + 2] = result[a];

		for (let i = 0; i < 5; i++) {
			res += list[result[i]];
		}

		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${user}, Поздравляю, выпала комбинация фруктов - ` +
				list[result[a]] +
				'. И вы получили выигрыш в размере X6 от вашей ставки.'
		);
		res = '';
		result = [];
		await bot.sendMessage(chatId, `Играть еще раз`, againOptions);
	} else if (chance1 == '4') {
		for (let i = 1; i <= 12; i++) {
			result.push(i);
		}

		for (countCycles = 1; countCycles <= 5; countCycles++) {
			result.splice(Math.random() * result.length, 1)[0];
		}

		let a = getRandomIntInclusive(0, 1);
		if (a == 0) {
			result[a + 1] = result[a];
			result[3] = result[2];
			result[4] = result[3];
		} else if (a == 1) {
			result[1] = result[0];
			result[2] = result[0];
			result[4] = result[3];
		}

		for (let i = 0; i < 5; i++) {
			res += list[result[i]];
		}

		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${user}, Поздравляю, выпала комбинация фруктов - ` +
				list[result[a]] +
				' и ' +
				list[result[4]] +
				'. И вы получили выигрыш в размере X10 от вашей ставки.'
		);
		res = '';
		result = [];
		await bot.sendMessage(chatId, `Хотите сыграть еще?`, againOptions);
	} else if (chance1 == '5') {
		for (let i = 1; i <= 12; i++) {
			result.push(i);
		}

		for (countCycles = 1; countCycles <= 5; countCycles++) {
			result.splice(Math.random() * result.length, 1)[0];
		}

		let a = getRandomIntInclusive(0, 1);
		result[a + 1] = result[a];
		result[a + 2] = result[a];
		result[a + 3] = result[a];

		for (let i = 0; i < 5; i++) {
			res += list[result[i]];
		}

		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${user}, Поздравляю, выпала комбинация фруктов - ` +
				list[result[2]] +
				'. И вы получили выигрыш в размере X20 от вашей ставки. Это почти джекпот, который составляет X50 от вашей ставки!!! Попробуйте еще, вдруг у вас получится выиграть!)'
		);
		res = '';
		result = [];
		await bot.sendMessage(chatId, `Хотите сыграть еще?`, againOptions);
	} else if (chance1 == '6') {
		let a = getRandomIntInclusive(0, 12);

		for (let i = 0; i < 5; i++) {
			res += list[a];
		}

		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${user}, Поздравляю, выпала комбинация фруктов - ` +
				res[0] +
				'. И вы выиграли джекпот! Ваш выигрыш - X50 от вашей ставки.'
		);
		res = '';
		result = [];
		await bot.sendMessage(chatId, `Хотите сыграть еще?`, againOptions);
	}
};


function getUsername(username) {
	
	user = username;

	return user;
}

const start = async () => {

	function getCommandBot(command) {
		console.log(command);

		if (commandStart) {
			command = commandStart;
		}
		if (commandGame) {
			command = commandGame;
		}
	}

	// bot.setMyCommands([
	// 	{
	// 		command: commandStart,
	// 		description: 'Познакомься со мной)',
	// 	},
	// 	{
	// 		command: commandGame,
	// 		description: 'Казино - крутить рулетку',
	// 	},
	// ]);

	const getHELP = () => { 
		let helpText = `*Доступные команды:*\n`;
			helpText += COMMANDS.map(
				(command) => `*/${command.command}* ${command.description}`
			).join(`\n`);
			return bot.sendMessage(chatId, helpText, {
					parse_mode: 'Markdown',
				});
	}

	bot.setMyCommands(COMMANDS);

	bot.on('message', async (msg) => {
		const text = msg.text;
		const chatId = msg.chat.id;
		const username = '@' + msg.from.username;
		const userID = msg.from.id;

		getUsername(username, userID);

		try {
			if (text === '/start') {
				await bot.sendSticker(
					chatId,
					'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp'
				);
		
				return bot.sendMessage(
					chatId, `${username}, Добро пожаловать в телеграм бот, со мной ты можешь поиграть в казино. Для того чтобы начать игру напиши /game`
				);
			}
			if (text === '/game') {
				await bot.sendMessage(
					chatId,
					'Итак, перед началом игры, прочитайте условия ниже. \n \n Выигрышные комбинации: \n \n 🍎🍎 - X0.5 \n 🍎🍎 + 🍋🍋 - X2 \n 🍎🍎🍎 - X6 \n 🍎🍎 + 🍋🍋🍋 - X10 \n 🍎🍎🍎🍎 - X20 \n 🍎🍎🍎🍎🍎 - X50 \n \n 🍎🍋 - любой фрукт из 🍎🍐🍊🍋🍌🍉🍇🍓🫐🍈🍒🍑'
				);
				await bot.sendMessage(
					chatId,
					`${username}, Хотите начать играть?`,
					gameOptions
				);
			}
			if (text === '/help') {
				await bot.sendMessage(chatId, getHELP(), helpOptions);
				
				return bot.sendMessage(
					chatId,
					`${username}, Добро пожаловать в телеграм бот, со мной ты можешь поиграть в казино. Для того чтобы начать игру напиши /game`
				);
			}
		} catch (e) {
			return bot.sendMessage(chatId, 'Произошла какая то ошибочка!)');
		}
	});

	bot.on('callback_query', async (msg) => {
		const data = msg.data;
		const chatId = msg.message.chat.id;

		console.log(data)
		if ((data === '/again' || data === '/go')) {
			return startGame(chatId);
		}
	});

};

start();
