import apm from 'elastic-apm-node'

import env from '../config/env'

apm.start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'ing-hire-api',
  environment: env.DEPLOYMENT_ENV,
  cloudProvider: 'none',

  // Use if APM Server requires a token
  // secretToken: '',

  // Ignore requests to certain URLs from being instrumented
  ignoreUrls: ['/', '/health'],
  // Use the URL path as the transaction name if no other route could be determined
  usePathAsTransactionName: true,

  // serverUrl: env.ELASTIC_APM_SERVER_URL,
  // captureBody: 'all',
  // active: !!env.ELASTIC_APM_SERVER_URL,
})

export default apm
