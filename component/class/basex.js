import {inject} from 'libs'
import combineX from 'component/mixins/combinex'

// BaseCombine
export default class  {
  constructor(config){
    this.config = config
    this.client = (() => typeof window !== 'undefined')()
    this.element
    this.inject = this::this.inject
    this.combinex = this::this.combinex

    this.inject()
  }

  combinex(GridsBase, Actions){
    const CombX = combineX(GridsBase, Actions)
    this.x = CombX.element
    this.dispatch = CombX.dispatch
    this.setActions = function(key, func){
      const _actions = {}
      _actions[key] = func
      CombX.saxer.setActions(_actions)
    }
    this.roll = function(key, data){
      CombX.saxer.roll(key, data)
    }
    this.on = this.setActions
  }

  inject(src){
    if (this.client) {
      const ij = inject()
      if (this.config.theme && this.config.autoinject) {
        ij.css(['/css/m/'+this.config.theme])  //注入样式
      }
      if (typeof src == 'function') {
        src(ij)
      }
      return ij
    }
  }

  render(id){
    const X = this.x
    if (this.config.props) {
      if (id) {
        if (typeof id == 'string') {
          React.render(<X {...this.config.props}/>, document.getElementById(id))
        } else if (typeof id == 'object' && id.nodeType) {
          React.render(<X {...this.config.props}/>, id)
        }
      } else if (this.config.container) {
        React.render(<X {...this.config.props}/>, document.getElementById(this.config.container))
      } else {
        return <X {...this.config.props}/>
      }
    } else {
      return X
    }
  }
}
