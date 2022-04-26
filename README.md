# BotTemplate
discord bot template and guide.

For initial setup you need to download node.js and set it up, https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA can help a lot, but if you dont have time for that:

after having node.js and opening visual studio, go to terminal there and type: npm init -y

then: npm install discord.js dotenv

then: npm install -g typescript ts-node

then preferably for legacy commands: npm install wokcommands

then for fetch: npm i node-fetch@2.6.1

create file: index.ts

go to json file and to scripts, add "dev" from json here at this git

to run bot type into terminal: ts-node index.ts (will need to be shutdown to apply changes)
or for testing purposes: npm run dev (will apply changes on save)

read other files in this git to learn more.
