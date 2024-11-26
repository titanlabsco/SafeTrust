import '@testing-library/jest-dom'
import { server } from './mocks/server'

// beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());