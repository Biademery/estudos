const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      // fullname: '',
      lastName: '',
    };
  },
  methods: {
    resetButton() {
      this.name = '';
      this.lastName = '';
    },
    addButton(number) {
      this.counter += number;
    },
    reduceButton(number) {
      this.counter -= number;
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    },
    // whenever name change this watch method will reexecut
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = `${value} ${this.lastName}`;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = `${this.name} ${value}`;
    //   }
    // },
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return `${this.name} ${this.lastName}`;
    },
  },
});

app.mount('#events');
