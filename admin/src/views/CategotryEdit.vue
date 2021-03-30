<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}分类</h1>
    <el-form label-width="120px" @submit.native.prevent="">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" @click="save"
          >保存</el-button
        >
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },

  data() {
    return {
      model: {},
    };
  },
  created() {
    this.id && this.fecth();
  },
  methods: {
    async fecth() {
      const { data } = await this.$http.get(`/categories/${this.id}`); // eslint-disable-line no-unused-vars
      this.model = data;
      console.log(this.model);
    },
    async save() {
      let res; // eslint-disable-line no-unused-vars
      if (this.id) {
          res = await this.$http.put(`/categories/${this.id}`,this.model); // eslint-disable-line no-unused-vars
      } else {
        res = await this.$http.post("/categories", this.model); // eslint-disable-line no-unused-vars
      }

      // console.log(res);
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
  },
};
</script>

<style></style>
