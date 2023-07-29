<template>
    <v-img src="../../../public/image/login.jpg" max-height="220" max-width="220" class="d-flex mx-auto my-auto mt-2 mb-3"></v-img>
    <h2 class="d-flex flex-column justify-center align-center mt-8 mb-8">ВЫБЕРИТЕ КАТЕГОРИЮ ОДЕЖДЫ:</h2>
    <v-row>
        <v-col
          class="d-flex child-flex"
          cols="12">
          <v-img
            src="../../../public/image/plate.png"
            aspect-ratio="1" max-height="256" >
          </v-img>
          <!-- Second image -->
          <v-img
                src="../../../public/image/futbolka.png"
                aspect-ratio="1" max-height="256">
              </v-img>
              <!-- Third image -->
              <v-img
                    src="../../../public/image/yubka.png"
                    aspect-ratio="1" max-height="256">
                  </v-img>
        </v-col>
      </v-row>

        <v-row class="justify-center text-center mt-4 mb-4">
              <!-- Первая колонка -->
              <v-col cols="4">
                <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/constructor">Перейти</v-btn>
              </v-col>

              <!-- Вторая колонка -->
              <v-col cols="4">
                <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/constructor">Перейти</v-btn>
              </v-col>

              <!-- Третья колонка -->
              <v-col cols="4">
                <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/constructor">Перейти</v-btn>
              </v-col>
            </v-row>

          <v-row>
            <v-col
              class="d-flex child-flex"
              cols="12">
                <v-img
                src="../../../public/image/hudi.png"
                aspect-ratio="1" max-height="256">
              </v-img>
              <!-- Second image -->
              <v-img
                    src="../../../public/image/palto.png"
                    aspect-ratio="1" max-height="256">
                  </v-img>
                  <!-- Third image -->
                  <v-img
                        src="../../../public/image/bryuki.png"
                        aspect-ratio="1" max-height="256">
                      </v-img>
            </v-col>
          </v-row>

                  <v-row class="justify-center text-center mt-4 mb-4">
                  <!-- Первая колонка -->
                  <v-col cols="4">
                    <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/constructor">Перейти</v-btn>
                  </v-col>

                  <!-- Вторая колонка -->
                  <v-col cols="4">
                    <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/constructor">Перейти</v-btn>
                  </v-col>

                  <!-- Третья колонка -->
                  <v-col cols="4">
                    <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/constructor">Перейти</v-btn>
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
