export default function install(Vue) {
  var nextKey = 0
  var popupList = []
  var anchorVm = null

  var popupManager = {
    open: function(component, params) {
      if (!component) { throw new Error('component is null') }

      var key = '_popup_key_' + (nextKey++)

      var resolve
      var promise = new Promise((rs, rj) => { resolve = rs })
      popupList.push({ component: component, popupKey: key, params: params, resolve: resolve })

      if (anchorVm) {
        anchorVm.$forceUpdate()
      }

      return { popupKey: key, promise: promise }
    },
    close: function(inst, retParam) {
      if (!inst) { return }

      for (var i = 0; i < popupList.length; i++) {
        if (inst instanceof Vue && inst === popupList[i].componentInstance ||
          inst.popupKey === popupList[i].popupKey) {
          popupList[i].retParam = retParam

          if (popupList[i].popupInstance) {
            popupList[i].popupInstance.close()
          } else {
            removePopupInstance(inst)
          }

          return
        }
      }
    }
  }

  var removePopupInstance = function(inst) {
    if (!inst) { return }

    for (var i = 0; i < popupList.length; i++) {
      if (inst instanceof Vue && inst === popupList[i].componentInstance ||
              inst.popupKey === popupList[i].popupKey) {
        var resolve = popupList[i].resolve
        var retParam = popupList[i].retParam
        popupList.splice(i, 1)

        if (anchorVm) {
          anchorVm.$forceUpdate()
        }

        resolve(retParam)
        return
      }
    }
  }

  Object.defineProperty(Vue.prototype, '$popupManager', {
    get() { return popupManager }
  })

  Vue.mixin({
    mounted() {
      if (this.$attrs.popupmanagerpopup === 'true') {
        this.open()
      }
    }
  })

  Vue.component('popup-anchor', {
    name: 'PopupAnchor',
    created() {
      anchorVm = this
    },
    render(h) {
      var children = popupList.map(popup => {
        return h('div', {
          key: popup.popupKey,
          attrs: {
            'popupmanagerpopup': 'true'
          },
          on: {
            'popup:closed': (event) => {
              removePopupInstance(popup)
            }
          },
          hook: {
            create: function(_, vnode) {
              popup.popupInstance = vnode.componentInstance
            }
          }
        }, [
          h(popup.component, {
            props: popup.params ? popup.params : {},
            hook: {
              create: function(_, vnode) {
                popup.componentInstance = vnode.componentInstance
              }
            }
          })
        ])
      })

      return h('div', children)
    }
  })
}
