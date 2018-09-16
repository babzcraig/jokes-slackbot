const SlackBot = require("slackbots");
const axios = require("axios");

const bot = new SlackBot({
  token: "xoxb-276372382645-435963334881-RfKLONfN5gX5nLWcFEuQHBA5",
  name: "jokebot"
});

// Start Handler
bot.on("start", () => {
  const params = {
    icon_emoji: ":smiley:"
  };

  bot.postMessageToChannel(
    "general",
    "Get ready to laugh with @jokebot",
    params
  );
});
