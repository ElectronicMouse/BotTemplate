import { ICommand } from "wokcommands";
import { readFile } from "fs";
import fs from "fs";
//https://nodejs.org/api/fs.html
export default {
category: "Commands",
description: "reads specific json files in folder",
expectedArgs: "<folder> <filename>",
minArgs:0,
maxArgs:2,

callback: ({message, args}) => {
    //helper = number of arguments
    const helper = args.length;
    //if there are no arguments, tells us what folders it can read from
    if(helper ==0)
    {
        var files = fs.readdirSync('folders');
           let file = "";
           let list = 1;
            for (let i = 0; i < files.length; i++) {
              var arry = files[i].split(".");
              file += list +") " + arry[0] + "\n";
              list++;
          }
          return(file)
          }
          //if we specify folder but not file to read it tells us to use help command
          else if(helper==1)
          {return("Eng: use !help filereader\nČJ: použij !help filereader")}
          //if we specify folder and file it will read the file and return specific information or all of them based on further arguments
          else if(helper==2)
          {    
readFile("./predmety/"+args[0]+"/"+args[1].toLowerCase()+".json", (err, data)=> {
if (err) throw err;
let dats = JSON.parse(data.toString());
if(args[1] =="specific")
{
let repl = ""
let reply=""
//here is example of reading array
for (let i = 0; i < dats.arry.length; i++) {
    repl += (i+1)+". " +"\n" +"info: "+ dats.arry[i].obj1.info1+" "+dats.arry[i].obj1.info2+" "+dats.arry[i].obj1.info3+" "+dats.arry[i].obj1.info4+"\n"+"Místo: "+dats.arry[i].obj2+dats.arry[i].obj3+...;         
}
//getting rid of null values in json files
if(repl.includes("null",))
{
reply = repl.replace(/null/g,"")   
} 
message.channel.send(reply)
}
if(args[1]=="all")
{
//but using this will read file as is, that means that it includes {} and other symbols of json file, using the specific method is simpler, ofc we can use the same thing as with null and delete the content that we dont like
var repl = data.toString()
message.channel.send(repl)
}

    });  
           
    }}
  
} as ICommand
