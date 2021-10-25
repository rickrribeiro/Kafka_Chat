const { Kafka } = require('kafkajs')
require('dotenv').config()


const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [process.env.KAFKA_BOOTSTRAP_SERVER],
 
})

const producer = kafka.producer()

async function sendMessage(sender, message, topic){

  await producer.connect()
  await producer.send({
    topic: topic,//process.env.TOPIC,
    messages: [
      { value: `{"sender":"${sender}","message":"${message}"}` },
    ],
  })
  
  await producer.disconnect()
}

//sendMessage("Thales", "Massa!", "ricardothales")
module.exports = {
    sendMessage
}