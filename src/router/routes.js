import BodyComponent from "../components/BodyComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/card",
    name: "CardComponent",
    component: CardComponent,
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
