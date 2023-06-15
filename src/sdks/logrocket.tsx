import LogRocket from 'logrocket'

if (
  process.env.LOGROCKET_APP_ID
) {
  LogRocket.init(process.env.LOGROCKET_APP_ID)
}
