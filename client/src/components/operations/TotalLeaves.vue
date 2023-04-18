<template>
  <div>
    <div class="row justify-content-center">
<table class="table table-hover" style="width:70%">
  <thead>
    <tr>
      <th >userid</th>
      <th>startdate</th>
      <th>Enddate</th>
      <th>Reason</th>
      <th >Available leaves</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(leave,index) in Leaves" v-bind:key="leave._id">
     <th scope="row" >{{index+1}}</th>
     <td>{{leave.userid}}</td>
     <td>{{ leave.startdate}}</td>
     <td>{{ leave.enddate }}</td>
     <td>{{ leave.reason }}</td>
      <td>{{leave.noleaves}}</td>
     

        <td v-if="leave.AssignedTo.includes(name)">
        <button class="btn btn-outline-success" @click.prevent="returnr(index)">Return</button>
        </td>
        <div v-else>
          <td v-if="leave.noleaves<37">
          <button class="btn btn-outline-success" @click.prevent="request(index)">Request</button>
          </td>
        </div>
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
            name:'',
            noleave:'',
              Leaves: [
                // {"title":"empty"}
              ]
          }
      },
    methods:{
        
          leave(){
            const token=localStorage.getItem('token');
            //console.log(token);
            this.name=localStorage.getItem('name');
            this.$http.get(`http://localhost:3000/api/Leaves?access_token=${token}`).then(res => {
                    this.Leaves=res.body;
                    console.log(this.Leaves);

                  }).catch(err=>{
                    console.log(err);
                  });
          },TotalCount(){
            const token=localStorage.getItem('token');
            this.$http.get(`http://localhost:3000/api/Leaves/noleaves?access_token=${token}`).then(res=>{
              this.noleaves=res.body.Message;
              console.log(this.noleaves);
            }).catch(err=>{
              console.log(err);
            })
          },request(i){
            console.log(i);
            // const token=localStorage.getItem('token');
            console.log
            let leave=this.Leaves[i].name;
            let userid=this.userid;
            let body={leave,userid};
            console.log(body);
            const token=localStorage.getItem('token');
            this.$http.post(`http://localhost:3000/api/Notifies/Request?access_token=${token}`,body).then(res=>{
              console.log(res);
            }).catch(err=>{
              console.log(err);
            })
          },returnr(i){
            console.log(i);
            let leave=this.Leaves[i].name;
            let userid=this.userid;
            let body={leave,userid};
            console.log(body);
            const token=localStorage.getItem('token');
            this.$http.post(`http://localhost:3000/api/Notifies/ReturnBook?access_token=${token}`,body).then(res=>{
              console.log(res);
              window.location.reload();
            }).catch(err=>{
              console.log(err);
            })
          }
         
      },
      mounted() {
    this.leave();
    this.TotalCount();
  },
  }
    
    </script>
    
    
    
    <style>
    
    
    </style>