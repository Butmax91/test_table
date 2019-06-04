<template>
    <div class="textArea__container">
        <h4>Input valid json code</h4>
        <textarea v-model="area" placeholder="input json"></textarea>
        <button @click="addAreaData">add</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                area:''
            }

        },
        methods : {
            addAreaData(){
                this.$store.commit('adJsonData',this.area)
                this.area = '';
            }
        }
    }
</script>
<style lang="scss" scoped>
    h4{
        margin: 24px 0;
        font-size: 24px;
    }
    .textArea__container{
        display: flex;
        flex-direction: column;
    }
    textarea{
       width: 300px;
        height: 300px;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom: 5px;
    }


</style>