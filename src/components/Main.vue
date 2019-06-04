<template>
    <div >
        <h1>Data table</h1>
        <p v-if="!getData.length">Have no data yet...</p>
        <router-link to="/edit" tag="button">addUser</router-link>
        <table v-if=" getData.length">
            <thead >
                <tr>
                    <th>name</th>
                    <th>surname</th>
                    <th>phone</th>
                    <th>email</th>
                    <th>controls</th>
                </tr>

            </thead>
            <tbody>
                <TableItem v-for="(item,index) in getData" :key="`q${index}`":index="index" :data="item"/>
            </tbody>
            <tbody>

            </tbody>
        </table>


    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex';
    import TableItem from './TableItem'
    export default {
        name: 'Table',
        components:{
            TableItem
        },
        computed : {
            ...mapGetters(['getData']),
        },
        methods:{
            delete(){
                this.$store.commit()
            }
        }
    }
</script>
<style lang="scss" scoped>
    h1{
        text-align: center;
    }
    p{
        text-align: center;
        font-size: 24px;
    }
    button{
        padding: 5px 10px;
        cursor:pointer;
        display: block;
        margin-left: 5px;

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