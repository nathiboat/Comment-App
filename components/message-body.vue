<template>
  <div class="p-1">
    <div class="flex flex-col items-center p-2 border border-grey-darker rounded message-body">
      <div class="flex flex-row w-full">
        <div class="w-16 relative">
          <span class="h-full inline-block align-middle"></span>
          <img class="w-1/2 mx-auto rounded-full align-middle" src="/src/images/default-user.png">
        </div>
        <div class="flex flex-col w-full p-1">
          <div class="flex-row flex">
            <p class="w-1/2 text-black leading-none mb-3 comment-owner">{{ name }}</p>
            <p class="w-1/2 text-grey-dark text-sm text-right">Aug 18 12:45 pm</p>
          </div>
          <div class="bg-grey-lightest rounded p-2 comment-text">
            <p>{{ message }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: ['message', 'name'],
    data() {
       return {

       }
    }
  }
</script>
