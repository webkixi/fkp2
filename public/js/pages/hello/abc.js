import {inject, mediaQuery} from 'libs'
import { Slider } from 'component/modules/slider'
import {baselist, grids} from 'component'
import {tips as msgtips, sticky, modal} from 'component/client'
import itemHlc from 'component/mixins/itemhlc'
import scrollHlc from 'component/mixins/scrollhlc'
var ws = require('libs/wsocket')
require('./_common/pushboom')(ws)

// websocket
// ws.emit('hello', 'hi')
// ws.on('hello', function(val){
//   setTimeout(function(){
//     msgtips.toast(val.message)
//   },0)
// })

let Modal = modal.p30
mediaQuery({
  mobile: function(){
    Modal = modal.p70
  }
})

const StickyBBox = sticky.bottom(document.getElementById('agzgzNav'), {delay: 2000, autoinject: false})

let Xslider = Slider({
  container: 'slider',
  data: [
    <div className="pure-g">
      <div className="pure-u-8-12">
        <img src="/images/banner/hello/banner-3.jpg" title="Funky roots" />
      </div>
      <div className="pure-u-4-12 descript">
        <h3>FKP2</h3>
        Full Stack Plus 2<br/> SAP/MPA最佳实践方式
      </div>
    </div>,

    <div className="pure-g">
      <div className="pure-u-8-12">
        <img src="/images/banner/hello/banner-2.jpg" title="The long and winding road" />
      </div>
      <div className="pure-u-4-12 descript">
        <h3>脚手架</h3>
        gulp+webpack组合，灵活、模块化的脚手架系统
      </div>
    </div>,

    <div className="pure-g">
      <div className="pure-u-8-12">
        <img src="/images/banner/hello/banner-7.jpg" title="Happy trees" />
      </div>
      <div className="pure-u-4-12 descript">
        <h3>前端</h3>
        Babel、JQ+React的混合流组件模式
      </div>
    </div>,

    <div className="pure-g">
      <div className="pure-u-8-12">
        <img src="/images/banner/hello/banner-4.jpg" title="Happy trees" />
      </div>
      <div className="pure-u-4-12 descript">
        <h3>node端</h3>
        灵活、低配置，无限层级RESTFUL路由
      </div>
    </div>
  ],
  // control: [
  //   <img src="/images/test/t_tree_root.jpg" title="Funky roots" />,
  //   <img src="/images/test/hill_fence.jpg" title="The long and winding road" />,
  //   <img src="/images/test/t_houses.jpg" title="Happy trees" />
  // ],
}).render()

// const titles = [
//   <a title="列表，如果所有元素都是列表">列表，如果所有元素都是列表</a>,
//   <a>元件，组件是怎么构成的</a>,
//   <a>元件，可伸缩的元件设计</a>
// ]

const titles1 = [
  <a className="iconfont icon-text" href='/docs' title="FKP2文档">FKP2文档</a>,
  <a className="iconfont icon-video_fill_light" href='/blog' title="博客">博客</a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-text" title="列表，如果所有元素都是列表"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
  <a className="iconfont icon-goods_new_fill_light"></a>,
  <a className="iconfont icon-video_fill_light"></a>,
]
const list1 = baselist({
  data: titles1,
  autoinject: false,
  listClass: 'books'
})

const floor1 = grids({
  data: [
    {width: '100%', content: <h3 style={{color:'#9c9c9c'}}>推荐文章</h3>},
    {width: '100%', content: list1.render()}
  ],
  autoinject: false,
  container: 'test'
})

floor1.render()

setTimeout(()=>{
  scrollHlc($('.columContainer')[0], {
    scrollContainer: window,
    scroll: function(dom, state){
      if (state.directionY == 'down') {
        StickyBBox.hide()
      } else {
        StickyBBox.show()
      }
    }
  })
}, 1000)

// setTimeout(()=>{
//   const yyy = $('.columWrap')[0]
//   iscrollHlc(yyy, {
//     scrollX: true,
//     scrollY: true,
//     momentum: false,
// 		snap: true
//   })
// },1000)


// ajax.get('/api/163')
// .then( (data) => {
//   console.log(data);
//   msgtips('get baidu首页数据over')
// })
// msgtips.warning('get data')

setTimeout( () => {
  ajax.post('/hello')
  .then( (data) => {
    console.log(data);
  })
  // msgtips.sticky('格子格子，全都是格子', 'success')
},1000)
