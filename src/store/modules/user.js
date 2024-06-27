import { loginAPI } from "@/apis/user";

export default {
  //命名空间让这个模块更独立
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    }

  },
  actions: {
    async login(ctx, { username, password }) {
      const res = await loginAPI({ username, password })
      console.log(res);
      ctx.commit('setToken',res.data.token)
    }

  }
}


 

//提交mutations把res.data.token存储到 调用  setToken(state, token) {state.token = token } 方法存储到vuex里面


 

  