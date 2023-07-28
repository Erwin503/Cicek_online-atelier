<template>
  <v-app>
    <v-app-bar>
      <v-img max-height="60"
      max-width="60" src="../public/logo.jpg" class="mx-2" contain></v-img>
      <v-btn text>Онлайн-ателье Çiçek</v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn 
         v-for="link in links" 
         :key="link.title" 
        text> {{ link.title }}</v-btn> 
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view> 
    </v-main>
    </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: "Конструктор", url: "/parametr" },
        {
          title: "Корзина", url: "/cart"
        },
        { title: "Отзывы", url: "/reviews" },
        { title: "Вход", url: "/login" }
      ]
    }
  }
}
</script>
