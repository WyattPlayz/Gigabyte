module.exports.run = (client, msg, args) => {
  const { Client, RichEmbed } = require('discord.js');
  if (msg.author.id = '270035320894914560') {
    var embed = new RichEmbed()
    .setTitle('Developer Command Execution')
    .setColor(0xba160c)
    .setFooter('Provided By Gigabyte Debugger')
    .setDescription('Termination Of Bot Connection Executed. Now Rebooting Bot...');
    msg.channel.send(embed);
    client.destroy();
    return;
  } else {
    var embed = new RichEmbed()
    .setTitle('Error')
    .setColor(0xFF0000)
    .setFooter('Provided By Gigabyte')
    .setDescritpion('This is an developer debug command, and is not accessable to anyone except developers.');
    msg.channel.send(embed);
    return;
  }
}