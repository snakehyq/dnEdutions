import { Request } from './request'
export function getHomeLunBo () {
  return Request({
    url: '/public.json'
  })
}
export function getHomeEntry () {
  return Request({
    url: '/recruitSmall.json'
  })
}

export function getHomePar () {
  return Request({
    url: '/buddy.json'
  })
}