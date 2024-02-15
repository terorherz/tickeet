module.exports = {
    name: 'ping',

    execute(client, message) {
        message.channel.send(`Dostum Destekte ne kadarda yoruldum, pfff. **${client.ws.ping}ms** 👋`);
    },
}; 