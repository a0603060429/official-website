import {request} from 'axios'

const server = ""
// const server = ""

export function commit(obj) {
    return request({
      url: '${server}/api/admin/route',
      method: 'Post',
      data: obj
    })
}

export function getPendingData(obj) {
    return request({
      url: `${server}/api/flight-supervision/pending/search`,
      method: 'post',
      data: obj
    })
  }

export function getRealEstateDatas(obj) {
  return request({
    url: `${server}/api/realEstate/list`,
    method: 'post',
    data: obj
  })
}

export function addContact(obj) {
  return request({
    url: `${server}/api/contact/save`,
    method: 'post',
    data: obj
  })
}

export function register (obj) {
  return request({
    url: `${server}/api/user/register`,
    method: 'post',
    data: obj
  })
}


export function login (obj) {
  return request({
    url: `${server}/api/user/login`,
    method: 'post',
    data: obj
  })
}