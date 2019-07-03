<template>
  <div class="home">
    <van-nav-bar
      title="科研列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-search class="home-search" placeholder="查询" v-model="value" />
    <div class="home-content">
      <card ></card>
      <card ></card>
      <card ></card>
      <card ></card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import card from './components/InquireItem'

export default {
  components: { card },
  data() {
    return{
      value: ''
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    }
  }
}
</script>

<style lang="scss">
.home{
  .van-search__content{
    border-radius: 5px;
    background-color: #e8e8e8;
    .van-cell {
        .van-field__body {
          input{
            // text-align: center!important;
          }
        }
    }
  }
}
</style>


<style lang="scss" scoped>
.home{
  width: 100%;
  background-color: #fff;
  &-search{
    width: 100%
  }
  &-content{
    height: calc(100vh - 54px);
    overflow-y: auto;
  }
  
}

</style>