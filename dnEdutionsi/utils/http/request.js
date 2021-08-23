const baseUrl = 'https://www.zhaoxiedu.net/static/json'
export function Request (config) {
  config.url = config.url.startsWith('https') ? config.url : baseUrl + config.url
  return new Promise((resolve, reject) => {
    wx.request({
      ...config,
      success (res) {
        resolve(res)
      },
      fail (error) {
        reject(error)
      }
    })
  })
}