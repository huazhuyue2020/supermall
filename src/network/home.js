import {request} from "./request";
export function getHomeSwiper(){
  return request({
    url:'/home/swiper'
  })
}
