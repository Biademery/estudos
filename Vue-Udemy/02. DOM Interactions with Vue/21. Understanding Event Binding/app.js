const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addButton(number) {
      this.counter += number;
    },
    reduceButton(number) {
      this.counter -= number;
    },
  },
});

app.mount('#events');
