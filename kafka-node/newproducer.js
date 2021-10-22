'use strict';
require('dotenv').config()
var kafka = require('kafka-node');
var Producer = kafka.Producer;
var KeyedMessage = kafka.KeyedMessage;
var Client = kafka.KafkaClient;
const Options = {
    kafkaHost:  process.env.KAFKA_BOOTSTRAP_SERVER,
    groupId: process.env.GROUP_ID,
    sessionTimeout: 15000,
    // protocol: ['roundrobin'],
   // fromOffset: 'earliest' 
};
var client = new Client(Options);

var topic = process.env.TOPIC;
var p =  0;
var a =  0;
var producer = new Producer(client, { requireAcks: 1 });

producer.on('ready', function () {
    var message = 'a message';
    var keyedMessage = new KeyedMessage('keyed', 'a keyed message');
    
    producer.send([{ topic: topic, partition: p, messages: [message, keyedMessage], attributes: a }], function (
        err,
        result
        ) {
            console.log(err || result);
            process.exit();
        });
    console.log("aa")
});

producer.on('error', function (err) {
  console.log('error', err);
});
console.log("bateu")