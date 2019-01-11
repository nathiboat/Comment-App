<template>
  <article class="flex" >
    <div class="w-3/5 p-3 ">
      <Video></Video>
    </div>
    <div class="w-2/5 p-3">
      <template v-if="name !== ''">
        <ChatContainer></ChatContainer>
      </template>
      <template v-else>
        <NameForm></NameForm>
      </template>
    </div>

  </article>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        name: 'getName'
      })
    }
  }
</script>


