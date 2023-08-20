<template>
    <v-card>
        <v-tabs v-model="tab" color="blue-grey-darken-4" align-tabs="center">
            <v-tab :value="1">Крой</v-tab>
            <v-tab :value="2">Длина</v-tab>
            <v-tab :value="3">Низ</v-tab>
            <v-tab :value="4">Карман</v-tab>
            <v-tab :value="5">Манжеты</v-tab>
            <v-tab :value="6">Капюшон</v-tab>
            <v-tab :value="7">Ткань</v-tab>
            <v-tab :value="8">Цвет</v-tab>
            <v-tab :value="9">Размер</v-tab>
            <v-tab :value="10">Итого</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item v-for="n in 10" :key="n" :value="n">
                <v-container fluid>
              <!-- Крой -->
              <v-row class="mb-12" v-if="n === 1">
                    <v-col
                  class="d-flex child-flex"
                  cols="12">
                  <v-row justify="center">
                        <v-img
                            v-for="image in images[n]"
                            :key="image"
                            :src="image"
                            aspect-ratio="1"
                            max-height="450"
                          ></v-img>
                          </v-row>
                  </v-col>
                  <v-row justify="center">
                          <v-col v-for="(checkbox, index) in chexbox[n]" :key="index" cols="6" sm="6">
                  <v-radio-group class="ml-12"> 
                      <v-radio :label="checkbox" :value="checkbox"></v-radio>
                  </v-radio-group>
                        </v-col>
                        </v-row>
                          </v-row>
              <!-- Длина -->
              <v-row class="mb-12" v-if="n === 2">
                    <v-col
                  class="d-flex child-flex"
                  cols="12">
                  <v-row justify="center">
                        <v-img
                            v-for="image in images[n]"
                            :key="image"
                            :src="image"
                            aspect-ratio="1"
                            max-height="450"
                          ></v-img>
                          </v-row>
                  </v-col>
                  <v-row justify="center">
                          <v-col v-for="(checkbox, index) in chexbox[n]" :key="index" cols="6" sm="6">
                          <v-radio-group class="ml-12">
                      <v-radio :label="checkbox" :value="checkbox"></v-radio>
                  </v-radio-group>
                        </v-col>
                        </v-row>
                          </v-row>
              <!-- Низ -->
              <v-row class="mb-12" v-if="n === 3">
                    <v-col
                  class="d-flex child-flex"
                  cols="12">
                  <v-row justify="center">
                        <v-img
                            v-for="image in images[n]"
                            :key="image"
                            :src="image"
                            aspect-ratio="1"
                            max-height="450"
                          ></v-img>
                          </v-row>
                  </v-col>
                  <v-row justify="center">
                          <v-col v-for="(checkbox, index) in chexbox[n]" :key="index" cols="4" >
                           <v-radio-group>
                      <v-radio :label="checkbox" :value="checkbox"></v-radio>
                  </v-radio-group>
                        </v-col>
                        </v-row>
                          </v-row>
              <!-- Карман -->
              <v-row class="mb-12" v-if="n === 4">
                    <v-col
                  class="d-flex child-flex"
                  cols="12">
                  <v-row justify="center">
                        <v-img
                            v-for="image in images[n]"
                            :key="image"
                            :src="image"
                            aspect-ratio="1"
                            max-height="450"
                          ></v-img>
                          </v-row>
                  </v-col>
                  <v-row justify="center">
                          <v-col v-for="(checkbox, index) in chexbox[n]" :key="index" cols="6" sm="6">
                          <v-radio-group class="ml-12">
                      <v-radio :label="checkbox" :value="checkbox"></v-radio>
                  </v-radio-group>
                        </v-col>
                        </v-row>
                          </v-row>
              <!-- Манжеты -->
              <v-row class="mb-12" v-if="n === 5">
                    <v-col
                  class="d-flex child-flex"
                  cols="12">
                  <v-row justify="center">
                        <v-img
                            v-for="image in images[n]"
                            :key="image"
                            :src="image"
                            aspect-ratio="1"
                            max-height="450"
                          ></v-img>
                          </v-row>
                  </v-col>
                  <v-row justify="center">
                          <v-col v-for="(checkbox, index) in chexbox[n]" :key="index" cols="4">
                          <v-radio-group>
                      <v-radio :label="checkbox" :value="checkbox"></v-radio>
                  </v-radio-group>
                        </v-col>
                        </v-row>
                          </v-row>
              <!-- Капюшон -->
              <v-row class="mb-12" v-if="n === 6">
                    <v-col
                  class="d-flex child-flex"
                  cols="12">
                  <v-row justify="center">
                        <v-img
                            v-for="image in images[n]"
                            :key="image"
                            :src="image"
                            aspect-ratio="1"
                            max-height="450"
                          ></v-img>
                          </v-row>
                  </v-col>
                  <v-row justify="center">
                          <v-col v-for="(checkbox, index) in chexbox[n]" :key="index" cols="6" sm="6">
                          <v-radio-group class="ml-12">
                      <v-radio :label="checkbox" :value="checkbox"></v-radio>
                  </v-radio-group>
                        </v-col>
                        </v-row>
                          </v-row>
              <!-- Ткань -->
              <v-row class="mb-12" v-if="n === 7">
                <v-col
              class="d-flex child-flex"
              cols="12">
              <v-row justify="center">
                    <v-img
                        v-for="image in images[n]"
                        :key="image"
                        :src="image"
                        aspect-ratio="1"
                        max-height="450"
                      ></v-img>
                      </v-row>
              </v-col>
              <v-row justify="center">
                      <v-col v-for="(checkbox, index) in chexbox[n]" :key="index" cols="6" sm="6">
                      <v-radio-group class="ml-12">
                      <v-radio :label="checkbox" :value="checkbox"></v-radio>
                  </v-radio-group>
                    </v-col>
                    </v-row>
                      </v-row>
                      <!-- Цвет -->
                    <v-row class="mb-12" v-if="n === 8">
                <v-col v-for="color in colors" :key="color" cols="12" sm="3">
   <v-radio-group>
                              <v-radio v-model="ex4" :label="color" :color="color" :value="color"
                                  hide-details></v-radio>
                                  </v-radio-group>
                </v-col>
                  </v-row>
                  <!-- Размер -->
                  <v-row v-if="n === 9">
                    <v-container>
    <v-combobox
      label="Выберите ваш размер"
      :items="['XS-44', 'S-46', 'M-48', 'L-50', 'XL-52', '2XL-54', '3XL-56', '4XL-58']"
    ></v-combobox>
    <v-combobox
          label="Укажите рост"
          :items="['158-166', '167-178', '179-190', '191-202']"
        ></v-combobox>
        <v-text-field label="Обхват груди" variant="outlined"></v-text-field>
        <v-text-field label="Обхват бёдер" variant="outlined"></v-text-field>
    </v-container>
                  </v-row>
                  <!-- Итог -->
                  <v-row v-if="n === 10">
                        <v-container>
       <ul>
           <li>Классический</li>
           <li>До середины бедра</li>
           <li>Декоративная резинка кашкорсе</li>
           <li>Кенгуру</li>
           <li>Декоративная резинка кашкорсе</li>
           <li>С капюшоном</li>
           <li>С начёсом</li>
           <li>Черный</li>
           <li>XS-44, 167-178</li>
       </ul>
       <v-row>
                <v-col cols="12" class="text-right">
                    <v-btn rounded="" color="blue-grey-lighten-3">Оформить заказ</v-btn>
                </v-col>
            </v-row>
        </v-container>
                      </v-row>
                </v-container>
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        tab: null,
        images: {
            1: ["./image/constructorHudi/one.webp", "./image/constructorHudi/three.jpeg"],
            2: ["./image/constructorHudi/four.jpeg", "./image/constructorHudi/five.jpeg"],
            3: ["./image/constructorHudi/six.webp", "./image/constructorHudi/seven.jpeg", "./image/constructorHudi/eight.webp"],
            4: ["./image/constructorHudi/three.jpeg", "./image/constructorHudi/nine.webp"],
            5: ["./image/constructorHudi/ten.webp", "./image/constructorHudi/eleven.webp", "./image/constructorHudi/12.webp"],
            6: ["./image/constructorHudi/three.jpeg", "./image/constructorHudi/hudi1.jpeg"],
            7: ["./image/constructorHudi/13.webp", "./image/constructorHudi/14.webp"],
        },
        chexbox: {
            1: ["Классический", "Бочонок (оверсайз)"],
            2: ["До середины бедер", "До колена"],
            3: ["Декоративная резинка кашкорсе", "Обрезанный край", "Шов"],
            4: ["Кенгуру", "В боковых швах"],
            5: ["Декоративная резинка кашкорсе", "Шов", "На резинке"],
            6: ["С капюшоном", "Без капюшона"],
            7: ["С начёсом", "Без начёса"],
        },
        colors: ["Черный", "Песочный", "Фиолетовый", "Лавандовый", "Розовый", "Белый", "Серый", "Графит", "Желтый", "Оранжевый", "Красный", "Синий", "Голубой", "Зеленый", "Мятный", "Хаки"],
    }),
} 
</script>
