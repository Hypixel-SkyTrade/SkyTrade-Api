const guilds = require('../../models/guilds');

exports.getCheckDiscordChannelSet = async (req, res) => {
    const channelid = req.query.channelid;
    console.log(channelid);
    const checkifexists = await guilds.findOne({ channelid: channelid})
    

    if (checkifexists) {
        return res.send('this channel has already been added');
    }
    res.status(200).json({exists: 'false'});
}

