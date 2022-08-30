class Tweet {
  constructor(senderName, newContent, newlink, likeCounter,
    tweetCounter, newReply) {
    this.sender = senderName;
    this.content = newContent;
    this.link = newlink || "no link provided";
    this.likes = likeCounter = 0;
    this.retweets = tweetCounter = 0;
    this.replies = newReply = [];

}
}
module.exports = Tweet;
