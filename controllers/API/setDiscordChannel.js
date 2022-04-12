const guilds = require('../../models/guilds');


exports.getSetDiscordChannel = async (req, res) => {
    const secret = req.query.secret;


    if(secret !== process.env.SECRET) return res.status(401).json({error: 'Unauthorized'});


    const channelid = req.query.channelid;
    const guildid = req.query.guildid;
    const guildname = req.query.guildname;
    const checkifchanelexists = await guilds.findOne({ channelid: channelid})
    const checkifguildexists = await guilds.findOne({ guildid: guildid})

    //console.log(checkifguildexists,checkifchanelexists);

    
    if(checkifguildexists == null) {
        await guilds.create({guildid,guildname,channelid});
        return res.status(200).json({exists: 'created'});
    }

    if (checkifchanelexists == null) {
        await guilds.findOneAndUpdate({guildid: guildid}, {$push: {channelid: channelid}});
        return res.status(200).json({exists: 'true'});
    }
    return res.status(200).json({exists: 'false'});
}

