import LogRocket from 'logrocket'
import createPlugin from 'logrocket-vuex'

const ID = '<%= options.id %>'
const DEV_MODE_ALLOWED = <%= options.devModeAllowed %>
const DISABLED = <%= options.disabled %>

export default function ({ store }, inject) {
  const isProduction = process.env.NODE_ENV === 'production'

  if ((process.client && isProduction && !DISABLED) || (!DISABLED && DEV_MODE_ALLOWED)) {
    LogRocket.init(ID)
  }

  LogRocket.load = () => {
    LogRocket.init(ID)
  }

  if (store) {
    const logrocketPlugin = createPlugin(LogRocket)
    logrocketPlugin(store)
  }

  inject('logRocket', LogRocket)
}
