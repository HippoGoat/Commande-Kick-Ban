const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const user = message.mentions.users.first();
    const reason = (args.splice(1).join(' ') || 'Aucune raison donnée');
    user ? message.guild.member(user).kick(reason) : message.reply("Le membre n'existe pas.");

    const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor('#ffa500')
    .setDescription(`**Action :**Kick\n**Raison :** ${reason}`)
    .setThumbnail(user.avatarURL())
    .setFooter(message.author.username, message.author.avatarURL());

    const log_channel = client.channels.cache.get('ID du channel de log');
    log_channel.send(embed);
}

module.exports.help =  {
    name: 'kick',
    description: 'kick un membre',
    usage: '@user, reason',
    args: true,
    isUserAdmin: true,
    permissions: true,
    cooldown: 5,
}