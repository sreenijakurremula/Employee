<template>
  <div class="container box">
      <form>
          <div class="form-group">
            <strong><h4><u>Login Page </u></h4></strong>
            <label for="email">Email address</label>
            <input type="email" class="form-control" name="email" id="email" v-model="employee.email" placeholder="Enter email" autocomplete="off">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="password" id="password" v-model="employee.password" placeholder="Password" autocomplete="off">
          </div>
          <div v-if="ispasswordtrue">
              <p style="color:red;">Incorrect email or password,Please try again!</p>
          </div>
          <br>
          <button type="submit" @click.prevent="login" class="btn btn-primary">Submit</button>
          <br>
      </form>
  </div>
</template>

<script>   
  export default{
      data()
      {
          return {
              employee: {
                  email: '',
                  password: '',
              },
              ispasswordtrue: false
          }
      },
      methods:{
          login(){
            //console.log(this.employee);
              this.$http.post("http://localhost:3000/api/users/login", this.employee)
                  .then(res => {
                    console.log(res.body.Username);
                    // const body={"id":res.body.userid,
                    // "token":res.body.id};
                    localStorage.setItem('token',res.body.id);
                    localStorage.setItem('id',res.body.userid);
                    //const token=res.body.id;
                    const userid=res.body.userid;
                    // console.log("successfully logged in");
                    // this.$router.push('/dashboard');
                    this.$http.get(`http://localhost:3000/api/users/${userid}`,{id:userid}).then(res=>{
                      console.log(res.body);
                      localStorage.setItem('Username',res.body.name);
                      console.log("inside login");
                      //this.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                      if(res.body.Role=='employee'){
                        this.$router.push('/Employeedashboard');
                      }else if(res.body.Role=='manager'){
                        this.$router.push('/Managerdashboard');
                      }else{
                        this.$router.push('/Dashboard');
                      }


                    }).catch(err=>{
                      console.log(err);
                    })
                  }).catch(error=>{
                    this.ispasswordtrue = true,
                    console.log(error);
                           this.$router.push('/');
                          setTimeout(this.clearPassword,1500)
                  })
          },
          clearPassword(){
            this.employee.email = '',
              this.employee.password = '',
              this.ispasswordtrue = false
          }
         
      }
  }
</script>

<style>
#email,
#password{
  width: 400px;
}
.box{
  padding-top: 50px;
}
</style>