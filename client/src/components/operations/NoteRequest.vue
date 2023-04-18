<template>
   <div>
      <div class="row justify-content-center">
  <table class="table table-hover" style="width:70%">
    <thead>
      <tr>
        <th>Name</th>
        <th >UserId</th>
      <th>ManagerId</th>
      <th>Start Date</th>
      <th>End Date</th>
      <th>Reason</th>
      <th>status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user,index) in Note" v-bind:key="user._id">
       <th scope="row" >{{index+1}}</th>
        <td>{{user.name}}</td>
        <td>{{user.userid}}</td>
        <td>{{user.managerid}}</td>
        <td>{{user.startdate}}</td>
        <td>{{user.enddate}}</td>
        <td>{{user.reason}}</td>
        <td>{{user.status}}</td>
        <td>
      <button class="btn btn-outline-success" @click.prevent="Accept(index)">Accept</button>
      </td>
      <td>
      <button class="btn btn-outline-success" @click.prevent="Reject(index)">Reject</button>
      </td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
</template>
    
    
    <script>
    export default{
      data()
      {
          return {
              Note: [
                {"userid":"empty"}
              ]
          }
      },
    methods:{
        
          note(){
            const token=localStorage.getItem('token');
            this.$http.get(`http://localhost:3000/api/Notifies?access_token=${token}`)
                  .then(res => {
                    this.Note=res.body;
                    console.log(this.users);

                  }).catch(err=>{
                    console.log(err);
                  });
          },
          Accept(i){
            let user=this.Note[i].user;
            let RequestedBy=this.Note[i].RequestedBy;
            let body={user,RequestedBy};
            console.log(body);
            const token=localStorage.getItem('token');
            this.$http.post(`http://localhost:3000/api/Notifies/VerifyRequest?access_token=${token}`,body).then(res=>{
              console.log(res);
              window.location.reload();
            }).catch(err=>{
              console.log(err);
            })

          },
          Reject(i){
            //http://localhost:3000/api/Notifies/DeleteNote?
            let user=this.Note[i].user;
            let RequestedBy=this.Note[i].RequestedBy;
            let body={user,RequestedBy};
            console.log(body);
            const token=localStorage.getItem('token');
            this.$http.post(`http://localhost:3000/api/Notifies/DeleteNote?access_token=${token}`,body).then(res=>{
              console.log(res);1
              window.location.reload();}).catch(err=>{
              console.log(err);
            })
          }
         
      },
      created() {
    this.note();
  },
  }
    
    </script>

    
    <style>
    
    
    </style>