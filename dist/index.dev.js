"use strict";

process.env.NTBA_FIX_319 = 1;

var TelegramApi = require('node-telegram-bot-api');

var _require = require('./options'),
    againOptions = _require.againOptions;

var token = '5836842021:AAEW41wNff9HlAhjMfemVZemKepvbSyuiVo';
var bot = new TelegramApi(token, {
  polling: true
});
var list = ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑'];
var result = '';

function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

function chance() {
  var a = [{
    id: 0,
    "int": 61
  }, {
    id: 1,
    "int": 20
  }, {
    id: 2,
    "int": 20
  }, {
    id: 3,
    "int": 8.99
  }, {
    id: 4,
    "int": 6
  }, {
    id: 5,
    "int": 2
  }, {
    id: 6,
    "int": 0.1
  }];
  var sum = 0;

  for (var _i = 0; _i < a.length; _i++) {
    sum += a[_i]["int"];
  }

  var rand = Math.floor(Math.random() * sum);
  var i = 0;

  for (var s = a[0]["int"]; s <= rand; s += a[i]["int"]) {
    i++;
  }

  return a[i].id;
}

var startGame = function startGame(chatId) {
  var chance1, arr2Result, _i2, random_start, random_end, _i3;

  return regeneratorRuntime.async(function startGame$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // let chance1 = chance();
          chance1 = 0;

          if (chance1 == '0') {
            arr2Result = [];

            for (_i2 = 0; _i2 < 5; _i2++) {
              result += arrayRandElement(list);
              arr2Result += result[_i2];
            }

            random_start = 1;
            random_end = arr2Result.length;
            allСycles = 5;
            result.split('');

            for (i = random_start; i <= random_end; i++) {
              result += list[i];
            }

            for (countCycles = 1; countCycles <= allСycles; countCycles++) {
              Array.from(result).splice(Math.random() * result.length, 1)[0];
            }
          } else if (chance1 == '1') {
            for (_i3 = 0; _i3 < 5; _i3++) {
              result.push(arrayRandElement(list));
              result.join('');
            }
          } // switch (chance1) {
          // 	case '2':
          // 		if (chance1 === '2')
          // 	// break
          // 	case '3':
          // 		if (chance1 === '3')
          // 	// break
          // 	case '4':
          // 		if (chance1 === '4')
          // 	// break
          // 	case '5':
          // 		if (chance1 === '5')
          // 	// break
          // 	case '6':
          // 		if (chance1 === '6')
          // 	// break
          // }


          console.log(chance1);
          _context.next = 5;
          return regeneratorRuntime.awrap(bot.sendMessage(chatId, result));

        case 5:
          result = '';
          _context.next = 8;
          return regeneratorRuntime.awrap(bot.sendMessage(chatId, "\u0418\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437", againOptions));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

var start = function start() {
  return regeneratorRuntime.async(function start$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          bot.setMyCommands([{
            command: '/start',
            description: 'Начальное приветствие'
          }, {
            command: '/game',
            description: 'Игра угадай цифру'
          }]);
          bot.on('message', function _callee(msg) {
            var text, chatId;
            return regeneratorRuntime.async(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    text = msg.text;
                    chatId = msg.chat.id;
                    _context2.prev = 2;

                    if (!(text === '/start')) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 6;
                    return regeneratorRuntime.awrap(bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp'));

                  case 6:
                    return _context2.abrupt("return", bot.sendMessage(chatId, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0431\u043E\u0442, \u0441\u043E \u043C\u043D\u043E\u0439 \u0442\u044B \u043C\u043E\u0436\u0435\u0448\u044C \u043F\u043E\u0438\u0433\u0440\u0430\u0442\u044C \u0432 \u043A\u0430\u0437\u0438\u043D\u043E. \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443 \u043D\u0430\u043F\u0438\u0448\u0438 /game"));

                  case 7:
                    if (!(text === '/game')) {
                      _context2.next = 9;
                      break;
                    }

                    return _context2.abrupt("return", startGame(chatId));

                  case 9:
                    return _context2.abrupt("return", bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй еще раз!)'));

                  case 12:
                    _context2.prev = 12;
                    _context2.t0 = _context2["catch"](2);
                    return _context2.abrupt("return", bot.sendMessage(chatId, 'Произошла какая то ошибочка!)'));

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, null, null, [[2, 12]]);
          });
          bot.on('callback_query', function _callee2(msg) {
            var data, chatId;
            return regeneratorRuntime.async(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    data = msg.data;
                    chatId = msg.message.chat.id;

                    if (!(data === '/again')) {
                      _context3.next = 4;
                      break;
                    }

                    return _context3.abrupt("return", startGame(chatId));

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          });

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
};

start();