var crc = require('crc');

module.exports.dispatch = function(key, servers){
    var index = Math.abs(crc.crc32(key)) % servers.length;
    return servers[index];
}
