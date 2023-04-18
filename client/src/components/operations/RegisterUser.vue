<template>
    <div class="container box">
        <form>
            <strong><h3><u>Register</u></h3></strong>
            <div class="form-row display">
              <div class="form-group col-md-5">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" v-model="User.name" placeholder="name" autocomplete="off">
              </div>
              <div class="form-group col-md-5">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" name="email" v-model="User.name" placeholder="email" autocomplete="off">
              </div>
              <div class="form-group col-md-5">
                <label for="userid">Userid</label>
                <input type="string" class="form-control" id="userid" name="userid" v-model="User.userid" placeholder="userid" autocomplete="off">
              </div>
              <div class="form-group col-md-5">
                <label for="managerid">Managerid</label>
                <input type="string" class="form-control" id="managerid" name="managerid" v-model="User.userid" placeholder="userid" autocomplete="off">
              </div>
              <div class="form-group col-md-5">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password" v-model="User.password" placeholder="Password" autocomplete="off">
              </div>
              <div class="form-group col-md-5">
                <label for="text">Role</label>
                <br>
                <select class="custom-select my-1 mr-sm-2" id="Role" name="Role" v-model="User.Role">
                    <option value="Employee">Employee</option>
                    <option value="Manager">Manager</option>
                    <option value="Admin" selected>Admin</option>
                 </select>
              </div>
            </div>
            <button type="submit" @click.prevent="submit" class="btn btn-primary">Sign up</button>
          </form>
          <div v-if="register">
              <p style="color:green;">successfully created!</p>
          </div>
          <div v-if="registerf">
            <p style="color:red;">Try Again!</p>
          </div>
    </div>
</template>

<script>
  export default{
    data() {
      return {
        register:false,
        registerf:false,
        User:{
          name:'',
          email:'',
          userid:'',
          managerid:'',
          password:'',
          role:''
        }
      }
    },
    methods:{
      submit(){
        console.log(this.User);
        this.$http.post('http://localhost:3000/api/users?', this.User)
        .then(res => {
          console.log(res);
          this.register=true;
          setTimeout(this.clearPassword,1500)
          window.location.reload();

        }, err => {
          console.log(err);
          this.registerf=true;
          setTimeout(this.clearPassword,1500)
        })

      },
      clearPassword(){
            this.User.name = '',
              this.User.userid = '',
              this.User.managerid='',
              this.User.email='',
              this.User.role='',
              //this.ispasswordtrue = false,
              this.register=false,
              this.registerf=false
          }

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