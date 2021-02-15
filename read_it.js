const { Readable } = require('stream')
const myStream = new Readable

myStream.read = (buf) => {
    buf.toString()
}

console.log(process.stdin)

process.stdin.pipe(process.stdout)

