<template>
  <v-sheet class="d-flex justify-cnenter align-center flex-column pt-12">
    <v-sheet>当前网络不好，点击再试一次</v-sheet>
    <v-btn
      class="ma-12"
      :width="$V(150)"
      :height="$V(75)"
      :style="{fontSize: $V(24)}"
      @click.stop.prevent="$router.go(-1)"
    >确定</v-btn>
  </v-sheet>
</template>