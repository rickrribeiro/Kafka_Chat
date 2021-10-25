const { Kafka } = require('kafkajs')
require('dotenv').config()


const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [process.env.KAFKA_BOOTSTRAP_SERVER],
 
})

const consumer = kafka.consumer({groupId:process.env.GROUP_ID})

async function getMessage(topic, socket){
  console.log("Conectando")
  await consumer.connect()
  await consumer.subscribe({ topic: topic, fromBeginning: true})
  await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
          socket.emit('message', message.value.toString())
          console.log({
              key: message.key,
              value: message.value.toString(),
              headers: message.headers,
            })
        },
    })
   
    //consumer.seek({ topic: topic, partition: 0 })
    
}

//getMessage("ricardothales",null);

module.exports = {
    getMessage
}