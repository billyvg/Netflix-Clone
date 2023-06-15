import * as Sentry from '@sentry/react'

if (process.env.SENTRY_DSN) {
  Sentry.init({
    // ENTER YOUR DSN HERE
    dsn: process.env.SENTRY_DSN,

    replaysSessionSampleRate: 1.0,
    // release: process.env.REACT_APP_SENTRY_RELEASE,
    integrations: [new Sentry.BrowserTracing(), new Sentry.Replay({
      networkDetailAllowUrls: ['/'],
    })],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })

  const EXAMPLE_USER = {
    id: '123',
    email: 'email@foo.org',
    username: 'username',
    name: 'name',
  }

  Sentry.setUser(EXAMPLE_USER)
}
