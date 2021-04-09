<template >
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/b9905b35bb0afa9050d9ddbe04d82d29.jpeg"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/ddc8c8922cbb694dfb73c86bb03fce22.jpeg"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg"
          alt
        />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-1"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper -->

    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap" :style="expand?'':'height:60px;overflow: hidden;'">
        <div class="nav-item mb-3" v-for="item in arr" :key="item.id">
          <i class="sprite" :class="item.clazz"></i>
          <div class="py-2">{{item.title}}</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm" @click="expand = !expand" >
        <i class="sprite sprite-arrow mr-1" :style="expand?'':'transform:rotate(180deg);'"></i>
        <span>{{expand?'收起':'展开'}}</span>
      </div>
    </div>
    <!-- end of nav icons -->

    <m-list-card icon="sprite news" title="新闻资讯" :categories="newsCats">
      <template #items="{ category }">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(news, i) in category.newsList"
          :key="i"
        >
          <span class="text-info">[{{ news.categoryName }}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{
            news.title
          }}</span>
          <span class="text-grey-1 fs-sm">{{ news.createdAt | date }}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="sprite heroslist" title="英雄列表" :categories="heroCats">
      <template #items="{ category }">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link
            tag="div"
            :to="`/heroes/${hero._id}`"
            class="p-2 text-center"
            style="width: 20%"
            v-for="(hero, i) in category.heroList"
            :key="i"
          >
            <img :src="hero.avatar" class="w-100" />
            <div>{{ hero.name }}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <m-card icon="menu1" title="英雄列表"></m-card>
    <m-card icon="menu1" title="精彩视频"></m-card>
    <m-card icon="menu1" title="图文攻略"></m-card>
  </div>
</template>
<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      //首页菜单数据
      arr:[
        {id:'a001',title:'爆料站',clazz:'sprite-news'},
        {id:'a002',title:'故事站',clazz:'gushizhan'},
        {id:'a003',title:'周边商城',clazz:'zhoubian'},
        {id:'a004',title:'体验服',clazz:'tiyanfu'},
        {id:'a005',title:'新人专区',clazz:'xinrenzq'},
        {id:'a006',title:'荣耀·传承',clazz:'rongyao'},
        {id:'a007',title:'王者营地',clazz:'wangzheyingdi'},
        {id:'a008',title:'公众号',clazz:'gongzonghao'},
        {id:'a009',title:'版本介绍',clazz:'banben'},
        {id:'a0010',title:'对局环境',clazz:'djhj'},
        {id:'a0011',title:'无限王者团',clazz:'wxwzt'},
        {id:'a0012',title:'创意互动营',clazz:'cyhdy'},
      ],
      //是否为展开
      expand:true,
      swiperOption: {
        pagination: {
          el: ".pagination-home",
        },
      },
      newsCats: [],
      heroCats: [],
    };
  },
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    },
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    },
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  },
};
</script>
<style lang="scss">
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>