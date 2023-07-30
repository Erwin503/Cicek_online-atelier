<template>
    <v-container class="profile-page">
        <v-row>
            <v-col cols="12" md="4">
                <!-- Блок с информацией о пользователе -->
                <v-card class="user-info-card">
                    <v-img src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light" class="avatar"></v-img>
                    <v-card-title class="text-center">{{ username }}</v-card-title>
                    <v-card-subtitle class="text-center">{{ email }}</v-card-subtitle>
                    <v-card-text>
                        <v-list>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-account</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Имя:</v-list-item-title>
                                    <v-list-item-subtitle>{{ name }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-calendar</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Дата рождения:</v-list-item-title>
                                    <v-list-item-subtitle>{{ birthdate }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <!-- Дополнительные поля информации о пользователе -->
                        </v-list>
                    </v-card-text>
                    <!-- <v-card-actions class="justify-center"> -->
                <v-btn rounded="" color="blue-grey-lighten-3">Изменить данные</v-btn>
              <!-- </v-card-actions> -->
                </v-card>
            </v-col>
            <v-col cols="12" md="8">
                <!-- Блок с заказами пользователя -->
                <v-card class="orders-card">
                    <v-card-title>Мои заказы</v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item v-for="order in orders" :key="order.id">
                                <v-list-item-content>
                                    <v-list-item-title>Заказ №{{ order.id }}</v-list-item-title>
                                    <v-list-item-subtitle>Статус: {{ order.status }}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn rounded="" color="blue-grey-lighten-3" class="mt-3">Подробнее</v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            username: "JohnDoe",
            email: "johndoe@example.com",
            name: "John Doe",
            birthdate: "01.01.1990",
            orders: [
                { id: 1, status: "Обрабатывается" },
                { id: 2, status: "Доставка" },
                // Дополнительные заказы пользователя
            ],
        };
    },
};
</script>

<style>
.profile-page {
    padding-top: 20px;
}

.avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
}

.user-info-card {
    text-align: center;
    padding: 16px;
}

.orders-card {
    padding: 16px;
}</style>
