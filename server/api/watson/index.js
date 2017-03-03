// setup stuff
var express = require('express');
var config = require('./config');
var router = express.Router();
var ConversationV1 = require('watson-developer-cloud/conversation/v1');

var conversation = new ConversationV1({
    username: config.username,
    password: config.password,
    version_date: ConversationV1.VERSION_DATE_2017_02_03
});

// functions
/*
    request - contains information about the HTTP request the user has made
    response - contains the object that you can run '.json()' on to send back a response
*/
function askQuestion(request, response) {
    console.log(request.query.question);
    conversation.message({
        input: {
            text: request.query.question
        },
        workspace_id: config.wid
    }, function (err, res) {
        // callback function - runs asynchronously, and will compute once a response comes back from Watson
        // err - exists if there is an error from Watson
        // res - the answer/object that Watson returns
        if (err) {
            console.error(err);
            response.json(err);
        } else {
            console.log(res);
            response.json(res);
        }
    });
}

// API Definition
router.get('', askQuestion);

// export stuff
module.exports = router;
