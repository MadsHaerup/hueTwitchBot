const tmi = require('tmi.js');
require("dotenv").config();
const {
  randomLights,
  controlAllLights,
  controlLight,
  alertLights,
}=require('./hueLights');

const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: process.env.TWITCH_USERNAME,
		password: process.env.OAUTH,
	},
	channels: [ process.env.TWITCH_USERNAME ]
});

client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
  if(message.startsWith("lights on")) {
    console.log("turn the lights on")
    controlAllLights(true)
  } 
  else if(message.startsWith("lights off")){
    console.log("turn the lights off")
    controlAllLights(false)
  } 
  else if(message.startsWith("random lights")){
    console.log("create random lights")
    randomLights();
  }
  else if(message.startsWith("alert lights")){
    console.log("create alert lights")
    alertLights();
  }

});