<template>
  <div class="son-comp-style">
    <div>SonComp nameObj: {{ nameObj }}</div>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  name: 'SonComp',
  // inject: ['nameObj'],
  inject: {
    nameObj: {
      from: 'nameObj',
      default: () => ({})
    }
  },
  data() {
    return {
      // nameObj: 'lalala SonComp'
    };
  },
  computed: {
    appInst() {
      let parent = this.$parent;
      while (parent.$options.name !== 'App') {
        parent = parent.$parent;
      }
      return parent;
    },
    aboutInst() {
      let parent = this.$parent;
      while (parent.$options.name !== 'About') {
        parent = parent.$parent;
      }
      return parent;
    }
  },
  methods: {
    add() {
      this.nameObj.counter += 1;
    },
    sub() {
      this.nameObj.counter -= 1;
    }
  },
  mounted() {
    console.log('SonComp this :>> ', this);
    console.log('SonComp this.nameObj :>> ', this.nameObj);
    console.log('SonComp this.$options.data :>> ', this.$options.data);
    console.log('SonComp this.$options.provide :>> ', this.$options.provide);
    console.log('-------------------------111-----------------------');
    console.log('SonComp mounted appInst:', `组件名: ${this.appInst.$options.name} -- `,this.appInst);
    console.log('SonComp mounted aboutInst:', `组件名: ${this.aboutInst.$options.name} -- `,this.aboutInst);
    console.log('-------------------------111-----------------------');
  }
};
</script>

<style lang="less" scoped>
.son-comp-style {
  font-size: 30px;
  color: blue;
  background-color: #ccc;
}
</style>
