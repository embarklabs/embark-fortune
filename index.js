const fortuneSource = require('fortune-tweetable')

module.exports = function (embark) {
  embark.events.on("outputDone", () => {
    embark.logger.info(fortuneSource.fortune())
  });
};
