import {queryString} from 'libs'
import {sticky} from 'component/client'
import iscrollHlc from 'component/mixins/iscrollhlc'

const nevTop = (
  <div className='navtop'>
    <div className='flex-row' style={{height: '100%',width: 'auto'}}>
      <a href="/docs">
        <img src="/images/logo118-1.png"/>
      </a>
      <a href='https://github.com/webkixi/fkp2'>
        <img src='/docs/images/github.png'/>
      </a>
    </div>
  </div>
)
const StickyTBox = sticky(nevTop, {autoinject: false})

let query = queryString()

const config = {
  fold: false
}
let items = []
// iscrollHlc($('.docs-tree')[0], {
//   scrollbars: true,
//   fadeScrollbars: true,
//   interactiveScrollbars: true,
//   resizeScrollbars: true
// })

$('.tree-menu-body').find('li').each(function(ii, dom){
  if ($(dom).hasClass('itemroot')) {
    if (config.fold) $(dom).find('.itemCategory ul').addClass('none')
  } else {
    items.push(dom)
    const treeId = $(dom).attr('data-treeid')
    let href = $(dom).find('a').attr('href')
    $(dom).find('a').attr('href', href+'?treeid='+treeId)

    if (query && query.treeid && treeId == query.treeid) {
      $(dom).addClass('selected')
    }
  }

  $(dom).click(function(e){
    e.stopPropagation()
    $(items).removeClass('selected')
    if ($(this).hasClass('itemroot')) {
      $(this).find('.caption:first').toggleClass('fold')
      $(this).find('ul:first').toggleClass('none')
    } else {
      $(this).addClass('selected')
    }
  })
})
