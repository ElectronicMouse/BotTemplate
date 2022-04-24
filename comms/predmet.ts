import { ICommand } from "wokcommands";
import { readFile } from "fs";
import fs from "fs";
//https://nodejs.org/api/fs.html
export default {
category: "Commands",
description: "shows info or timeschedule of subject",
expectedArgs: "<předmět> <info/rozvrh>",
minArgs:0,
maxArgs:2,

callback: ({message, args}) => {
    const helper = args.length;
    if(helper ==0)
    {
        var files = fs.readdirSync('predmety');
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
          {return("Eng: use !help predmet\nČJ: použij !help predmet")}
          else if(helper==2)
          {    
readFile("./predmety/"+args[0]+"/"+args[1].toLowerCase()+".json", (err, data)=> {
if (err) throw err;
let dats = JSON.parse(data.toString());
if(args[1] =="rozvrh")
{
let repl = ""
let reply=""
for (let i = 0; i < dats.rozvrhovaAkce.length; i++) {
    repl += (i+1)+". " +"\n" +"Vyučující: "+ dats.rozvrhovaAkce[i].ucitel.titulPred+" "+dats.rozvrhovaAkce[i].ucitel.jmeno+" "+dats.rozvrhovaAkce[i].ucitel.prijmeni+" "+dats.rozvrhovaAkce[i].ucitel.titulZa+"\n"+"Místo: "+dats.rozvrhovaAkce[i].budova+dats.rozvrhovaAkce[i].mistnost+"\n"+"Rozvrhová akce: "+dats.rozvrhovaAkce[i].typAkce+ "\n"+"Týden: "+ dats.rozvrhovaAkce[i].tyden+"\n"+"Den: "+dats.rozvrhovaAkce[i].den+" od: "+dats.rozvrhovaAkce[i].hodinaSkutOd.value+" do: "+dats.rozvrhovaAkce[i].hodinaSkutDo.value+"\n\n";         
}
if(repl.includes("null",))
{
reply = repl.replace(/null/g,"")   
} 
message.channel.send(reply)
}
if(args[1]=="info")
{
var repl = "Katedra: "+dats.katedra +"\n"+"Zkratka předmětu: " + dats.zkratka+"\n"+"Název předmětu: " + dats.nazev +"\n" + "Zakončení předmětu: " + dats.typZkousky +"\n" + "Kreditové ohodnocení: " + dats.kreditu+"\n" + "Učí se v zimním semestru: " + dats.vyukaZS+"\n" + "Učí se v letním semestru: " + dats.vyukaLS;
message.channel.send(repl)
}

    });  
           
    }}
  
} as ICommand
