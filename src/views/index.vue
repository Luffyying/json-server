<template>
    <div>
        这是{{page}}页面
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            page: 'index'
        }
    },
    mounted(){
    	var data = {};
  //   	this.$ajax.post('/userInfo',data).then((returnData)=>{
				
		// })
    }
}
</script>