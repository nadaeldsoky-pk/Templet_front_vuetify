import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/employees",
    name: "Employees",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Employees.vue"),
  },
  {
    path: "/accordion",
    name: "Accordion",
    // route level code-splitting
    // this generates a separate chunk (accordion.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "accordion" */ "../views/Accordion.vue"),
  },
  {
    path: "/typography",
    name: "Typography",
    // route level code-splitting
    // this generates a separate chunk (typography.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "typography" */ "../views/Typography.vue"),
  },
  {
    path: "/tags",
    name: "Tags",
    // route level code-splitting
    // this generates a separate chunk (tags.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tags" */ "../views/Tags.vue"),
  },
  {
    path: "/modal-window",
    name: "ModalWindow",
    // route level code-splitting
    // this generates a separate chunk (modal-window.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "modal-window" */ "../views/ModalWindow.vue"),
  },
  {
    path: "/push-notifications",
    name: "PushNotifications",
    // route level code-splitting
    // this generates a separate chunk (push-notifications.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "push-notifications" */ "../views/PushNotifications.vue"),
  },
  {
    path: "/effects",
    name: "Effects",
    // route level code-splitting
    // this generates a separate chunk (effects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "effects" */ "../views/Effects.vue"),
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    // route level code-splitting
    // this generates a separate chunk (checkbox.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "checkbox" */ "../views/Checkbox.vue"),
  },
  {
    path: "/buttons",
    name: "Buttons",
    // route level code-splitting
    // this generates a separate chunk (buttons.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "buttons" */ "../views/Buttons.vue"),
  },
  {
    path: "/textarea",
    name: "Textarea",
    // route level code-splitting
    // this generates a separate chunk (textarea.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "textarea" */ "../views/Textarea.vue"),
  },
  {
    path: "/tabs",
    name: "Tabs",
    // route level code-splitting
    // this generates a separate chunk (tabs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tabs" */ "../views/Tabs.vue"),
  },
  {
    path: "/input",
    name: "Input",
    // route level code-splitting
    // this generates a separate chunk (input.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "input" */ "../views/Input.vue"),
  },
  {
    path: "/select",
    name: "Select",
    // route level code-splitting
    // this generates a separate chunk (select.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "select" */ "../views/Select.vue"),
  },
  {
    path: "/dropdown-menu",
    name: "DropDownMenu",
    // route level code-splitting
    // this generates a separate chunk (dropdown-menu.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "dropdown-menu" */ "../views/DropDownMenu.vue"),
  },
  {
    path: "/menu",
    name: "Menu",
    // route level code-splitting
    // this generates a separate chunk (menu.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "menu" */ "../views/Menu.vue"),
  },
  {
    path: "/radio-buttons",
    name: "RadioButtons",
    // route level code-splitting
    // this generates a separate chunk (radio-buttons.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "radio-buttons" */ "../views/RadioButtons.vue"),
  },
  {
    path: "/switch",
    name: "Switch",
    // route level code-splitting
    // this generates a separate chunk (switch.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "switch" */ "../views/Switch.vue"),
  },
  {
    path: "/card",
    name: "Card",
    // route level code-splitting
    // this generates a separate chunk (card.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "card" */ "../views/Card.vue"),
  },
  {
    path: "/datatable",
    name: "DataTable",
    // route level code-splitting
    // this generates a separate chunk (datatable.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "datatable" */ "../views/DataTable.vue"),
  },
  {
    path: "/upload-dropzone",
    name: "UploadDropzoe",
    // route level code-splitting
    // this generates a separate chunk (upload-dropzoe.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "upload-dropzoe" */ "../views/UploadDropzone.vue"),
  },
  {
    path: "/ticket-System-Dashboard",
    name: "TicketSystemDashboard",
    // route level code-splitting
    // this generates a separate chunk (upload-dropzoe.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "upload-dropzoe" */ "../views/TicketSystemDashboard.vue"),
  },
  {
    path: "/ticket-details",
    name: "TicketDetails",
    // route level code-splitting
    // this generates a separate chunk (ticket-details.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ticket-details" */ "../views/TicketDetails.vue"),
  },
  {
    path: "/ticket-system-create",
    name: "Ticket System Create",
    // route level code-splitting
    // this generates a separate chunk (ticket-system-create.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ticket-system-create" */ "../views/TicketSystemCreate.vue"),
  },
  {
    path: "/requests-cards",
    name: "Requests Cards",
    // route level code-splitting
    // this generates a separate chunk (requests-cards.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "requests-cards" */ "../views/RequestsCards.vue"),
  },
  {
    path: "/learning-center",
    name: "Learning Center",
    // route level code-splitting
    // this generates a separate chunk (learning-center.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "learning-center" */ "../views/LearningCenter.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
