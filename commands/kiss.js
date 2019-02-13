const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {

    var images = ["https://pp.userapi.com/c846221/v846221199/1a59d1/fq2KJVBp_hA.jpg", "https://i.imgur.com/eKcWCgS.gif", "https://i.imgur.com/MzAjNdv.gif", "https://i.imgur.com/aypxaOB.gif", "https://i.imgur.com/JZLaOA2.gif", "https://i.imgur.com/2QwD7M0.gif", "https://i.imgur.com/JnheKgG.gif", "https://i.imgur.com/AGfaBJD.gif", "https://i.imgur.com/BUJZGzg.gif", "https://i.imgur.com/w1AmQF7.gif", "https://i.imgur.com/PKOsDVW.gif", ];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    const patEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage(randomImage);
    const sadEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
    if (!args[0]) {
        message.channel.send(`<@${message.author.id}> Поцеловал <@${message.author.id}>.. секс.`, {
            embed: sadEmb
        });
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`Пожалуйста, укажите кого-нибудь!`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(`<@${message.author.id}> Поцеловал ${args[0]}`, {
        embed: patEmb
    });


}

module.exports.help = {
    name: "kiss"
}