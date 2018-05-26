//Main discord.io dependency.
var Discord = require('discord.io');

//The auth token in token.js.
var auth = require('./token.json');
console.log("Starting bot");

//starting the bot client
var bot = new Discord.Client({
	//Start directly, no commands needed.
	//Token is in token.json
    autorun: true,
    token: auth.token
});

//If the bot is online and ready, print to console.
bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

//Test trigger. If a message is sent, trigger this command.
bot.on('message', function(user, userID, channelID, message, event) {
	//Send a message based on keywords
	//or disconnect
	switch(message) {
            case '!!!test':
                bot.sendMessage({
					to: channelID,
					message: ":notes: Ramadanea, eh eh rama rama eeh eeh, ramadanea ramadana. It\'s time for Ramadan! :notes:"
				});
				break;
			case '!!!exit':
				bot.sendMessage({
					to: channelID,
					message: "Arrrgh... Me ship be sink\'n"
				});
				bot.disconnect();
				break;
            // add any other commands here.
         }

});

//If a presencechange is noticed, trigger this command.
bot.on('presence', function(user, userID, status, game, event) {
	//If the user's name equals to the settings below, send the message.	
	if(user === "☠ ThePirate ☠" || user === ":skull_crossbones: ThePirate :skull_crossbones:"){
		console.log("Pirate is here, message send.");
		bot.sendMessage({
            to: "445973350825590784",
            message: ":notes: Ramadanea, eh eh rama rama eeh eeh, ramadanea ramadana. It\'s time for Ramadan! :notes:"
        });
	}

}); 
