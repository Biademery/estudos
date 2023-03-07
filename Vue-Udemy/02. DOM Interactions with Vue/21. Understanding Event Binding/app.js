const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    addButton(number) {
      this.counter += number;
    },
    reduceButton(number) {
      this.counter -= number;
    },
    inputName(e, lastName) {
      this.name = `${e.target.value} ${lastName}`;
    },
  },
});

app.mount('#events');
