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

const controlAllLights = (on) => {
  ids.forEach(id => controlLight(id, on))
}

const randomLights = async () => {
  try {
    ids.forEach((id) =>{
      const hue = Math.floor(Math.random() * 65534) + 1;
      const sat = Math.floor(Math.random() * 253) + 1;
      const bri = Math.floor(Math.random() * 253) + 1;
      controlLight(id, true ,hue, sat, bri)
    })
  } catch (error) {
    console.error(error);
  }
}

const alertLights =  async () => {
  try {
    ids.forEach((id) =>{
      const alert = "lselect";
      controlLight(id,true, alert)
    })
  } catch (error) {
    console.error(error);
  }
}



module.exports = {controlAllLights, randomLights, controlLight, alertLights};


