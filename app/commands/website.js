const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'website',

    execute(client, message) {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.channel.send('Bu komutu kullanmak için **mesajları yönet** iznine sahip olmanız gerekir ❌');
        }

        const setupEmbed = new MessageEmbed();

        setupEmbed.setColor('WHITE');
        setupEmbed.setThumbnail("https://cdn.discordapp.com/attachments/1200539316796006522/1207094314505863279/karsli.png?ex=65de652f&is=65cbf02f&hm=a880aec8f75d69efab4d15287edee376508c8f02ee4561f0fddc2c70f376a890&")
        setupEmbed.setImage("")
        setupEmbed.setAuthor('Karslı Social Media');
        setupEmbed.setDescription('**↬ Websitemiz: https://sites.google.com/view/karslidvp/ \n ** **Daha fazlası için:** "k+website | k+youtube | k+instagram | k+steam"');
        setupEmbed.setFooter(``)
;

        message.channel.send({ embeds: [setupEmbed] });
    },
};
