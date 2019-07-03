<template>
  <div class="card">
    <div class="card-title between">
      <div class="">
        <span class="card-task">{{title}}</span>
      </div>
      <div>
        <span class="card-task-title">{{date}}</span>
        <span class="card-task-title">{{time}}</span>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'card',
  props:{
    title: {
      type: String,
      default: '高温与人体'
    },
    date: {
      type: String,
      default: '2019-6-26'
    },
    time: {
      type: String,
      default: '12:20:03'
    }
  }  
}
</script>

<style lang="scss" scoped>
  $highlight: 30px;
  .card{
    padding: 10px;
    margin: 10px;
    border-radius: 2%;
    display: flex;
    justify-content: center;
    background-color: #fff;
    box-shadow:0px 10px 16px 4px rgba(189,189,189,0.29);
    &-title{
      width: 90%;
      margin: 15px 0;
    }
    &-task{
      display: inline-block;
      font-size: 15px;
      font-weight: 400;
      flex: 2;
    }
    &-task-title{
      color: #999;
      font-size: 11px;
      margin: 0 5px;
    }
  }
  .between{
    display: flex;
    justify-content: space-between;
    // height: $highlight;
  }
</style>
