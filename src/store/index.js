import { createStore } from 'vuex'

export default createStore({

  state: {
    users: [],
    clickedUser: {}
  },

  getters: {

    getUsers:state => {
      return state.users
    },

    getClickedUser: state => {
      return state.clickedUser
    }

  },

  mutations: {

    setUsers: (state, usersData) => {
      state.users = usersData
    },

    setClickedUser: (state, payload) => {
      state.clickedUser = payload
    },
    resetClickedUser: state => {
      state.clickedUser = {}
    }

  },

  actions: {

    setUsers: context => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => context.commit('setUsers', data))
    .catch(err => console.log(err.message))
    },

    setClickedUser: (context, payload) => {
      context.commit('setClickedUser', payload)
    },
    resetClickedUser: context => {
      context.commit('resetClickedUser')
    }

  },

  modules: {
  }
})
