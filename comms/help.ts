import { Message } from "discord.js";
import { ICommand } from "wokcommands";
const fs = require('fs');
export default {
category: "Commands",
description: "shows all commands bot knows or shows how to use them",
expectedArgs: "<commands>",
minArgs:0,
maxArgs:1,

  callback: ({message, args}) => {
//helper = number of arguments
 const helper = args.length;
//if there are no arguments do this
      if (helper == 0) {
            var files = fs.readdirSync('comms');
            let file = "";
            let list =0
            for (let i = 0; i < files.length; i++) {
                var arry = files[i].split(".");
              //also yes, wokcommands has hidden attribute for its commands which is for inbuild help command, this one is made mostly for its possibility of customization  
              if((files[i]=="easteregg.ts") || (files[i]=="invisible.ts"))
                {}
                else{
                file += (x+1) + ") " + arry[0] + "\n";
                list++
            }}
          
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

