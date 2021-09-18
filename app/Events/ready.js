module.exports = async(client) => {

    client.logger(`${client.config.botname} is now online serving Blizzard Ventures`, "gateway")

    setInterval(() => {
        var randInt = Math.floor(Math.random() * 3);
        switch (randInt) {
            case 1:
                {
                    client.user.setActivity(`with nodes`, { type: "PLAYING" })
                }
                break
            case 2:
                {
                    client.user.setActivity(`new clients`, { type: "WATCHING" })
                }
                break
            default:
                {
                    client.user.setActivity(`marathons`, { type: "COMPETING" })
                }
                break
        }
    }, 6500)
}