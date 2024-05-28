import tmi from 'tmi.js';
import 'dotenv/config'

const targetChannel = process.env.TARGET_CHANNEL

const client = new tmi.Client({
  options: { debug: true },
  channels: [targetChannel],
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  console.log(`${tags['display-name']}: ${message}`)
})
