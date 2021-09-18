module.exports = async(client) => {

    /* Core Commands */
    client.commands.set('srvinfo', require("../Commands/Core/serverinfo.js"));
    client.commands.set('suggest', require("../Commands/Core/suggest.js"));
    client.commands.set('whois', require("../Commands/Core/whois.js"));
    client.commands.set('help', require("../Commands/Core/help.js"));

    /* Staff Commands */
    client.commands.set('postinfo', require("../Commands/Staff/infoPost.js"));
}