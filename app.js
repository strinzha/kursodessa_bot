var TelegramBot = require('node-telegram-bot-api');
var token = '214439719:AAEPy705OqV9XeA1slacsEBLsQHWz2jvu08';
var bot = new TelegramBot(token, {polling: true});


var kurs  = {
  '7 км': {
    'USD': 'Выходной',
    'EUR': 'Выходной',
    'RUR': 'Выходной'
  },
  'Книжка': {
    'USD': '25.00 / 25.30',
    'EUR': '28.10 / 28.70',
    'RUR': '0.370 / 0.400'
  },
  'Заболотного': {
    'USD': '25.00 / 25.30',
    'EUR': '28.10 / 28.70',
    'RUR': '0.370 / 0.400'
  },
  'Бочарова': {
    'USD': '25.00 / 25.30',
    'EUR': '28.10 / 28.70',
    'RUR': '0.370 / 0.400'
  }
}

var today = new Date();
var dd = today.getDate();
var mm = ("0" + (today.getMonth()+1)).slice(-2); //January is 0!
var yyyy = today.getFullYear();

var message = 'Курс в Одессе на ' + dd + '.' + mm + '.' + yyyy + '\n\n';

for (var i in kurs ) {
  if (kurs.hasOwnProperty(i)) {
    message += i + ':\n' + 'USD: ' + kurs[i].USD + '\n' + 'EUR: ' + kurs[i].EUR + '\n' + 'RUR: ' + kurs[i].RUR + '\n\n';
  }
}

bot.onText(/\/курс/, function (msg, match) {
  var userId = msg.from.id;
  bot.sendMessage(userId, message);
});

bot.onText(/\/тютакатышотам/, function (msg, match) {
  var userId = msg.from.id;
  bot.sendMessage(userId, 'та ниче бобра даю');
});
