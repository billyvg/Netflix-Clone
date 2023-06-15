import { datadogRum } from '@datadog/browser-rum'

if (process.env.DATADOG_APP_ID) {
  datadogRum.init({
    applicationId: process.env.DATADOG_APP_ID,
    clientToken: process.env.DATADOG_CLIENT_TOKEN,
    site: process.env.DATADOG_SITE,
    service: 'netflix',
    env: 'production',
    //  version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100, // if not included, the default is 100
    trackResources: true,
    trackLongTasks: true,
    trackUserInteractions: true,
  })
  datadogRum.startSessionReplayRecording()
}
