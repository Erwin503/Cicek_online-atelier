<template>
    <v-img src="../../../public/image/login.jpg" max-height="220" max-width="220" class="d-flex mx-auto my-auto mt-2 mb-3"></v-img>
    <h2 class="d-flex flex-column justify-center align-center mt-8 mb-8">ВЫБЕРИТЕ КАТЕГОРИЮ ОДЕЖДЫ:</h2>
    <v-row>
        <v-col
          class="d-flex child-flex"
          cols="12">
          <v-img
            src="../../../public/image/constructorDress/3.webp"
            aspect-ratio="1" max-height="256" >
          </v-img>
          <!-- Second image -->
          <v-img
                src="../../../public/image/constructorShirt/1.jpeg"
                aspect-ratio="1" max-height="256">
              </v-img>
              <!-- Third image -->
              <v-img
                  src="../../../public/image/hudi2.webp"
                  aspect-ratio="1" max-height="256">
                </v-img>
        </v-col>
      </v-row>

        <v-row class="justify-center text-center mt-4 mb-4">
              <!-- Первая колонка -->
              <v-col cols="4">
                <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/constructorDress">Перейти</v-btn>
              </v-col>

              <!-- Вторая колонка -->
              <v-col cols="4">
                <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/constructorShirt">Перейти</v-btn>
              </v-col>

              <!-- Третья колонка -->
              <v-col cols="4">
                <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/constructorHudi">Перейти</v-btn>
              </v-col>
            </v-row>

          <v-row>
            <v-col
              class="d-flex child-flex"
              cols="12">
              <v-img
                      src="../../../public/image/constructorSkirt/5.webp"
                      aspect-ratio="1" max-height="256">
                    </v-img>
                  <!-- Third image -->
                  <v-img
                        src="../../../public/image/constructorPants/4.jpeg"
                        aspect-ratio="1" max-height="256">
                      </v-img>
            </v-col>
          </v-row>

                  <v-row class="justify-center text-center mt-4 mb-4">
                  <!-- Первая колонка -->
                  <v-col cols="6">
                    <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/constructorSkirt">Перейти</v-btn>
                  </v-col>
                  <!-- Третья колонка -->
                  <v-col cols="6">
                    <v-btn class="pa-3" rounded="" color="blue-grey-lighten-3" to="/constructorPants">Перейти</v-btn>
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
