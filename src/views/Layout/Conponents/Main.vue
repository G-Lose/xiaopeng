<template>
    <div id="main-wrap">
        main
        <router-view />
    </div>
</template>
<script>
export default {
    name:"Main"
}
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss" ;
#main-wrap{
    position: fixed;
    top: 75px;
    left: $navMenu;
    right: 0px;
    bottom: 0px;
    border: 30px solid #f7f7f7;
    border-bottom: none;
    background-color: #fff;
}
</style>
