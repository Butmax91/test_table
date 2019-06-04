<template>
    <div class="table__container">
        <router-link to="/edit" tag="button">addUser</router-link>
        <table>
            <thead v-if=" getData.length">
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
<style lang="scss">

</style>