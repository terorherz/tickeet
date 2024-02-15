const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'setup',

    execute(client, message) {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.channel.send('Bu komutu kullanmak için **mesajları yönet** iznine sahip olmanız gerekir ❌');
        }

        const setupEmbed = new MessageEmbed();

        setupEmbed.setColor('RED');
        setupEmbed.setThumbnail("https://cdn.discordapp.com/attachments/1200539316796006522/1207094314505863279/karsli.png?ex=65de652f&is=65cbf02f&hm=a880aec8f75d69efab4d15287edee376508c8f02ee4561f0fddc2c70f376a890&")
        setupEmbed.setAuthor('Karslı Bot Support');
        setupEmbed.setDescription('**Bir bilet oluşturmak için aşağıdaki reaksiyona tıklayın! \n Destek sunucumuz: https://discord.gg/karslii \n Instagram Adresim: hherz_**');
        setupEmbed.setFooter(`Bu bot hherz tarafından yapılmıştır.`)

        const ticketButton = new MessageButton();

        ticketButton.setEmoji('🔓');
        ticketButton.setStyle('SUCCESS');
        ticketButton.setLabel('Bilet Oluştur');
        ticketButton.setCustomId('createTicket');

        const row = new MessageActionRow().addComponents(ticketButton);

        message.channel.send({ embeds: [setupEmbed], components: [row] });
    },
};
