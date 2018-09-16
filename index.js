const SlackBot = require("slackbots");
const axios = require("axios");

const bot = new SlackBot({
  token: "xoxb-276372382645-435963334881-RfKLONfN5gX5nLWcFEuQHBA5",
  name: "jokebot"
});

// Start Handler
bot.on("start", () => {
  // const params = {
  //   icon_emoji: ":smiley:"
  // };

  // bot.postMessageToChannel(
  //   "general",
  //   "Get ready to laugh with @jokebot",
  //   params
  // );
  console.log("[BOT STARTING]");
});

// Error Handler
bot.on("error", err => console.log(err));

// Message Handler
bot.on("message", data => {
  console.log("[DATA ON MESSAGE]", data);

  if (data.type == "message") {
    handleMessage(data.text);
    return;
  }
});

// Respond to data
function handleMessage(message) {
  if (message.includes(" chucknorris")) {
    chuckJoke();
  } else if (message.includes(" Yo Momma")) {
    yoMamaJoke();
  } else if (message.includes(" random")) {
    randomJoke();
  }
}

// Tell a Chuck Norris joke
function chuckJoke() {
  axios.get("http://api.icndb.com/jokes/random").then(res => {
    const joke = res.data.value.joke;

    bot.postMessageToChannel("general", `Chuck Norris: ${joke}`);
  });
}

// Tell a Yo Mama joke
function yoMamaJoke() {
  axios.get("http://api.yomomma.info").then(res => {
    const joke = res.data.joke;

    bot.postMessageToChannel("general", `Yo Momma: ${joke}`);
  });
}

// Tell a Random joke
function randomJoke() {
  const rand = Math.floor(Math.random() * 2) + 1;
  if (rand === 1) {
    chuckJoke();
  } else if (rand === 2) {
    yoMamaJoke();
  }
}
