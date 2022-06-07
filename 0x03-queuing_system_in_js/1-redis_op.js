import { createClient } from 'redis';
const redis = require("redis")
const client = createClient();

(async () => {
    client.on('error', (err) => console.log("Redis client not connected to the server:", err));

    client.on('connect',()=>console.log("Redis client connected to the server"));
})();    

function setSchool(schoolName, value){
    client.set(schoolName, value, redis.print);
}

function displaySchoolValue(schoolName){
    client.get(schoolName, redis.print);

}

displaySchoolValue('Holberton');
setSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
