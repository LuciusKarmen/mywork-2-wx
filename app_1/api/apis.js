import {request} from "./request.js"
export function apiset(){
	return request({url:"https://tea.qingnian8.com/api/bizhi/homeBanner"})
}
export function apisetRandom(){
	return request({url:"https://tea.qingnian8.com/api/bizhi/randomWall"})
	         
}
export function apisetDate(data={}){ 
	return request({url:"https://tea.qingnian.com/api/bizhi/wallNewList",data})
}
export function apisetClassify(data={}){
	return request({url:"https://tea.qingnian8.com/api/bizhi/classify",data})
}
export function apisetWall(data={}){
	return request({url:"https://tea.qingnian8.com/api/bizhi/wallList",data})
}
export function apisetUser(data={}){
	return request({url:"https://tea.qingnian8.com/api/bizhi/userInfo",data})
}