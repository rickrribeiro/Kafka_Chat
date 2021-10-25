const { Kafka } = require('kafkajs')
require('dotenv').config()

console.log(process.env.KAFKA_BOOTSTRAP_SERVER)
console.log(process.env.TOPIC)

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [process.env.KAFKA_BOOTSTRAP_SERVER],
 
})

const producer = kafka.producer()

async function main(){
  console.log("main")
  await producer.connect()
  await producer.send({
    topic: "ricardothales",//process.env.TOPIC,
    messages: [
      { value: '{sender:"ricardo",message:"Funcionou aqui Thales"}' },
    ],
  })
  
  await producer.disconnect()
}
main()