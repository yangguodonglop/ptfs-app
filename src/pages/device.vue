<template>
    <div class="container">
        <div class="container_bg">
           <navBar></navBar>
            <div class="bind">
                <div class="bind_title">
                    发现一个设备
                </div>
                <div class="bind_text">
                    <div class="bind_text_warn">
                        <div class="text_item text_item_active">01</div>
                        <div class="text_item">PTFS设备名</div>
                        <div class="text_img">
                            <img src="../assets/images/product model.png">
                        </div>
                        <div class="text_item">容量：1TM</div>
                        <div class="text_item">序号:3423HHIININN8N</div>
                    </div>
                </div>
                <div class="bind_find" @click="goLink()">
                    立即绑定{{yy}}
                </div>
            </div>
   
        </div>
        
    </div>
</template>

<script>
import navBar from "../components/navigationBar";
export default {
  data() {
    return {};
  },
  computed:{
      yy(){
        return this.$store.state
      }
  },
  mounted: function() {},
  methods: {
    //导航栏返回
    routerback: function() {
      this.$router.back(-1);
    },
    goLink() {
      this.$router.push({ path: "/devicedetails" });
    }
  },
  components: {
    navBar
  }
};
</script>

<style lang='less' scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #303030;
  .container_bg {
    background: url("../assets/images/material_bg.png");
    width: 100%;
    height: 100%;
    background-size: 100% 100%;

    .bind {
      width: 100%;
      height: auto;
      overflow: hidden;
      .bind_title {
        color: #ffffff;
        font-size: 0.4rem;
        margin-top: 1.8rem;
        text-align: left;
        padding-left: 0.32rem;
      }
      .bind_text {
        width: 5.89rem;
        height: 5.3rem;
        background-color: #262d4a;
        border-radius: 0.08rem;
        opacity: 0.98;
        margin: 0 auto;
        margin-top: 1rem;
        .bind_text_warn {
          color: #ffffff;
          font-size: 0.24rem;
          display: flex;
          flex-direction: column;
          text-align: left;
          .text_item {
            padding-left: 0rem;
            padding-top: 0.2rem;
            width: 100%;
            text-align: center;
            box-sizing: border-box;
            &.text_item_active {
              font-size: 0.45rem;
              text-align: left;
              padding-left: 0.2rem;
            }
          }
          .text_img {
            margin: 0 auto;
            margin-top: 0.5rem;
            img {
              width: 2.68rem;
              height: 2.12rem;
            }
          }
        }
      }
      .bind_find {
        width: 4.26rem;
        height: 1.02rem;
        background-color: #b25b26;
        border-radius: 0.04rem;
        font-size: 0.38rem;
        color: #ffffff;
        display: flex;
        align-items: center;
        margin: 0 auto;
        justify-content: center;
        margin-top: 1.5rem;
      }
    }
  }
}
</style>
