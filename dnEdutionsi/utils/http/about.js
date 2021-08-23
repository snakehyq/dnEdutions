import { Request } from './request'
export function getCompanyInfo () {
  return Request({
    url: '/about.json'
  })
}
export function getTeacherInfo () {
  return Request({
    url: '/workers.json'
  })
}