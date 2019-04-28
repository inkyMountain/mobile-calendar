export default {
    name: 'app',
    components: {
      
    },
    methods: {
      test(event){
        console.log(event);
      }
    },
    mounted(){
      let children = document.querySelector('#app').children
      console.log(children);
    }
  }