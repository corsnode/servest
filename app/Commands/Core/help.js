const { MessageButton, MessageActionRow, MessageEmbed } = require("discord.js");

module.exports = async(client, message) => {
    try {

        let websiteURLs = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setLabel('Blizzard Ventures')
                .setStyle('LINK')
                .setURL(`https://blizzard.ventures/`)
            ).addComponents(
                new MessageButton()
                .setLabel('CorsNode')
                .setStyle('LINK')
                .setURL(`https://corsnode.com/`)
            )

        let gCommands = new MessageEmbed()
            .setAuthor(`Servest's Commands`, message.author.displayAvatarURL())
            .addField(`Information Post [postinfo]`, `Posts useful information inside a channel`, true)
            .addField(`User Information [whois]`, `Gets said users discord account information`, true)
            .addField(`Server Information [srvinfo]`, `Gets useful information about ${message.guild.name}`, true)
            .setColor("GREEN")

        await message.reply({
            embeds: [gCommands],
            components: [websiteURLs]
        })

    } catch (err) {

        let errorCollection = new MessageEmbed()
            .setAuthor(`Error Occurred`)
            .setDescription(`${err}`)
            .setColor("RED")

        await message.reply({
            ephemeral: true,
            embeds: [errorCollection]
        })
    }
}