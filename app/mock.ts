export async function initMocks() {
    if (typeof window === 'undefined') {
      const { server } = await import('../mocks/server')
      server.listen()
    } else {
      const { worker } = await import('../mocks/browser')
      worker.start()
    }
  }
  
