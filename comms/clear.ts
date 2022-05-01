import { ICommand } from "wokcommands";
export default {
   category: "Commands",
   description: "shows info or timeschedule of subject",
   expectedArgs: "<počet>",
   minArgs: 1,
   maxArgs: 1,
   permissions: ["ADMINISTRATOR"],

   callback: async ({ message, interaction, channel, args }) => {
      let number1 = args.length ? parseInt(args.shift()!) : 2
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