const redis = require('redis');
const client = redis.createClient();

client.on('connect', function() {
    console.log('connected');

})

client.set('total', '1800');
