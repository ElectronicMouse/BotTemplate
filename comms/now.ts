import { ICommand } from "wokcommands";
import fetch from "node-fetch";
//https://nodejs.org/api/fs.html
export default {
   category: "Commands",
   description: "shows info about actual time",


   callback: async ({ message }) => {
      //using online source    
      fetch("https://stag-ws.zcu.cz/ws/services/rest2/kalendar/getAktualniObdobiInfo?outputFormat=JSON")
         .then(function (response) {
            return response.json();
         })
         .then(function (data) {
            let reply: any = "Rok: " + data.akademRok+"/"+(Number(data.akademRok)+1) + "\n" + "Období: " + data.obdobi + "\n" + "Začátek: " + data.prvniDenStavajicihoAkademickehoRoku.value + "\n" + "Konec: " + data.posledniDenStavajicihoAkademickehoRoku.value;
            message.channel.send(reply);
         })

   }

} as ICommand
