const Feedback = require('./data/Feedback');
var uuidgen = require('node-uuid-generator');

class Database {
  async addFeedback(url, action, feedback) {
    console.log(url);
    console.log(action);
    console.log(feedback);

    const fb = new Feedback({
      url: url,
      uuid: uuidgen.generate(),
      action: action,
      feedback: feedback
    });
    await fb.save();
  }
}

module.exports = Database;
