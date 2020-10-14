
export const state = () => ({
  //すべての記事
  vuexdata:null
});

export const mutations = {
  //すべての記事を保存
  setPosts(state, data) {
    state.vuexdata = data
  }
};

export const actions = {
  async getPosts({commit}) {
    const res = await this.$axios.get(`/custom/v0/test`) 
    commit('setPosts', res)  
  }
};

/*
export const getters = {
  //すべての記事
  getPosts(state) {
    return state.vuexdata;
  }
};
*/

/*
◆state = 
  Store で管理するデータ項目の定義(簡単に言うとグローバル変数)

◆getters = 
  state 内のデータの状態から算出される値（≒算出プロパティ(Vueで言うcomputedのようなもの)）
  ちょっといじって値を返す時などに便利

◆mutations = 
  state のデータを直接操作するための関数（非同期処理は定義不可）
  記述方法　=　
  関数名(state,引数){
  }

◆commit = 
  mutationsの関数の呼び出し
  記述方法　=　
  this.$store.commit('{関数名}',引数)

◆actions = 
  mutations の操作を各コンポーネントから呼び出すために使用する関数（基本的には非同期処理をする際に使用する）
  記述方法1　=
  関数名(context,引数){
    //mutations
    context.commit('関数名')
    //getters
    context.getters
    //state
    context.state
  }
  context = ストアインスタンスのメソッドやプロパティのセットと同じものを呼び出せるコンテキストオブジェクト

  記述方法2(ES6の記述)　=
  //これを使うメリットはこの関数の中では、コミットだけしか使っていないと言うことがわかる
  関数名({commit},引数){
    
  }
  
◆dispatch = 
  actionsの関数を実行 
  他のアクションを取得するためのもの
  記述方法 =

◆data = 
  初期値(動的な記述はできない)

◆computed 
  = 動的なプロパティに使用するもの
  {{}}のなかに複雑なプロパティを書くときにはメソッドではなくcomputedで記述する
  methodは再描画されるたびに実行されるのに対し、computedは参照先の値が変更されたときに実行される

◆mapGetters = 
  gettersをコンパクトに記述できる
  配列かオブジェクトで使用可能
  記述方式 = 
  import {mapGetters} from "vuex";
  export default {
    computed:{
      ...mapGetters(['関数名'])
    }
  } 

◆mapMutations = 
  mutationsをコンパクトに記述できる
  @click="click(2)"

  import {mapMutations} from "vuex";
  export default {
    methods:{
      ...mapMutations(['関数名'])
    }
  }
  
◆mapActions = 
  actionsをコンパクトに記述できる

※アクションの中からしかcommitしないと言う風にするのもあり

◆アロー関数
  = 2つの理由から、アロー関数が導入されました。1 つ目の理由は関数を短く書きたいということで、2つ目の理由は this を束縛したくない、ということです。
  =記述方式
  () =>
  引数が1つしかない場合は()を短縮できる
  (hikisuu) =>
  ↓
  hikisuu =>
  https://qiita.com/10mi8o/items/2da84ab650f4caffdeea
*/