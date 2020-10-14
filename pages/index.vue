<template>
  <div class="container">
    <!--
    <pre>{{posts[0].id}}</pre><br>
    -->
    <pre>{{vuexposts[0].id}}</pre>
    <!--
    <nuxt-link :to="'news/' + vuexposts[0].id">
      <p>ああ</p>
    </nuxt-link>
    -->
  </div>
</template>

<script>

export default {
    data(){
      return{
        //posts:'',
        vuexposts: {}
      }
    },
    //通常のデータ取得
    /*
    async asyncData({params,$axios}) {
      const testdata = await $axios.get(`/custom/v0/test`)
      return { 
        posts: testdata.data 
      }
    },
    */
    //Vuexを使用したやり方
    //fetch = Vuex storeにデータを格納することを目的として使用されます
    async mounted() { 
      await this.$store.dispatch('getPosts')
      this.vuexposts = this.$store.state.vuexdata.data
    }
  }
</script>