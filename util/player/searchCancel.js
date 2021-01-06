const { MessageEmbed } = require("discord.js");

module.exports = (client, message, query, tracks) => {

  const embed = new MessageEmbed()
  .setAuthor("Search Cancelled")
  .setColor(`#ffb6c1`)
  .setDescription(`You did not provide a valid response. Send the Command Again, Baka!`)
  .setFooter(`Music System | \©️${new Date().getFullYear()} Mai`);

    message.channel.send(embed);
};
