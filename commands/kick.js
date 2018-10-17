module.exports.run = (client, msg, args) => {
  const { Client, RichEmbed } = require('discord.js');
  const logs = msg.guild.channels.find(channel => channel.name === "logs");
  if (msg.member.hasPermission('KICK_MEMBERS', false, true, true)) {
    let user = msg.mentions.users.first();
    if(!user) {
      var embed = new RichEmbed()
      .setTitle('Error')
      .setColor(0xFF0000)
      .setFooter('Provided By Gigabyte')
      .setDescription('Please specify a user to kick!');
      msg.channel.send(embed);
      return;
    }
    let target = msg.guild.member(user);
    if (!target.kickable) {
      var embed = new RichEmbed()
      .setTitle('Error')
      .setColor(0xFF0000)
      .setFooter('Provided by Gigabyte')
      .setDescription(`${target.displayName} Cannot be banned. This can be due to a number of reasons: \n\ 1: The user is the owner of the group. \n\ 2: Gigabyte's role is not high enough to kick this player. \n\ 3: Gigabyte does not have permission to kick players.`);
      msg.channel.send(embed);
      return;
    }
    var embed = new RichEmbed()
    .setTitle('Giga Moderation')
    .setColor(0x000000)
    .setFooter('Provided By Gigabyte')
    .setDescription(`${msg.author.id} Has successfully kicked ${target.displayName}!`);
    msg.channel.send(embed);
    target.kick(`Kicked By ${msg.author.id}`);
    target.send(`You have been kicked from ${msg.guild.name} by ${msg.author.name}!`);
    if (logs) {
      var embed = new RichEmbed()
      .setTitle('Giga Logs')
      .setColor(0x555555)
      .setFooter('Provided By Gigabyte')
      .setDescription(`Kick Executed On ${target.displayName} by ${msg.author.name}`);
    }
  } else {
    var embed = new RichEmbed()
    .setTitle('Error')
    .setColor(0xFF0000)
    .setFooter('Provided By Gigabyte')
    .setDescription('You do not have permission to kick members.');
    msg.channel.send(embed);
    return;
  }
}