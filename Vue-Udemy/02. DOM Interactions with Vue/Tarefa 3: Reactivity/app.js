const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  computed: {
    resultData() {
      if (this.result < 37) {
        return 'Not there yet';
      }

      if (this.result === 37) {
        return this.result;
      }
      return 'Too much!';
    },
  },
  methods: {
    addButton(number) {
      this.result += number;
    },
  },
  watch: {
    resultData() {
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    },
  },
});

app.mount('#assignment');
