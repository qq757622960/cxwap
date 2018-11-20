<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
	import { getIndex } from 'api/index'

	export default {
		name: 'App',
		data() {
			return {}
		},
		created() {
			this._getIndex()
		},
		methods: {
			_getIndex() {
				getIndex().then((res) => {
					console.log(res.data) 
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import "~common/stylus/variable"
	@import "~common/stylus/mixin"

	#app 
		height 100%
		font-size rem(36)
</style>
