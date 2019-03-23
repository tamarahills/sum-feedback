const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  url: {
    type: String,
    hashKey: true
  },
  uuid: {
    type: String,
    rangeKey: true,
    required: true
  },

  action: String,
  feedback: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: Date
});

const Feedback = dynamoose.model('Feedback', schema);

module.exports = Feedback;
