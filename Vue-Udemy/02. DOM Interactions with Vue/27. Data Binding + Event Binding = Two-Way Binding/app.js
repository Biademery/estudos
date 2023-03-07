const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    resetButton() {
      this.name = '';
    },
    addButton(number) {
      this.counter += number;
    },
    reduceButton(number) {
      this.counter -= number;
    },
  },
  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      return `${this.name} Demery`;
    },
  },
});

app.mount('#events');
