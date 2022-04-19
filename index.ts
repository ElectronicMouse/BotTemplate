import DiscordJS, { Intents } from 'discord.js'
/**
* *naimportování knihovny discord.js, níže dokumentace k library
* !https://discord.js.org/#/docs/discord.js/stable/general/welcome
*/
import dotenv from 'dotenv'
//dotenv file
import "dotenv/config"
//config for dotenv
import WOKcommands from 'wokcommands'
/**
 * *import WOKcommands pro jednoduší využití legacy commands níže dokumentace
* !https://docs.wornoffkeys.com/ 
*/
import path from 'path'
//naimportuje cestu k souborům
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
//nad tímto komentářem je vytvoření objektu bot, kterým je vlastně náš celý discord bot
bot.on('ready', function () {
//bot po spuštění napíše do konzole toto:
    console.log('Zču bot is online to help students all around discordia')
//bot vytvoří nový objekt WOKcommands, přes který pak řeší volání jednotlivých příkazů
    new WOKcommands(bot, {
      commandDir: path.join(__dirname, 'comms'),
      typeScript: true,
      })
    })

bot.on('messageCreate', message => {
  let hajzl = message.author.username
    if(hajzl === null)
      {console.log("hajzl is null")}
    else
      {let reply = hajzl + " tried to swear"
      const swear_words = ["fuck","sračka","matika","debil","kretén","prasák","prdel"]
        for (var i=0; i < swear_words.length; i++) {
          if (message.content.includes(swear_words[i]))
            {message.delete();
            message.channel.send("Nenadávejte zde");
            console.log(reply);
            }
          }
        }
      });



bot.login(process.env.TOKEN)