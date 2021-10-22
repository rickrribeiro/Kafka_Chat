require('dotenv').config()
const kafka = require('kafka-node')


const consumerOptions = {
    kafkaHost:  process.env.KAFKA_BOOTSTRAP_SERVER,
    groupId: process.env.GROUP_ID,
    sessionTimeout: 15000,
    protocol: ['roundrobin'],
    fromOffset: 'earliest' // equivalent of auto.offset.reset valid values are 'none', 'latest', 'earliest'
};
const topics = [process.env.TOPIC]

var consumerGroup = new kafka.ConsumerGroup(Object.assign({ id: 'consumer1' }, consumerOptions), topics);
consumerGroup.on('error', onError);
consumerGroup.on('message', onMessage);
function onError (error) {
    console.error(error);
    console.error(error.stack);
}

function onMessage (message) {
    console.log(
        '%s read msg Topic="%s" Partition=%s Offset=%d',
        this.client.clientId,
        message.topic,
        message.partition,
        message.offset
    );
}
module.exports = consumerGroup