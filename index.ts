import DiscordJS, { Intents } from 'discord.js'
/**
* *imports discord.js, documentation for library bellow
* !https://discord.js.org/#/docs/discord.js/stable/general/welcome
*/
import dotenv from 'dotenv'
//dotenv file
import "dotenv/config"
//config for dotenv
import WOKcommands from 'wokcommands'
/**
 * *import WOKcommands for easier usage of legacy commands documentation down bellow
* !https://docs.wornoffkeys.com/ 
*/
import path from 'path'
//imports path to files
dotenv.config();
export const { MessageEmbed } = require('discord.js');
export const bot = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
    ]
})
//above this comment, we create our bot, we need to specify intents which he will look for
bot.on('ready', function () {
//after start up bot does this:
    console.log('Zču bot is online to help students all around discordia')
//bot creates object called WOKcommands to use legacy commands
    new WOKcommands(bot, {
      commandDir: path.join(__dirname, 'comms'),
      typeScript: true,
      })
    })
//bellow is code for simple reacting to messages and deleting them
bot.on('messageCreate', message => {
  let swearer = message.author.username
    if(swearer === null)
      {console.log("swearer is null")}
    else
      {let reply = swearer + " tried to swear"
      const swear_words = [""]
        for (var i=0; i < swear_words.length; i++) {
          if (message.content.includes(swear_words[i]))
            {message.delete();
            message.channel.send("dont swear here");
            console.log(reply);
            }
          }
        }
      });



bot.login(process.env.TOKEN)
