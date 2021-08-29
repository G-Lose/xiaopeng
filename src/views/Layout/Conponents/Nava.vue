<template>
  <div id="nav-wrap">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="transparent"  
      text-color="#fff"
      active-text-color="#798"
      router
    > 
        <template v-for="item in routerData "> 
          <el-submenu v-if="!item.hidden" :key="item.path" :index="item.path">
            <!-- 一级菜单 -->
            <template slot="title">
              <i class="el-icon-location"></i> 
             
              <span slot="title">{{ item.meta.name }}</span> 
            </template>
            <!-- 二级菜单 -->
            <el-menu-item-group>
              <!-- <span slot="title">分组一</span> -->
              <el-menu-item v-for="subItem in item.children" :key="subItem.path" :index="subItem.path" >{{ subItem.meta.name }}</el-menu-item>
               
            </el-menu-item-group>

          </el-submenu>
        </template>
      

    </el-menu>
  </div>
</template>
<script> 
export default {
  name: "Nav",
  data(){
      return{
          routerData:[],
          isCollapse: false
      }
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  },
  created() {
      this.routerData = this.$router.options.routes
      console.log(this.$router.options.routes)
  },
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
// @import "@/style/config.scss" ;
#nav-wrap {
  position: fixed;
  top: 0px;
  left: 0px;
  width: $navMenu;
  height: 100vh;
  background-color: #344a5f;
 
}

</style>
