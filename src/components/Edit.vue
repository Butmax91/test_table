<template>
    <div >
        <router-link to="/"> Bacck to main page</router-link>
        <table v-if="getData.length">
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
        <div class="itemContainer">
            <AddNewUser/>
            <AddJsonDataText/>
            <AddJsonData/>
        </div>


    </div>
</template>
<script>
    import {  mapGetters } from 'vuex';
    import EditTableItem from './EditTableItem.vue'
    import AddNewUser from './AddNewUser.vue'
    import AddJsonData from './AddJsonData.vue'
    import AddJsonDataText from './AddJsonDataText.vue'
    export default {
        components:{
            EditTableItem,
            AddNewUser,
            AddJsonData,
            AddJsonDataText
        },

        computed : {
            ...mapGetters(['getData']),
        },

    }
</script>
<style lang="scss" scoped>
    a{
        display: block;
        color: #3799ff;
        text-decoration: none;
        margin: 20px 5px;
        font-size: 24px;
        text-align: center;
        &:visited{
             color: #3799ff;
        }
    }
    .itemContainer{
        max-width: 1024px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    table{
        border-collapse: collapse;
        width: 100%;
        margin: 5px;
        tbody tr:nth-child(odd) {
            background-color: #f9f9f9;
        }
        th {
            text-align: left;
            border: 1px solid #ddd;
            border-bottom: 3px solid #ddd;
            position: relative;
            cursor: pointer;
        }
        th {
            padding: 8px;
        }
    }
</style>