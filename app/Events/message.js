const Discord = require("discord.js");

module.exports = async(client, message) => {
    if (message.author.bot) return;

    if (message.content.indexOf(client.config.prefix) !== 0) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    client.commands.get(command)(client, message, args)
}