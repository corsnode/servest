const { MessageEmbed } = require("discord.js");

module.exports = async(client, message) => {

    if (!message.member.permissions.has("ADMINISTRATOR")) {
        let permissionsInvalid = new MessageEmbed()
            .setAuthor(`Invalid Permissions`, message.author.displayAvatarURL({ size: 1024, format: 'png' }))
            .setDescription([
                `
                **Erm.. No**, last time I had checked, you're not an Administrator!
                `
            ].join("\n"))
            .setColor("RED")
        await message.reply({
            embeds: [permissionsInvalid]
        })
    }

    if (message.member.permissions.has("ADMINISTRATOR")) {

        let welcomeEmbed = new MessageEmbed()
            .setDescription([
                `
            **Welcome to ${message.guild.name}!**

            CorsNode is where you will find qaulity and blazing fast web-hosting products.

            This channel will go over guidelines you'll need to follow in order to stay in the Atlas Bots server and your bot to stay on the website. Let's go!

            **Website Links**
            > https://corsnode.com/
            > https://corsnode.com/billing/
            `
            ].join("\n"))
            .setColor("PURPLE")

        let ruleEmbed = new MessageEmbed()
            .setDescription([
                `
            **Rule 1 - Be Respectful**
            > There is zero tolerance for drama, racism, hate speech, harassment, or hatred towards any user. This applies to all content including text, voice, usernames, and avatars.

            **Rule 2 - No inappropriate names or impersonations of staff**
            > Your name may not contain any inappropriate/annoying text or formatting. Impersonation of staff, members, or bots may result in a ban.

            **Rule 3 - Staff may moderate at their own discretion**
            > Nothing is perfect, that includes our rules list. Any loopholes will not be tolerated. We may moderate anything not on this list that we deem inappropriate. Use your common sense and do not complain when the staff team tries to keep the server a calm and safe environment.

            **Please Read**
            > If you see something against the rules or makes you uncomfortable, let a staff member know. We want this server to be a nice, friendly space!
            `
            ].join("\n"))
            .setColor("PURPLE")


        message.channel.send({ embeds: [welcomeEmbed, ruleEmbed] })
    }
}