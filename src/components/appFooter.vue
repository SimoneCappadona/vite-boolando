<script>
export default {
      data() {
        return {
            infos: ['Informazioni legali', 'Informativa sulla privacy', 'Diritto di recesso'],
            socials: ['fa-brands fa-twitter','fa-brands fa-facebook','fa-brands fa-instagram','fa-brands fa-pinterest','fa-brands fa-youtube' ]
        }
      }
    }
</script>


<template>
     <footer class="page-footer">
    <div class="container">
      <div class="footer-content">
        <div class="col footerinfos">
          <h3>Boolando S.r.l.</h3>
          <ul class="footer-info">
            <li v-for="(info, index) in infos"><a href="#">{{ info }}</a></li>
          </ul>
        </div>
        <div class="col footersocials">
          <h3>Trovaci anche su:</h3>
          <ul class="footerinfos">
            <li v-for="(social, index) in socials">
              <a href=""><font-awesome-icon :icon="social" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.page-footer{
  background-color: $footer-color;
  width: 100%;
}



.footer-content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-top: 50px;
  color: $font-color;
  font-weight: $font-weight;
  
}

.footer-info{
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: $font-size-sm;
  
}

.footersocials{
  padding: 10px;
}

h3{
  font-size: $font-size-md;
}
.footerinfos{
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
</style>