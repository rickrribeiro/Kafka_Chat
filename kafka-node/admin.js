require('dotenv').config()
const kafka = require('kafka-node')
const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_BOOTSTRAP_SERVER });
const admin = new kafka.Admin(client); // client must be KafkaClient



admin.listGroups((err, res) => {
  console.log('consumerGroups', res);
});

module.exports = admin