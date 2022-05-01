import { ICommand } from "wokcommands";
export default {
   category: "Commands",
   description: "clears number of messages",
   expectedArgs: "<number>",
   minArgs: 1,
   maxArgs: 1,
   //sets which permissions are needed to use it
   permissions: ["ADMINISTRATOR"],

   callback: async ({ message, interaction, channel, args }) => {
      //changes argument to number, also can be done up after expectedArgs as shown in wokcommands documentation
      let number1 = args.length ? parseInt(args.shift()!) : 2
      //sets limit on how many can be deleted at once
      if(number1>80)
      {
      number1 = 80
      }
      if (message) {
         await message.delete()
      }
      const { size } = await channel.bulkDelete(number1, true)
      const reply = "deleted " + size + " message(s)."
      if (interaction) { return reply }
      console.log(reply)

   }

} as ICommand
