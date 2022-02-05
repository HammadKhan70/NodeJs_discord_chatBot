const dotenv = require('dotenv').config(); //initialize dotenv

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const prefix = '!';

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
      message.reply(`Pong`);
  }
  if (command === "hi") {
    message.reply(`Hi! how can i help you`);
  }
});


//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token