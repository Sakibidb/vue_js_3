<template>
<div class="box" v-on:click="foodclick">
    <h1>{{ message }}</h1>
    <h2>{{  }}</h2>
    <span>{{ clicks }}</span>
</div>
</template>


<script>
export default{
    data(){
        return{
            message: "Our Food Items",
            clicks:0
        }
    },

    props:[
        'foodName',
        'foodDetail'
    ],
    methods:{
        foodclick(){
            this.clicks++
        }
    }
}
</script>

<style>
    .box{
        height: 200px;
        width: 400px;
        background-color: blanchedalmond;
        text-align: center;
        padding-top: 65px;
        font-size: larger;
    }
</style>