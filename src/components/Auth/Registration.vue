<template>
    <v-container class="mt-10 mb-10">
        <v-row>
            <v-col cols="12" md="6" class="text-center mt-6 mb-10">
                <h1 class="display-2 mb-6">ДОБРО ПОЖАЛОВАТЬ!</h1>
                <p class="subtitle-1">
                    Введите имя, электронный адрес и пароль для регистрации. Если у вас уже есть аккаунт, введите свой электронный адрес и пароль.
                </p>
            </v-col>

            <v-col cols="12" md="6">
                <v-col cols="auto">
                    <v-img src="../../../public/image/login.jpg" max-height="220" max-width="220"></v-img>
                </v-col>
                <v-form ref="form">
                    <v-text-field v-model="email" label="Имя пользователя"></v-text-field>
                    <v-text-field v-model="email" label="Электронный адрес"></v-text-field>
                    <v-text-field v-model="password" type="password" label="Пароль"></v-text-field>
                    <v-text-field v-model="password" type="password" label="Подтвердите пароль"></v-text-field>
                    <v-btn rounded="" color="blue-grey-lighten-3">Зарегистрироваться</v-btn>
                    <p class="mt-5">Уже есть аккаунт? <a href="/login" class="login">Войдите.</a></p>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
    },
};
</script>

<style>
a.login {
    color: #497DDD;
    text-decoration: none;
}
</style>