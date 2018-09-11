<template>
  <div class="hello">
    <h1>Bomb Defusal</h1>
    <h3>Manual V1</h3>
    <ul>
      <li><a href="http://www.bombmanual.com/manual/1/pdf/Bomb-Defusal-Manual_1.pdf" target="_blank" rel="noopener">View as a pdf</a></li>
      <li><a href="http://www.bombmanual.com/manual/1/html/index.html" target="_blank" rel="noopener">View as a webpage</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
