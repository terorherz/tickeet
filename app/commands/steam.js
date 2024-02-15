const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'steam',

    execute(client, message) {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.channel.send('Bu komutu kullanmak için **mesajları yönet** iznine sahip olmanız gerekir ❌');
        }

        const setupEmbed = new MessageEmbed();

        setupEmbed.setColor('BLUE');
        setupEmbed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/c/c1/Steam_Logo.png")
        setupEmbed.setImage("")
        setupEmbed.setAuthor('Karslı Social Media');
        setupEmbed.setDescription('**↬ Steam Profilim: https://steamcommunity.com/id/hherzlovesD/ \n ** **Daha fazlası için:** "k+website | k+youtube | k+instagram | k+steam"');
        setupEmbed.setFooter(``)
;

        message.channel.send({ embeds: [setupEmbed] });
    },
};
