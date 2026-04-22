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
          { text: "Fase 0: Comprendere", link: "/comprendere" },
          { text: "Fase 1: Progettare", link: "/progettare" },
          { text: "Fase 2: Scomporre", link: "/scomporre" },
          { text: "Fase 3: Implementare", link: "/implementare" },
          { text: "Fase 4: Validare", link: "/validare" },
          { text: "Fase 5: Spiegare", link: "/spiegare" }
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
