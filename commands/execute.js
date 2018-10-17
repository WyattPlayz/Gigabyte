module.exports.run = (client, msg, args) => {
  const { Client, RichEmbed } = require('discord.js');
  const config = './files/config.json'
  const ownerid = config.ownerid
  if (msg.author.id = ownerid) {
    var embed = new RichEmbed()
    .setTitle('Developer Command Execution')
    .setColor(0xba160c)
    .setFooter('Provided By Gigabyte Debugger')
    .setDescription(`Execution of command: ${args.join(" ")}`);
    msg.channel.send(embed);
    eval(args.join(" "));
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