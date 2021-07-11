const BASE_URL = 'http://zamon.al-electronics.uz/'
const API_V1 = '/api/v1'

export async function getLatestNews(cb) {
  fetch(`${BASE_URL}/${API_V1}/news/list`)
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    cb(json["results"])
  });
}
