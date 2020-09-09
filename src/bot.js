require('dotenv').config();
const {Client} = require('discord.js')

const client = new Client();

// login 
client.on("ready", () => {
    console.log(`the bot: ${client.user.tag}, has logged in`);
})
client.login(process.env.DISCORDJS_BOT_TOKEN)

// greetings
client.on("message", (message) => {
    const greetings = ["hello", "hi", "hey there!", "hello there!", "how its going", "hola"];
    if (greetings.includes(message.content) && message.author.tag != client.user.tag) {
        message.channel.send("hey there!")
    }
})