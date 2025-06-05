export function request(config={}){
	const URL="可以写总名字"
    let { url, header = {}, data = {} } = config;
    header['access-key']="538939"
    	return new Promise((resolve,reject)=>{		
    		uni.request({
    			url,
    			header,
				data,
    			success:res=>{
    				if(res.data.errCode===0){
    					resolve(res.data)
    				}else if(res.data.errCode === 400){
    					uni.showModal({
    						title:"错误提示",
    						content:res.data.errMsg,
    						showCancel:false
    					})
    					reject(res.data)
    				}else{
    					uni.showToast({
    						title:res.data.errMsg,
    						icon:"none"
    					})
    					reject(res.data)
    				}				
    			},
    			fail:err=>{
    				reject(err)
    			}
    		})
    	})
}