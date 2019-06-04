<template>
    <div>
        <input type="text" v-model="path">
        <button @click="addJson()">add</button>
    </div>
</template>
<script>
    //import data from '../data'
    export default {
        data(){
            return {
                path:"./data",
            }
        },
        methods : {
            addJson(){
                this.$store.dispatch('getJsonData',this.path)
            }
        }
    }
</script>