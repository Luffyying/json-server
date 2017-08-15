<!-- 这里是首页组件，这里有路由链接和路由视图等组件-->
<!-- 在vue页面中都以template存在 -->
<!-- router-link被解析成a 链接 ，而router-view是对应的视图展示，仅一个-->
<template>

	<div>
		<div>
			<router-link to="/index">Home</router-link>
			<router-link to="/node">Node</router-link>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>



