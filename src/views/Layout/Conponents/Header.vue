<template>
    <div id="header-wrap">
        <div>
             
        </div>
    </div>
</template>
<script>
 
export default {
    name:"Header"
}
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss" ;
#header-wrap{
    position: fixed;
    top: 0px;
    left: $navMenu;
    right: 0px;
    height: 75px;
    background-color: #fff;
    -webkit-box-shadow:0 3px 16px 0 rgba(0,0,0,.1);
}
</style>

