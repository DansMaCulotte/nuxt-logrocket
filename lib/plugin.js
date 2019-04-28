import LogRocket from 'logrocket'
import createPlugin from 'logrocket-vuex'

const ID = '<%= options.logRocketId %>'
const DEV_MODE_ALLOWED = <%= options.devModeAllowed %>
const DISABLED = <%= options.disabled %>

export default function ({ store }, inject) {
  const isProduction = process.env.NODE_ENV === 'production'

  if ((process.client && isProduction && !isDisabled) || DEV_MODE_ALLOWED) {
    LogRocket.init(LOGROCKET_ID)
  }

  if (store) {
    const logrocketPlugin = createPlugin(LogRocket)
    logrocketPlugin(store)
  }

  inject('logRocket', LogRocket)
}
