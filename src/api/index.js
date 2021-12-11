import axios from 'axios'

let baseUrl='http://localhost:3000'
//获取轮播图的api，type 0：pc  
// 1: android; 2: ios; 3: iped
export function getBanner(type=0){
    return axios.get(`${baseUrl}/banner?type=${type}`)
}

// 获取推荐歌单  limit 取出数量
export function getMusicList(limit=10){
    return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

//获取歌单的详情
export function getPlaylistDetail(id){
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

//获取歌词
export function getLyric(id){
    return axios.get(`${baseUrl}/lyric?id=${id}`)
}
//搜索歌曲
export function searchMusic(keyword){
    return axios.get(`${baseUrl}/search?keywords= ${keyword}`)
}

// 手机登录
export function phoneLogin(phone,password){
    return axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`)
}
// 获取用户详情
export function userDetail(uid){
    return axios.get(`${baseUrl}/user/detail?uid=${uid}`)
}


export default{
    getBanner,getLyric,getPlaylistDetail,getMusicList,searchMusic,phoneLogin,userDetail
}