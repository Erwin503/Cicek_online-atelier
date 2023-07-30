<template>
  <v-app>
    <v-app-bar>
      <v-img max-height="60"
      max-width="60" src="../public/image/logo.jpg" class="mx-2" contain></v-img>
      <v-btn to="/">Онлайн-ателье Çiçek</v-btn>
      <v-spacer></v-spacer>
         <v-btn 
         v-for="link in links" 
         :key="link.title"
         :to="link.url" > {{ link.title }}</v-btn> 
    </v-app-bar>
    <v-main>
      <router-view></router-view> 
        <v-footer
      class="bg-blue-grey-lighten-4 text-center d-flex flex-column"
    >
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>

      <v-col cols="auto">
        <v-btn icon="mdi-twitter"></v-btn>
        <v-divider vertical></v-divider>
        <v-btn icon="mdi-instagram"  class="ml-2 mr-2"></v-btn>
        <v-divider vertical></v-divider>
        <v-btn icon="mdi-youtube"></v-btn>
      </v-col>

      <div>Мы верим, что стиль - это не только мода, но и способ выразить свою личность. Позвольте нам помочь вам создать одежду, которая подчеркнет вашу индивидуальность и сделает вас уверенным в себе и красивым.</div>


      <v-divider></v-divider>

      <div>
        {{ new Date().getFullYear() }} — <strong>Онлайн-ателье Çiçek</strong>
      </div>
    </v-footer>

    </v-main>
    </v-app>

</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Конструктор", url: "/parametr" },
        {
          title: "Корзина", url: "/cart"
        },
        { title: "Отзывы", url: "/reviews" },
        { title: "Профиль", url: "/profile" },
        { title: "Вход", url: "/login" }
      ]
    }
  }
}
</script>
