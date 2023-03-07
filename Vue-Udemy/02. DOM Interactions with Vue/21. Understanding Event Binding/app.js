const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    addButton(number) {
      this.counter += number;
    },
    reduceButton(number) {
      this.counter -= number;
    },
    inputName(e, lastName) {
      this.name = `${e.target.value} ${lastName}`;
    },
    submitForm() {
      alert('Submitted!');
    },
  },
});

app.mount('#events');
