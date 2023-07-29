<template>
    <v-img src="../../../public/image/login.jpg" max-height="220" max-width="220" class="d-flex mx-auto my-auto mt-3"></v-img>
    <h2 class="d-flex flex-column justify-center align-center mt-3 mb-8">ОТЗЫВЫ ОТ КЛИЕНТОВ</h2>
     <v-row class="mb-6">
        <v-col
          class="d-flex child-flex"
          cols="12">
          <v-card
        class="mx-auto"
        max-width="344"
        variant="outlined"
      >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              <v-icon left>mdi-star</v-icon>
              <v-icon left>mdi-star</v-icon>
              <v-icon left>mdi-star</v-icon>
              <v-icon left>mdi-star</v-icon>
              <v-icon left>mdi-star</v-icon>
            </div>
            <div class="text-caption">Я в полном восторге от работы онлайн-ателье Çiçek! Заказала у них платье для особого случая, и оно превзошло все мои ожидания. Отличное качество ткани, безупречный пошив и внимание к деталям. Я чувствовала себя королевой в этом наряде! Большое спасибо команде Çiçek за их профессионализм и качественный сервис.</div>
            <div class="text-overline mb-1 mt-2">
              <v-avatar
                color="grey-darken-3"
                image="https://avataaars.io/"
              ></v-avatar>
            <v-list-item-title>Evan You</v-list-item-title>
            </div>
          </div>
        </v-card-item>
      </v-card>

      <v-card
            class="mx-auto"
            max-width="344"
            variant="outlined"
          >
            <v-card-item>
              <div>
                <div class="text-overline mb-1">
                  <v-icon left>mdi-star</v-icon>
                  <v-icon left>mdi-star</v-icon>
                  <v-icon left>mdi-star</v-icon>
                  <v-icon left>mdi-star</v-icon>
                  <v-icon left>mdi-star</v-icon>
                </div>
                <div class="text-caption">Сотрудничество с онлайн-ателье Çiçek было чистым удовольствием! Заказывал у них костюм для моего бизнес-мероприятия, и результат был просто потрясающим. Мастера ателье смогли точно воплотить мои идеи в реальность. Отличное обслуживание и быстрая доставка. Рекомендую Çiçek всем, кто хочет выглядеть неповторимо!</div>
                <div class="text-overline mb-1 mt-2">
                  <v-avatar
                    color="grey-darken-3"
                    image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-avatar>
                <v-list-item-title>Evan You</v-list-item-title>
                </div>
              </div>
            </v-card-item>
          </v-card>

      <v-card
            class="mx-auto"
            max-width="344"
            variant="outlined"
          >
            <v-card-item>
              <div>
                <div class="text-overline mb-1">
                  <v-icon left>mdi-star</v-icon>
                  <v-icon left>mdi-star</v-icon>
                  <v-icon left>mdi-star</v-icon>
                  <v-icon left>mdi-star</v-icon>
                  <v-icon left>mdi-star</v-icon>
                </div>
                <div class="text-caption">Я уже несколько раз обращалась в онлайн-ателье Çiçek, и они никогда не подводят! Заказывала у них различные модели одежды, от платьев до блузок, и всегда была довольна результатом. Мастера ателье творят настоящее волшебство - каждая вещь сшита аккуратно и с любовью. Качество материалов на высоте, и цены очень разумные.</div>
                <div class="text-overline mb-1 mt-2">
                  <v-avatar
                    color="grey-darken-3"
                    image="https://avataaars.io/"
                  ></v-avatar>
                <v-list-item-title>Evan You</v-list-item-title>
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    <h2 class="d-flex flex-column justify-center align-center mt-3 mb-2">Оставьте свой отзыв о товаре</h2>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="6">
        <v-textarea
          label="Оставьте свой отзыв"
          auto-grow
          variant="outlined"
          rows="4"
          row-height="25"
          shaped
          class="mx-auto"
        ></v-textarea>
        <v-btn rounded="" color="blue-grey-lighten-3" class="mb-8">Отправить</v-btn>
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
