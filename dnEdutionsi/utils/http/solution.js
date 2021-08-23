import { Request } from './request'
export function getSolutionList () {
  return Request({
    url: '/recruitSmall.json'
  })
}