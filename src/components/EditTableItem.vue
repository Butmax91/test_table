<template>
    <tr>
        <td>
            <input type="text"  v-model="itemData.name">
        </td>
        <td>
            <input type="text"  v-model="itemData.surname" >
        </td>
        <td>
            <input type="text"  v-model="itemData.phone" >
        </td>
        <td>
            <input type="text"  v-model="itemData.email" >
        </td>
        <td>
            <button @click="some()">eddit</button>
        </td>

    </tr>
</template>
<script>
    export default {
        props : ['item','index'],
        data(){
            return {
                itemData : {
                    name:this.item.name,
                    surname:this.item.surname,
                    phone:this.item.phone,
                    email:this.item.email,
                }

            }
        },
        methods : {
            some(){
                if(this.itemData.name && this.itemData.surname && this.itemData.phone && this.itemData.email){
                    this.$store.commit('editUser',{index:this.index,data:this.itemData})

                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    td{
        border: 1px solid #ddd;
        &:last-child{
            text-align: center;
        }
    }
    input{
        display: block;
        box-sizing: border-box;
        border:none;
        background: none;
        width: 100%;
        height: 100%;
        padding: 8px;
    }

</style>