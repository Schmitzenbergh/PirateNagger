PirateNagger
=================
----------
A very simple bot that, for now, sends a message to a certain channel when user ThePirate is changing his/her status on TheNightWatch.

Dependencies
-------------
This bot requires *node.js* and *Woors Discord.io fork*. I suspect you can install *node.js* yourself. To install Discord.io, navigate to your working directory and use the following NPM command:
>npm install woor/discord.io#gateway_v6

How to run
-------------
Before the bot will run, you need to add and grab yourself a Discord token. This can be done within your Discord account at https://discordapp.com/developers/applications/me

When you've created a token, you can add this to the bot application. Create a file called *token.json* in the same location as *pirateNagger.js* and use this template in *token.js*

>{
   "token": "ENTER_YOUR_TOKEN_HERE"
}

After setting the token, you can start the bot by running the following command from within the directory where *pirateNagger.js* is located:
> node .\pirateNagger.js
