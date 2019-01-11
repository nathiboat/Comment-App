<template>
  <div class="w-full h-full bg-grey-light relative" id="message-container">
    <div id="scroll-to-bottom" class="h-86 overflow-y-scroll">
      <div class="w-full ">
        <div>
          <message-body :message="message.message" :key="index" :name="message.name" v-for="(message, index) in messages"></message-body>
        </div>
      </div>
    </div>
    <form class="w-full bg-grey p-2">
      <div class="flex items-center border-b border-b-2 border-pink-dark py-2">
        <input class="appearance-none bg-transparent border-none w-full text-grey-darker py-1 px-2 leading-tight focus:outline-none"
               type="text"
               placeholder="Say something"
               v-model="input"
               id="message-input"
        >
        <button class="flex-no-shrink bg-pink-dark hover:bg-pink-darkest border-pink-dark hover:border-pink-darkest text-sm border-4 text-white py-1 px-2 rounded" type="button"
                @click="addMessage"
                id="send-message-button"
        >
          Send
        </button>
      </div>
    </form>
  </div>

</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  export default {
    data(){
      return {
        input: ''
      }
    },
    computed: {
      ...mapGetters({
        messages: 'getMessages',
        name: 'getName'
      })
    },
    methods:{
      ...mapActions({
        requestMessages: 'requestMessages',
        requestSendMessage: 'requestSendMessage',
        init: 'init'
      }),
      ...mapMutations({
        setMessages: 'setMessages'
      }),
      scrollBottom(){
        let container = document.querySelector("#scroll-to-bottom")
        let scrollH = container.scrollHeight
        container.scrollTop = scrollH
      },
      updateScroll(){
        var element = document.getElementById("yourDivID");
        element.scrollTop = element.scrollHeight;
      },
      addMessage(){
        this.requestSendMessage({
          payload:{name: this.name, message: this.input}
        })
        this.input = ''
        this.scrollBottom()
      }
    },
    mounted(){
      this.scrollBottom()
    },
    created() {
      this.requestMessages()
      this.init()
    }
  }
</script>
