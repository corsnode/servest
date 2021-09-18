module.exports = async(client, message) => {

    /* Core Events */
    client.on('ready', () => require('../Events/ready.js')(client));
    client.on('messageCreate', message => require(`../Events/message.js`)(client, message));

    /* Guild Events */
    client.on("guildMemberAdd", (member) => require("../Events/guildMemberAdd.js")(client, member))
}