<template>
    <div>
    <div class="row justify-content-center">
<table class="table table-hover" style="width:70%">
  <thead>
    <tr>
      <th >UserId</th>
      <th>Name</th>
      <th>ManagerId</th>
      <th>Email</th>
      <th >Role</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user,index) in Users" v-bind:key="user._id">
     <th scope="row" >{{index+1}}</th>
      <td>{{user.userid}}</td>
      <td>{{user.name}}</td>
      <td>{{user.managerid}}</td>
      <td>{{user.email}}</td>
      <td>{{user.role}}</td>
        <td>
        <button class="btn btn-outline-success" @click.prevent="submit(index)">Delete</button>
        </td>
      
    </tr>
  </tbody>
</table>
</div>
</div>
</template>

<script>
  export default{
    data() {
      return {
        Users:[]
      }
    },
    methods:{
      submit(i){
        let name=this.Users[i].name;
        let userid=this.Users[i].userid;
        let managerid=this.Users[i].managerid;
        let email=this.Users[i].email;
        let role=this.Users[i].role;
        let body={name,userid,managerid,email,role}
         console.log(body);
        const token=localStorage.getItem('token');
        this.$http.post(`http://localhost:3000/api/users/DeleteUser?access_token=${token}`, body)
        .then(res => {
            console.log("inside delete");
           console.log(res.body);
        }).catch(err=>{
            console.log(err);
        })

      },
          load(){
            const token=localStorage.getItem('token');
            this.$http.get(`http://localhost:3000/api/users?access_token=${token}`).then(res=>{
              console.log(res);
              this.Users=res.body;
              console.log(this.Users)
            }).catch(err=>{
              console.log(err);
            })
          }

    },mounted(){
      this.load();
    }
  }
</script>

<style>
.form-group{
    padding-bottom: 10px;
}
.box{
    padding-top: 30px;
}
</style>