const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'youtube',

    execute(client, message) {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.channel.send('Bu komutu kullanmak için **mesajları yönet** iznine sahip olmanız gerekir ❌');
        }

        const setupEmbed = new MessageEmbed();

        setupEmbed.setColor('RED');
        setupEmbed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png")
        setupEmbed.setImage("")
        setupEmbed.setAuthor('Karslı Social Media');
        setupEmbed.setDescription('**↬ YouTube Kanalım: https://www.youtube.com/channel/UCZxbisMFtPHYPLZHTuFIYfw \n ** **Daha fazlası için:** "k+website | k+youtube | k+instagram | k+steam"');
        setupEmbed.setFooter(``)
;

        message.channel.send({ embeds: [setupEmbed] });
    },
};
