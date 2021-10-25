const https = require('https')
async function main(){

    const clusterResponse = await https.get('https://192.168.202.26:8082/v3/clusters', {
        headers: 'application/vnd.api+json',
    })
    const clusterUrl = clusterResponse.data[0].links.self
    
    const brokersResponse = await https.get(`${clusterUrl}/brokers`, {
    headers: 'application/vnd.api+json',
})

const brokers = brokersResponse.data.map(broker => {
    const { host, port } = broker.attributes
    return `${host}:${port}`
})

}

main()