import type { ClientsConfig, ServiceContext, RecorderState } from '@vtex/api'
import { Service, method } from '@vtex/api'

import { Clients } from './clients'
import { checkHealth } from './middlewares/checkHealth'
import { parseParams } from './middlewares/parseParams'
import { redirect } from './middlewares/redirect'

const TIMEOUT_MS = 10 * 1000

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<Clients> = {
  // We pass our custom implementation of the clients bag, containing the Status client.
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
  },
}

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients, State>

  // The shape of our State object found in `ctx.state`. This is used as state bag to communicate between middlewares.
  interface State extends RecorderState, URLState {
    authCode: string
  }
}

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  routes: {
    redirect: method({
      GET: [parseParams, redirect],
    }),
    health: method({
      GET: [checkHealth],
    }),
  },
})
