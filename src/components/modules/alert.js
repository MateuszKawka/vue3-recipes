import AlertComponent from '../Alert.vue'

const Alert = {}

Alert.install = (app) => {
  const AlertConstructor ={extend:AlertComponent}
  const instance = new AlertConstructor()
  instance.$mount(document.createElement('div'))

  app.config.globalProperties.$alert = (msg) => {
    document.body.appendChild(instance.$el)
    // alert logic
    instance.type = 'alert'
    instance.msg = msg
    instance.isShow = true
    instance.instance = instance
  }

  app.config.globalProperties.$confirm = (msg, success, cancel) => {
    document.body.appendChild(instance.$el)
    // confirm logic
    instance.type = 'confirm'
    instance.msg = msg
    instance.isShow = true
    instance.instance = instance
    if (typeof success !== 'undefined') {
      instance.success = success
    }
    if (typeof cancel !== 'undefined') {
      instance.cancel = cancel
    }
  }
}

export default Alert