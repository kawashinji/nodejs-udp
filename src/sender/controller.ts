interface Args {
  host: string
  port: number
}

export const getArgs = (argv: string[]): Args => {
  const arg = { host: '', port: 0 }

  let i = 2
  while (argv.length - 1 > i) {
    switch (argv[i]) {
      case '--host':
        i += 1
        arg.host = argv[i]
        break
      case '--port':
        i += 1
        arg.port = parseInt(argv[i])
        break
      default:
        console.warn(`unknown parameter argv[${i}]=${argv[i]}`)
        i += 1
    }
    i += 1
  }

  return arg
}
