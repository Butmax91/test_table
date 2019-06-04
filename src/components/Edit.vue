<template>
    <div>
        <router-link to="/">main</router-link>
        <AddNewUser/>
        <AddJsonData/>
        <table>
            <thead>
            <tr>
                <th>name</th>
                <th>surname</th>
                <th>phone</th>
                <th>email</th>
                <th>controls</th>
            </tr>
            </thead>
            <tbody>
                <EditTableItem v-for="(item,index) in getData" :key="`w${index}`" :item="item" :index="index"/>
            </tbody>
        </table>



    </div>
</template>
<script>
    import {  mapGetters } from 'vuex';
    import EditTableItem from './EditTableItem.vue'
    import AddNewUser from './AddNewUser.vue'
    import AddJsonData from './AddJsonData.vue'
    export default {
        components:{
            EditTableItem,
            AddNewUser,
            AddJsonData
        },

        computed : {
            ...mapGetters(['getData']),
        },

    }
</script>