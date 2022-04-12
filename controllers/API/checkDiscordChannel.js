const guilds = require('../../models/guilds');

exports.getCheckDiscordChannel = async (req, res) => {
    const secret = req.query.secret;
    const channelid = req.query.channelid;


    
    if(secret !== process.env.SECRET) return res.status(401).json({error: 'Unauthorized'});

    const checkifchanelexists = await guilds.findOne({ channelid: channelid})

    if (checkifchanelexists == null) {
        return res.status(200).json({exists: 'false'});
    }
    return res.status(200).json({exists: 'true'});
}

