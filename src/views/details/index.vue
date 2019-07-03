<template>
  <div>
    <van-cell-group>
      <van-cell title="科研课题" value="高温与肾上腺素的关系"/>
      <van-cell title="编号" value="1532110144"/>
    </van-cell-group>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="负责人" name="1">内容</van-collapse-item>
      <van-collapse-item title="参与人" name="2">内容</van-collapse-item>
    </van-collapse>
      <!-- <van-cell title="负责人" value="12人" is-link/>
      <van-cell title="参与人" value="10人" is-link/>
      <van-cell title="科研内容" value="" :label="taskTltle" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return{
      activeNames: [],
      taskTltle: '高温作业时，人体会出现一系列生理功能改变，这些变化在人体能够承受的范围内是可以逐步适应，但超过承受范围，且不做任何个人防护（如穿隔热服、高温头罩等），则会产生病变等严重后果。'
    }
  },
  mounted() {
    // let txt = '{ "employees" : [' +
    //   '{ "firstName":"Bill" , "lastName":"Gates" },' +
    //   '{ "firstName":"George" , "lastName":"Bush" },' +
    //   '{ "firstName":"Thomas" , "lastName":"Carter" } ]}'
    // let mapJSON = function(e) {
    //   e.map(item => {
    //     console.log(item)
    //     return item
    //   })
    // }
    // console.log(eval(`(${txt})`))
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
