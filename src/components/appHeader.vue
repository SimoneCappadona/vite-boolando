<script>
export default {
      data() {
        return {
            genders: ['Donna', 'Uomo', 'Bambino']
        }
      }
    }
</script>


<template>
    <nav class="navbar">
        <div class="header container">
            <ul class="menu">
                <li v-for="(gender, index) in genders"> <a href="#">{{ gender }}</a></li>   
            </ul>
            <img class="logo" src="../assets/img/boolean-logo.png" alt="">
            <div class="icons">
                <a href=""><i class="fa-regular fa-user"></i></a>
                <a href=""><i class="fa-regular fa-heart"></i></a>
                <a href=""><i class="fa-solid fa-bag-shopping"></i></a>
            </div>
        </div>       
    </nav>
</template>


<style lang="scss" scoped>
@use '../style/particles/variables.scss' as *;

.navbar{
  background-color: $main-color;
  width: 100%;
  box-shadow: 0px 0px 5px 0px black;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
}

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}
.menu {
  display: flex;
  gap: 15px;
  font-size: 20px;
  color: $font-color;
  font-weight: $font-weight;
}

.logo{
  width: 150px;
  align-items: center;
}

.icons{
  display: flex;
  gap: 15px;
  color: $font-color;
  
}

</style>