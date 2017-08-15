<!-- 在每一个vue页面（组件）中，this指向的是VueComponent对象-->
<template>
    <div>
        {{page}}
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            page: 'this is a show page'
        }
    },
    mounted() {
         console.log('------');  
         console.log(this);  
    },
    methods: {
    	// this.axios.get('/user/getInfo').then(function(response){
    	// 	console.log(response);
    	// })
    	//this.$ajax.post('/user/getInfo', data).then((response) => {});
    }
}
</script>