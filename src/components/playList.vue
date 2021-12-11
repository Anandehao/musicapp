<template>
    <div class="playList">
        <div class="playlist-top">
            <div class="left">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang1"></use>
                </svg>
                <div class="text">
                    <div class="title" @click="playList">播放全部</div>
                    <div class="num">(共{{playlist.tracks.length}}首)</div>
                </div>
            </div>
            <el-button class="btn" type="danger" round>+ 收藏 ({{changeValue(playlist.subscribedCount)}})</el-button>
        </div>
        <div class="list">
            <div class="playItem" @click="playListItem(i)" v-for="(item,i) in playlist.tracks" :key="i">
                <div class="left">
                    <div class="index">{{i+1}}</div>
                    <div class="content">
                        <div class="title">{{item.name}}</div>
                        <div class="anthor">
                            <span class="tag">{{playlist.tags[0]}}</span>
                            <span class="anthorName">{{item.al.name}}</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sangedian"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store/index'
import { mapMutations } from 'vuex'

export default {
    props:['playlist'],
    methods:{
        changeValue:function(num){
            let res = 0
            if(num >= 100000000){
                res = num/100000000
                res = res.toFixed(2) + '亿'
            }else if(num >= 10000){
                res = num/10000
                res = res.toFixed(2) + '万'
            }
            return res
        },
        playList:function(){
            // console.log(this.playlist)
            store.commit('setPlaylist',this.playlist.tracks)
        },
        ...mapMutations(['setPlayIndex']),
        playListItem:function(e){
            this.playList()
        //    console.log(e)
            this.setPlayIndex(e)
        }
        
    },
}
</script>

<style lang="less" scoped>
.playList{
    padding: 0 0.4rem;
    background-color: white;
    border-top-right-radius: 0.3rem;
    border-top-left-radius: 0.3rem;
    .playlist-top{
        display: flex;
        justify-content: space-between;
        height: 1rem;
        align-items: center;
        .left{
            display: flex;
            align-items: center;
            .icon{
                height: 0.4rem;
                width: 0.4rem;
            }
            .text{
                display: flex;
                align-items: center;
                margin-left: 0.2rem;
                .title{
                    font-size: 0.35rem;
                    font-weight: 900;
                }
                .num{
                    font-size: 0.24rem;
                    color: #666;
                }
            }
        }
        .btn{
            font-size: 0.24rem;
            height: 0.6rem;
            line-height: 0.6;
            padding: 0.2rem;
        }
    }
    .list{
        .playItem{
            display: flex;
            justify-content: space-between;
            align-items: center;    
            height: 1rem;
            margin-top: 0.4rem;
            .left{
                display: flex;
                justify-content: space-around;
                align-items: center;
                color: #666 ;
                .index{
                    width: 0.3rem;
                }
                .content{
                    margin-left: 0.4rem;
                }
                .title{
                    font-size: 0.3rem;
                    font-weight: 900;
                    color: #000;
                    margin-bottom: 0.1rem;
                }
                .anthor{
                    .anthorName{
                        margin-left: 0.1rem;
                    }
                }
                .tag{
                    font-size: 0.2rem;
                    color:tomato;
                    border-radius: 0.1rem;
                    border: 1px solid tomato;
                }
            }
        }
        .icon{
            fill: #666;
        }
    }
}

</style>