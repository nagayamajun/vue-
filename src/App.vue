<script setup lang="ts">
  import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <html>
    <header>
      <RouterLink v-bind:to="{name:'AppTop'}">
        <h1 class="title">Hotel Project</h1>
      </RouterLink>
      <nav class="nav">
        <ul class="menu-group">
          <li class="menu-item">トップページ</li>
          <li class="menu-item">お問合せ</li>
        </ul>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <p class="footer-title">Hotel Project</p>
    </footer>
  </html>
</template>

<style>
  header {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .title {
    color: black;
    margin-right: auto;
  }

  .menu-item {
  list-style: none;
  display: inline-block;
  padding: 10px;
  }

  footer {
    width: 100%;
    background-color: lightgray;
  }

  .footer-title {
    text-align: center;
  }

  .hotel-card {
    width: 200px;
    height: 300px;
    border: 1px solid lightgray;
    margin: 10px;
  }

  .hotel-picture {
    width: 200px;
    height: 140px;
  }

  .hotel-name {
    font-weight: bold;
    margin: 5px;
  }

  .prefecture, .hotel-content {
    margin: 5px;
  }

  .to-detail {
    position: absolute;
    bottom: 0;
    background-color: rgb(231, 229, 229);
    width: 100%;
  }

  .detail {
    text-align: center;
    color: rgb(45, 173, 216);
  }
</style>
