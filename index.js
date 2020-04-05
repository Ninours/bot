const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', asycn() => {
  bot.user.setActivity('Bot tutoriel. Bonjour!')
});

bot.login('Njk2MzExODE1MDYzMzM5MDA5.XooTVA.q0fRV_szTOychq9r74d_w_XoIVE');
