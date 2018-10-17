const Discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const got = require('got');
const bodyParser = require('body-parser');
const fs = require('fs');
const config = require('./files/config.json');
let update = true
console.log('bot started');

// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

module.exports.run = async () => {
  if (update)
    console.log('bot started') 
  else
    return console.log('bot not started');
};

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", async (message) => {
  console.log(message.content)
  if (message.author.bot) return;
  console.log('not a bot');
  var prefix = '!';
  console.log('current prefix: ' + prefix);
  if(!message.content.startsWith(prefix)) return;
  console.log('Detected Possible Command')
  // This is the best way to define args. Trust me.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  console.log(`Command Executed: ${command} - Args: ${args}`);

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    message.delete()
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
    const embed = new RichEmbed()
    .setDescription(`Error Message: ${err}`)
    .setTitle('Error')
    .setFooter('Provided By GigaByte Bot')
    .setColor(0xFF0000);
    message.channel.send(embed);
  }
});

client.on("messageUpdate", async (message) => {
  console.log(message.content)
  if (message.author.bot) return;
  console.log('not a bot');
  var prefix = '!';
  console.log('current prefix: ' + prefix);
  if(!message.content.startsWith(prefix)) return;
  console.log('Detected Possible Command')
  // This is the best way to define args. Trust me.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  console.log(`Command Executed: ${command} - Args: ${args}`);

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    message.delete()
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
    const embed = new RichEmbed()
    .setDescription(`Error Message: ${err}`)
    .setTitle('Error')
    .setFooter('Provided By GigaByte Bot')
    .setColor(0xFF0000);
    message.channel.send(embed);
  };
});

client.login(process.env.TOKEN);
console.log('bot booted');