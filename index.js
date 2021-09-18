const { Client, Intents, Collection } = require("discord.js");
const client = new Client({
    intents: 32767
});
/* Packages */
const moment = require("moment");

/* Global Vars */
client.emoji = require("./app/Components/emojis.json");
client.logger = require("./app/Components/logger.js");
client.config = require("./app/config.json");
client.commands = new Collection();

/* Handlers */
require("./app/Handlers/events.js")(client);
require("./app/Handlers/cmds.js")(client);

client.login(client.config.token)