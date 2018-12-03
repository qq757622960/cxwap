import axios from 'axios'

export function getComments() {
    var url = 'http://jsonplaceholder.typicode.com/posts'
    return axios.get(url, {}).then(res => Promise.resolve(res))
}

export function getPosts() {
    var url = 'http://jsonplaceholder.typicode.com/posts/1'
    return axios.get(url, {}).then(res => Promise.resolve(res))
}