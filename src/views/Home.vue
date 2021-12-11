
<template>
  <div class="home">
    <top-Nav></top-Nav>
    <swiper-com></swiper-com>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
// @ is an alias to /src
import topNav from '@/components/topNav.vue'
import SwiperCom from '../components/swiperCom.vue'
import iconList from '../components/iconList.vue'
import musicList from '../components/musicList.vue'

export default {
  name: 'Home',
  components: {
    topNav,
    SwiperCom,
    iconList,
    musicList
  },
  
}
</script>
<style lang="less" scoped>
.home{
  width: 7.5rem;
  font-family: '微软雅黑';
}

</style>
