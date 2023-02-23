import HeadphoneDetailComponent from "../components/HeadphoneDetailComponent.vue";
import CardComponent from "../components/CardComponent.vue";
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
    path: "/:id",
    name: "HeadphoneDetailComponent",
    component: HeadphoneDetailComponent,
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
