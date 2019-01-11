<template>
  <form class="w-full h-86 bg-grey-light relative p-24 flex flex-row w-full" id="name-form">
    <div class="h-full inline-block align-middle"></div>
    <div class="align-middle">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="name-input">
            Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-pink-dark"
            id="name-input" type="text" v-model="name">
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            id="commit-button"
            class="shadow bg-pink-dark hover:bg-pink-darker focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            @click="submitName"
            type="button">
            Start comment
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>

  import { mapMutations } from 'vuex'

  export default {
    data () {
      return {
        name: ''
      }
    },
    methods:{
      ...mapMutations({
        setName: 'setName'
      }),
      submitName () {
        this.setName(this.name)
      }
    }
  }
</script>
