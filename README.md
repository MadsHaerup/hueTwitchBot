# Hue Twitch Bot

### Turn a hue lightbulb on/off and more via commands through your twitch's channel chat

Get started with Hue setup:
- https://developers.meethue.com/develop/get-started-2/

Discover you Hue ip address here:
  - https://discovery.meethue.com/

Insert you bridge ip address and follow the above guide
  - https://'bridge ip address'/debug/clip.html

Library for setting up twitch bot:
- https://github.com/tmijs/tmi.js

Generate Twich Auth Token
- https://twitchapps.com/

# To use this repository

- Clone it
- npm install 

Create an .env file and include:
* HUE_BRIDGE_IP = ip you found through above link
* HUE_BRIDGE_USERNAME  = username you recieved through following above guide
* OAUTH = the generated auth token
* TWITCH_USERNAME = your twicth username

- npx nodemon app.js or just
- nodemon app.js if nodemon is installed globally

open your twicth's channel chat and write following commands:
* lights on
* lights off
* alert lights
* random lights
