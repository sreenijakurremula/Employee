<template>
    <div>
    <h2>Employee:</h2>
    <ul>
      <li v-for="(item, index) in Myuser" :key="index">
      <h4>{{item.name}}</h4>
      <p>{{item.Noleaves }}</p>
      </li>
    </ul>
  </div>
</template>
    
    
    <script>
    export default{
      data()
      {
          return {
              Myuser: [
                {"name":"empty"}
              ]
          }
      },
    methods:{
        
          book(){
            const token=localStorage.getItem('token');
            //console.log(token);
            this.$http.get(`http://localhost:3000/api/Myuser?access_token=${token}`).then(res => {
                    this.Myuser=res.body;
                    console.log(this.Myuser);

                  }).catch(err=>{
                    console.log(err);
                  });
          }
         
      },
      mounted() {
    this.book();
  },
  }
    
    </script>
    
    
    
    <style>
    
    
    </style>