<template>
  <v-bottom-navigation app grow scroll-target color="#376abb" mandatory v-model="value">
    <v-responsive :aspect-ratio="16/9">
      <v-btn min-height="100%" to="/" value="index">
        <span>项目</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
    </v-responsive>
    <v-responsive :aspect-ratio="16/9">
      <v-btn min-height="100%" to="/test" value="test">
        <span>统计</span>
        <v-img
          v-if="value === 'test'"
          max-width="30px"
          height="30px"
          src="../../src/assets/logo.svg"
        ></v-img>
        <v-img v-else max-width="30px" height="30px" src="../../src/assets/img/logo.png"></v-img>
      </v-btn>
    </v-responsive>
    <v-responsive :aspect-ratio="16/9">
      <v-btn min-height="100%" to="/test1" value="mine">
        <span>我的</span>
        <v-img
          v-if="value === 'mine'"
          max-width="30px"
          height="30px"
          src="../../src/assets/img/logo.png"
        ></v-img>
        <v-img v-else max-width="30px" height="30px" src="../../src/assets/logo.svg"></v-img>
      </v-btn>
    </v-responsive>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>