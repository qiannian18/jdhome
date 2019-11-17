<template>
	<div class="home">
		<van-sticky>
			<van-notice-bar color="#FF4040" background="#ecf9ff" left-icon="volume-o" mode="closeable">
				每天更新大量低价，秒杀，内部优惠券，0元购
			</van-notice-bar>
		</van-sticky>

		<van-list v-model="loading" :finished="finished" :offset="number" finished-text="没有更多了" :error="errors" @load="onLoad" loading-text="拼命加载中...">
			<div style="padding-left: 0.625rem;padding-right: 0.625rem;">
				<div class="mycard article" v-for="item in 10" :key="item.index">
					<div class="ar_time">
						2019.11.24-12:50
					</div>
					<div class="ar_title">
						每天更新大量低价，秒杀，内部优惠券，0元购每天更新大量低价，秒杀，内部优惠券，0元购每天更新大量低价，秒杀，内部优惠券，0元购每天更新大量低价，秒杀，内部优惠券，0元购
					</div>
					<div class="ar_key">
						<div class="ar_link" style="float: left;">
							https://img.yzcdn.cn/vant/cat.jpeg
						</div>
						<div class="sty_cy">
							复制
						</div>
					</div>
					<div style="padding-left: 0.3125rem;padding-right: 0.3125rem;">
						<van-image @click="showImg" class="pro_img" width="23%" height="5rem" fit="fill" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<van-image @click="showImg" class="pro_img" width="23%" height="5rem" fit="fill" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<van-image @click="showImg" class="pro_img" width="23%" height="5rem" fit="fill" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<van-image @click="showImg" class="pro_img" width="23%" height="5rem" fit="fill" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
					</div>
					<div>
						<van-image-preview v-model="imagesShow" :images="data" @change="onChange">
							<template v-slot:index>第{{ index }}页</template>
						</van-image-preview>
					</div>
				</div>
			</div>
		</van-list>
		<van-tabbar v-model="actives" class="tabbar" active-color="#FF4040" :safe-area-inset-bottom="safe" route>
			<van-tabbar-item icon="good-job" to="/">精选</van-tabbar-item>
			<van-tabbar-item icon="cart" to="/center">有好券</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				actives: 1,
				safe: true,
				searchValue: "",
				loading: false,
				finished: false,
				errors: false,
				border: false,
				list: [],
				number: 200,
				page: 0,
				showLoding: false,
				isLoading: false,
				showImgUrl: "",
				popupShow: false,
				images: null,
				data: [
					"https://img.yzcdn.cn/vant/cat.jpeg",
					"https://img.yzcdn.cn/vant/cat.jpeg",
				],
				index: 0,
				show: false,
				imagesShow: false
			}
		},
		methods: {
			onLoad() {

			},
			showPop() {
				this.popupShow = true
			},
			onChange(index) {
				this.index = index;
			},
			showImg() {
				this.imagesShow = true
			}
		}
	}
</script>

<style scoped="scoped">
	.home {}

	.mycard {
		box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
		background: #FFFFFF;
		transition: 0.3s;
		border-radius: 5px;


	}

	.article {
		margin-top: 0.625rem;
	}

	.ar_time {
		color: #ffffff;
		border-radius: 5px 5px 0px 0px;
		padding: 0.3125rem 0.3125rem 0.3125rem 0.625rem;
		background: #FF4040;
		color: #FFFFFF;
		font-size: 0.75rem;
	}

	.ar_title {
		color: #787878;
		font-size: 0.75rem;
		margin: 0.3125rem 0.625rem 0rem 0.625rem;
	}

	.ar_key {
		margin: 0.3125rem 0.625rem 0.3125rem 0.625rem;
		height: 1.5625rem;
		line-height: 1.5625rem;
		/* border-radius:0.625rem; */
	}

	.ar_link {
		height: 100%;
		width: 80%;
		/* background: #FF6A6A; */
		border: 1px solid #FF4040;
		color: #787878;
		font-size: 0.875rem;
		border-radius: 0.625rem 0px 0px 0.625rem;
		text-align: center;

	}

	.pro_img {
		margin: 0.1875rem;
	}

	.sty_overlay {
		width: 80%;
		background: #F2F2F2;
		margin: auto;
		margin-top: 6.25rem;
	}

	.sty_link {
		height: 1.875rem;
		background: #FF4040;
		margin-top: 0.3125rem;
	}

	.sty_cy {
		width: 18%;
		height: 100%;
		background: #FF4040;
		float: left;
		border: 0.0625rem solid #FF4040;
		text-align: center;
		color: #FFFFFF;
		border-radius: 0px 0.625rem 0.625rem 0px;
	}
</style>
