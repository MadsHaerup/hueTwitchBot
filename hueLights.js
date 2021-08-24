require("dotenv").config();
const axios = require("axios");

const ids = [16,3]

const controlLight = async(lightId, on, hue, sat, bri, alert) =>{
  try {
    return await axios.put(
      `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_BRIDGE_USERNAME}/lights/${lightId}/state`,
      {on,
      ...(sat && {sat}),
      ...(bri && {bri}),
      ...(hue && {hue}),
      ...(alert && {alert}),
      }); 
    
  } catch (error) {
    console.log(error)
  }
}

const randomLights = async () => {
  ids.forEach((id) =>{
    const hue = Math.floor(Math.random() * 65535) + 1;
    const sat = Math.floor(Math.random() * 254) + 1;
    const bri = Math.floor(Math.random() * 254) + 1;
    controlLight(id, hue, sat, bri, true)
  })
}

const controlAllLights = (on) => {
  ids.forEach(id => controlLight(id, on))
}
const AlertLights = (alert) => {
  ids.forEach(id => controlLight(id, alert))
}


module.exports = {controlAllLights, randomLights, controlLight, AlertLights};


