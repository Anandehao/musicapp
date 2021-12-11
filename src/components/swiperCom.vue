
<template>
    <div class="block">
      <el-carousel indicator-position='none' height="2.6rem">
        <el-carousel-item v-for="item in imgs" :key="item">
          <img :src="item.pic" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
// @ is an alias to /src

import {getBanner} from '../api/index'

export default {
  data:function(){
      return{
          imgs:[]
      }
  },
  async mounted(){
    let res = await getBanner(1)
    this.imgs=res.data.banners
  }
  
}
</script>
<style lang="less" scoped>
.block{ 
  width: 7.5rem;
  display: flex;
  justify-content: space-around;
}
.el-carousel{
  width: 7.1rem;
  border-radius: 0.1rem;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

</style>
