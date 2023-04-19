<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 button-bar">
                <button @click="selectedComponent = 'appLeaves'">Home</button>
                <button @click="selectedComponent = 'appNotify'">Notification</button>
                <button @click="selectedComponent = 'appRegister'">Register</button>
                <button @click="selectedComponent = 'applog'">Logout</button>
                <hr>
            </div>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
        </div>
    </div>
</template>

<script>
    import Leaves from '../operations/UserLeaves.vue';
    import Notify from '../operations/NoteRequest.vue';
    import Register from '../operations/RegisterUser.vue';
    import logs from '../operations/LogOut.vue';
    export default {
        data: function() {
            return {
                selectedComponent: 'appLeaves'
            }
        },
        components: {
            appLeaves: Leaves,
            appNotify: Notify,
            applog:logs,
            appRegister: Register
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