const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const moment = require("moment");

module.exports = async(client, message) => {

        try {

            const guildOwnerTag = await message.guild.fetchOwner({ force: true }).then(x => x.user.tag)

            const embed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: "gif" }))
                .setThumbnail(message.guild.iconURL())
                .addField("• Owner", `${guildOwnerTag}`, true)
                .addField("• Channel Categories", `${message.guild.channels.cache.filter(c => c.type == 'GUILD_CATEGORY').size}`, true)
                .addField("• Text Channels", `${message.guild.channels.cache.filter(c => c.type == 'GUILD_TEXT').size}`, true)
                .addField("• Voice Channels", `${message.guild.channels.cache.filter(c => c.type == 'GUILD_VOICE').size}`, true)
                .addField("• Members", `${message.guild.memberCount}`, true)
                .addField("• Roles", `${message.guild.roles.cache.size}`, true)
                .addField("• Role List", `${message.guild.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `${roles.name}`).join(" | ") || "No Roles"}`)

        embed.setFooter(`User ID: ${message.author.id}`)
            .setTimestamp()
        embed.setColor("BLUE")

        message.channel.send({ embeds: [embed] });

    } catch (err) {

        let errorCollection = new MessageEmbed()
            .setAuthor(`Error Occurred`)
            .setDescription(`${err}`)
            .setColor("RED")

        await message.reply({
            ephemeral: false,
            embeds: [errorCollection]
        })
    }
}