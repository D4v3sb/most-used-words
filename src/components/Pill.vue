<template>
  <div class="pill">
    <span class="name">{{ name }} </span>
    <span class="amount">{{ amount }} </span>
  </div>
</template>

<script>
export default {
  props: ["name", "amount"],
};
</script>

<style scoped lang="scss">
.pill {
  margin: 10px;
  height: 55px;
  border-radius: 30px;
  background: #dc143c;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  align-items: center;

  .name {
    margin-left: 15px;
  }

  .amount {
    margin: 10px;
    padding: 5px;
    height: 35px;
    width: 35px;
    border-radius: 18px;
    background: #fff;
    color: #dc143c;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
