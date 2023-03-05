<template>
  <el-container>
    <el-header>
      User things
    </el-header>

    <el-main>
      <el-button
        bg
        text
        type="success"
        >text</el-button
      >
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'AppMain',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
