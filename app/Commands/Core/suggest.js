const { MessageEmbed } = require("discord.js");

module.exports = async(client, message, args) => {
    try {

        if (!args[0]) {
            let noQuery = new MessageEmbed()
                .setDescription(`${client.emoji.error} Please input a query!`)
                .setColor("RED")
            return message.reply({
                ephemeral: false,
                embeds: [noQuery]
            })
        }

        let sQuery = new MessageEmbed()
            .setAuthor(`${message.author.tag}'s Suggestion`, message.author.displayAvatarURL({ type: 'dynamic' }))
            .setDescription(`${args.join(" ")}`)
            .setFooter(`${message.author.tag} (${message.author.id})`)
            .setTimestamp()
            .setColor("GREEN")
        client.channels.cache.filter(c => c.id === client.config.channels.suggest).map(channel => channel.send({ embeds: [sQuery] }).then(message => {
            message.react(client.emoji.reactionMoji.success).then(() =>
                message.react(client.emoji.reactionMoji.questionable).then(() => {
                    message.react(client.emoji.reactionMoji.error)
                }))
        }));

        let sQuerySent = new MessageEmbed()
            .setDescription(`${client.emoji.success} Thank you for your suggestion`)
            .setColor("GREEN")

        await message.reply({
            ephemeral: false,
            embeds: [sQuerySent],
        })

    } catch (err) {
        const errorEmbed = new MessageEmbed()
            .setTitle(`An Error has occured`)
            .setDescription(`${err}`)
            .setColor("RED")

        await message.reply({
            ephemeral: false,
            embeds: [errorEmbed],
        })
    }
}