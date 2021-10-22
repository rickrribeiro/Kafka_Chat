const { Kafka } = require('kafkajs')
require('dotenv').config()

console.log(process.env.KAFKA_BOOTSTRAP_SERVER)
console.log(process.env.TOPIC)

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [process.env.KAFKA_BOOTSTRAP_SERVER]
})

const producer = kafka.producer()

async function main(){
  console.log("main")
  await producer.connect()
  await producer.send({
    topic: process.env.TOPIC,
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })
  
  await producer.disconnect()
}
main()