import math
import random

import telebot
from telebot import types

token = "6104462541:AAHmMJhWjb0iNVMkcK8RNcxTOTjlz-YFEp4"

bot = telebot.TeleBot(token)

chances = [{"id": 0, "int": 61}, {"id": 1, "int": 20}, {"id": 2, "int": 20}, {"id": 3, "int": 8.99}, {"id": 4, "int": 6}, {"id": 5, "int": 2}, {"id": 6, "int": 0.1}]
result = []
res = ''

list = ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑']

def chance():
    sum = 0
    for i in range(len(chances)):
        sum += chances[i]["int"]

    rand = random.randint(0, sum-1)

    i = 0
    s = chances[0]["int"]
    while s <= rand:
        i += 1
        s += chances[i]["int"]

    return chances[i]["id"]

def getRandomIntInclusive(min, max):
    return random.randint(min, max)

@bot.message_handler(commands=['go'])
def startGame(message):
    chance1 = chance()

    if chance1 == 0:
        for i in range(1, 13):
            result.append(i)

        for countCycles in range(1, 6):
            result.pop(random.randint(0, len(result)-1))

        for i in range(5):
            res += list[result[i]-1]
        
        bot.send_message(message.chat.id, res)
        res = ''
        result = []
    elif chance1 == 1:
        for countCycles in range(1, 6):
            result.pop(random.randint(0, len(result)-1))

        a = random.randint(0, 3)
        result[a+1] = result[a]

        bot.send_message(message.chat.id, res)
        res = ''
        result = []
    elif chance1 == 2:
        for i in range(1, 13):
            result.append(i)

        import random
        for countCycles in range(1, 6):
            result.pop(random.randint(0, len(result) - 1))

        def getRandomIntInclusive(minValue, maxValue):
            return random.randint(minValue, maxValue)

        a = getRandomIntInclusive(0, 2)

        if a == 0:
            result[0] = result[a]
            result[1] = result[a]
            result[2] = result[a + 2]
            result[3] = result[a + 2]
        elif a == 1:
            result[0] = result[a]
            result[1] = result[a]
            result[3] = result[a + 2]
            result[4] = result[a + 2]
        elif a == 2:
            result[1] = result[a]
            result[2] = result[a]
            result[3] = result[a + 2]
            result[4] = result[a + 2]

        for i in range(5):
            res += list[result[i]]
        
        bot.send_message(message.chat.id, res)
        res = ''
        result = []
    elif chance1 == 3:
        for i in range(1, 13):
            result.append(i)

        for countCycles in range(1, 6):
            result.pop(random.randint(0, len(result)-1))

        a = random.randint(0, 2)
        result[a+1] = result[a]
        result[a+2] = result[a]

        bot.send_message(message.chat.id, res)
        res = ''
        result = []
    elif chance1 == 4:
        for i in range(1, 13):
            result.append(i)

        for countCycles in range(1, 6):
            result.pop(random.randint(0, len(result)-1))

        a = random.randint(0, 1)
        if a == 0:
            result[1] = result[0]
            result[3] = result[2]
            result[4] = result[3]
        else:
            result[1] = result[0]
            result[2] = result[0]
            result[4] = result[3]

        for i in range(5):
            res += list[result[i]-1]


        for i in range(5):
            res += list[result[i]-1]

        for i in range(5):
            res += list[result[i]]

        bot.send_message(message.chat.id, res)
        res = ''
        result = []
    elif chance1 == 5:
        for i in range(1, 13):
            result.append(i)

        for countCycles in range(1, 6):
            result.pop(int(random.random() * len(result)))

        a = random.randint(0, 1)
        result[a+1] = result[a]
        result[a+2] = result[a]
        result[a+3] = result[a]

        for i in range(5):
            res += str(list[result[i]-1])

        bot.send_message(message.chat.id, res)
        res = ''
        result = []
    elif chance1 == 6:
        a = random.randint(0, 12)

        for i in range(5):
            res += list[a]

        bot.send_message(message.chat.id, res)
        res = ''
        result = []

@bot.message_handler(commands=['start'])
def start_message(message):
    bot.send_message(message.chat.id, "Добро пожаловать в телеграм бот, {0.first_name}, со мной ты можешь поиграть в казино. Для того чтобы начать игру напиши /game")

@bot.message_handler(commands=['game'])
def start(message):
    bot.send_message(message.chat.id, "Итак, {0.first_name}, перед началом игры, прочитайте условия ниже. \n \n Выигрышные комбинации: \n \n 🍎🍎 - X0.5 \n 🍎🍎 + 🍋🍋 - X2 \n 🍎🍎🍎 - X6 \n 🍎🍎 + 🍋🍋🍋 - X10 \n 🍎🍎🍎🍎 - X20 \n 🍎🍎🍎🍎🍎 - X50 \n \n 🍎🍋 - любой фрукт из 🍎🍐🍊🍋🍌🍉🍇🍓🫐🍈🍒🍑")

bot.infinity_polling()
