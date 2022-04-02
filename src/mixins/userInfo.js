export default {
  data() {
    return {
      userInfo: null
    };
  },
  created() {
    console.log('mixins userInfo App.vue this:', this);
    this.getUser();
  },
  methods: {
    getUser() {
      console.log('mixins userInfo getUser run');
      new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
      }).then(() => {
        this.userInfo = { name: 'zjh' + Math.floor(Math.random() * 10), age: Math.floor(Math.random() * 100) };
      });
    }
  }
};
