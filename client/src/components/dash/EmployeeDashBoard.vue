<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 button-bar">
                <button @click="selectedComponent = 'appLeaves'">Home</button>
                <button @click="selectedComponent = 'applog'">Logout</button>
                <hr>
                <!--<app-quote>-->
                    <!--<h2 slot="title">{{ quoteTitle }}</h2>-->
                    <!--<p>A wonderful Quote</p>-->
                <!--</app-quote>-->
            </div>
            <p>welcome {{ this.name}}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
        </div>
    </div>
</template>

<script>
    import Leaves from '../operations/TotalLeaves.vue';
    import logs from '../operations/LogOut.vue';
    export default {
        data: function() {
            return {
                username:'',
                selectedComponent: 'appLeaves'
            }
        },
        methods:{
            render(){
                this.name=localStorage.getItem('name');
            }
        },
        components: {
            appLeaves: Leaves,
            applog:logs
        },mounted(){
            this.render();
        }
    }
</script>

<style scoped>

.button-bar {
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
}
</style>