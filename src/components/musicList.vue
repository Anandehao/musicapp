<template>
    <div class="musicList">
        <div class="musicList-top">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <el-scrollbar class="scrollbar">
            <div class="flex-content">
                <router-link :to="{path:'/listview',query:{id:item.id}}" v-for="(item,i) in state.musicList" :key="i">
                    <div class="scrollbar-demo-item">
                        <img :src="item.picUrl" :alt="item.name">
                        <div class="name">{{item.name}}</div>
                        <div class="count">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-play"></use>
                            </svg>
                            <span>{{changeValue(item.playCount)}}</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
import {getMusicList} from '../api/index'
import { reactive,onMounted } from 'vue'
import store from '../store/index'


export default {
    setup(){
        let state = reactive({musicList:[]})
        function changeValue (num){
            let res = 0
            if(num >= 100000000){
                res = num/100000000
                res = res.toFixed(2) + '亿'
            }else if(num >= 10000){
                res = num/10000
                res = res.toFixed(2) + '万'
            }
            return res
        }
        onMounted(async()=>{
           let result = await getMusicList()
           state.musicList=result.data.result
        })
        return{
            getMusicList,
            changeValue,
            state
        }
    },
    // data(){
    //     return{
    //         musicList:[]
    //     }
    // },
    // methods:{
    //     changeValue:function(num){
    //         let res = 0
    //         if(num >= 100000000){
    //             res = num/100000000
    //             res = res.toFixed(2) + '亿'
    //         }else if(num >= 10000){
    //             res = num/10000
    //             res = res.toFixed(2) + '万'
    //         }
    //         return res
    //     }
    // },
    // mounted:async function(){
    //     let result = await getMusicList()
    //     this.musicList=result.data.result
    // }
}
</script>


<style lang="less" scoped>
.musicList{
    padding: 0 0.4rem;
    .musicList-top{
        display: flex;
        justify-content: space-between;
        height: 0.5rem;
        align-items: center;
        .title{
            font-size: 0.4rem;
            font-weight: 900;
        }
        .more{
            border: 1px solid #ccc;
            border-radius: 0.2rem;
            font-size: 0.24rem;
            height: 0.5rem;
            width: 1.2rem;
            text-align: center;
            line-height: 0.5rem;
        }
    }
    .scrollbar{
        margin-top: 0.2rem;
        .flex-content{
        display: flex;
        width: 7.5rem;
        height: 3rem;
        .scrollbar-demo-item{
            display: flex;
            flex-direction: column;
            margin-left: 0.2rem;
            width: 2rem;
            height: 100%;
            position: relative;
            img{
                height: auto;
                width: 100%;
                border-radius: 0.1rem;
            }
            .name{
                height: 0.8rem;
                font-size: 0.24rem;
                line-height: 0.4rem;
                overflow:hidden;
            }
            .count{
                position: absolute;
                right: 0.3rem;
                top: 0.3rem;
                font-size: 0.24rem;
                color: #ccc;
                display: flex;
                align-items: center;
                .icon{
                    height: 0.3rem;
                    fill: #ccc;

                }
            }
        }
    }
    }
    
}
</style>