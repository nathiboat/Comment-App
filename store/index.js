import Vuex from 'vuex'
import {db} from '../plugins/firebase.js'

export const state = () => ({
  messages: {},
  name: ''
})

export const getters = {
  getMessages(state) {
    return state.messages
  },
  getName(state) {
    return state.name
  }
}

export const mutations = {
  setMessages: function (state, messages) {
    state.messages = messages
  },
  setName (state, name) {
    state.name = name
  }
}

export const actions = {
  requestMessages ({ commit }) {
    db.ref('/chat/messages').once('value')
      .then((data) => {
        const messages = data.val()
        commit('setMessages', messages)
      })
  },
  requestSendMessage ({ commit, dispatch }, { payload }) {
    db.ref('/chat/').child('/messages/').push(payload)
    dispatch('requestMessages')
  },
  init ({ commit }) {
    let messagesRef = db.ref('chat/messages/');

    messagesRef.on('value',(snapshot) => {
      commit('setMessages', snapshot.val());


    });
  },
};

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

  })
}

export default createStore
