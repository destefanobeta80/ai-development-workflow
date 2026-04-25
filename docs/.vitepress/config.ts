// https://vitepress.vuejs.org/config/app-configs
export default {
  title: "AI Development Workflow",
  base: "/ai-development-workflow/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧭</text></svg>"
      }
    ]
  ],
  themeConfig: {
    outlineTitle: "In questa pagina",
    docFooter: {
      prev: "Pagina precedente",
      next: "Pagina successiva"
    },
    sidebar: [
      {
        text: "Inizio",
        items: [
          { text: "Panoramica", link: "/" }
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
        text: "Strumenti",
        items: [
          { text: "Libreria prompt", link: "/libreria-prompt" },
          { text: "Miglioramento continuo", link: "/miglioramento-continuo" }
        ]
      }
    ]
  }
}
