const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user-info')
        .setDescription('Display user info'),
    async execute(interaction) {
        return interaction.reply(`Your username: ${interaction.user.username}\nYour ID:${interaction.user.id}`);
    },
};

