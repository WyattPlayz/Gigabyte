module.exports.run = (client, msg, args) => {
  const { Client, RichEmbed } = require('discord.js');
  if (msg.channel.name == "logs") {
    
  } else {
    var embed = new RichEmbed()
    .setTitle('Error!')
    .setColor(0xFF0000)
    .setDescription('Invalid Channel Name. Name is not logs.')
    .setFooter('Provided by gigabyte');
    msg.channel.send(embed);
    return;
  }
}