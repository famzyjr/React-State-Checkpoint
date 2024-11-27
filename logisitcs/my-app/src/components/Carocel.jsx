import React from 'react'
import img_1 from '../caroImg/red.jpeg'
import img_2 from '../caroImg/dark-blue.jpeg'
import img_3 from '../caroImg/green.jpeg'
import img_4 from '../caroImg/grey-02.jpeg'
import img_5 from '../caroImg/light-blue.jpeg'
import img_6 from '../caroImg/blue.jpeg'

function Carocel() {
  return (
    <div>
     <div class="wrapper">
  <div class="item item1"><img src={img_1} alt="" /></div>
  <div class="item item2"><img src={img_2} alt="" /></div>
  <div class="item item3"><img src={img_3} alt="" /></div>
  <div class="item item4"><img src={img_4} alt="" /></div>
  <div class="item item5"><img src={img_5} alt="" /></div>
  <div class="item item6"><img src={img_6} alt="" /></div>
  
</div>
    </div>
  )
}

export default Carocel