<template>
	
		<router-view></router-view>	
			
</template>

<script>
	
	export default {
		name: 'app',
		data() {
			return {
				actives:0,
				safe:true
			}
		},
		components: {
			
		},
	}
</script>

<style>
	* {
		margin: 0rem;
		padding: 0rem;
		
	}
	body{
		background: #F2F2F2;
	}

	.tabbar {
		box-shadow: 0px 0px 0px 0.03125rem #F6F6F6;
	}
</style>
