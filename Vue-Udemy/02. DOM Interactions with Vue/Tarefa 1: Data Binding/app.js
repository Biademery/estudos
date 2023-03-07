const app = Vue.createApp({
  data() {
    return {
      name: 'Bia Demery',
      age: 23,
      imageLink:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    };
  },
  methods: {
    randomNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount('#assignment');
