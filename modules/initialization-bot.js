import TelegramApi from 'node-telegram-bot-api';
import { COMMANDS } from './commands.js';
import { gameOptions, againOptions, walletOptions, helpOptions } from './options.js';
import { chance, getRandomIntInclusive, list, getChance, cycle  } from './functions.js';

export const token = '6032976284:AAFk3IgzIblR-jD6gb0c6bqtbhwyBPxOTWc';
export const bot = new TelegramApi(token, { polling: true });

process.env.NTBA_FIX_319 = 1;

let userNameID = '';
let result = [];
let res = '';
let userName = '';
let a = '';

const getWallet = async (chatId) => {
	await bot.sendMessage(
		chatId,
		`Чтобы мы занесли вас в нашу базу, пришлите корректный адрес вашего кошелька (48 символов)`
	);
};

function getuserName(userName) {
	userName = userName;
	return userName;
}

function getA(num1, num2,) {
	a = getRandomIntInclusive(num1, num2);
}

const startGame = async (chatId) => {
	let chance1 = chance();
	// let chance1 = 3;

	if (chance1 == '0') {
		res = cycle(result, res);

		for (let i = 0; i < 5; i++) {
			res += list[result[i]];
		}
				
		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${userName}, К сожалению, ни одна комбинация не выпала, вы проиграли:(`
		);

		res = '';
		result = [];

		await bot.sendMessage(chatId, `Играть еще раз`, againOptions);
	} else if (chance1 == '1') {
		
		res = cycle(result, res);

		a = 1;
		getA(0, 3);
		getChance(a, result, 1);

		for (let i = 0; i < 5; i++) {
			res += list[result[i]];
		}

		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${userName}, Поздравляю, выпала комбинация фруктов - ` +
				list[result[a]] +
				'. И вы получили выигрыш в размере X0.5 от вашей ставки.'
		);
		res = '';
		result = [];
		await bot.sendMessage(chatId, `Играть еще раз`, againOptions);
	} else if (chance1 == '2') {

		res = cycle(result, res);

		getA(0, 2);

		getChance(a, result, 2); 
	
		for (let i = 0; i < 5; i++) {
			res += list[result[i]];
		}

		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${userName}, Поздравляю, выпала комбинация фруктов - ` +
				list[result[a]] +
				' и ' +
				list[result[a + 2]] +
				'. И вы получили выигрыш в размере X2 от вашей ставки.'
		);
		res = '';
		result = [];
		await bot.sendMessage(chatId, `Играть еще раз`, againOptions);
	} else if (chance1 == '3') {
		res = cycle(result, res);

		getA(0, 2);
		getChance(a, result, 3); 

		for (let i = 0; i < 5; i++) {
			res += list[result[i]];
		}

		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${userName}, Поздравляю, выпала комбинация фруктов - ` +
				list[result[a]] +
				'. И вы получили выигрыш в размере X6 от вашей ставки.'
		);
		res = '';
		result = [];
		await bot.sendMessage(chatId, `Играть еще раз`, againOptions);
	} else if (chance1 == '4') {
		res = cycle(result, res);
		getA(0, 1);
		getChance(a, result, 4); 

		for (let i = 0; i < 5; i++) {
			res += list[result[i]];
		}

		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${userName}, Поздравляю, выпала комбинация фруктов - ` +
				list[result[a]] +
				' и ' +
				list[result[4]] +
				'. И вы получили выигрыш в размере X10 от вашей ставки.'
		);
		res = '';
		result = [];
		await bot.sendMessage(chatId, `Хотите сыграть еще?`, againOptions);
	} else if (chance1 == '5') {
		res = cycle(result, res);
		getA(0, 1);
		getChance(a, result, 5); 

		for (let i = 0; i < 5; i++) {
			res += list[result[i]];
		}

		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${userName}, Поздравляю, выпала комбинация фруктов - ` +
				list[result[2]] +
				'. И вы получили выигрыш в размере X20 от вашей ставки. Это почти джекпот, который составляет X50 от вашей ставки!!! Попробуйте еще, вдруг у вас получится выиграть!)'
		);
		res = '';
		result = [];
		await bot.sendMessage(chatId, `Хотите сыграть еще?`, againOptions);
	} else if (chance1 == '6') {
		getA(0, 12);

		for (let i = 0; i < 5; i++) {
			res += list[a];
		}

		await bot.sendMessage(chatId, res);
		await bot.sendMessage(
			chatId,
			`${userName}, Поздравляю, выпала комбинация фруктов - ` +
				res[0] +
				'. И вы выиграли джекпот! Ваш выигрыш - X50 от вашей ставки.'
		);
		res = '';
		result = [];
		await bot.sendMessage(chatId, `Хотите сыграть еще?`, againOptions);
	}
};

export const start = async () => {

	bot.setMyCommands(COMMANDS);

	bot.on('message', async (msg) => {
		const text = msg.text;
		const chatId = msg.chat.id;
		const userName = '@' + msg.from.username;
		const userID = msg.from.id;

		getuserName(userName);

		try {
			if (text === '/start') {
				await bot.sendSticker(
					chatId,
					'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp'
				);

				await bot.sendMessage(
					chatId,
					`${userName}, Добро пожаловать в телеграм бот, со мной ты можешь поиграть в казино. Для того чтобы начать игру напиши /game`
				);

				return bot.sendMessage(chatId, `Если вы хотите, вы можете принять участие в AirDrop. Если вы выиграете джекпот, то вы станете участником AirDrop.`, walletOptions);
			}
			if (text === '/game') {
				await bot.sendMessage(
					chatId,
					'Итак, перед началом игры, прочитайте условия ниже. \n \n Выигрышные комбинации: \n \n 🍎🍎 - X0.5 \n 🍎🍎 + 🍋🍋 - X2 \n 🍎🍎🍎 - X6 \n 🍎🍎 + 🍋🍋🍋 - X10 \n 🍎🍎🍎🍎 - X20 \n 🍎🍎🍎🍎🍎 - X50 \n \n 🍎🍋 - любой фрукт из 🍎🍐🍊🍋🍌🍉🍇🍓🫐🍈🍒🍑'
				);
				await bot.sendMessage(
					chatId,
					`${userName}, Хотите начать играть?`,
					gameOptions
				);
			}
			if (text === '/getWallet') {
				await bot.sendMessage(
					chatId,
					'Введите номер своего кошелька'
				);
			}
			if (text === '/help') {
				await getHELP();

				const getHELP = () => {
					let helpText = `*Доступные команды:*\n`;
					helpText += COMMANDS.map(
						(command) =>
							`*${command.command}* ${command.description}`
					).join(`\n`);
					return bot.sendMessage(chatId, helpText, {
						parse_mode: 'Markdown',
					}, helpOptions);
				};
			}
		} catch (e) {
			return bot.sendMessage(chatId, 'Произошла какая то ошибочка!)');
		}
	});

	bot.on('callback_query', async (msg) => {
		const data = msg.data;
		const chatId = msg.message.chat.id;

		console.log(data);
		if (data === '/again' || data === '/go') {
			return startGame(chatId);
		} else if (data === '/getWallet') {
			return getWallet(chatId);
		}
	});

	bot.on('callback_query', async (query) => {
		userNameID = query.from.id;
		userName = '@' + query.from.username;
		console.log(userNameID, userName);
	});
};
