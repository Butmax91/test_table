<template>
    <div class="container">
        <p>add user</p>
        <div class="add__user__container">
            <input type="text" placeholder="name" required v-model="newUser.name">
            <input type="text" placeholder="surname" required v-model="newUser.surname">
            <input type="tel" placeholder="phone" required v-model="newUser.phone">
            <input type="email" placeholder="email" required v-model="newUser.email">
            <button @click="addUser()">add</button>
        </div>
    </div>
</template>
<script>

    export default {
        data(){
            return {
                newUser : {
                    name: "",
                    surname: "",
                    phone: "",
                    email: "",}

            }
        },
        methods : {
            addUser(){
                if (this.newUser.name  && this.newUser.surname && this.newUser.phone && this.newUser.email) {
                    this.$store.commit('addUser',this.newUser);
                    this.newUser.name = '';
                    this.newUser.surname = '';
                    this.newUser.phone = '';
                    this.newUser.email = '';
                }else{
                    alert('fill all of the fields')
                }

            }
         }
    }
</script>
<style lang="scss" scoped>
    .container{
        width: 300px;
        display: inline-block;
    }
    p{
        text-transform: capitalize;
        font-size: 24px;
        padding-left: 5px;
        font-weight: bold;
    }
    .add__user__container{
        margin: 20px 5px;
        max-width: 300px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        input{
            box-sizing: border-box;
            display: block;
            padding: 8px;
            width: 300px;
            margin-bottom: 5px;
        }
    }
</style>