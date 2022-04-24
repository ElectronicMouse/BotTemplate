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
//helper = number of arguments
const helper = args.length;
//if there are no arguments do this
if(helper ==0)
{
    var files = fs.readdirSync('comms');
       let file = "";
        for (let i = 0; i < files.length; i++) {
          var arry = files[i].split(".");
          file += (i+1) +") " + arry[0] + "\n";
      }
      return(file)
      }
    //if there is 1 argument do this
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

