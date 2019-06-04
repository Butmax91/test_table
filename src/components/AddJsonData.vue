<template>
    <div class="input__container">
        <h4>Сhoose File</h4>
        <input type="file" @change="some" accept=".json " style="color: transparent">
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
            some(ev){
                const file = ev.target.files[0];
                const reader = new FileReader();
                reader.onload = e => console.log(e);

                reader.readAsText(file);
                reader.onload=()=>{
                    this.ololo = reader.result;
                    this.$store.commit('adJsonData',this.ololo)
                }
            },
        }
    }
</script>
<style lang="scss" scoped>
    h4{
        margin: 24px 0;
        font-size: 24px;
    }
    .input__container{
        width: 150px
    }
    input{
        display: block;
        width: 150px;
        height:28px;
        cursor: pointer;
        &:focus{
            outline: none;
        }
    }
    input::-webkit-file-upload-button{
        opacity: 0;
        box-sizing: border-box;
    }
    input::before {
        content: 'Select JSON files';
        color: #5e5e5e !important;
        display: block;
        border: 1px solid darkgrey;
        border-radius: 3px;
        padding: 5px 8px;
        outline: none;
        white-space: nowrap;
        cursor: pointer;
        text-shadow: 1px 1px #fff;
        font-weight: 700;
        font-size: 10pt;
        background:   #f9f9f9  ;
    }
    input:hover::before {
        border-color: darkgrey ;
    }
    input:active::before{
        border-color: darkgrey ;
    }
</style>