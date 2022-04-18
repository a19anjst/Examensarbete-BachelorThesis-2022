Vue.createApp({
    data() {
      return {
        infos: null
    }
  },
  created() {
    // Simple GET request using fetch
    fetch("dbtext.php")
      .then(response => response.json())
      .then(data => (this.infos = data));
  }
  }).mount('#app')
