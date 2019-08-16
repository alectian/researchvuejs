import http from './http'
export function apirequest(){
  return http({
    url:"/hello",
    method:'get'
  })
}
