<template>
     <v-img src="../../../public/image/login.jpg" max-height="220" max-width="220" class="d-flex mx-auto my-auto mt-2"></v-img>
    <v-container class="mb-10">
            <v-row>
                <v-col cols="12" md="6" class="text-center mt-6 mb-10">
                    <v-carousel  hide-delimiter-background
          delimiter-icon="mdi-square">
        <v-carousel-item
        src="../../../public/image/hudi2.webp"
        cover></v-carousel-item>
        <v-carousel-item
        src="../../../public/image/hudi2_2.webp"
        cover></v-carousel-item>
        <v-carousel-item
        src="../../../public/image/hudi2_3.webp"
        cover></v-carousel-item>
        <v-carousel-item
            src="../../../public/image/hudi2_4.webp"
            cover></v-carousel-item>
                    </v-carousel>
                </v-col>
                <v-col cols="12" md="6">
                    <h2 class="mt-6">Худи на молнии с капюшоном</h2>
                    <h2 class="mb-10">1100 руб.</h2>
                    <v-divider></v-divider>
                    <h2>Описание</h2>
                    <div>
                        <table>
                            <tr>
                                <td>Цвет:</td>
                                <td>Черный</td>
                            </tr>
                            <tr>
                                <td>Стиль:</td>
                                <td>Повседневный</td>
                            </tr>
                            <tr>
                                <td>Тип рисунка:</td>
                                <td>Одноцветный</td>
                            </tr>
                            <tr>
                                <td>Детали:</td>
                                <td>На шнурке, с карманом</td>
                            </tr>
                            <tr>
                                <td>Тип:</td>
                                <td>На молнии</td>
                            </tr>
                            <tr>
                                <td>Тип воротника:</td>
                                <td>Капюшон</td>
                            </tr>
                            <tr>
                                <td>Длина рукава:</td>
                                <td>Длинный рукав</td>
                            </tr>
                            <tr>
                                <td>Тип рукава:</td>
                                <td>С открытыми плечами</td>
                            </tr>
                            <tr>
                                <td>Длина:</td>
                                <td>Классическая</td>
                            </tr>
                            <tr>
                                <td>Тип посадки:</td>
                                <td>Обычная посадка</td>
                            </tr>
                            <tr>
                                <td>Состав:</td>
                                <td>100% полиэстер</td>
                            </tr>
                            <tr>
                                <td>Инструкции по уходу:</td>
                                <td>Машинная стирка или профессиональная химчистка</td>
                            </tr>
                        </table>
                    </div>
                </v-col>
            </v-row>
            <div class="text-right">
                <v-btn rounded="" color="blue-grey-lighten-3" class="mb-8">В корзину</v-btn>
            </div>
        </v-container>
</template>
<script>
export default {
    data() {
        return {
        }
    }
} 
</script>
