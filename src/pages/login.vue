<template>
    <div class="container">
        <div class="container_bg_index">
       
            <div class="phone">
               <div class="phone_l">
                   +86
               </div>
               <div class="phone_r">
                   <input type="text" placeholder="请输入你的手机号码">
               </div>
            </div>
            <div class="next"  @click="getCode()">
                    下一步11111
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from "axios";
//import { mapMutations } from 'vuex';
import { queryAllNodesProfiles, login } from "../common/js/api";
export default {
  data() {
    return {
      phoneNum: "",
      cmdType: ""
    };
  },
  mountod: function() {},
  methods: {
    //...mapMutations(['changeLogin']),
    goLink() {},

    getCode() {
        
        this.$store.commit('changeLogin',{Authorization:'15926290460'})
        let path = this.$route.query.redirect
        this.$router.push({path:(path||"/user")})
    }
    // getCode: function() {
    //   this.cmdType = "cache";
    //   let param = new Object();
    //    param.fileHashId = "sasadsadsadsadsad"
    //   // param.backUpCount = 1;
    //   queryAllNodesProfiles(param)
    //     .then(res => {
    //       let { result, msg, data } = res;
    //       if(result =="ok"){
    //            this.dialogCacheVisible = true;
    //             if (data != null) {

    //         this.tableDataDetails = res.data;
    //       } else {
    //         this.$message({
    //           message: msg,
    //           type: "error"
    //         });
    //       }
    //       }

    //     })
    //     .catch(error => {
    //       this.$message({
    //         message: "网络出错，请重新请求",
    //         type: "error"
    //       });
    //     });
    // },
  }
};
</script>
 
<style lang="less" scoped >
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #303030;
  .container_bg_index {
    width: 7.5rem;
    height: 13.34rem;
    background: url("../assets/images/potatobg.png") center no-repeat;
    background-size: 7.5rem auto;
    margin-top: 1.56rem;
    float: left;
    box-sizing: border-box;

    .phone {
      width: 5.16rem;
      height: 0.9rem;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0 auto;
      margin-top: 4.15rem;
      display: flex;
      justify-content: start;
      align-items: center;
      .phone_l {
        width: 1rem;
        font-size: 0.28rem;
        color: #666666;
      }
      .phone_r input[type="text"] {
        border: none;
        font-size: 0.28rem;
        outline: none;
        margin-bottom: 0px;
        color: #cccccc;
        &.input[type="text"] {
          margin-bottom: 0px;
        }
      }
    }
    .next {
      width: 2.78rem;
      height: 1.3rem;
      background-color: #c06025;
      border-radius: 20px;
      margin: 0 auto;
      margin-top: 0.57rem;
      font-size: 0.4rem;
      font-weight: normal;
      font-stretch: normal;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
