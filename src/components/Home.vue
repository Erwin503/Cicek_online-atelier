<template>
    <v-parallax
            src="../../public/backgr.jpg"
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
               rounded="" size="x-large" color="blue-grey-lighten-3" 
              >НАЧАТЬ</v-btn>
            </div>
          </v-parallax>
          <h1 class="d-flex flex-column justify-center align-center pa-12">КАТАЛОГ ТОВАРОВ</h1>


        <v-row>
    <v-col
      class="d-flex child-flex"
      cols="12">
      <v-img
        src="../../public/hudi1.jpeg"
        aspect-ratio="1">
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <!-- Second image -->
      <v-img
            src="../../public/hudi2.webp"
            aspect-ratio="1">
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <!-- Third image -->
          <v-img
                src="../../public/hudi3.jpeg"
                aspect-ratio="1">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey-lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
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
