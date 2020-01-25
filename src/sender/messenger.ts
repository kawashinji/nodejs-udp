import dgram from 'dgram'

export const run = (
  targetHost: string,
  targetPort: number,
  bindPort: number
) => {
  const socket = dgram.createSocket('udp4')

  let count = 0

  setInterval(() => {
    count += 1
    const data = Buffer.from(String(count))
    socket.send(data, 0, data.length, targetPort, targetHost, (err, bytes) => {
      if (err) throw err
    })
  }, 500)

  socket.on('message', (message, remote) => {
    console.log(`${remote.address}:${remote.port} - ${message}`)
  })

  socket.bind(bindPort)
}
