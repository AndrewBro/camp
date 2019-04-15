<template>
  <header class="header">
    <div class="header-wrap">
      <a href="tel:+380971141187" class="btn">+38 (097) 114 11 87</a>
      <a href="http://forms.gle/4qpwmahFsMSQHYyR6" class="btn btn-outline-primary">Зарегистрироваться</a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss">
  @import "../assets/scss/_main.scss";
  .header {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 75px;
    z-index: 1;
  }
  .header-wrap {
    height: 100%;
    padding: 0 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1em;
    @media (max-width: 768px) {
      font-size: .75em;
      padding: 0 15px;
    }
    @media (max-width: 400px) {
      padding: 0 5px;
    }
    .btn-outline-primary {
      margin: 0 0 0 50px;
      border-color: #fff;
      @media (max-width: 768px) {
        margin: 0 0 0 5px;
      }
      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }
    a {
      color: #fff;
      &:hover {
        color: $blue2;
        text-decoration: none;
      }
      &:focus {
        outline: none;
        box-shadow: none;
      }
      &.btn {
        font-size: inherit;
      }
    }
  }
</style>
