const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addButton() {
      this.counter++;
    },
    reduceButton() {
      this.counter--;
    },
  },
});

app.mount('#events');
