const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //Create read stream
    //Smaller chunks to show the main point
    const readStream = fs.createReadStream('./big_image.jpg', {highWaterMark: 16 * 1024});
    readStream.pipe(res);
})

server.listen(3131);