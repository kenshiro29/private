const RedditImageFetcher = require("reddit-image-fetcher");
const express = require('express')
const app = express()
app.get('/noob/me', async function (req, res) {
    const as = await RedditImageFetcher.fetch({    type: 'meme'});
    res.json(as);
    req.end;
})
// You can add more command like this 
app.listen(process.env.PORT || 3000)