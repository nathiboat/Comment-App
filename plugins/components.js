import Vue from 'vue'

import MessageBody from '../components/message-body.vue'
import Video from '../components/Video.vue'
import ChatContainer from '../components/ChatContainer'
import NameForm from '../components/NameForm'

const components = { MessageBody, Video, ChatContainer, NameForm }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
