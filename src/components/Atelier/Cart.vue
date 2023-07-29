<template>
    <v-container>
        <v-img src="../../../public/image/login.jpg" max-height="220" max-width="220" class="d-flex mx-auto my-auto mt-2 mb-3"></v-img>
        <v-row>
            <v-col v-for="(item, index) in cartItems" :key="index" cols="12">
                    <v-row class="d-flex align-center">
                        <v-col cols="6">
                            <h3>{{ item.name }}</h3>
                        </v-col>
                        <v-col cols="2" class="text-center">
                            <span class="caption">Количество:</span> 
                            <v-chip>{{ item.quantity }}</v-chip>
                        </v-col>
                        <v-col cols="3" class="text-center">
                            <span class="caption">Цена:</span>
                            <v-chip>{{ item.price }} руб.</v-chip>
                        </v-col>
                        <v-col cols="1" class="text-center">
                            <v-btn @click="removeFromCart(index)" icon>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="text-right">
                <h3>Итого: {{ total }} руб.</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="text-right">
                <v-btn rounded="" color="blue-grey-lighten-3">Оформить заказ</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            cartItems: [
                {
                    name: "Платье с расклешенной юбкой",
                    price: 1500,
                    quantity: 1,
                },
                {
                    name: "Блузка с вышивкой",
                    price: 800,
                    quantity: 2,
                },
                {
                    name: "Худи на молнии с капюшоном",
                    price: 1100,
                    quantity: 1,
                },
                {
                    name: "Джинсы обычные",
                    price: 1000,
                    quantity: 3,
                },
            ],
        };
    },
    computed: {
        total() {
            return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
    },
    methods: {
        removeFromCart(index) {
            this.cartItems.splice(index, 1);
        },
    },
};
</script>
