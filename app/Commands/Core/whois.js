const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const moment = require("moment");

module.exports = async(client, message, args) => {

        try {

            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

            var permissions = [];

            if (member.permissions.has("ADMINISTRATOR")) {
                permissions.push("Administrator")
            }

            if (member.permissions.has("MANAGE_GUILD")) {
                permissions.push("Manage Server")
            }

            if (member.permissions.has("MANAGE_MESSAGES")) {
                permissions.push("Manage Messages")
            }

            if (member.permissions.has("MANAGE_ROLES")) {
                permissions.push("Manage Roles")
            }


            if (!member) return message.channel.send(new MessageEmbed()
                .setAuthor(`Invalid Member`)
                .setDescription(`Please mention a valid user!`)
                .setColor(client.colors.RED))

            const embed = new MessageEmbed()
                .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: "gif" }))
                .setThumbnail(member.user.displayAvatarURL())
                .setDescription(`${member.user}/${member.user.tag}`)
                .addField("• Joined Discord", `${moment.utc(member.user.createdAt).format('dddd, MMMM Do YYYY')} (${Math.round(Math.abs(member.user.createdAt - new Date().getTime()) / 86400000)} Days Old)`, true)
                .addField("• Joined Server", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY')} (${Math.round(Math.abs(member.joinedAt - new Date().getTime()) / 86400000)} Days Ago)`, true)
                .addField(`• Roles [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" ") || "No Roles"}`, `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(" | ") || "No Roles :frowning:"}`)
                .setFooter(`User ID: ${message.author.id}`)
                .setTimestamp()
            if(permissions.length !== 0) embed.addField("• Key Permissions", `${permissions.join(`, `)}`, true)
        embed.setColor("BLUE")

    if(client.config.staff.includes(member.user.id)) {
        embed.addField("• Acknowledgements", `Staff Member`)
        embed.setColor("PURPLE")
    }
    
    message.channel.send({embeds: [embed]});

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