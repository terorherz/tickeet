const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'instagram',

    execute(client, message) {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.channel.send('Bu komutu kullanmak için **mesajları yönet** iznine sahip olmanız gerekir ❌');
        }

        const setupEmbed = new MessageEmbed();

        setupEmbed.setColor('YELLOW');
        setupEmbed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png")
        setupEmbed.setImage("")
        setupEmbed.setAuthor('Karslı Social Media');
        setupEmbed.setDescription('**↬ Instagram Adresim: https://www.instagram.com/hherz_/ \n ** **Daha fazlası için:** "k+website | k+youtube | k+instagram | k+steam"');
        setupEmbed.setFooter(``)
;

        message.channel.send({ embeds: [setupEmbed] });
    },
};
