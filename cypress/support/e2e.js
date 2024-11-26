import { worker } from '../../mocks/browser'

before(() => {
  worker.start()
})

after(() => {
  worker.stop()
})