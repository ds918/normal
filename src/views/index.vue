<template>
  <div></div>
</template>
<script>
export default {
  name: "index",
  async activated() {
    await this.$http
      .post({
        url: "NewSpecialBreakWrongCollectionExercise",
        data:
          "offset_number=0&course_id=1&user_id=165640&token=4e87b5765ac1334abc791eeb7cbf6e14&take_number=1000"
      })
      .then(res => {
        console.log(res);
      });
  }
};
</script>
<style lang="scss" module></style>
