import LogRocket from 'logrocket'

if (
  process.env.LOGROCKET_APP_ID &&
  process.env.REPLAY_SERVICE === 'logrocket'
) {
  LogRocket.init(process.env.LOGROCKET_APP_ID)
}
