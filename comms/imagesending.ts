import { ICommand } from "wokcommands";
import { MessageEmbed } from "..";
export default {
category: "Commands",
description: "sends image as embed",

  callback: ({message}) => {
    const exampleEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('here goes your title')
    .setImage('image url/path')
    message.reply({ embeds: [exampleEmbed] });
    }  
} as ICommand
//learn more about embeds from discord.js documentation
