module.exports.run = (Maxgribanov, message, args) => {
    message.channel.send({embed: {
      color: 6601,
      author: {
        name: Maxgribanov.user.username,
        icon_url: Maxgribanov.user.avatarURL
      },
      title: "Помощь",
      url: "https://наебал.com/соси",
      description: "Здесь можно спросить о боте!",
      fields: [{
          name: "Для овнеров :innocent:",
          value: "shutdown, restart, и changegame. (скоро будет)"
        },
        {
          name: "Полезные команды :tools:",
          value: "mute, unmute, kick, ban, auth, purge, perms, filteroff, и filteron.(скоро будет)"
        },
        {
          name: "Статус бота :robot:",
          value: "uptime и ping.(скоро будет)"
        },
        {
          name: "Добавление бота и дополнительная помощь.",
          value: "joinserver (скоро будет), invite, и info."
        },
               {
          name: "Ржака :joy: ",
          value: "coinflip, hug, kiss, meme, slap"
        },
        { 
            name: "Инфа",
          value: "Много комманд не работает, но скоро всё будет"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: Maxgribanov.user.avatarURL,
        text: ""
      }
    }
  });
  }
  
  module.exports.help = {
    name: "help",
    usage: `-help`, 
    information: ""
  }