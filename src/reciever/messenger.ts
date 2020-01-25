import dgram from 'dgram'

export const run = (port: number) => {
  const socket = dgram.createSocket('udp4')

  socket.on('listening', () => {
    const address = socket.address()
    console.log(`UDP socket listening on ${address.address}:${address.port}`)
  })

  socket.on('message', (message, remote) => {
    console.log(`${remote.address}:${remote.port} - ${message}`)

    socket.send(
      message,
      0,
      message.length,
      remote.port,
      remote.address,
      (err, bytes) => {
        if (err) throw err
      }
    )
  })
  socket.bind(port)
}
