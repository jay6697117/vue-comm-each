<template>
  <div>
    <div>FatherComp counterObj: {{ counterObj }}</div>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <br />
    <br />
    <SonComp />
  </div>
</template>

<script>
import SonComp from './SonComp';
export default {
  name: 'FatherComp',
  components: {
    SonComp
  },
  data() {
    return {
      counterObj: {
        counter: 0
      }
    };
  },
  // provide FatherComp
  provide() {
    return {
      nameObj: this.counterObj
    };
  },
  methods: {
    add() {
      this.counterObj.counter += 1;
    },
    sub() {
      this.counterObj.counter -= 1;
    }
  },
  mounted() {
    console.log('FatherComp this :>> ', this);
    console.log('FatherComp this.$options.data :>> ', this.$options.data);
    console.log('FatherComp this.$options.provide :>> ', this.$options.provide);
  }
};
</script>

<style lang="less" scoped></style>
