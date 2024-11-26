# Next.js App Router Testing Infrastructure

This project uses Jest, React Testing Library, and Cypress for comprehensive testing of our Next.js application with App Router.

## Running Tests

- Run unit and integration tests: `npm test`
- Run E2E tests: `npm run test:e2e`
- Generate test coverage report: `npm run test:coverage`

## Test Structure

- Unit and integration tests are located in `__tests__` directories or as `.test.ts(x)` files next to the code they're testing within the `app or component` directory.
- E2E tests are located in the `cypress/e2e` directory.

## Mocking

We use Mock Service Worker (MSW) to mock API requests, including GraphQL queries. Mock handlers are defined in `mocks/handlers.js`.

## Continuous Integration

We use GitHub Actions for CI. The workflow is defined in `.github/workflows/ci.yml`.

## Coverage Reporting

Test coverage reports are generated using Jest's built-in coverage tool and uploaded to Codecov in the CI pipeline.

## Next.js Specific Testing Considerations

- Server Components: For testing Server Components, focus on integration and E2E tests rather than unit tests.
- API Routes: Use MSW to mock API responses in your tests.
- App Router: Ensure your tests account for the new file-based routing system in the App Router.

