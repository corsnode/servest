const { MessageButton, MessageActionRow, MessageEmbed } = require("discord.js");

module.exports = async(client, member) => {

    const welcomeChannel = member.guild.channels.cache.find(channel => channel.id === client.config.channels.welcome);

    let welcomeBed = new MessageEmbed()
        .setAuthor(`Welcome to ${member.guild.name}!`, member.user.displayAvatarURL({ size: 512, format: 'png' }))
        .setThumbnail(member.user.displayAvatarURL({ size: 512, format: 'png' }))
        .setImage(`https://i.tazhys.gg/images/corsnode.png`)
        .setDescription([
            `
Howdy ${member.user}!
            
**Please make sure to go ahead and read <#888758594089140259> before getting started!**

You can check out <#888758594089140260> for our latest announcements!
            
Come chat with us in <#888758594223345719> and introduce yourself!
            `
        ].join("\n"))
        .setFooter(`ID • ${member.user.id}`)
        .setTimestamp()
        .setColor("GREEN")

    await member.roles.add(`888758593652916289`, `Servest Auto-Role`)

    await welcomeChannel.send({
        content: `${member.user}`,
        embeds: [welcomeBed]
    })
}