<template>
  <div>
    <h2 style="color:red;">B组件:{{ msg }}</h2>
    <ComptA ref="ComptA" />
  </div>
</template>

<script>
//引入bus文件
// import bus from '../utils/bus.js';
import ComptA from './ComptA.vue';
export default {
  data() {
    return {
      msg: '默认内容'
    };
  },
  components: { ComptA },
  created() {
    // 监听派发的事件
    // bus.$on('eventA', this.logFn);
    // bus.$on('eventA', res => {
    //   // console.log('res :>> ', res);
    //   this.msg = res;
    //   this.logFn(res)
    // });
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.ComptA.$on('eventA', res => {
        // console.log('res :>> ', res);
        this.msg = res;
        this.logFn(res);
      });
    });
  },
  methods: {
    logFn(param) {
      console.log(`logFn param:`, param);
    }
  }
};
</script>

<style lang="less" scoped></style>
