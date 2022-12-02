<script setup lang="ts">
  import { db } from '@/firebase/config';
  import { onMounted } from '@vue/runtime-core';
  import { collection, getDocs, getFirestore, query } from "firebase/firestore";

  const  hotelData = async function () {
    try {
      const q = query(collection(db, "hotels"));
      const querySnaphot = await getDocs(q);
      const ret = [];
      querySnaphot.forEach(doc => {
        ret.push(doc.data())
      });
      console.log(querySnaphot);
      return ret;
    } catch(error) {

    }
  }
      hotelData().then((res) => {
        console.log(res)
      })

</script>

<template>
  <div>
    <form>
      <div class="search">
        <input type="text" placeholder="ホテル名"><br>
        <button>Search</button>
      </div>
      <div class="search">
        <input type="text" placeholder="都道府県名"><br>
        <button>Search</button>
      </div>
    </form>
    <div class="hotel-card">
      <img src="@/assets/img/24767826_m.jpg" class="hotel-picture">
      <p class="hotel-name">大阪ホテル</p>
      <p class="prefecture">所在地: 大阪</p>
      <p class="hotel-content">あああ</p>
      <div class="to-detail">
        <p class="detail">詳細を見る</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  form {
    width: 100%;
    text-align: right;
  }
  .search {
    display: inline-block;
    margin-right: 5px;
  }

  button {
    float: right;
    background-color: white;
    border: 1px solid black;
    height: 30px;
    border-radius: 5px;
  }
</style>
