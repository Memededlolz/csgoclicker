module.exports = {
    bots: {
        'bot_1': {
            "siteName": "Bot 1",
            "accountName": "extrabojan",
            "password": "flexing1",
            "twoFactorCode": "",
            "identitySecret": "m5WRUESYYS/oBreHkluC0V7SxS8=",
            "steamID64": "",
            "personaName": "Moonshade.Trade - Bot #1"
        },
        'bot_2': {
            "siteName": "Bot 2",
            "accountName": "",
            "password": "",
            "twoFactorCode": "",
            "identitySecret": "",
            "steamID64": "",
            "personaName": "csg0.trade - Bot #2"
        }
    },
    steamApiKey: 'BDD9D541B0230D0437E9A5F1B57D3382',
    site: {
        header: 'CSG0.Trade',
        steamGroup: '#',
        copyrights: 'Copyright © csg0.trade 2016'
    },
    domain: 'kingofkfcjamal.github.io/CSGO',
    website: 'http://kingofkfcjamal.github.io/CSGO',
    websitePort: 80,
    tradeMessage: 'Trade offer from csg0.trade | If you did not request this offer or the offer looks invalid please decline.',
    rates: {
        ignoreItemsBelow: 0.05, // Ignore items below this price (price * rate < ignoreItemsBelow)
        trashPriceBelow: 0.2, // Items below this price are considered trash
        // Items
        user: {
            key: 1,
            knife: 0.95,
            rare_skin: 0.95,
            weapon: 0.9,
            misc: 0.85,
            trash: 0.7
        },
        bot: {
            key: 1.05,
            knife: 1,
            rare_skin: 1,
            weapon: 0.95,
            misc: 0.9,
            trash: 0.8
        }
    }
};
