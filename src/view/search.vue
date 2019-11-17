<template>
	<div>
		<van-sticky>
		<van-nav-bar :title="searchValue" left-text="返回" left-arrow @click-left="onClickLeft"  />
		</van-sticky>
		<van-list v-model="loading" :finished="finished" :offset="number" finished-text="没有更多了" :error="errors" @load="onLoad" loading-text="拼命加载中...">
			<van-row style="padding-left: 0.25rem;padding-right: 0.25rem;">
				<van-col span="12" v-for="(item) in list" :key="item.index">
					<div class="mycard" @click="showProduct(item.skuId,item.couponLink,item.isPinGou,item.planId,item.requestId)">
						<van-image radius="5px" fit="fill" height="10rem" :src="'https://img14.360buyimg.com/n1/'+item.imageUrl" :show-loading="showLoding" />
						<div style="padding: 0.3125rem;">
							<div class="pro_title">{{item.productName}}</div>
							<div style="margin-top: 0.3125rem;width: 100%;">
								<span class="logo_title">{{item.shopName}}</span>
							</div>
							<div style="height: 1.25rem;margin-top: 0.3125rem;">
								<span class="ticket">{{item.couponDiscount}}元券</span> <span class="xiaoliang">{{item.inOrderCount30Days}}人已付款</span>
							</div>
							<div style="margin-top: 0.3125rem;">
								<span class="oprice">￥{{item.wlPrice}}</span> <span class="xprice">到手价￥</span><span class="pro_price">{{item.finalPrice}}</span>
							</div>
						</div>
					</div>
				</van-col>
			</van-row>
		</van-list>
	</div>


</template>

<script>
	export default {
		data() {
			return {
				searchValue:"",
				loading: false,
				finished: false,
				errors: false,
				border: false,
				list: [],
				number: 200,
				page: 0,
				showLoding: false,
				isLoading: false,
				imgurl: this.ImgbaseUrl,
				data: {
					materialId: "",
					couponLink: "",
					isPinGou: "",
					planId: "",
					requestId: ""
				}
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			onLoad() {
				this.page = this.page + 1
				let url = this.baseUrl + "search/"
				let data="key="+this.searchValue+"&page="+this.page
				this.$http.post(url,data).then((res) => {
					for (var i = 0; i < res.data.data.length; i++) {
						this.list.push(res.data.data[i])
					}
					this.loading = false;
					if (res.data.code == 400) {
						this.error = true
					}
			
				})
			
			},
			showProduct(skuid, couponLink, isPinGou, planId, requestId) {
				this.data.materialId = skuid
				this.data.couponLink = couponLink
				this.data.isPinGou = isPinGou
				this.data.planId = planId
				this.data.requestId = requestId
				this.$http.post(this.baseUrl + "showProduct", this.data).then((res) => {
					if (res.data.code == "200") {
						window.location.href = res.data.data;
					} else {
						this.$toast(res.data.data);
					}
				})
			}
		},
		mounted() {
			this.searchValue=this.$route.query.keyword
		}
	}
</script>

<style scoped="scoped">
.mycard {
		border-radius: 0.3125rem;
		background: #FFFFFF;
		margin: 0.2375rem;
		box-shadow: 0px 0px 0px 0.03125rem #F6F6F6;
	}

	.pro_title {
		font-size: 0.8125rem;
		margin-bottom: 0.1875rem;
		color: #787878;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.oprice {
		font-size: 0.8125rem;
		text-decoration: line-through;
		color: #787878;
	}

	.xprice {
		margin-left: 0.3125rem;
		font-size: 0.875rem;
		color: red;
	}

	.pro_price {
		font-size: 1.125rem;
		font-weight: 600;
		color: red;
	}

	.ticket {
		background: red;
		color: #ffffff;
		font-size: 0.75rem;
		text-align: center;
		border-radius: 0.3125rem;
		padding: 0.1875rem;
		background-image: linear-gradient(to right, #FF4040, #FF6A6A);
	}

	.logo_title {
		border: 0.0625rem solid #FF4040;
		border-radius: 0.3125rem;
		padding: 0.125rem;
		font-size: 0.6875rem;
		color: #FF4040;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.xiaoliang {
		font-size: 0.8125rem;
		color: #787878;
	}
</style>
