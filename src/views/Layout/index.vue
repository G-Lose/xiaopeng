<template>
    <div>
        <LayoutNav />
        <LayoutHeader />
        <LayoutMain />
    </div>
</template>
<script>
import LayoutNav from './Conponents/Nava.vue'
export default {
    name:"Layout",
    components:{  
        LayoutNav,
        LayoutHeader:()=> import("./Conponents/Header.vue"),
        LayoutMain:()=> import("./Conponents/Main.vue"),
    },
    data(){
        return{

        }
    }
}
</script>
