const routes = [
  {
    path: "/",
    component: () => import ("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import ("pages/home/IndexPage.vue")
      },
      {
        path: "",
        name: "about",
        component: () => import ("pages/home/AboutPage.vue")
      },
      {
        path: "",
        name: "features",
        component: () => import ("pages/home/FeaturesPage.vue")
      },
      {
        path: "",
        name: "loginDefault",
        component: () => import ("pages/login/LoginPage.vue")
      },
      {
        path: "login",
        name: "login",
        component: () => import ("pages/login/LoginPage.vue")
      },
      {
        path: "register",
        name: "register",
        component: () => import ("pages/login/RegisterPage.vue")
      },
      {
        path: "email-confirmation",
        name: "email-confirmation",
        component: () => import ("pages/login/EmailConfirmationPage.vue")
      }, {
        path: "forgot-password",
        name: "forgot-password",
        component: () => import ("pages/login/ForgotPasswordPage.vue")
      }, {
        path: "reset-password",
        name: "reset-password",
        component: () => import ("pages/login/ResetPasswordPage.vue")
      }

    ],
    meta: {
      requiresAuth: false
    }
  }, {
    path: "/",
    component: () => import ("layouts/MainLayout.vue"),
    children: [
      {
        path: "me",
        name: "me",
        component: () => import ("pages/MePage.vue")
      },
      {
        path: "chatbot",
        name: "chatbot",
        component: () => import ("pages/bot/ChatPage1.vue")
      },
      {
        path: "sobre",
        name: "sobre",
        component: () => import ("pages/AboutPage.vue")
      },
      {
        path: "category",
        name: "category",
        component: () => import ("pages/category/List.vue")
      }, {
        path: "form-category/:id?",
        name: "form-category",
        component: () => import ("src/pages/category/Form.vue")
      }, {
        path: "prompt",
        name: "prompt",
        component: () => import ("pages/prompt/List.vue")
      }, {
        path: "form-prompt/:id?",
        name: "form-prompt",
        component: () => import ("src/pages/prompt/Form.vue")
      }, {
        path: "area-list",
        name: "area-list",
        component: () => import ("pages/digcompedu/areas/List.vue")
      }, {
        path: "digcompedu-intro",
        name: "digcompedu-intro",
        component: () => import ("pages/digcompedu/Intro.vue")
      }, {
        path: "level-list",
        name: "level-list",
        component: () => import ("pages/digcompedu/level/List.vue")
      }, {
        path: "digcompedu-checkin-list",
        name: "digcompedu-checkin-list",
        component: () => import ("pages/digcompedu/checkin/List.vue")
      }, {
        path: "digcompedu-checkin",
        name: "digcompedu-checkin",
        component: () => import ("pages/digcompedu/checkin/SelfReflection.vue")
      }, {
        path: "digcompedu-checkin-form/:id?",
        name: "digcompedu-checkin-form",
        component: () => import ("pages/digcompedu/checkin/SelfReflectionDetail.vue")
      }
    ],
    meta: {
      requiresAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import ("pages/login/ErrorNotFoundPage.vue")
  }
];

export default routes;
