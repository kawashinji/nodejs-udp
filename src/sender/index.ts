import { getArgs } from '@/sender/controller'
import * as Messenger from '@/sender/messenger'

const args = getArgs(process.argv)

const BIND_PORT = 3003

Messenger.run(args.host, args.port, BIND_PORT)
