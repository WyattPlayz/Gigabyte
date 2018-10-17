module.exports = (client, msg, args) => {
  const { Client, RichEmbed } = require('discord.js');
  var embed = new RichEmbed()
  .setTitle('Command Output')
  .setColor(0x000000)
  .setFooter('Provided By GigaByte Bot')
  .setDescription('Logs channel is not set up! Create a text channel called logs then do !logs inside the channel.');
  msg.channel.send(embed);
  return;
}