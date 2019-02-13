const Discord = require("discord.js");
const Maxgribanov = new Discord.Client();
const botconfig = require("./botconfig.json"); 
const tokenfile = require("./token.json");  
//const MaxgribanovCommandoClient = require('./lib/MaxgribanovCommandoClient');
//const MaxgribanovUtils = require('./lib/MaxgribanovUtils');
const opusscript = require("opusscript"); 
const forEachTimeout = require('foreach-timeout');
const fs = require("fs");
const http = require("http");   
const express = require("express"); 
const ytdl = require('ytdl-core'); 

Maxgribanov.on("ready", () => {
    console.log("Бот работает");
  }); 

  Maxgribanov.on('ready', function() {
    setInterval(async () => {
  const statuslist = [
    `Привет, я Максяшка`,
    `Я слежу за тобой`,
    `Мой префикс -`
  ];
  const random = Math.floor(Math.random() * statuslist.length);

  try {
    await Maxgribanov.user.setPresence({
      game: {
        name: `${statuslist[random]}`,
        type: "PLAYING"
        
      },
      status: "idle"
    });
  } catch (error) {
    console.error(error);
  }
}, 10000);
});  

Maxgribanov.on("message", message => {
    if (message.author.Maxgribanov) return;
    if (message.content.indexOf(botconfig.prefix) !== 0) return;

    const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(Maxgribanov, message, args);
    } catch (err) {
      console.error(err);
    }
  });  

  Maxgribanov.login(process.env.BOT_T0KEN);
