<template>
    <div>
        <input type="text" placeholder="name" required v-model="newUser.name">
        <input type="text" placeholder="surname" required v-model="newUser.surname">
        <input type="text" placeholder="phone" required v-model="newUser.phone">
        <input type="text" placeholder="email" required v-model="newUser.email">
        <button @click="addUser()">add</button>
    </div>
</template>
<script>
;
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
                }

            }
         }
    }
</script>