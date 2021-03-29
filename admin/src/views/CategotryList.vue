<template>
  <div>
      <h1>分类列表</h1>
        <el-table :data="items">
          <el-table-column prop="_id" label="ID" width='220px'></el-table-column>
          <el-table-column prop="name" label="分类名称"></el-table-column>
        </el-table>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            items:[]
        }
    },
    create: {
       
    },
    method:{
        async fecth(){

        }
    }

}
</script>

<style>

</style>