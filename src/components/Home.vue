<template>
    <v-parallax
            src="../../public/image/background.jpg"
          >
            <div class="d-flex flex-column fill-height justify-center align-center">
              <h1 class="text-h4 font-weight-black mb-4">
                СОЗДАЙТЕ СВОЙ ДИЗАЙН ОДЕЖДЫ
              </h1>
              <h4 class="subheading">
                Одежда, созданная вами: уникальность, качество и стиль нашего онлайн-ателье!
              </h4>
              <br>
            <v-btn
               rounded="" size="x-large" color="blue-grey-lighten-3" to="/parametr"
              >НАЧАТЬ</v-btn>
            </div>
          </v-parallax>
          <h1 class="d-flex flex-column justify-center align-center pa-12">КАТАЛОГ ТОВАРОВ</h1>


        <v-row>
    <v-col
      class="d-flex child-flex"
      cols="12">
      <v-img
        src="../../public/image/hudi1.jpeg"
        aspect-ratio="1">
      </v-img>
      <!-- Second image -->
      <v-img
            src="../../public/image/hudi2.webp"
            aspect-ratio="1">
          </v-img>
          <!-- Third image -->
          <v-img
                src="../../public/image/hudi3.jpeg"
                aspect-ratio="1">
              </v-img>
    </v-col>
  </v-row>
    <v-row class="justify-center text-center mt-4 mb-4">
          <!-- Первая колонка -->
          <v-col cols="4">
            <h3>Худи обычное</h3>
            <h4 class="pa-3">700 руб.</h4>
            <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/clothes">Перейти</v-btn>
          </v-col>

          <!-- Вторая колонка -->
          <v-col cols="4">
            <h3>Худи на молнии с капюшоном</h3>
            <h4 class="pa-3">1100 руб.</h4>
            <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/clothes">Перейти</v-btn>
          </v-col>

          <!-- Третья колонка -->
          <v-col cols="4">
            <h3>Жилет женский</h3>
            <h4 class="pa-3">1150 руб.</h4>
            <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/clothes">Перейти</v-btn>
          </v-col>
        </v-row>

</template>
<script>
export default {
    data() {
        return {
        }
    }
} 
</script>
