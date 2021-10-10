<template>
  <div class="docker">
    <div
      v-for="(item,index) in dockerList"
      :class="{'docker__item':true,'docker__item--active': index === 0}"
      :key="item.icon"
    >
    <router-link :to="item.to">
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">{{item.text}}</div>
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe630;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe7e5;', text: '购物车', to: { name: 'CartList' } },
      { icon: '&#xe64e;', text: '订单', to: { name: 'Home' } },
      { icon: '&#xe660;', text: '我的', to: { name: 'Home' } }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/varibles.scss';
.docker {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .49rem;
    padding: 0 .18rem;
    box-sizing: border-box;
    border-top: .01rem solid $content-bgColor;
    display: flex;
    color: $content-fontcolor;
    &__item {
      flex: 1;
      text-align: center;
      a {
          color: $content-fontcolor;
          text-decoration: none;
        }
      .iconfont {
        margin: .07rem 0 .02rem 0;
        font-size: .18rem;
      }
      &--active {
        color: #1FA4FC;
        a {
          color: #1FA4FC;
        }
      }
    }
    &__title {
      font-size: .2rem;
      transform: scale(.5, .5);
      transform-origin: center top;
    }
  }
</style>
