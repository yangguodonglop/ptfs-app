import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state={
    showFooter: true,
    changableNum:0,
    token:'',
    Authorization: sessionStorage.getItem('Authorization') ? sessionStorage.getItem('Authorization') : ''
}
const getters={
    isshow(state){
        return state.showFooter
    },
    ischange(state){
        return state.changableNum
    }
}
const mutations={
    show(state){
        state.showFooter=true
    },
    hide(state){
        state.showFooter=false
    },
    changenum(state,num){
        state.changableNum+=num
    },

    set_token(state, token) {
    state.token = token
    sessionStorage.token = token
    },
    del_token(state) {
    state.token = ''
    sessionStorage.removeItem('token') 
    },
    changeLogin (state, user) {
        state.Authorization = user.Authorization;
        //sessionStorage.setItem('Authorization', user.Authorization);
      }
}
const actions={
    hideFooter(context){
        context.commit('hide')
    },
    showFooter(context){
        context.commit('show')
    },
    getnums(context){
        context.commit('changenum')
    }
}
const store =new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
export default store