Vue.createApp({
    data() {
      return {
        infos: null,
        active: false,
        clicked: false,
        styles: {
        'color': localStorage.getItem('storedColor'),
        'background-color': localStorage.getItem('storedBgColor'),
      },
        font:{
          'font-size': localStorage.getItem('storedFontSize')
        },
    }

  },

  methods: {
    storeFontSize16: function(){
      const text =
      document.querySelector('#text')
      text.style.fontSize = "16px";
      var storeFont = text.style.fontSize;
      localStorage.setItem('storedFontSize', storeFont)
    },
    storeFontSize18: function(){
      const text =
      document.querySelector('#text')
      text.style.fontSize = "18px";
      var storeFont = text.style.fontSize;
      localStorage.setItem('storedFontSize', storeFont)
    },
    storeFontSize20: function(){
      const text =
      document.querySelector('#text')
      text.style.fontSize = "20px";
      var storeFont = text.style.fontSize;
      localStorage.setItem('storedFontSize', storeFont)
    },
    storeFontSize22: function(){
      const text =
      document.querySelector('#text')
      text.style.fontSize = "22px";
      var storeFont = text.style.fontSize;
      localStorage.setItem('storedFontSize', storeFont)
    },

          changeColorWhite: function () {
              const box =
                document.querySelector('#box')

              box.style.background = "#ffffff"
                box.style.color = "#000000"
                var userColor = box.style.color; //Add the text 'item1' to nameArr
                var userBgColor = box.style.background;
                localStorage.setItem('storedColor', userColor);
                localStorage.setItem('storedBgColor', userBgColor);
          },
          changeColorBlack: function () {
              const box =
                document.querySelector('#box')

              box.style.background = "#000000"
              box.style.color = "#ffffff"
              var userBgColor = box.style.background;
              var userColor = box.style.color;
              localStorage.setItem('storedColor', userColor);
              localStorage.setItem('storedBgColor', userBgColor);
          },
          changeColorFul: function () {
              const box =
                document.querySelector('#box')

              box.style.background = "#FFFACD"
              box.style.color = "#4B0082"
              var userBgColor = box.style.background;
              var userColor = box.style.color;
              localStorage.setItem('storedColor', userColor);
              localStorage.setItem('storedBgColor', userBgColor);
          },
          changeColorBright: function () {
              const box =
                document.querySelector('#box')

              box.style.background = "#FFFF00"
              box.style.color = "#EE82EE"
              var userBgColor = box.style.background;
              var userColor = box.style.color;
              localStorage.setItem('storedColor', userColor);
              localStorage.setItem('storedBgColor', userBgColor);
          },
          clearColor: function(){
            localStorage.removeItem('storedColor');
            localStorage.removeItem('storedBgColor');
            localStorage.removeItem('storedFontSize');
            const box =
              document.querySelector('#box')
              const text =
              document.querySelector('#text')
            box.style.background = "#ffffff"
            box.style.color = "#000000"
            text.style.fontSize = "16px";
          }
        },
  created() {
    // Simple GET request using fetch
    fetch("dbtext.php")
      .then(response => response.json())
      .then(data => (this.infos = data));
  },
  updated() {
    let present = performance.now();
    localStorage.setItem("present", present);
    const homeBtn = document.querySelector('#logo-menu-landscape');
    homeBtn.click();
  }
}).mount('#app')
