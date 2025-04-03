const config = require('../config.json');

async function initiateAuth(req, res) {
    const options = {
        requestType: "code",
        redirectUri: "http://localhost:3000/oauth/callback",
        clientId: config.clientId,
        scopes: [
            "conversations.readonly",
            "conversations.write",
            "conversations/message.readonly",
            "conversations/message.write",
            "conversations/reports.readonly",
            "contacts.readonly",
            "contacts.write",
            "locations.readonly",
            "locations.write",
            "calendars.readonly",
            "calendars.write",
            "calendars/events.readonly",
            "calendars/events.write",
            "calendars/groups.readonly",
            "calendars/groups.write",
            "calendars/resources.readonly",
            "calendars/resources.write",
            "users.readonly",
            "users.write"
        ]
    };

    return res.redirect(`${config.baseUrl}/oauth/chooselocation?loginWindowOpenMode=self&response_type=${options.requestType}&redirect_uri=${options.redirectUri}&client_id=${options.clientId}&scope=${options.scopes.join(' ')}`);
}

module.exports = initiateAuth;
