import { ICommand } from "wokcommands";
import { MessageEmbed } from "..";
export default {
category: "Commands",
description: "answers needed",

  callback: ({message}) => {
    const exampleEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('I should sleep but')
    .setImage('https://i.imgur.com/EHcaBpB.gif')
    message.reply({ embeds: [exampleEmbed] });
    }  
} as ICommand