<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__header">
        <div class="iconfont top__header__back">&#xe6db;</div>
        确认订单
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__addres">科学大道100号郑州大学主校区</div>
        <div class="top__receiver__info">
          <span class="top__receiver__name">严（先生）</span>
          <span class="top__receiver__name">18911024266</span>
        </div>
        <div class="iconfont top__receiver__icon">&#xe6db;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderConfirmation'
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #eee;
}
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    color: #FFF;
    padding-top: .26rem;
    line-height: .24rem;
    font-size: .16rem;
    text-align: center;
    &__back {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background-color: #FFF;
    border-radius: .04rem;
    &__title {
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      color: #333;
      line-height: .22rem;
    }
    &__addres {
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      color: #333;
      line-height: .2rem;
    }
    &__info {
      padding: .06rem 0 0 .16rem;
      &__name {
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
        color: #666;
      }
    }
    &__icon {
      position: absolute;
      top: .5rem;
      right: .16rem;
      color: #666;
      font-size: .2rem;
      transform: rotate(180deg);
    }
  }
}
</style>
