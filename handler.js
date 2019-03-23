'use strict';
const Database = require('./database');
const database = new Database();

module.exports.metric = async (event, context) => {
  if (event.httpMethod == 'POST') {
    console.log('here');
    let body = JSON.parse(event.body);
    if (
      body &&
      body.url &&
      (body.action == 'like' || body.action == 'dislike')
    ) {
      console.log('feedback field is: ' + body.feedback);
      await database.addFeedback(
        body.url,
        body.action,
        body.action == 'dislike' ? body.feedback : ''
      );
    }
  }
  return {
    statusCode: 200
  };
};
