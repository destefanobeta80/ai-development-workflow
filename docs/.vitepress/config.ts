// https://vitepress.vuejs.org/config/app-configs
export default {
  title: "AI Development Workflow",
  base: "/ai-development-workflow/",
  themeConfig: {
    sidebar: [
      {
        text: "Workflow",
        items: [
          { text: "Home", link: "/" }
        ]
      },
      {
        text: "Fasi",
        items: [
          { text: "Fase 0: Capire", link: "/capire" },
          { text: "Fase 1: Definire", link: "/definire" },
          { text: "Fase 2: Progettare", link: "/progettare" },
          { text: "Fase 3: Scomporre", link: "/scomporre" },
          { text: "Fase 4: Implementare", link: "/implementare" },
          { text: "Fase 5: Validare", link: "/validare" },
          { text: "Fase 6: Spiegare", link: "/spiegare" }
        ]
      },
      {
        text: "Strumenti Operativi",
        items: [
          { text: "Libreria prompt", link: "/libreria-prompt" },
          { text: "Template task", link: "/template-task" }
        ]
      }
    ]
  }
}
