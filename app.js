var TelegramBot = require('node-telegram-bot-api');
var token = '214439719:AAEPy705OqV9XeA1slacsEBLsQHWz2jvu08';
var bot = new TelegramBot(token, {polling: true});
var axios = require('axios');


var today = new Date();
var dd = today.getDate();
var mm = ("0" + (today.getMonth()+1)).slice(-2); //January is 0!
var yyyy = today.getFullYear();
var message = '';

bot.onText(/\/курс/, function (msg, match) {
  var userId = msg.from.id;
  axios.get('http://bot.strinzha.com/api.php')
    .then(function(response) {

      console.log(response.data);
      message = 'Курс в Одессе на ' + dd + '.' + mm + '.' + yyyy + '\n\n';

      var kurs = response.data;
      for (var i in kurs ) {
        if (kurs.hasOwnProperty(i)) {
          message += i + ':\n' + 'USD: ' + kurs[i].USD + '\n' + 'EUR: ' + kurs[i].EUR + '\n' + 'RUR: ' + kurs[i].RUR + '\n\n';
        }
      }

      bot.sendMessage(userId, message);
    });
});
