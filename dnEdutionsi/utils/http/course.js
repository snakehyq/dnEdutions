import { Request } from './request'
export function getCourseList () {
  return Request({
    url: '/course.json'
  })
}
export function getTeacherInfo () {
  return Request({
    url: '/workers.json'
  })
}