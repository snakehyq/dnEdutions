import { Request } from './request'
export function getPersonalList () {
  return Request({
    url: 'https://test.zhaoxiedu.net/api/Resource/GetResourceList'
  })
}

export function getPersonalContact () {
  return Request({
    url: '/companyInfo.json'
  })
}