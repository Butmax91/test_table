<template>
    <tr >
        <td v-for="item in this.data" >{{item}}</td>
        <td class="controls">
            <button :index="this.index" @click="deleteUser(index)">delete</button>
            <router-link to="/edit" tag="button">edit</router-link>
        </td>
    </tr>
</template>
<script>
    export default {
        props: ['data','index'],
        methods:{
            deleteUser(user){
                this.$store.commit('deleteUser',user)
            }
        }
    }
</script>
<style lang="scss" scoped>
    td{
        border: 1px solid #ddd;
        padding: 8px;
        &:last-child{
            display: flex;
            justify-content: space-around;
        }
    }
    button{
        cursor:pointer;
    }
</style>