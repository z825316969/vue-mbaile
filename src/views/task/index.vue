<template>
  <div class="task">
    <van-nav-bar
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="task-title">
      <h2>抑郁评定</h2>
    </div>
    <div class="task-content">
      <div class="task-content-hairline"></div>
      <div class="task-content-main">
        <div class="task-content-main-top">
          <div class="top-item w50b mt8" v-for="item in infoList" :key="item.img">
            <img class="img-stlys" :src="item.img" alt="">
            <span class="mc8 fw600">{{item.label}}:</span>
            <span>123465</span>
          </div>
          <div class="bottom-item mt8" >
            <img class="img-stlys" :src="imgUrl" alt="">
            <div class="item-content">
              <span class="mc8 fw600">课题内容:</span>
              <span>人生的道路十分漫长，前进中布满了荆棘。我们总是面临着一次又一次的转折。人生的道路十分漫长，前进中布满了荆棘。我们总是面临着一次又一次的转折。</span>
            </div>
          </div>
        </div>
        <div class="task-content-main-bottom">
          <div class="task-content-main-bottom-btn">
            <van-button type="info">参与医生</van-button>
            <van-button type="info">参与患者</van-button>
          </div>
        </div>
      </div>
      <img class="jag" src="@/assets/jag.png" alt="">
    </div>
  </div>
</template>

<script>
import doctor from '@/assets/doctor.png'
import content from '@/assets/content.png'
import num from '@/assets/num.png'
import patient from '@/assets/patient.png'
import principal from '@/assets/principal.png'
export default {
  data() {
    return{
      imgUrl: content,
      infoList: [
        {label: '编号', prop: '', img: num},
        {label: '负责人', prop: '', img: principal},
        {label: '参与医生', prop: '', img: doctor},
        {label: '参与患者', prop: '', img: patient}
      ]
    }
  },
  mounted() {
    console.log(this.infoList)
  },
  methods: {
    onClickLeft() {
      // Toast('返回');
    },
  }
}
</script>

<style lang="scss">
.van-nav-bar{
  background-color: rgb(50, 156,247);
}
.van-hairline--bottom::after{
  border-width: 0;
}
</style>


<style lang="scss" scoped>
.task{
  height: 100vh;
  position: relative;
  background-color: #eee;
  h2{
    font-size: 30px;
    font-weight: 600;
    padding-top: 10px;
    padding-bottom: 56px;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    color: #fff;
  }
  &-title{
    background-color: $main-color;
    padding-bottom: 160px;
  }
  &-content{
    z-index: 2;
    width: 92%;
    position: absolute;
    top: 145px;
    left: 4%;
    &-hairline{
      width: 100%;
      height: 6px;
      border-radius: 5px;
      background-color: $main-color;
    }
    &-main{
      width: 97%;
      margin-left: 1.5%;
      background-color: #fff;
      &-top{
        font-size: 12px;
        color: #333;
        width: 90%;
        margin-left: 5%;
        display: flex;
        flex-wrap: wrap;
      }
      &-bottom{
        &-btn{
          margin-top: 30px;
          padding: 0 8%;
          display: flex;
          justify-content: space-around;
          .van-button{
            width: 45%;
            border-radius: 5px;
          }
        }
      }
    }
  }
  .top-item{
    display: flex;
    align-items: center;
    padding: 5px 0;
  }
  .bottom-item{
    display: flex;
  }
  .img-stlys{
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  .w50b{
    width: 50%;
  }
  .item-content{
    margin-top: 5px;
  }
  .mc8{
    margin-right: 8px;
  }

  .mt8{
    margin-top: 8px;
  }

  .fw600{
    font-weight: 600;
  }
  .jag{
    width: 99%;
    margin-left: 0.55%;
    position: relative;
    top: 0;
    left: 0;
  }
}
</style>
