const TelegramBot = require('node-telegram-bot-api');

const token = '7921673190:AAFPuWAA_fwrRogUb9qJUKdsRYIZQ3HMXOQ';
const gameUrl = 'https://earningapp.site/index.html';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Welcome to MoonWolf Tap! Click below to play:', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: '▶️ Play Game',
          web_app: { url: gameUrl }
        }
      ]]
    }
  });
});
