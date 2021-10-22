require('dotenv').config()
const kafka = require('kafka-node')
const client = new kafka.KafkaClient({ 
  kafkaHost: process.env.KAFKA_BOOTSTRAP_SERVER ,
  groupId: process.env.GROUP_ID
});
const producer = new kafka.Producer(client)
console.log("producer")
//const km = new kafka.KeyedMessage('key', 'message'),
    payloads = [
        { topic: process.env.TOPIC, messages: 'hi'},
        //{ topic: process.env.TOPIC, messages: ['hello', 'world', km] }
    ];

producer.on('ready', function () {
  producer.send(payloads, function (err, data) {
      console.log(data);
      console.log(err)
  });
});

producer.on('error', function (err) {
  console.log(err)
})

module.exports = producer