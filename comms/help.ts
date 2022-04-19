import { Message } from "discord.js";
import { ICommand } from "wokcommands";
const fs = require('fs');
export default {
category: "Commands",
description: "shows all commands bot knows in alphabetical order",
expectedArgs: "<arg1>",
minArgs:0,
maxArgs:1,

  callback: ({message, args}) => {
const helper = args.length;
if(helper ==0)
{
    var files = fs.readdirSync('comms');
       let file = "";
       let list = 1;
        for (let i = 0; i < files.length; i++) {
          var arry = files[i].split(".");
          file += list +") " + arry[0] + "\n";
          list++;
      }
      return(file)
      }
      else if(helper==1)
      {
switch (args[0]) {
    case "help":
        message.channel.send("use !help <command> to get help with <command> or !help to get list of commands")
        break;

    default:
        break;
        }
      }    
    }
  
} as ICommand

