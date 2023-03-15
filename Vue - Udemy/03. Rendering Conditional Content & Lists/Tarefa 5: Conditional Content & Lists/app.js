const app = Vue.createApp({
  data() {
    return {
      inputValue: '',
      tasks: [],
      taskListIsVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputValue);
      this.inputValue = '';
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    shownOrHidden() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
});

app.mount('#assignment');
