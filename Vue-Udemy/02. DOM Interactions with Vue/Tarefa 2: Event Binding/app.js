const app = Vue.createApp({
  data() {
    return {
      inputText: '',
      inputTextEnter: '',
    };
  },
  methods: {
    showAlert() {
      alert('You clicked the button!');
    },
    userInput(event) {
      this.inputText = event.target.value;
    },
    enterInput(event) {
      this.inputTextEnter = event.target.value;
    },
  },
});

app.mount('#assignment');
