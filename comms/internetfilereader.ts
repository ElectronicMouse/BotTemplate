import { ICommand } from "wokcommands";
import fetch from "node-fetch";
//https://nodejs.org/api/fs.html
export default {
   category: "Commands",
   description: "reads files on internet",


   callback: async ({ message }) => {
      //using online source    
      fetch("https://example.com&Format=JSON")
         .then(function (response) {
            return response.json();
         })
         .then(function (data) {
            let reply: any = data.jsondata
            message.channel.send(reply);
         })

   }

} as ICommand
