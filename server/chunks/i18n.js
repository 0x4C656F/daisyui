import { d as derived, w as writable } from "./index2.js";
let siteStats = {
  components: "53",
  themes: "29",
  githubStars: "+15,000",
  npmInstalls: "+2,000,000"
};
let siteData = {
  title: "Tailwind CSS Components",
  desc: "Free Tailwind Components",
  card: "/images/default.jpg"
};
let pagesThatDontNeedSidebar = ["/"];
let themes$b = [
  {
    name: "🌝  light",
    id: "light"
  },
  {
    name: "🌚  dark",
    id: "dark"
  },
  {
    name: "🧁  cupcake",
    id: "cupcake"
  },
  {
    name: "🐝  bumblebee",
    id: "bumblebee"
  },
  {
    name: "✳️  Emerald",
    id: "emerald"
  },
  {
    name: "🏢  Corporate",
    id: "corporate"
  },
  {
    name: "🌃  synthwave",
    id: "synthwave"
  },
  {
    name: "👴  retro",
    id: "retro"
  },
  {
    name: "🤖  cyberpunk",
    id: "cyberpunk"
  },
  {
    name: "🌸  valentine",
    id: "valentine"
  },
  {
    name: "🎃  halloween",
    id: "halloween"
  },
  {
    name: "🌷  garden",
    id: "garden"
  },
  {
    name: "🌲  forest",
    id: "forest"
  },
  {
    name: "🐟  aqua",
    id: "aqua"
  },
  {
    name: "👓  lofi",
    id: "lofi"
  },
  {
    name: "🖍  pastel",
    id: "pastel"
  },
  {
    name: "🧚‍♀️  fantasy",
    id: "fantasy"
  },
  {
    name: "📝  Wireframe",
    id: "wireframe"
  },
  {
    name: "🏴  black",
    id: "black"
  },
  {
    name: "💎  luxury",
    id: "luxury"
  },
  {
    name: "🧛‍♂️  dracula",
    id: "dracula"
  },
  {
    name: "🖨  CMYK",
    id: "cmyk"
  },
  {
    name: "🍁  Autumn",
    id: "autumn"
  },
  {
    name: "💼  Business",
    id: "business"
  },
  {
    name: "💊  Acid",
    id: "acid"
  },
  {
    name: "🍋  Lemonade",
    id: "lemonade"
  },
  {
    name: "🌙  Night",
    id: "night"
  },
  {
    name: "☕️  Coffee",
    id: "coffee"
  },
  {
    name: "❄️  Winter",
    id: "winter"
  }
];
let exampleRepos = [
  {
    name: "Next.js",
    href: "https://stackblitz.com/edit/daisyui-nextjs/",
    logos: ["/logos/nextjs.svg"]
  },
  {
    name: "SvelteKit",
    href: "https://stackblitz.com/edit/daisyui-sveltekit/",
    logos: ["/logos/svelte.svg"]
  },
  {
    name: "Nuxt 3",
    href: "https://stackblitz.com/edit/daisyui-nuxt3/",
    logos: ["/logos/nuxtjs.svg"]
  },
  {
    name: "Astro",
    href: "https://stackblitz.com/edit/daisyui-astro/",
    logos: ["/logos/astro.svg"]
  },
  {
    name: "Vue.js 3",
    href: "https://stackblitz.com/edit/daisyui-vue-vite/",
    logos: ["/logos/vue.svg"]
  },
  {
    name: "Solid.js",
    href: "https://stackblitz.com/edit/daisyui-solidjs/",
    logos: ["/logos/solidjs.svg", "/logos/vite.svg"]
  },
  {
    name: "Vite",
    href: "https://stackblitz.com/edit/daisyui-vite/",
    logos: ["/logos/vite.svg"]
  },
  {
    name: "React (Vite)",
    href: "https://stackblitz.com/edit/daisyui-react-vite/",
    logos: ["/logos/react.svg", "/logos/vite.svg"]
  },
  {
    name: "Svelte (Vite)",
    href: "https://stackblitz.com/edit/daisyui-svelte-vite/",
    logos: ["/logos/svelte.svg", "/logos/vite.svg"]
  },
  {
    name: "Remix",
    href: "https://stackblitz.com/edit/daisyui-remix/",
    logos: ["/logos/remix.svg"]
  },
  {
    name: "PostCSS",
    href: "https://stackblitz.com/edit/daisyui-postcss/",
    logos: ["/logos/postcss.svg"]
  },
  {
    name: "React (Webpack)",
    href: "https://stackblitz.com/edit/daisyui-react-webpack/",
    logos: ["/logos/react.svg", "/logos/webpack.svg"]
  },
  {
    name: "Qwik",
    href: "https://stackblitz.com/edit/daisyui-qwik/",
    logos: ["/logos/qwik.svg", "/logos/vite.svg"]
  },
  {
    name: "Preact",
    href: "https://stackblitz.com/edit/daisyui-preact-vite/",
    logos: ["/logos/preact.svg", "/logos/vite.svg"]
  },
  {
    name: "Lit",
    href: "https://stackblitz.com/edit/daisyui-lit-vite/",
    logos: ["/logos/lit.svg", "/logos/vite.svg"]
  },
  {
    name: "Angular",
    href: "https://stackblitz.com/edit/daisyui-angular/",
    logos: ["/logos/angular.svg"]
  },
  {
    name: "11ty",
    href: "https://stackblitz.com/edit/daisyui-11ty/",
    logos: ["/logos/11ty.svg"]
  },
  {
    name: "Snowpack",
    href: "https://stackblitz.com/edit/daisyui-snowpack/",
    logos: ["/logos/snowpack.svg"]
  },
  {
    name: "React (CRA)",
    href: "https://stackblitz.com/edit/daisyui-react-cra/",
    logos: ["/logos/react.svg", "/logos/cra.svg"]
  },
  {
    name: "Elm",
    href: "https://stackblitz.com/edit/elm-daisyui/",
    logos: ["/logos/elm.svg", "/logos/vite.svg"]
  },
  {
    name: "CDN (Tailwind)",
    href: "https://stackblitz.com/edit/daisyui-cdn/",
    logos: ["/logos/jsdelivr.svg"]
  },
  {
    name: "CDN (BassCSS)",
    href: "https://stackblitz.com/edit/daisyui-basscss/",
    logos: ["/logos/jsdelivr.svg"]
  },
  {
    name: "CDN (Tachyons)",
    href: "https://stackblitz.com/edit/daisyui-tachyons/",
    logos: ["/logos/jsdelivr.svg"]
  }
];
let pages$b = [
  {
    items: [
      {
        name: "Install",
        tags: "how setup install npm",
        href: "/docs/install/",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" /></svg>',
        badge: "",
        highlightAnotherItem: "/docs/cdn"
      },
      {
        name: "CDN",
        tags: "how cdn",
        href: "/docs/cdn/",
        icon: "",
        badge: "",
        hidden: true
      },
      {
        name: "Use",
        tags: "how use",
        href: "/docs/use/",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
        badge: ""
      },
      {
        name: "Customize components",
        tags: "customize components",
        href: "/docs/customize/",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
        badge: ""
      },
      {
        name: "Config",
        tags: "setup config styled themes base logs utils rtl",
        href: "/docs/config/",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>',
        badge: ""
      },
      {
        name: "Colors",
        tags: "colors 🎨",
        href: "/docs/colors/",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path d="M19,11.5C19,11.5 17,13.67 17,15C17,16.1 17.9,17 19,17C20.1,17 21,16.1 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z"/></svg>',
        badge: ""
      },
      {
        name: "Themes",
        tags: "themes disable custom color generator",
        href: "/docs/themes/",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>',
        badge: ""
      },
      {
        name: "Theme Generator",
        tags: "theme generator custom color generator",
        href: "/theme-generator/",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 512 512"><title>ionicons-v5-m</title><path d="M96,208H48a16,16,0,0,1,0-32H96a16,16,0,0,1,0,32Z"/><line x1="90.25" y1="90.25" x2="124.19" y2="124.19"/><path d="M124.19,140.19a15.91,15.91,0,0,1-11.31-4.69L78.93,101.56a16,16,0,0,1,22.63-22.63l33.94,33.95a16,16,0,0,1-11.31,27.31Z"/><path d="M192,112a16,16,0,0,1-16-16V48a16,16,0,0,1,32,0V96A16,16,0,0,1,192,112Z"/><line x1="293.89" y1="90.25" x2="259.95" y2="124.19"/><path d="M260,140.19a16,16,0,0,1-11.31-27.31l33.94-33.95a16,16,0,0,1,22.63,22.63L271.27,135.5A15.94,15.94,0,0,1,260,140.19Z"/><line x1="124.19" y1="259.95" x2="90.25" y2="293.89"/><path d="M90.25,309.89a16,16,0,0,1-11.32-27.31l33.95-33.94a16,16,0,0,1,22.62,22.63l-33.94,33.94A16,16,0,0,1,90.25,309.89Z"/><path d="M219,151.83a26,26,0,0,0-36.77,0l-30.43,30.43a26,26,0,0,0,0,36.77L208.76,276a4,4,0,0,0,5.66,0L276,214.42a4,4,0,0,0,0-5.66Z"/><path d="M472.31,405.11,304.24,237a4,4,0,0,0-5.66,0L237,298.58a4,4,0,0,0,0,5.66L405.12,472.31a26,26,0,0,0,36.76,0l30.43-30.43h0A26,26,0,0,0,472.31,405.11Z"/></svg>',
        badge: ""
      },
      {
        name: "Layout & Typography",
        tags: "layout typography padding margin grid flex spacing font",
        href: "/docs/layout-and-typography/",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M14.7999209,15 L9.19992091,15 L8,18 L6,18 L11,6 L13,6 L18,18 L16,18 L14.7999209,15 Z M13.9998682,13 L11.9997364,8 L9.99986818,13 L13.9998682,13 Z"/></svg>',
        badge: ""
      }
    ]
  },
  {
    name: "Actions",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-fuchsia-600"><path fill-rule="evenodd" d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z" clip-rule="evenodd" /></svg>',
    items: [
      {
        name: "Button",
        tags: "button btn 🍑",
        href: "/components/button/",
        icon: "",
        badge: ""
      },
      {
        name: "Dropdown",
        tags: "dropdown popover menu listbox",
        href: "/components/dropdown/",
        icon: "",
        badge: ""
      },
      {
        name: "Modal",
        tags: "dialog modal window popup",
        href: "/components/modal/",
        icon: "",
        badge: ""
      },
      {
        name: "Swap",
        tags: "swap transition toggle icon",
        href: "/components/swap/",
        icon: "",
        badge: ""
      }
    ]
  },
  {
    name: "Data display",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-teal-600"><path fill-rule="evenodd" d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zM2.5 9v5.75c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9h-15zM4 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H4zM6.25 6A.75.75 0 017 5.25h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H7a.75.75 0 01-.75-.75V6zM10 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H10z" clip-rule="evenodd" /></svg>',
    items: [
      {
        name: "Accordion",
        tags: "accordion disclosure",
        href: "/components/accordion/",
        icon: "",
        badge: ""
      },
      {
        name: "Alert",
        tags: "alert warning error message",
        href: "/components/alert/",
        icon: "",
        badge: ""
      },
      {
        name: "Avatar",
        tags: "avatar image profile picture",
        href: "/components/avatar/",
        icon: "",
        badge: ""
      },
      {
        name: "Badge",
        tags: "badge tag label",
        href: "/components/badge/",
        icon: "",
        badge: ""
      },
      {
        name: "Card",
        tags: "card",
        href: "/components/card/",
        icon: "",
        badge: ""
      },
      {
        name: "Carousel",
        tags: "carousel slider image",
        href: "/components/carousel/",
        icon: "",
        badge: ""
      },
      {
        name: "Chat bubble",
        tags: "chat bubble dialog message messenger",
        href: "/components/chat/",
        icon: "",
        badge: ""
      },
      {
        name: "Collapse",
        tags: "collapse disclosure show hide",
        href: "/components/collapse/",
        icon: "",
        badge: ""
      },
      {
        name: "Countdown",
        tags: "countdown counter timer",
        href: "/components/countdown/",
        icon: "",
        badge: ""
      },
      {
        name: "Kbd",
        tags: "kbd keyboard ⌨️",
        href: "/components/kbd/",
        icon: "",
        badge: ""
      },
      {
        name: "Loading",
        tags: "loading loader spinner progress",
        href: "/components/loading/",
        icon: "",
        badge: ""
      },
      {
        name: "Progress",
        tags: "progressbar progress loading percentage",
        href: "/components/progress/",
        icon: "",
        badge: ""
      },
      {
        name: "Radial progress",
        tags: "progressbar progress loading percentage",
        href: "/components/radial-progress/",
        icon: "",
        badge: ""
      },
      {
        name: "Stat",
        tags: "stats data",
        href: "/components/stat/",
        icon: "",
        badge: ""
      },
      {
        name: "Table",
        tags: "table",
        href: "/components/table/",
        icon: "",
        badge: ""
      },
      {
        name: "Tooltip",
        tags: "tooltip",
        href: "/components/tooltip/",
        icon: "",
        badge: ""
      }
    ]
  },
  {
    name: "Data input",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-rose-600"><path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" /><path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" /></svg>',
    items: [
      {
        name: "Checkbox",
        tags: "checkbox ✅",
        href: "/components/checkbox/",
        icon: "",
        badge: ""
      },
      {
        name: "File Input",
        tags: "file upload",
        href: "/components/file-input/",
        icon: "",
        badge: ""
      },
      {
        name: "Radio",
        tags: "radio",
        href: "/components/radio/",
        icon: "",
        badge: ""
      },
      {
        name: "Range",
        tags: "range slider",
        href: "/components/range/",
        icon: "",
        badge: ""
      },
      {
        name: "Rating",
        tags: "star rating radio",
        href: "/components/rating/",
        icon: "",
        badge: ""
      },
      {
        name: "Select",
        tags: "select option menu",
        href: "/components/select/",
        icon: "",
        badge: ""
      },
      {
        name: "Text input",
        tags: "text input",
        href: "/components/input/",
        icon: "",
        badge: ""
      },
      {
        name: "Textarea",
        tags: "textarea",
        href: "/components/textarea/",
        icon: "",
        badge: ""
      },
      {
        name: "Toggle",
        tags: "toggle switch checkbox",
        href: "/components/toggle/",
        icon: "",
        badge: ""
      }
    ]
  },
  {
    name: "Layout",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-blue-600"><path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" /></svg>',
    items: [
      {
        name: "Artboard",
        tags: "artboard mobile",
        href: "/components/artboard/",
        icon: "",
        badge: ""
      },
      {
        name: "Button group",
        tags: "button group",
        href: "/components/button-group/",
        icon: "",
        badge: "",
        deprecated: true
      },
      {
        name: "Divider",
        tags: "divider",
        href: "/components/divider/",
        icon: "",
        badge: ""
      },
      {
        name: "Drawer",
        tags: "drawer sidebar menu",
        href: "/components/drawer/",
        icon: "",
        badge: ""
      },
      {
        name: "Footer",
        tags: "footer 🦶",
        href: "/components/footer/",
        icon: "",
        badge: ""
      },
      {
        name: "Hero",
        tags: "hero title",
        href: "/components/hero/",
        icon: "",
        badge: ""
      },
      {
        name: "Indicator",
        tags: "indicator badge corner",
        href: "/components/indicator/",
        icon: "",
        badge: ""
      },
      {
        name: "Input group",
        tags: "input group label",
        href: "/components/input-group/",
        icon: "",
        badge: "",
        deprecated: true
      },
      {
        name: "Join (group items)",
        tags: "join group button group input group form group",
        href: "/components/join/",
        icon: "",
        badge: ""
      },
      {
        name: "Mask",
        tags: "mask crop 😷",
        href: "/components/mask/",
        icon: "",
        badge: ""
      },
      {
        name: "Stack",
        tags: "stack",
        href: "/components/stack/",
        icon: "",
        badge: ""
      },
      {
        name: "Toast",
        tags: "toast notification snackbar",
        href: "/components/toast/",
        icon: "",
        badge: ""
      }
    ]
  },
  {
    name: "Navigation",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-cyan-600"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" /><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" /></svg>',
    items: [
      {
        name: "Breadcrumbs",
        tags: "breadcrumbs links",
        href: "/components/breadcrumbs/",
        icon: "",
        badge: ""
      },
      {
        name: "Bottom navigation",
        tags: "bottom navigation app bar",
        href: "/components/bottom-navigation/",
        icon: "",
        badge: ""
      },
      {
        name: "Link",
        tags: "link href anchor 🔗",
        href: "/components/link/",
        icon: "",
        badge: ""
      },
      {
        name: "Menu",
        tags: "menu list",
        href: "/components/menu/",
        icon: "",
        badge: ""
      },
      {
        name: "Navbar",
        tags: "navbar navigation menu",
        href: "/components/navbar/",
        icon: "",
        badge: ""
      },
      {
        name: "Pagination",
        tags: "pagination links next previous",
        href: "/components/pagination/",
        icon: "",
        badge: ""
      },
      {
        name: "Steps",
        tags: "steps progress",
        href: "/components/steps/",
        icon: "",
        badge: ""
      },
      {
        name: "Tab",
        tags: "tabs",
        href: "/components/tab/",
        icon: "",
        badge: ""
      }
    ]
  },
  {
    name: "Mockup",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-lime-600"><path d="M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" /><path fill-rule="evenodd" d="M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z" clip-rule="evenodd" /></svg>',
    items: [
      {
        name: "Browser",
        tags: "mockup browser",
        href: "/components/mockup-browser/",
        icon: "",
        badge: ""
      },
      {
        name: "Code",
        tags: "mockup code",
        href: "/components/mockup-code/",
        icon: "",
        badge: ""
      },
      {
        name: "Phone",
        tags: "mockup iphone 📱",
        href: "/components/mockup-phone/",
        icon: "",
        badge: ""
      },
      {
        name: "Window",
        tags: "mockup window 🪟",
        href: "/components/mockup-window/",
        icon: "",
        badge: ""
      }
    ]
  },
  {
    name: "excluded",
    items: [
      {
        name: "CodePen example page",
        tags: "codepen",
        href: "/codepen/",
        icon: "",
        badge: ""
      },
      {
        name: "Tailwind Play example page",
        tags: "tailwind play",
        href: "/tailwindplay/",
        icon: "",
        badge: ""
      }
    ]
  }
];
const __name$a = "English";
const __code$a = "EN";
const __status$a = "";
const components$a = "Components";
const themes$a = "Themes";
const pages$a = "pages";
const config$a = "Config";
const links$a = "Links";
const changelog$a = "Changelog";
const license$a = "License";
const contributing$a = "Contributing";
const Install$a = "Install";
const Use$a = "Use";
const Config$a = "Config";
const Colors$a = "Colors";
const Themes$a = "Themes";
const Actions$a = "Actions";
const Button$a = "Button";
const Dropdown$a = "Dropdown";
const Modal$a = "Modal";
const Swap$a = "Swap";
const Alert$a = "Alert";
const Avatar$a = "Avatar";
const Badge$a = "Badge";
const Card$a = "Card";
const Carousel$a = "Carousel";
const Collapse$a = "Collapse";
const Countdown$a = "Countdown";
const Kbd$a = "Kbd";
const Progress$a = "Progress";
const Stat$a = "Stat";
const Table$a = "Table";
const Tooltip$a = "Tooltip";
const Checkbox$a = "Checkbox";
const Radio$a = "Radio";
const Range$a = "Range";
const Rating$a = "Rating";
const Select$a = "Select";
const Textarea$a = "Textarea";
const Toggle$a = "Toggle";
const Layout$a = "Layout";
const Artboard$a = "Artboard";
const Divider$a = "Divider";
const Drawer$a = "Drawer";
const Footer$a = "Footer";
const Hero$a = "Hero";
const Indicator$a = "Indicator";
const Mask$a = "Mask";
const Stack$a = "Stack";
const Toast$a = "Toast";
const Navigation$a = "Navigation";
const Breadcrumbs$a = "Breadcrumbs";
const Link$a = "Link";
const Menu$a = "Menu";
const Navbar$a = "Navbar";
const Pagination$a = "Pagination";
const Steps$a = "Steps";
const Tab$a = "Tab";
const Mockup$a = "Mockup";
const Code$a = "Code";
const Phone$a = "Phone";
const Window$a = "Window";
const excluded$a = "excluded";
const updated$a = "updated";
const Prev$a = "Prev";
const Next$a = "Next";
const Warning$a = "Warning";
const Or$a = "Or";
const Introduction$a = "Introduction";
const Benefits$a = "Benefits";
const Tabs$a = "Tabs";
const Type$a = "Type";
const Search$a = "Search";
const Randomize$a = "Randomize";
const Reset$a = "Reset";
const Preview$a = "Preview";
const Typography$a = "Typography";
const Component$a = "Component";
const Modifier$a = "Modifier";
const Responsive$a = "Responsive";
const Features$a = "Features";
const Links$a = "Links";
const Message$a = "Message";
const Customizable$a = "Customizable";
const Themeable$a = "Themeable";
const Dashboard$a = "Dashboard";
const Notifications$a = "Notifications";
const Messages$a = "Messages";
const People$a = "People";
const Products$a = "Products";
const Result$a = "Result";
const No_more_ugly_HTML_part_1$a = "No";
const No_more_ugly_HTML_part_2$a = "more";
const No_more_ugly_HTML_part_3$a = "ugly";
const No_more_ugly_HTML_part_4$a = "HTML";
const Click$a = "Click";
const Save$a = "Save";
const Apply_your_own_design_decisions_part_1$a = "Apply";
const Apply_your_own_design_decisions_part_2$a = "your";
const Apply_your_own_design_decisions_part_3$a = "own";
const Apply_your_own_design_decisions_part_4$a = "design";
const Apply_your_own_design_decisions_part_5$a = "decisions";
const Updates$a = "Updates";
const Stats$a = "Stats";
const en = {
  __name: __name$a,
  __code: __code$a,
  __status: __status$a,
  "Tailwind CSS Components": "Tailwind CSS Components",
  "cta-1": "See components",
  "cta-1-mobile": "Components",
  "cta-2": "How to use?",
  "components-btn": "Components",
  "change-theme-btn": "Theme",
  "all-components-btn": "See All Components",
  components: components$a,
  themes: themes$a,
  "github-stars": "Github Stars",
  "npm-installs": "NPM Installs",
  "install-title": "Install daisyUI",
  "install-desc": "Pure CSS. Works on all frameworks. daisyUI can be used as a Tailwind CSS plugin or as an independent CSS library",
  "install-step-1": "Install daisyUI as a Node package",
  "install-step-2": "Add daisyUI to Tailwind CSS as a plugin",
  "install-btn": "Install guide",
  "footer-tagline": "Free Component library <br /> For utility first CSS frameworks",
  pages: pages$a,
  "how-to-install": "How to install",
  "how-to-use-components": "How to use components",
  "how-to-customize": "How to customize",
  "how-to-use-themes": "How to use themes",
  "color-system": "Color system",
  config: config$a,
  links: links$a,
  changelog: changelog$a,
  license: license$a,
  contributing: contributing$a,
  "available-on": "Available on",
  "try-online": "Try online",
  "created-by": "Created by",
  Install: Install$a,
  Use: Use$a,
  "Customize components": "Customize components",
  Config: Config$a,
  Colors: Colors$a,
  Themes: Themes$a,
  "Theme Generator": "Theme Generator",
  "Layout & Typography": "Layout & Typography",
  Actions: Actions$a,
  Button: Button$a,
  Dropdown: Dropdown$a,
  Modal: Modal$a,
  Swap: Swap$a,
  "Data display": "Data display",
  Alert: Alert$a,
  Avatar: Avatar$a,
  Badge: Badge$a,
  Card: Card$a,
  Carousel: Carousel$a,
  "Chat bubble": "Chat bubble",
  Collapse: Collapse$a,
  Countdown: Countdown$a,
  Kbd: Kbd$a,
  Progress: Progress$a,
  "Radial progress": "Radial progress",
  Stat: Stat$a,
  Table: Table$a,
  Tooltip: Tooltip$a,
  "Data input": "Data input",
  Checkbox: Checkbox$a,
  "Text input": "Text input",
  Radio: Radio$a,
  Range: Range$a,
  Rating: Rating$a,
  Select: Select$a,
  Textarea: Textarea$a,
  Toggle: Toggle$a,
  Layout: Layout$a,
  Artboard: Artboard$a,
  "Button group": "Button group",
  Divider: Divider$a,
  Drawer: Drawer$a,
  Footer: Footer$a,
  Hero: Hero$a,
  Indicator: Indicator$a,
  "Input group": "Input group",
  Mask: Mask$a,
  Stack: Stack$a,
  Toast: Toast$a,
  Navigation: Navigation$a,
  Breadcrumbs: Breadcrumbs$a,
  "Bottom navigation": "Bottom navigation",
  Link: Link$a,
  Menu: Menu$a,
  Navbar: Navbar$a,
  Pagination: Pagination$a,
  Steps: Steps$a,
  Tab: Tab$a,
  Mockup: Mockup$a,
  Code: Code$a,
  Phone: Phone$a,
  Window: Window$a,
  excluded: excluded$a,
  "CodePen example page": "CodePen example page",
  "Tailwind Play example page": "Tailwind Play example page",
  "new": "new",
  updated: updated$a,
  "Tailwind Plugin": "Tailwind Plugin",
  "Use CDN": "Use CDN",
  "Install daisyUI as a Tailwind CSS plugin": "Install daisyUI as a Tailwind CSS plugin",
  "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> installed.": "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> installed.",
  "How to install daisyUI as a Tailwind CSS plugin?": "How to install daisyUI as a Tailwind CSS plugin?",
  "Install daisyUI": "Install daisyUI",
  "Then add daisyUI to your <code>tailwind.config.js</code> files": "Then add daisyUI to your <code>tailwind.config.js</code> files",
  "daisyUI example repositories": "daisyUI example repositories",
  "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.": "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.",
  Prev: Prev$a,
  Next: Next$a,
  "Do you have a question?": "Do you have a question?",
  "Do you see a bug?": "Do you see a bug?",
  "Do you like daisyUI?": "Do you like daisyUI?",
  "Edit this page on GitHub": "Edit this page on GitHub",
  "ask the community": "ask the community",
  "open an issue on GitHub": "open an issue on GitHub",
  "tweet about it!": "tweet about it!",
  Warning: Warning$a,
  "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large.": "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large.",
  "You don't need to install anything.": "You don't need to install anything.",
  "Just add one of these to the <code>head</code> tag of your HTML": "Just add one of these to the <code>head</code> tag of your HTML",
  Or: Or$a,
  "Add component classes to your HTML": "Add component classes to your HTML",
  "How to use daisyUI classes to style your page?": "How to use daisyUI classes to style your page?",
  "Once you <a href='/docs/install/'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc.": "Once you <a href='/docs/install/'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc.",
  "So instead of making a button using only utility classes": "So instead of making a button using only utility classes",
  "You can just use a component class like this": "You can just use a component class like this",
  "Then you can modify the component with daisyUI additional utility classes": "Then you can modify the component with daisyUI additional utility classes",
  "Or you can modify the component with Tailwind CSS utility classes": "Or you can modify the component with Tailwind CSS utility classes",
  "Customize daisyUI components": "Customize daisyUI components",
  "How to customize daisyUI?": "How to customize daisyUI?",
  "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.": "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.",
  "But you can still customize components in many ways.": "But you can still customize components in many ways.",
  "Let's say, you want to customize this button:": "Let's say, you want to customize this button:",
  "You can use daisyUI utility classes:": "You can use daisyUI utility classes:",
  "You can use Tailwind's utility classes:": "You can use Tailwind's utility classes:",
  "You can customize components on your CSS file, using Tailwind's @apply directive:": "You can customize components on your CSS file, using Tailwind's @apply directive:",
  "You can also:": "You can also:",
  "Add your own theme.": "Add your own theme.",
  "Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>.": "Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>.",
  "How to change the default configuration of daisyUI?": "How to change the default configuration of daisyUI?",
  "daisyUI can be configured from your <code>tailwind.config.js</code> file.": "daisyUI can be configured from your <code>tailwind.config.js</code> file.",
  "Default config": "Default config",
  "Config values explained": "Config values explained",
  "If it's true, components will have colors and style so you won't need to design anything.": "If it's true, components will have colors and style so you won't need to design anything.",
  "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.": "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.",
  "If it's true, all themes will be included.": "If it's true, all themes will be included.",
  "If it's false, only light and dark themes will be available.": "If it's false, only light and dark themes will be available.",
  "If it's an array, only themes in the array will be included and the first theme will be the default theme.": "If it's an array, only themes in the array will be included and the first theme will be the default theme.",
  "Read more about <a href='/docs/themes/'>themes</a>": "Read more about <a href='/docs/themes/'>themes</a>",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.": "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.": "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.",
  "If it's true, daisyUI shows logs in the terminal while CSS is building.": "If it's true, daisyUI shows logs in the terminal while CSS is building.",
  "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag.": "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag.",
  "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically.": "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin to flip all your Tailwind utilities automatically.",
  "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.": "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.",
  "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).": "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).",
  "For example: <code>btn</code> will become <code>prefix-btn</code>.": "For example: <code>btn</code> will become <code>prefix-btn</code>.",
  "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.": "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.",
  "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.": "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.",
  "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.": "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.",
  "How to use daisyUI colors?": "How to use daisyUI colors?",
  Introduction: Introduction$a,
  "daisyUI is fully themeable and colorable,": "daisyUI is fully themeable and colorable,",
  "So instead of using constant color utility classes like:": "So instead of using constant color utility classes like:",
  "It's suggested to use semantic color utility classes like:": "It's suggested to use semantic color utility classes like:",
  "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.": "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.",
  Benefits: Benefits$a,
  "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces.": "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces.",
  "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.": "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.",
  "List of all daisyUI color names": "List of all daisyUI color names",
  "You can use these color names in your theme or in utility classes.": "You can use these color names in your theme or in utility classes.",
  "Color name + description": "Color name + description",
  "Required or optional for themes": "Required or optional for themes",
  "Example use": "Example use",
  "How to use": "How to use",
  "Some daisyUI components come with modifier class names and that modifier class name will apply a color.": "Some daisyUI components come with modifier class names and that modifier class name will apply a color.",
  "For example": "For example",
  "You can also use color names in utility classes just like Tailwind's original color names.": "You can also use color names in utility classes just like Tailwind's original color names.",
  "These are utility classes that can be used with a color name:": "These are utility classes that can be used with a color name:",
  "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc.": "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc.",
  "daisyUI comes with a number of themes, which you can use with no extra effort.": "daisyUI comes with a number of themes, which you can use with no extra effort.",
  "Each theme defines a set of colors which will be used on all daisyUI elements.": "Each theme defines a set of colors which will be used on all daisyUI elements.",
  "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:": "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:",
  "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage.": "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage.",
  "List of themes": "List of themes",
  "Try them:": "Try them:",
  "The default theme is <code>light</code> (or <code>dark</code> for dark mode)": "The default theme is <code>light</code> (or <code>dark</code> for dark mode)",
  "but you can <a href='https://daisyui.com/docs/config/'>change the default theme from tailwind.config.js</a>": "but you can <a href='https://daisyui.com/docs/config/'>change the default theme from tailwind.config.js</a>",
  "How to remove unused themes?": "How to remove unused themes?",
  "You can only include the themes you want in your project.": "You can only include the themes you want in your project.",
  "This will reduce the size of your CSS file.": "This will reduce the size of your CSS file.",
  "In the below example": "In the below example",
  "<code>cupcake</code> will be the default theme for light mode": "<code>cupcake</code> will be the default theme for light mode",
  "<code>dark</code> will be the default theme for dark mode": "<code>dark</code> will be the default theme for dark mode",
  "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>": "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>",
  "How to disable all themes?": "How to disable all themes?",
  "If you only want the default light and dark themes, set <code>themes</code> config to false.": "If you only want the default light and dark themes, set <code>themes</code> config to false.",
  "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array.": "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array.",
  "How to use a theme only for a section of a page?": "How to use a theme only for a section of a page?",
  "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme.": "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme.",
  "You can nest themes and there is no limit!": "You can nest themes and there is no limit!",
  "You can force a section of your HTML to only use a specific theme.": "You can force a section of your HTML to only use a specific theme.",
  "How to add a new custom theme?": "How to add a new custom theme?",
  "You can add a new theme from <code>tailwind.config.js</code> file.": "You can add a new theme from <code>tailwind.config.js</code> file.",
  "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes.": "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes.",
  "The first theme (<code>mytheme</code>) will be the default theme.": "The first theme (<code>mytheme</code>) will be the default theme.",
  "<code>dark</code> theme will be the default theme for dark mode.": "<code>dark</code> theme will be the default theme for dark mode.",
  "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button).": "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button).",
  "CSS variables in daisyUI themes": "CSS variables in daisyUI themes",
  "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:": "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:",
  "You can also add <a href='/docs/colors/' class='link'>optional color names</a> to have full control over all colors.": "You can also add <a href='/docs/colors/' class='link'>optional color names</a> to have full control over all colors.",
  "Custom CSS for a daisyUI theme": "Custom CSS for a daisyUI theme",
  "You can apply custom style to a daisyUI themes using CSS:": "You can apply custom style to a daisyUI themes using CSS:",
  "How to customize an existing theme?": "How to customize an existing theme?",
  "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.": "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.",
  "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:": "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:",
  "Contribute to translation": "Contribute to translation",
  "Alert informs users about important events.": "Alert informs users about important events.",
  "Artboard provides fixed size container to display a demo content on mobile size.": "Artboard provides fixed size container to display a demo content on mobile size.",
  "Avatars are used to show a thumbnail representation of an individual or business in the interface.": "Avatars are used to show a thumbnail representation of an individual or business in the interface.",
  "Badges are used to inform the user of the status of specific data.": "Badges are used to inform the user of the status of specific data.",
  "Bottom navigation bar allows navigation between primary screens.": "Bottom navigation bar allows navigation between primary screens.",
  "Breadcrumbs helps users to navigate through the website.": "Breadcrumbs helps users to navigate through the website.",
  "Button group shows buttons next to each other.": "Button group shows buttons next to each other.",
  "Buttons allow the user to take actions or make choices.": "Buttons allow the user to take actions or make choices.",
  "Cards are used to group and display content in a way that is easily readable.": "Cards are used to group and display content in a way that is easily readable.",
  "Carousel show images or content in a scrollable area.": "Carousel show images or content in a scrollable area.",
  "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.": "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.",
  "Checkboxes are used to select or deselect a value.": "Checkboxes are used to select or deselect a value.",
  "Collapse is used for showing and hiding content.": "Collapse is used for showing and hiding content.",
  "Countdown gives you a transition effect of changing numbers.": "Countdown gives you a transition effect of changing numbers.",
  "Divider will be used to separate content vertically or horizontally.": "Divider will be used to separate content vertically or horizontally.",
  "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.": "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.",
  "Dropdown can open a menu or any other element when the button is clicked.": "Dropdown can open a menu or any other element when the button is clicked.",
  "File Input is a an input field for uploading files.": "File Input is a an input field for uploading files.",
  "Footer can contain logo, copyright notice, and links to other pages.": "Footer can contain logo, copyright notice, and links to other pages.",
  "Hero is a component for displaying a large box or image with a title and description.": "Hero is a component for displaying a large box or image with a title and description.",
  "Indicators are used to place an element on the corner of another element.": "Indicators are used to place an element on the corner of another element.",
  "Input group puts an input next to a text or a button.": "Input group puts an input next to a text or a button.",
  "Text Input is a simple input field.": "Text Input is a simple input field.",
  "Kbd is used to display keyboard shortcuts.": "Kbd is used to display keyboard shortcuts.",
  "Link adds the missing underline style to links.": "Link adds the missing underline style to links.",
  "Mask crops the content of the element to common shapes.": "Mask crops the content of the element to common shapes.",
  "Menu is used to display a list of links vertically or horizontally.": "Menu is used to display a list of links vertically or horizontally.",
  "Code mockup is used to show a block of code in a box that looks like a code editor.": "Code mockup is used to show a block of code in a box that looks like a code editor.",
  "Phone mockup shows a mockup of an iPhone.": "Phone mockup shows a mockup of an iPhone.",
  "Window mockup shows a box that looks like an operating system window.": "Window mockup shows a box that looks like an operating system window.",
  "Modal is used to show a dialog or a box when you click a button.": "Modal is used to show a dialog or a box when you click a button.",
  "Navbar is used to show a navigation bar on the top of the page.": "Navbar is used to show a navigation bar on the top of the page.",
  "Pagination is a group of buttons that allow the user to navigate between a set of related content.": "Pagination is a group of buttons that allow the user to navigate between a set of related content.",
  "Progress bar can be used to show the progress of a task or to show the passing of time.": "Progress bar can be used to show the progress of a task or to show the passing of time.",
  "Radial progress can be used to show the progress of a task or to show the passing of time.": "Radial progress can be used to show the progress of a task or to show the passing of time.",
  "Radio buttons allow the user to select one option from a set.": "Radio buttons allow the user to select one option from a set.",
  "Range slider is used to select a value by sliding a handle.": "Range slider is used to select a value by sliding a handle.",
  "Rating is a set of radio buttons that allow the user to rate something.": "Rating is a set of radio buttons that allow the user to rate something.",
  "Select is used to pick a value from a list of options.": "Select is used to pick a value from a list of options.",
  "Stack visually puts elements on top of each other.": "Stack visually puts elements on top of each other.",
  "Stat is used to show numbers and data in a box.": "Stat is used to show numbers and data in a box.",
  "Steps can be used to show a list of steps in a process.": "Steps can be used to show a list of steps in a process.",
  "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.": "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.",
  "Tabs can be used to show a list of links in a tabbed format.": "Tabs can be used to show a list of links in a tabbed format.",
  "Table can be used to show a list of data in a table format.": "Table can be used to show a list of data in a table format.",
  "Textarea allows users to enter text in multiple lines.": "Textarea allows users to enter text in multiple lines.",
  "Toggle is a checkbox that is styled to look like a switch button.": "Toggle is a checkbox that is styled to look like a switch button.",
  "Toast is a wrapper to stack elements, positioned on the corner of page.": "Toast is a wrapper to stack elements, positioned on the corner of page.",
  "Tooltip can be used to show a message when hovering over an element.": "Tooltip can be used to show a message when hovering over an element.",
  "Code mockup": "Code mockup",
  "Phone mockup": "Phone mockup",
  "Window mockup": "Window mockup",
  "File Input": "File Input",
  "Text Input": "Text Input",
  "Range slider": "Range slider",
  Tabs: Tabs$a,
  "All daisyUI components": "All daisyUI components",
  "Class name": "Class name",
  Type: Type$a,
  Search: Search$a,
  "daisyUI themes": "daisyUI themes",
  "How to use daisyUI themes?": "How to use daisyUI themes?",
  "daisyUI Theme Generator": "daisyUI Theme Generator",
  "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them.": "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them.",
  "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)": "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)",
  "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use.": "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use.",
  "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)": "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)",
  Randomize: Randomize$a,
  Reset: Reset$a,
  Preview: Preview$a,
  "Layout and Typography": "Layout and Typography",
  "How to use layouts and typography in daisyUI": "How to use layouts and typography in daisyUI",
  "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.": "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.",
  "Read more": "Read more",
  Typography: Typography$a,
  "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.": "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.",
  "It handles everything and it's fully customizable.": "It handles everything and it's fully customizable.",
  "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.": "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.",
  "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js": "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js",
  "Here you can see how elements will look using <code>@tailwindcss/typography</code>.": "Here you can see how elements will look using <code>@tailwindcss/typography</code>.",
  "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>": "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>",
  Component: Component$a,
  Modifier: Modifier$a,
  Responsive: Responsive$a,
  "Changes the style of a component": "Changes the style of a component",
  "Supports responsive prefixes (sm:, lg:, …)": "Supports responsive prefixes (sm:, lg:, …)",
  "Make your theme": "Make your theme",
  "More examples": "More examples",
  "Support daisyUI's development": "Support daisyUI's development",
  "The most popular": "The most popular",
  "component library": "component library",
  "for Tailwind CSS": "for Tailwind CSS",
  "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>": "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>",
  "don't re-invent<br/>the wheel<br/>every time": "don't re-invent<br/>the wheel<br/>every time",
  "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.": "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.",
  "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>": "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>",
  "For every element, every page, every project,<br/>again and again": "For every element, every page, every project,<br/>again and again",
  "use <span class='text-success'><span class='font-black'>semantic</span><br />class names</span>": "use <span class='text-success'><span class='font-black'>semantic</span><br />class names</span>",
  "It's descriptive, faster, cleaner and easier to maintain.": "It's descriptive, faster, cleaner and easier to maintain.",
  Features: Features$a,
  Links: Links$a,
  Message: Message$a,
  "Cleaner HTML": "Cleaner HTML",
  Customizable: Customizable$a,
  Themeable: Themeable$a,
  "Pure CSS": "Pure CSS",
  Dashboard: Dashboard$a,
  Notifications: Notifications$a,
  Messages: Messages$a,
  People: People$a,
  Products: Products$a,
  "Use Tailwind CSS but write fewer class names.": "Use Tailwind CSS but write fewer class names.",
  "Pure CSS. <br />No JS dependency": "Pure CSS. <br />No JS dependency",
  "Works on all frameworks": "Works on all frameworks",
  "Design system": "Design system",
  "Styling a simple button": "Styling a simple button",
  Result: Result$a,
  "Take Tailwind CSS": "Take Tailwind CSS",
  "to the next level": "to the next level",
  "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like": "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like",
  "and many more.": "and many more.",
  "This allows us to focus on important things<br />instead of styling basic elements for every project.": "This allows us to focus on important things<br />instead of styling basic elements for every project.",
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$a,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$a,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$a,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$a,
  "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.": "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.",
  Click: Click$a,
  "Tailwind only": "Tailwind only",
  "Tailwind + daisyUI": "Tailwind + daisyUI",
  Save: Save$a,
  "Accept terms of use": "Accept terms of use",
  "Submit to newsletter": "Submit to newsletter",
  "Fewer class names": "Fewer class names",
  "Faster development": "Faster development",
  "Smaller file size": "Smaller file size",
  "With daisyUI, you write 80% fewer class names<br />And your HTML size will be about 70% smaller.": "With daisyUI, you write 80% fewer class names<br />And your HTML size will be about 70% smaller.",
  "CSS Class names": "CSS Class names",
  "fewer class names": "fewer class names",
  "HTML size": "HTML size",
  "smaller DOM size": "smaller DOM size",
  "Highly customizable": "Highly customizable",
  "Powered by Tailwind&nbsp;CSS utility&nbsp;classes": "Powered by Tailwind&nbsp;CSS utility&nbsp;classes",
  "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes.": "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes.",
  "Pure CSS.": "Pure CSS.",
  "Framework agnostic.": "Framework agnostic.",
  "Works everywhere.": "Works everywhere.",
  "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file.": "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file.",
  "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name.": "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name.",
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$a,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$a,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$a,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$a,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$a,
  "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components.": "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components.",
  "Learn more about themes": "Learn more about themes",
  "utility classes": "utility classes",
  "endless possibilities": "endless possibilities",
  "Mix and match daisyUI class names to create unique web pages.": "Mix and match daisyUI class names to create unique web pages.",
  "daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS": "daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS",
  "open-source projects using daisyUI": "open-source projects using daisyUI",
  "Free and open-source": "Free and open-source",
  "Built by the community": "Built by the community",
  "daisyUI welcomes contributions from developers around the world": "daisyUI welcomes contributions from developers around the world",
  "Sponsors and backers": "Sponsors and backers",
  "Try daisyUI": "Try daisyUI",
  "on your favorite framework": "on your favorite framework",
  "See all examples": "See all examples",
  "Or play with daisyUI on": "Or play with daisyUI on",
  "Admin panel": "Admin panel",
  Updates: Updates$a,
  Stats: Stats$a,
  "Unlimited themes": "Unlimited themes",
  "with zero effort": "with zero effort",
  "daisyUI adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values. Using daisyUI color names, you get Dark Mode and even more themes without adding a new class name.": "daisyUI adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values. Using daisyUI color names, you get Dark Mode and even more themes without adding a new class name.",
  "See all themes": "See all themes",
  "Semantic colors": "Semantic colors",
  "Learn more about colors": "Learn more about colors",
  "Get started": "Get started",
  "daisyUI 3 is available now!": "daisyUI 3 is available now!",
  "Become a sponsor": "Become a sponsor",
  "": ""
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Actions: Actions$a,
  Alert: Alert$a,
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$a,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$a,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$a,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$a,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$a,
  Artboard: Artboard$a,
  Avatar: Avatar$a,
  Badge: Badge$a,
  Benefits: Benefits$a,
  Breadcrumbs: Breadcrumbs$a,
  Button: Button$a,
  Card: Card$a,
  Carousel: Carousel$a,
  Checkbox: Checkbox$a,
  Click: Click$a,
  Code: Code$a,
  Collapse: Collapse$a,
  Colors: Colors$a,
  Component: Component$a,
  Config: Config$a,
  Countdown: Countdown$a,
  Customizable: Customizable$a,
  Dashboard: Dashboard$a,
  Divider: Divider$a,
  Drawer: Drawer$a,
  Dropdown: Dropdown$a,
  Features: Features$a,
  Footer: Footer$a,
  Hero: Hero$a,
  Indicator: Indicator$a,
  Install: Install$a,
  Introduction: Introduction$a,
  Kbd: Kbd$a,
  Layout: Layout$a,
  Link: Link$a,
  Links: Links$a,
  Mask: Mask$a,
  Menu: Menu$a,
  Message: Message$a,
  Messages: Messages$a,
  Mockup: Mockup$a,
  Modal: Modal$a,
  Modifier: Modifier$a,
  Navbar: Navbar$a,
  Navigation: Navigation$a,
  Next: Next$a,
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$a,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$a,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$a,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$a,
  Notifications: Notifications$a,
  Or: Or$a,
  Pagination: Pagination$a,
  People: People$a,
  Phone: Phone$a,
  Prev: Prev$a,
  Preview: Preview$a,
  Products: Products$a,
  Progress: Progress$a,
  Radio: Radio$a,
  Randomize: Randomize$a,
  Range: Range$a,
  Rating: Rating$a,
  Reset: Reset$a,
  Responsive: Responsive$a,
  Result: Result$a,
  Save: Save$a,
  Search: Search$a,
  Select: Select$a,
  Stack: Stack$a,
  Stat: Stat$a,
  Stats: Stats$a,
  Steps: Steps$a,
  Swap: Swap$a,
  Tab: Tab$a,
  Table: Table$a,
  Tabs: Tabs$a,
  Textarea: Textarea$a,
  Themeable: Themeable$a,
  Themes: Themes$a,
  Toast: Toast$a,
  Toggle: Toggle$a,
  Tooltip: Tooltip$a,
  Type: Type$a,
  Typography: Typography$a,
  Updates: Updates$a,
  Use: Use$a,
  Warning: Warning$a,
  Window: Window$a,
  __code: __code$a,
  __name: __name$a,
  __status: __status$a,
  changelog: changelog$a,
  components: components$a,
  config: config$a,
  contributing: contributing$a,
  default: en,
  excluded: excluded$a,
  license: license$a,
  links: links$a,
  pages: pages$a,
  themes: themes$a,
  updated: updated$a
}, Symbol.toStringTag, { value: "Module" }));
const __name$9 = "Español";
const __code$9 = "ES";
const __status$9 = "";
const components$9 = "Componentes";
const themes$9 = "Temas";
const pages$9 = "Páginas";
const config$9 = "Configuración";
const links$9 = "Enlaces";
const changelog$9 = "Registro de cambios";
const license$9 = "Licencia";
const contributing$9 = "Contribuir";
const Install$9 = "Instalar";
const Use$9 = "Utilizar";
const Config$9 = "Configuración";
const Colors$9 = "Colores";
const Themes$9 = "Temas";
const Actions$9 = "Acciones";
const Button$9 = "Button";
const Dropdown$9 = "Dropdown";
const Modal$9 = "Modal";
const Swap$9 = "Swap";
const Alert$9 = "Alert";
const Avatar$9 = "Avatar";
const Badge$9 = "Badge";
const Card$9 = "Card";
const Carousel$9 = "Carousel";
const Collapse$9 = "Collapse";
const Countdown$9 = "Countdown";
const Kbd$9 = "Kbd";
const Progress$9 = "Progress";
const Stat$9 = "Stat";
const Table$9 = "Table";
const Tooltip$9 = "Tooltip";
const Checkbox$9 = "Checkbox";
const Radio$9 = "Radio";
const Range$9 = "Range";
const Rating$9 = "Rating";
const Select$9 = "Select";
const Textarea$9 = "Textarea";
const Toggle$9 = "Toggle";
const Layout$9 = "Disposición";
const Artboard$9 = "Artboard";
const Divider$9 = "Divider";
const Drawer$9 = "Drawer";
const Footer$9 = "Footer";
const Hero$9 = "Hero";
const Indicator$9 = "Indicator";
const Mask$9 = "Mask";
const Stack$9 = "Stack";
const Toast$9 = "Toast";
const Navigation$9 = "Navegación";
const Breadcrumbs$9 = "Breadcrumbs";
const Link$9 = "Link";
const Menu$9 = "Menu";
const Navbar$9 = "Navbar";
const Pagination$9 = "Pagination";
const Steps$9 = "Steps";
const Tab$9 = "Tab";
const Mockup$9 = "Mockup";
const Code$9 = "Código";
const Phone$9 = "Teléfono";
const Window$9 = "Ventana";
const excluded$9 = "excluido";
const updated$9 = "actualizado";
const Prev$9 = "Anterior";
const Next$9 = "Próximo";
const Warning$9 = "Advertencia";
const Or$9 = "O";
const Introduction$9 = "Introducción";
const Benefits$9 = "Beneficios";
const Tabs$9 = "Pestañas";
const Type$9 = "Escribe";
const Search$9 = "Buscar";
const Randomize$9 = "Aleatorizar";
const Reset$9 = "Reiniciar";
const Preview$9 = "Vista previa";
const Typography$9 = "Tipografía";
const Component$9 = "Componente";
const Modifier$9 = "Modificador";
const Responsive$9 = "Adaptable";
const Features$9 = "Ventajas";
const Links$9 = "Enlaces";
const Message$9 = "Mensaje";
const Customizable$9 = "Personalizable";
const Themeable$9 = "Temático";
const Dashboard$9 = "Tablero";
const Notifications$9 = "Notificaciones";
const Messages$9 = "Mensajes";
const People$9 = "Personas";
const Products$9 = "Productos";
const Result$9 = "Resultado";
const No_more_ugly_HTML_part_1$9 = "No";
const No_more_ugly_HTML_part_2$9 = "más";
const No_more_ugly_HTML_part_3$9 = "HTML";
const No_more_ugly_HTML_part_4$9 = "feo";
const Click$9 = "Haga clic";
const Save$9 = "Guardar";
const Apply_your_own_design_decisions_part_1$9 = "Aplicar";
const Apply_your_own_design_decisions_part_2$9 = "sus";
const Apply_your_own_design_decisions_part_3$9 = "propios";
const Apply_your_own_design_decisions_part_4$9 = "decisiones";
const Apply_your_own_design_decisions_part_5$9 = "de diseño";
const Updates$9 = "Noticias";
const Stats$9 = "Datos";
const es = {
  __name: __name$9,
  __code: __code$9,
  __status: __status$9,
  "Tailwind CSS Components": "Componentes de Tailwind CSS",
  "cta-1": "Ver componentes",
  "cta-1-mobile": "Componentes",
  "cta-2": "¿Cómo utilizar?",
  "components-btn": "Componentes",
  "change-theme-btn": "Tema",
  "all-components-btn": "Ver componentes",
  components: components$9,
  themes: themes$9,
  "github-stars": "Estrellas de Github",
  "npm-installs": "Instalaciones NPM",
  "install-title": "Instalar daisyUI",
  "install-desc": "CSS puro. Funciona en todos los marcos de trabajo. daisyUI se puede usar como un complemento de Tailwind CSS o como una biblioteca CSS independiente",
  "install-step-1": "Instale daisyUI como un paquete de Node",
  "install-step-2": "Agregue daisyUI a Tailwind CSS como un complemento",
  "install-btn": "Guía de instalación",
  "footer-tagline": "Biblioteca de componentes gratuitos <br /> Para los marcos de trabajo CSS orientados a clases de utilidad",
  pages: pages$9,
  "how-to-install": "Cómo instalar",
  "how-to-use-components": "Cómo usar los componentes",
  "how-to-customize": "Cómo personalizar",
  "how-to-use-themes": "Cómo usar temas",
  "color-system": "Sistema de colores",
  config: config$9,
  links: links$9,
  changelog: changelog$9,
  license: license$9,
  contributing: contributing$9,
  "available-on": "Disponible en",
  "try-online": "Prueba en línea",
  "created-by": "Creado por",
  Install: Install$9,
  Use: Use$9,
  "Customize components": "Personalizar componentes",
  Config: Config$9,
  Colors: Colors$9,
  Themes: Themes$9,
  "Theme Generator": "Generador de Temas",
  "Layout & Typography": "Diseño y Tipografía",
  Actions: Actions$9,
  Button: Button$9,
  Dropdown: Dropdown$9,
  Modal: Modal$9,
  Swap: Swap$9,
  "Data display": "Visualización de datos",
  Alert: Alert$9,
  Avatar: Avatar$9,
  Badge: Badge$9,
  Card: Card$9,
  Carousel: Carousel$9,
  "Chat bubble": "Chat bubble",
  Collapse: Collapse$9,
  Countdown: Countdown$9,
  Kbd: Kbd$9,
  Progress: Progress$9,
  "Radial progress": "Radial progress",
  Stat: Stat$9,
  Table: Table$9,
  Tooltip: Tooltip$9,
  "Data input": "Entrada de datos",
  Checkbox: Checkbox$9,
  "Text input": "Text input",
  Radio: Radio$9,
  Range: Range$9,
  Rating: Rating$9,
  Select: Select$9,
  Textarea: Textarea$9,
  Toggle: Toggle$9,
  Layout: Layout$9,
  Artboard: Artboard$9,
  "Button group": "Button group",
  Divider: Divider$9,
  Drawer: Drawer$9,
  Footer: Footer$9,
  Hero: Hero$9,
  Indicator: Indicator$9,
  "Input group": "Input group",
  Mask: Mask$9,
  Stack: Stack$9,
  Toast: Toast$9,
  Navigation: Navigation$9,
  Breadcrumbs: Breadcrumbs$9,
  "Bottom navigation": "Bottom navigation",
  Link: Link$9,
  Menu: Menu$9,
  Navbar: Navbar$9,
  Pagination: Pagination$9,
  Steps: Steps$9,
  Tab: Tab$9,
  Mockup: Mockup$9,
  Code: Code$9,
  Phone: Phone$9,
  Window: Window$9,
  excluded: excluded$9,
  "CodePen example page": "Página de ejemplo de CodePen",
  "Tailwind Play example page": "Página de ejemplo de Tailwind Play",
  "new": "nuevo",
  updated: updated$9,
  "Tailwind Plugin": "Complemento de Tailwind",
  "Use CDN": "Usar CDN",
  "Install daisyUI as a Tailwind CSS plugin": "Instale daisyUI como un complemento de Tailwind CSS",
  "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> installed.": "Necesita <a href='https://nodejs.org/en/download/'>Node.js</a> y <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> instalado.",
  "How to install daisyUI as a Tailwind CSS plugin?": "¿Cómo instalar daisyUI como complemento de Tailwind CSS?",
  "Install daisyUI": "Instalar daisyUI",
  "Then add daisyUI to your <code>tailwind.config.js</code> files": "Luego agregue daisyUI a sus archivos <code>tailwind.config.js</code>",
  "daisyUI example repositories": "Repositorios de ejemplo de daisyUI",
  "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.": "Vea la configuración de ejemplo de daisyUI y Tailwind CSS en diferentes marcos de trabajo y herramientas de compilación.",
  Prev: Prev$9,
  Next: Next$9,
  "Do you have a question?": "¿Tienes una pregunta?",
  "Do you see a bug?": "¿Ves un error?",
  "Do you like daisyUI?": "¿Te gusta daisyUI?",
  "Edit this page on GitHub": "Editar esta página en GitHub",
  "ask the community": "pregunta a la comunidad",
  "open an issue on GitHub": "abrir un problema en GitHub",
  "tweet about it!": "¡twittea sobre esto!",
  Warning: Warning$9,
  "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large.": "Los archivos CDN no se recomiendan para la producción <br/>porque no puede eliminar los estilos no utilizados y el tamaño del archivo será grande.",
  "You don't need to install anything.": "No necesitas instalar nada.",
  "Just add one of these to the <code>head</code> tag of your HTML": "Simplemente agregue uno de estos a la etiqueta <code>head</code> de su HTML",
  Or: Or$9,
  "Add component classes to your HTML": "Agregue clases de componentes a su HTML",
  "How to use daisyUI classes to style your page?": "¿Cómo usar las clases daisyUI para diseñar tu página?",
  "Once you <a href='/docs/install/'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc.": "Una vez que <a href='/docs/install/'>instaló daisyUI</a>, puede usar clases de componentes como <code>btn</code>, <code>card</code>, etc.",
  "So instead of making a button using only utility classes": "Entonces, en lugar de hacer un botón usando solo clases de utilidad",
  "You can just use a component class like this": "Puedes usar una clase de componente como esta",
  "Then you can modify the component with daisyUI additional utility classes": "Luego puede modificar el componente con clases de utilidad adicionales de daisyUI",
  "Or you can modify the component with Tailwind CSS utility classes": "O puede modificar el componente con las clases de utilidad de Tailwind CSS",
  "Customize daisyUI components": "Personalizar los componentes de daisyUI",
  "How to customize daisyUI?": "Cómo personalizar daisyUI",
  "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.": "Los componentes daisyUI vienen con muchas variantes necesarias para los sistemas de diseño y, por lo general, no necesitará personalizar nada.",
  "But you can still customize components in many ways.": "Pero aún puede personalizar los componentes de muchas maneras.",
  "Let's say, you want to customize this button:": "Digamos que desea personalizar este botón:",
  "You can use daisyUI utility classes:": "Puede usar las clases de utilidad de daisyUI:",
  "You can use Tailwind's utility classes:": "Puede utilizar las clases de utilidad de Tailwind:",
  "You can customize components on your CSS file, using Tailwind's @apply directive:": "Puede personalizar componentes en su archivo CSS, utilizando la directiva @apply de Tailwind.",
  "You can also:": "También puedes:",
  "Add your own theme.": "agregar tu propio tema",
  "Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>.": "optar por no seguir las decisiones de diseño de daisyUI <a href='/docs/config/'>solo use una versión sin estilos de daisyUI</a>.",
  "How to change the default configuration of daisyUI?": "¿Cómo cambiar la configuración predeterminada de daisyUI?",
  "daisyUI can be configured from your <code>tailwind.config.js</code> file.": "daisyUI se puede configurar desde el archivo <code>tailwind.config.js</code>.",
  "Default config": "Configuración predeterminada",
  "Config values explained": "Valores de configuración explicados",
  "If it's true, components will have colors and style so you won't need to design anything.": "Si es true, los componentes tendrán colores y estilo, por lo que no necesitará diseñar nada.",
  "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.": "Si es false, los componentes no tendrán color ni estilo visual para que pueda diseñar su propio estilo.",
  "If it's true, all themes will be included.": "Si es true, se incluirán todos los temas.",
  "If it's false, only light and dark themes will be available.": "Si es false, solo estarán disponibles los temas claro y oscuro.",
  "If it's an array, only themes in the array will be included and the first theme will be the default theme.": "Si es un array, solo se incluirán los temas contenidos en este y el primer tema será el predeterminado.",
  "Read more about <a href='/docs/themes/'>themes</a>": "Más información sobre <a href='/docs/themes/'>temas</a>",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.": "Si es true, se agregarán <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>algunos estilos básicos</a>",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.": "Si es true, se agregarán <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>clases de receptividad y de utilidad</a>",
  "If it's true, daisyUI shows logs in the terminal while CSS is building.": "Si es true, daisyUI muestra registros en la terminal mientras se construye el CSS",
  "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag.": "Si es true, su tema será de derecha a izquierda. Debe agregar <code>dir='rtl'</code> a su etiqueta de cuerpo.",
  "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically.": "Si usa daisyUI con la opción RTL, sugiero usar el complemento <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> porque cambiará todas sus utilidades Tailwind automáticamente.",
  "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.": "Nos permite elegir otro tema para el modo oscuro automático del sistema. De forma predeterminada, el tema <code>dark</code> (o un tema personalizado llamado <code>dark</code>) será el tema predeterminado si no se especifica ninguno y el usuario está usando el modo oscuro en su sistema. Con esta configuración, puede configurar otro tema para que sea el tema de modo oscuro predeterminado.",
  "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).": "Agrega un prefijo al nombre de clase para todas las clases de daisyUI (incluidas las clases de componentes, las clases de modificadores y las clases de respuesta).",
  "For example: <code>btn</code> will become <code>prefix-btn</code>.": "Por ejemplo: <code>btn</code> se convertirá en <code>prefix-btn</code>.",
  "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.": "Si está utilizando una segunda biblioteca CSS que tiene nombres de clase similares, puede usar esta configuración para evitar conflictos.",
  "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.": "Las clases de utilidad como nombres de colores (p. ej., <code>bg-primary</code>) o border-radius (p. ej., <code>rounded-box</code>) no se verán afectadas por esta configuración porque se agregarán como extensiones a las clases de Tailwind CSS.",
  "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.": "Si usa la opción daisyUI <code>prefix</code> (como <code>daisy-</code>) y la opción Tailwind CSS <code>prefix</code> (como <code>tw-</code>) juntas , los nombres de clase tendrán el prefijo así: <code>tw-daisy-btn</code>.",
  "How to use daisyUI colors?": "¿Cómo usar los colores daisyUI?",
  Introduction: Introduction$9,
  "daisyUI is fully themeable and colorable,": "daisyUI es totalmente tematizable y coloreable,",
  "So instead of using constant color utility classes like:": "Entonces, en lugar de usar clases de utilidad de color constante como:",
  "It's suggested to use semantic color utility classes like:": "Se sugiere utilizar clases de utilidad de color semántico como:",
  "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.": "Cada nombre de color contiene variables CSS y cada tema daisyUI aplica valores de color a las clases de utilidad cuando se aplica.",
  Benefits: Benefits$9,
  "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces.": "Los nombres de colores semánticos tienen más sentido porque cuando diseñamos interfaces, no usamos cualquier color al azar. Definimos una paleta de colores específica con nombres como <code>primario</code>, <code>secundario</code>, etc. y usamos solo esos colores específicos en nuestras interfaces.",
  "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.": "Además, el uso de nombres de colores semánticos facilita la creación de temas. No tendría que definir colores de modo oscuro para cada elemento y no estaría limitado solo a temas claros/oscuros. puede tener varios temas disponibles y cada tema tiene solo unas pocas líneas de variables CSS.",
  "List of all daisyUI color names": "Lista de todos los nombres de color de daisyUI",
  "You can use these color names in your theme or in utility classes.": "Puede usar estos nombres de colores en su tema o en clases de utilidad.",
  "Color name + description": "Nombre del color + descripción",
  "Required or optional for themes": "Obligatorio u opcional para temas",
  "Example use": "Ejemplo de uso",
  "How to use": "Cómo utilizar",
  "Some daisyUI components come with modifier class names and that modifier class name will apply a color.": "Algunos componentes daisyUI vienen con nombres de clase de modificador y ese nombre de clase de modificador aplicará un color.",
  "For example": "Por ejemplo",
  "You can also use color names in utility classes just like Tailwind's original color names.": "También puede usar nombres de colores en clases de utilidad, al igual que los nombres de colores originales de Tailwind.",
  "These are utility classes that can be used with a color name:": "Estas son clases de utilidad que se pueden usar con un nombre de color:",
  "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc.": "Entonces puede usar <code>bg-primary</code>, <code>border-secundary</code>, etc.",
  "daisyUI comes with a number of themes, which you can use with no extra effort.": "daisyUI viene con una serie de temas, que puede usar sin esfuerzo adicional.",
  "Each theme defines a set of colors which will be used on all daisyUI elements.": "Cada tema define un conjunto de colores que se usarán en todos los elementos daisyUI.",
  "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:": "Para usar un tema, agregue su nombre en <span class=badge>tailwind.config.js</span> y actívelo agregando el atributo <span class=badge>data-theme</span> a la etiqueta <span class=badge>HTML</span>:",
  "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage.": "Sugiero usar <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, para que pueda cambiar de tema y guardar el tema seleccionado en el almacenamiento local .",
  "List of themes": "Lista de temas",
  "Try them:": "Pruébalos:",
  "The default theme is <code>light</code> (or <code>dark</code> for dark mode)": "El tema predeterminado es <code>light</code> (o <code>dark</code> para el modo oscuro)",
  "but you can <a href='https://daisyui.com/docs/config/'>change the default theme from tailwind.config.js</a>": "pero puedes <a href='https://daisyui.com/docs/config/'>cambiar el tema predeterminado en tailwind.config.js</a>",
  "How to remove unused themes?": "¿Cómo eliminar temas no utilizados?",
  "You can only include the themes you want in your project.": "Puede incluir solo los temas que desee en su proyecto.",
  "This will reduce the size of your CSS file.": "Esto reducirá el tamaño de su archivo CSS.",
  "In the below example": "En el siguiente ejemplo",
  "<code>cupcake</code> will be the default theme for light mode": "<code>cupcake</code> será el tema predeterminado para el modo claro",
  "<code>dark</code> will be the default theme for dark mode": "<code>dark</code> será el tema predeterminado para el modo oscuro",
  "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>": "<code>cmyk</code> se puede aplicar en cualquier etiqueta HTML con <code>data-theme='cmyk'</code>",
  "How to disable all themes?": "¿Cómo deshabilitar todos los temas?",
  "If you only want the default light and dark themes, set <code>themes</code> config to false.": "Si solo desea los temas claro y oscuro predeterminados, establezca la configuración de <code>themes</code> en false.",
  "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array.": "Si no desea incluir ningún tema y deshabilitar todos los colores, establezca la configuración de <code>themes</code> en una matriz vacía.",
  "How to use a theme only for a section of a page?": "¿Cómo usar un tema solo para una sección de la página?",
  "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme.": "Agregue <code>data-theme='THEME_NAME'</code> a cualquier elemento y todo lo que esté dentro tendrá su tema.",
  "You can nest themes and there is no limit!": "¡Puedes anidar temas y no hay límite!",
  "You can force a section of your HTML to only use a specific theme.": "Puede obligar a una sección de su HTML a usar solo un tema específico.",
  "How to add a new custom theme?": "¿Cómo agregar un nuevo tema personalizado?",
  "You can add a new theme from <code>tailwind.config.js</code> file.": "Puede agregar un nuevo tema en el archivo <code>tailwind.config.js</code>.",
  "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes.": "En el siguiente ejemplo, agregué un nuevo tema llamado <code>mytheme</code> y también incluyo los temas <code>dark</code> y <code>cupcake</code>.",
  "The first theme (<code>mytheme</code>) will be the default theme.": "El primer tema (<code>mytheme</code>) será el tema predeterminado.",
  "<code>dark</code> theme will be the default theme for dark mode.": "El tema <code>dark</code> será el tema predeterminado para el modo oscuro.",
  "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button).": "En el siguiente ejemplo, tengo los colores requeridos. Todos los demás colores se generarán automáticamente (como el color del botón cuando se enfoca en él o el color del texto en un botón <code>principal</code>).",
  "CSS variables in daisyUI themes": "Variables CSS en temas daisyUI",
  "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:": "Hay algunas variables CSS opcionales que puede usar en los temas daisyUI para personalizar diseño de cada tema:",
  "You can also add <a href='/docs/colors/' class='link'>optional color names</a> to have full control over all colors.": "También puede agregar <a href='/docs/colors/' class='link'>nombres de colores opcionales</a> para tener un control total sobre todos los colores.",
  "Custom CSS for a daisyUI theme": "CSS personalizado para un tema daisyUI",
  "You can apply custom style to a daisyUI themes using CSS:": "Puede aplicar un estilo personalizado a un tema daisyUI usando CSS:",
  "How to customize an existing theme?": "¿Cómo personalizar un tema existente?",
  "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.": "En su tailwind.config.js, puede requerir un tema daisyUI existente y anular algunos colores.",
  "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:": "En el siguiente ejemplo, requiero y extiendo el tema <code>light</code> y cambio sus colores <code>primary</code> y <code>primary-focus</code>:",
  "Contribute to translation": "Contribuir a la traducción",
  "Alert informs users about important events.": "Alert informa a los usuarios sobre eventos importantes.",
  "Artboard provides fixed size container to display a demo content on mobile size.": "Artboard proporciona un contenedor de tamaño fijo para mostrar un contenido de demostración en tamaño móvil.",
  "Avatars are used to show a thumbnail representation of an individual or business in the interface.": "Avatars se utilizan para mostrar una representación en miniatura de una persona o empresa en la interfaz.",
  "Badges are used to inform the user of the status of specific data.": "Badges se utilizan para informar al usuario sobre el estado de datos específicos.",
  "Bottom navigation bar allows navigation between primary screens.": "La barra de navegación inferior permite la navegación entre pantallas principales.",
  "Breadcrumbs helps users to navigate through the website.": "Breadcrumbs ayudan a los usuarios a navegar por el sitio web.",
  "Button group shows buttons next to each other.": "Button group muestra los botones uno al lado del otro.",
  "Buttons allow the user to take actions or make choices.": "Buttons permiten al usuario realizar acciones o elegir opciones.",
  "Cards are used to group and display content in a way that is easily readable.": "Cards se utilizan para agrupar y mostrar contenido de una manera que sea fácil de leer.",
  "Carousel show images or content in a scrollable area.": "Carousel muestra imágenes o contenido en un área desplazable.",
  "Checkboxes are used to select or deselect a value.": "Checkboxes se utilizan para seleccionar o anular la selección de un valor.",
  "Collapse is used for showing and hiding content.": "Collapse se utiliza para mostrar y ocultar contenido.",
  "Countdown gives you a transition effect of changing numbers.": "Countdown te da un efecto de transición de números cambiantes.",
  "Divider will be used to separate content vertically or horizontally.": "Divider se utilizará para separar el contenido vertical u horizontalmente.",
  "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.": "Drawer es un diseño de cuadrícula que puede mostrar/ocultar una barra lateral en el lado izquierdo o derecho de la página.",
  "Dropdown can open a menu or any other element when the button is clicked.": "Dropdown puede abrir un menú o cualquier otro elemento cuando se hace clic en el botón.",
  "Footer can contain logo, copyright notice, and links to other pages.": "Footer puede contener un logotipo, un aviso de copyright y enlaces a otras páginas.",
  "Hero is a component for displaying a large box or image with a title and description.": "Hero es un componente para mostrar un cuadro grande o una imagen con un título y una descripción.",
  "Indicators are used to place an element on the corner of another element.": "Indicators se utilizan para colocar un elemento en la esquina de otro elemento.",
  "Input group puts an input next to a text or a button.": "Input group pone una entrada al lado de un texto o un botón.",
  "Text Input is a simple input field.": "Text Input es un campo de entrada simple.",
  "Kbd is used to display keyboard shortcuts.": "Kbd se utiliza para mostrar atajos de teclado.",
  "Link adds the missing underline style to links.": "Link agrega el estilo de subrayado faltante a los enlaces.",
  "Mask crops the content of the element to common shapes.": "Mask recorta el contenido del elemento a formas comunes.",
  "Menu is used to display a list of links vertically or horizontally.": "Menu se utiliza para mostrar una lista de enlaces vertical u horizontalmente.",
  "Code mockup is used to show a block of code in a box that looks like a code editor.": "El Mockup de código se usa para mostrar un bloque de código en un cuadro que parece un editor de código.",
  "Phone mockup shows a mockup of an iPhone.": "El Mockup de teléfono muestra una maqueta de un iPhone.",
  "Window mockup shows a box that looks like an operating system window.": "El Mockup de ventana muestra un cuadro que parece una ventana del sistema operativo.",
  "Modal is used to show a dialog or a box when you click a button.": "Modal se usa para mostrar un cuadro de diálogo o un cuadro cuando hace clic en un botón.",
  "Navbar is used to show a navigation bar on the top of the page.": "Navbar se utiliza para mostrar una barra de navegación en la parte superior de la página.",
  "Pagination is a group of buttons that allow the user to navigate between a set of related content.": "La paginación es un grupo de botones que permiten al usuario navegar entre un conjunto de contenidos relacionados.",
  "Progress bar can be used to show the progress of a task or to show the passing of time.": "Progress bar se puede utilizar para mostrar el progreso de una tarea o para mostrar el paso del tiempo.",
  "Radial progress can be used to show the progress of a task or to show the passing of time.": "Radial progress se puede utilizar para mostrar el progreso de una tarea o para mostrar el paso del tiempo.",
  "Radio buttons allow the user to select one option from a set.": "Radio buttons permiten al usuario seleccionar una opción de un conjunto.",
  "Range slider is used to select a value by sliding a handle.": "Range slider se utiliza para seleccionar un valor deslizando un controlador.",
  "Rating is a set of radio buttons that allow the user to rate something.": "Rating es un conjunto de botones de radio que permiten al usuario calificar algo.",
  "Select is used to pick a value from a list of options.": "Select se utiliza para elegir un valor de una lista de opciones.",
  "Stack visually puts elements on top of each other.": "Stack coloca elementos visualmente uno encima del otro.",
  "Stat is used to show numbers and data in a box.": "Stat se usa para mostrar números y datos en un cuadro.",
  "Steps can be used to show a list of steps in a process.": "Steps se pueden utilizar para mostrar una lista de pasos en un proceso.",
  "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.": "Swap le permite alternar la visibilidad de dos elementos usando una casilla de verificación o un nombre de clase.",
  "Tabs can be used to show a list of links in a tabbed format.": "Tabs se pueden usar para mostrar una lista de enlaces en formato de pestañas.",
  "Table can be used to show a list of data in a table format.": "Table se puede utilizar para mostrar una lista de datos en formato de tabla.",
  "Textarea allows users to enter text in multiple lines.": "Textarea permite a los usuarios ingresar texto en varias líneas.",
  "Toggle is a checkbox that is styled to look like a switch button.": "Toggle es una casilla de verificación diseñada para parecerse a un interruptor.",
  "Tooltip can be used to show a message when hovering over an element.": "Tooltip se puede utilizar para mostrar un mensaje al pasar el cursor sobre un elemento.",
  "Code mockup": "Mockup de código",
  "Phone mockup": "Mockup de teléfono",
  "Window mockup": "Mockup de ventana",
  "File Input": "Entrada de archivo",
  "Text Input": "Entrada de texto",
  "Range slider": "Deslizador de rango",
  Tabs: Tabs$9,
  "All daisyUI components": "Componentes de daisyUI",
  "Class name": "Nombre de la clase",
  Type: Type$9,
  Search: Search$9,
  "daisyUI themes": "Temas de daisyUI",
  "How to use daisyUI themes?": "¿Cómo usar los temas de daisyUI?",
  "daisyUI Theme Generator": "Generador de temas de daisyUI",
  "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them.": "Puede agregar sus temas personalizados al archivo <span class='badge badge-outline'>tailwind.config.js</span> en la matriz <span class='badge badge-outline'>daisyui > themes</span>. En esta página, puede elegir los valores de color requeridos y ver cómo se verán los componentes con ellos.",
  "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)": "También puede definir colores opcionales para tener más control sobre los valores de color (por ejemplo: el color del botón cuando está enfocado del color del texto en un botón)",
  "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use.": "Consulta la <a class='link font-bold' href='/docs/colors/'>página de colores</a> para ver todos los nombres de colores que puedes usar.",
  "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)": "Consulta la <a class='link font-bold' href='/docs/themes/'>página de temas</a> para ver todas las variables CSS que puedes usar para personalizar la decisión de diseño (ejemplo: border-radius, animaciones , etc)",
  Randomize: Randomize$9,
  Reset: Reset$9,
  Preview: Preview$9,
  "Layout and Typography": "Maquetación y Tipografía",
  "How to use layouts and typography in daisyUI": "Cómo usar maquetas y tipografía en daisyUI",
  "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.": "La disposición, el tamaño, las cuadrículas, el espaciado, etc., serán manejados por las clases de utilidad de Tailwind CSS.",
  "Read more": "Leer más",
  Typography: Typography$9,
  "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.": "Debes usar el <a href='https://github.com/tailwindlabs/tailwindcss-typography'>complemento de tipografía TailwindCSS</a> oficial.",
  "It handles everything and it's fully customizable.": "Maneja todo y es totalmente personalizable.",
  "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.": "daisyUI agrega algo de estilo a @tailwindcss/typography para que use el mismo tema que otros elementos.",
  "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js": "Asegúrese de solicitar <span class='badge badge-outline'>daisyui</span> DESPUÉS de <span class='badge badge-outline'>@tailwindcss/typography</span> en tailwind.config.js",
  "Here you can see how elements will look using <code>@tailwindcss/typography</code>.": "Aquí puedes ver cómo se verán los elementos usando <code>@tailwindcss/typography</code>.",
  "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>": "Para usar un prefijo personalizado, <a class='link' href='/docs/config/#prefix'>agregue el prefijo a la configuración</a>",
  Component: Component$9,
  Modifier: Modifier$9,
  Responsive: Responsive$9,
  "Changes the style of a component": "Cambia el estilo de un componente.",
  "Supports responsive prefixes (sm:, lg:, …)": "Admite prefijos adaptables (sm:, lg:, …)",
  "Make your theme": "Haz tu tema",
  "More examples": "Más ejemplos",
  "Support daisyUI's development": "Apoye el desarrollo de daisyUI",
  "The most popular": "La más popular",
  "component library": "biblioteca de componentes",
  "for Tailwind CSS": "para Tailwind CSS",
  "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>": "daisyUI agrega nombres de clase de componentes a Tailwind&nbsp;CSS para que pueda crear sitios web hermosos <br /><span class='border-base-content/20 border-b-2'>más rápido que nunca.</span>",
  "don't re-invent<br/>the wheel<br/>every time": "no reinventes<br/>la rueda<br/>cada vez",
  "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.": "En un proyecto Tailwind CSS, debe escribir nombres de clase de utilidad para cada elemento. Miles de nombres de clase solo para dar estilo a los elementos más básicos.",
  "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>": "en lugar de escribir<br /> <span class='text-error'><span class='font-black'>100</span> nombres de clase</span>",
  "For every element, every page, every project,<br/>again and again": "Para cada elemento, cada página, cada proyecto,<br/>una y otra vez",
  "use <span class='text-success'><span class='font-black'>semantic</span><br />class names</span>": "use <span class='text-success'><span class='font-black'>nombres de clase</span> semánticos</span>",
  "It's descriptive, faster, cleaner and easier to maintain.": "Es descriptivo, más rápido, más limpio y más fácil de mantener.",
  Features: Features$9,
  Links: Links$9,
  Message: Message$9,
  "Cleaner HTML": "HTML más limpio",
  Customizable: Customizable$9,
  Themeable: Themeable$9,
  "Pure CSS": "CSS puro",
  Dashboard: Dashboard$9,
  Notifications: Notifications$9,
  Messages: Messages$9,
  People: People$9,
  Products: Products$9,
  "Use Tailwind CSS but write fewer class names.": "Usa Tailwind CSS pero escribe menos nombres de clase.",
  "Pure CSS. <br />No JS dependency": "CSS puro. Sin dependencia de JS",
  "Works on all frameworks": "Funciona en todos los frameworks",
  "Design system": "Sistema de diseño",
  "Styling a simple button": "Estilizando un botón simple",
  Result: Result$9,
  "Take Tailwind CSS": "Lleva Tailwind CSS",
  "to the next level": "al siguiente nivel",
  "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like": "daisyUI agrega nombres de clase a Tailwind CSS<br />para todos los componentes de UI comunes.<br />Nombres de clase como",
  "and many more.": "y muchos más.",
  "This allows us to focus on important things<br />instead of styling basic elements for every project.": "Esto nos permite enfocarnos en cosas importantes<br />en lugar de estilizar elementos básicos para cada proyecto.",
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$9,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$9,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$9,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$9,
  "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.": "Escriba menos nombres de clase<br />Utilice nombres de clase de componentes<br />modifíquelos usando utilidades Tailwind CSS.",
  Click: Click$9,
  "Tailwind only": "Solo Tailwind",
  "Tailwind + daisyUI": "Tailwind + daisyUI",
  Save: Save$9,
  "Accept terms of use": "Aceptar términos de uso",
  "Submit to newsletter": "Enviar a boletín",
  "Fewer class names": "Menos nombres de clase",
  "Faster development": "Desarrollo más rápido",
  "Smaller file size": "Tamaño de archivo más pequeño",
  "With daisyUI, you write 80% fewer class names<br />And your HTML size will be about 70% smaller.": "Con daisyUI, escribe un 80% menos de nombres de clase<br />Y el tamaño de su HTML será aproximadamente un 70% más pequeño.",
  "CSS Class names": "Nombres de clase CSS",
  "fewer class names": "menos nombres de clase",
  "HTML size": "Tamaño de HTML",
  "smaller DOM size": "tamaño DOM más pequeño",
  "Highly customizable": "Altamente personalizable",
  "Powered by Tailwind&nbsp;CSS utility&nbsp;classes": "Impulsado por Tailwind&nbsp;CSS clases de utilidad",
  "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes.": "daisyUI está construido sobre Tailwind&nbsp;CSS<br />para que pueda personalizar todo<br />usando clases de utilidad.",
  "Pure CSS.": "CSS Puro.",
  "Framework agnostic.": "Framework agnóstico.",
  "Works everywhere.": "Funciona en todos lados.",
  "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file.": "daisyUI es un complemento para Tailwind CSS. Funciona en todos los frameworks JS y no necesita un archivo de paquete JS.",
  "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name.": "Instale daisyUI como una dependencia de dev y use los nombres de clase como cualquier otro nombre de clase de Tailwind CSS.",
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$9,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$9,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$9,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$9,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$9,
  "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components.": "Su sitio web debe ser único. Cree un tema personalizado para usted mismo usando el generador de temas daisyUI. Los colores que elija se aplicarán a todos los componentes de daisyUI.",
  "Learn more about themes": "Aprenda más sobre temas",
  "utility classes": "clases de utilidad",
  "endless possibilities": "posibilidades infinitas",
  "Mix and match daisyUI class names to create unique web pages.": "Mezcla y combina los nombres de las clases daisyUI para crear páginas web únicas.",
  "daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS": "daisyUI es la biblioteca de componentes más popular para Tailwind&nbsp;CSS",
  "open-source projects using daisyUI": "proyectos de código abierto que utilizan daisyUI",
  "Free and open-source": "Libre y de código abierto",
  "Built by the community": "Construido por la comunidad",
  "daisyUI welcomes contributions from developers around the world": "daisyUI da la bienvenida a las contribuciones de los desarrolladores de todo el mundo",
  "Sponsors and backers": "Patrocinadores y patrocinadores",
  "Try daisyUI": "Prueba daisyUI",
  "on your favorite framework": "en tu framework favorito",
  "See all examples": "Ver ejemplos",
  "Or play with daisyUI on": "O juega con daisyUI en",
  "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.": "Los bocadillos de chat se utilizan para mostrar una línea de conversación y todos sus datos, incluida la imagen del autor, el nombre del autor, la hora, etc.",
  "File Input is a an input field for uploading files.": "File Input es un campo de entrada para subir archivos.",
  "Toast is a wrapper to stack elements, positioned on the corner of page.": "Toast es un envoltorio para apilar elementos, posicionados en la esquina de la página.",
  "Admin panel": "Panel de administración",
  Updates: Updates$9,
  Stats: Stats$9,
  "Unlimited themes": "Temas ilimitados",
  "with zero effort": "sin ningún esfuerzo",
  "daisyUI adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values. Using daisyUI color names, you get Dark Mode and even more themes without adding a new class name.": "daisyUI agrega un conjunto de nombres de colores personalizables a Tailwind CSS y estos nuevos colores usan variables CSS para los valores. Usando los nombres de los colores de daisyUI, obtienes el Modo Oscuro y aún más temas sin agregar un nuevo nombre de clase.",
  "See all themes": "Ver temas",
  "Semantic colors": "Colores semánticos",
  "Learn more about colors": "Aprende sobre los colores",
  "Get started": "empezar ahora",
  "daisyUI 3 is available now!": "¡daisyUI 3 ya está disponible!",
  "Become a sponsor": "Conviértete en patrocinador",
  "": ""
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Actions: Actions$9,
  Alert: Alert$9,
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$9,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$9,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$9,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$9,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$9,
  Artboard: Artboard$9,
  Avatar: Avatar$9,
  Badge: Badge$9,
  Benefits: Benefits$9,
  Breadcrumbs: Breadcrumbs$9,
  Button: Button$9,
  Card: Card$9,
  Carousel: Carousel$9,
  Checkbox: Checkbox$9,
  Click: Click$9,
  Code: Code$9,
  Collapse: Collapse$9,
  Colors: Colors$9,
  Component: Component$9,
  Config: Config$9,
  Countdown: Countdown$9,
  Customizable: Customizable$9,
  Dashboard: Dashboard$9,
  Divider: Divider$9,
  Drawer: Drawer$9,
  Dropdown: Dropdown$9,
  Features: Features$9,
  Footer: Footer$9,
  Hero: Hero$9,
  Indicator: Indicator$9,
  Install: Install$9,
  Introduction: Introduction$9,
  Kbd: Kbd$9,
  Layout: Layout$9,
  Link: Link$9,
  Links: Links$9,
  Mask: Mask$9,
  Menu: Menu$9,
  Message: Message$9,
  Messages: Messages$9,
  Mockup: Mockup$9,
  Modal: Modal$9,
  Modifier: Modifier$9,
  Navbar: Navbar$9,
  Navigation: Navigation$9,
  Next: Next$9,
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$9,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$9,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$9,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$9,
  Notifications: Notifications$9,
  Or: Or$9,
  Pagination: Pagination$9,
  People: People$9,
  Phone: Phone$9,
  Prev: Prev$9,
  Preview: Preview$9,
  Products: Products$9,
  Progress: Progress$9,
  Radio: Radio$9,
  Randomize: Randomize$9,
  Range: Range$9,
  Rating: Rating$9,
  Reset: Reset$9,
  Responsive: Responsive$9,
  Result: Result$9,
  Save: Save$9,
  Search: Search$9,
  Select: Select$9,
  Stack: Stack$9,
  Stat: Stat$9,
  Stats: Stats$9,
  Steps: Steps$9,
  Swap: Swap$9,
  Tab: Tab$9,
  Table: Table$9,
  Tabs: Tabs$9,
  Textarea: Textarea$9,
  Themeable: Themeable$9,
  Themes: Themes$9,
  Toast: Toast$9,
  Toggle: Toggle$9,
  Tooltip: Tooltip$9,
  Type: Type$9,
  Typography: Typography$9,
  Updates: Updates$9,
  Use: Use$9,
  Warning: Warning$9,
  Window: Window$9,
  __code: __code$9,
  __name: __name$9,
  __status: __status$9,
  changelog: changelog$9,
  components: components$9,
  config: config$9,
  contributing: contributing$9,
  default: es,
  excluded: excluded$9,
  license: license$9,
  links: links$9,
  pages: pages$9,
  themes: themes$9,
  updated: updated$9
}, Symbol.toStringTag, { value: "Module" }));
const __name$8 = "Français";
const __code$8 = "FR";
const __status$8 = "";
const components$8 = "Composants";
const themes$8 = "Thèmes";
const pages$8 = "pages";
const config$8 = "Configuration";
const links$8 = "Liens";
const changelog$8 = "Journal des modifications";
const license$8 = "Licence";
const contributing$8 = "Contribution";
const Install$8 = "Installer";
const Use$8 = "Utilisez";
const Config$8 = "Config";
const Colors$8 = "Couleur";
const Themes$8 = "Thèmes";
const Actions$8 = "Actions";
const Button$8 = "Bouton";
const Dropdown$8 = "Dropdown";
const Modal$8 = "Modal";
const Swap$8 = "Swap";
const Alert$8 = "Alerte";
const Avatar$8 = "Avatar";
const Badge$8 = "Badge";
const Card$8 = "Card";
const Carousel$8 = "Carrousel";
const Collapse$8 = "Collapse";
const Countdown$8 = "Compte à rebours";
const Kbd$8 = "Kbd";
const Progress$8 = "Bar de progression";
const Stat$8 = "Stat";
const Table$8 = "Tableau";
const Tooltip$8 = "Info-bulle";
const Checkbox$8 = "Case à cocher";
const Radio$8 = "Radio";
const Range$8 = "Range";
const Rating$8 = "Classement";
const Select$8 = "Select";
const Textarea$8 = "Zone de texte";
const Toggle$8 = "Toggle";
const Layout$8 = "Mise en page";
const Artboard$8 = "Artboard";
const Divider$8 = "Divider";
const Drawer$8 = "Drawer";
const Footer$8 = "Pied de page";
const Hero$8 = "Hero";
const Indicator$8 = "Indicator";
const Mask$8 = "Masque";
const Stack$8 = "Pile d'éléments";
const Toast$8 = "Toast";
const Navigation$8 = "Navigation";
const Breadcrumbs$8 = "Breadcrumbs";
const Link$8 = "Lien";
const Menu$8 = "Menu";
const Navbar$8 = "Barre de navigation";
const Pagination$8 = "Pagination";
const Steps$8 = "Étapes";
const Tab$8 = "Tab";
const Mockup$8 = "Mockup";
const Code$8 = "Code";
const Phone$8 = "Téléphone";
const Window$8 = "Fenêtre";
const excluded$8 = "exclu";
const updated$8 = "mise à jour";
const Prev$8 = "Précédent";
const Next$8 = "Suivant";
const Warning$8 = "Avertissement";
const Or$8 = "Ou";
const Introduction$8 = "Introduction";
const Benefits$8 = "Avantages";
const Tabs$8 = "Onglets";
const Type$8 = "Type";
const Search$8 = "Search";
const Randomize$8 = "Randomiser";
const Reset$8 = "Réinitialiser";
const Preview$8 = "Aperçu";
const Typography$8 = "Typographie";
const Component$8 = "Composant";
const Modifier$8 = "Modifier";
const Responsive$8 = "Responsive";
const Features$8 = "Avantages";
const Links$8 = "Liens";
const Message$8 = "Message";
const Customizable$8 = "Personnalisable";
const Themeable$8 = "Thème";
const Dashboard$8 = "Tableau de bord";
const Notifications$8 = "Notifications";
const Messages$8 = "Messages";
const People$8 = "Personnes";
const Products$8 = "Produits";
const Result$8 = "Résultat";
const No_more_ugly_HTML_part_1$8 = "Plus de";
const No_more_ugly_HTML_part_2$8 = "code";
const No_more_ugly_HTML_part_3$8 = "HTML";
const No_more_ugly_HTML_part_4$8 = "laid";
const Click$8 = "Cliquez";
const Save$8 = "Sauvegarder";
const Apply_your_own_design_decisions_part_1$8 = "Appliquer";
const Apply_your_own_design_decisions_part_2$8 = "vos";
const Apply_your_own_design_decisions_part_3$8 = "propres";
const Apply_your_own_design_decisions_part_4$8 = "décisions";
const Apply_your_own_design_decisions_part_5$8 = "de conception";
const Updates$8 = "Mises à jour";
const Stats$8 = "Statistiques";
const fr = {
  __name: __name$8,
  __code: __code$8,
  __status: __status$8,
  "Tailwind CSS Components": "Composants Tailwind CSS",
  "cta-1": "Voir les composants",
  "cta-1-mobile": "Composants",
  "cta-2": "Comment l'utiliser?",
  "components-btn": "Composants",
  "change-theme-btn": "Thème",
  "all-components-btn": "Voir tous les composants",
  components: components$8,
  themes: themes$8,
  "github-stars": "Étoiles Github",
  "npm-installs": "Installations NPM",
  "install-title": "Installer daisyUI",
  "install-desc": "CSS pur. Fonctionne sur tous les frameworks. daisyUI peut être utilisé comme plugin Tailwind CSS ou comme bibliothèque CSS indépendante",
  "install-step-1": "Installer daisyUI en tant que package Node",
  "install-step-2": "Ajouter daisyUI à Tailwind CSS en tant que plugin",
  "install-btn": "Guide d'installation",
  "footer-tagline": "Bibliothèque de composants gratuits <br /> Pour les frameworks CSS de première utilité",
  pages: pages$8,
  "how-to-install": "Comment l'installer",
  "how-to-use-components": "Comment utiliser les composants",
  "how-to-customize": "Comment personnaliser",
  "how-to-use-themes": "Comment utiliser les thèmes",
  "color-system": "Système de couleurs",
  config: config$8,
  links: links$8,
  changelog: changelog$8,
  license: license$8,
  contributing: contributing$8,
  "available-on": "Disponible sur",
  "try-online": "Essayez en ligne",
  "created-by": "Créé par",
  Install: Install$8,
  Use: Use$8,
  "Customize components": "Personnaliser les composants",
  Config: Config$8,
  Colors: Colors$8,
  Themes: Themes$8,
  "Theme Generator": "Générateur de thèmes",
  "Layout & Typography": "Mise en page et typographie",
  Actions: Actions$8,
  Button: Button$8,
  Dropdown: Dropdown$8,
  Modal: Modal$8,
  Swap: Swap$8,
  "Data display": "Affichage des données",
  Alert: Alert$8,
  Avatar: Avatar$8,
  Badge: Badge$8,
  Card: Card$8,
  Carousel: Carousel$8,
  "Chat bubble": "Bulle de chat",
  Collapse: Collapse$8,
  Countdown: Countdown$8,
  Kbd: Kbd$8,
  Progress: Progress$8,
  "Radial progress": "Bar de progression radial",
  Stat: Stat$8,
  Table: Table$8,
  Tooltip: Tooltip$8,
  "Data input": "Entrée de données",
  Checkbox: Checkbox$8,
  "Text input": "Text input",
  Radio: Radio$8,
  Range: Range$8,
  Rating: Rating$8,
  Select: Select$8,
  Textarea: Textarea$8,
  Toggle: Toggle$8,
  Layout: Layout$8,
  Artboard: Artboard$8,
  "Button group": "Button group",
  Divider: Divider$8,
  Drawer: Drawer$8,
  Footer: Footer$8,
  Hero: Hero$8,
  Indicator: Indicator$8,
  "Input group": "Groupe de boutons",
  Mask: Mask$8,
  Stack: Stack$8,
  Toast: Toast$8,
  Navigation: Navigation$8,
  Breadcrumbs: Breadcrumbs$8,
  "Bottom navigation": "Bottom navigation",
  Link: Link$8,
  Menu: Menu$8,
  Navbar: Navbar$8,
  Pagination: Pagination$8,
  Steps: Steps$8,
  Tab: Tab$8,
  Mockup: Mockup$8,
  Code: Code$8,
  Phone: Phone$8,
  Window: Window$8,
  excluded: excluded$8,
  "CodePen example page": "Page d'exemple CodePen",
  "Tailwind Play example page": "Page d'exemple de Tailwind Play",
  "new": "nouveau",
  updated: updated$8,
  "Tailwind Plugin": "Plugin Tailwind",
  "Use CDN": "utiliser un CDN",
  "Install daisyUI as a Tailwind CSS plugin": "Installer daisyUI en tant que plugin Tailwind CSS",
  "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> installed.": "Vous devez installer <a href='https://nodejs.org/en/download/'>Node.js</a> et <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a>.",
  "How to install daisyUI as a Tailwind CSS plugin?": "Comment installer daisyUI en tant que plugin Tailwind CSS?",
  "Install daisyUI": "Installer daisyUI",
  "Then add daisyUI to your <code>tailwind.config.js</code> files": "Ajoutez ensuite daisyUI à vos fichiers <code>tailwind.config.js</code>.",
  "daisyUI example repositories": "Dépôts daisyUI d'exemples",
  "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.": "Voir les exemples de configuration de daisyUI et Tailwind CSS sur différents frameworks et outils de build.",
  Prev: Prev$8,
  Next: Next$8,
  "Do you have a question?": "Vous avez une question?",
  "Do you see a bug?": "Vous voyez un bug?",
  "Do you like daisyUI?": "Vous aimez daisyUI?",
  "Edit this page on GitHub": "Modifier cette page sur GitHub",
  "ask the community": "demandez à la communauté",
  "open an issue on GitHub": "ouvrir une issue sur GitHub",
  "tweet about it!": "tweeter à ce sujet!",
  Warning: Warning$8,
  "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large.": "Les fichiers CDN ne sont pas recommandés pour la  mise en production <br/>parce que vous ne pouvez pas purger les styles inutilisés et que la taille du fichier sera importante.",
  "You don't need to install anything.": "Vous n'avez pas besoin d'installer quoi que ce soit.",
  "Just add one of these to the <code>head</code> tag of your HTML": "Il suffit d'ajouter l'un des éléments suivants à la balise <code>head</code> de votre code HTML",
  Or: Or$8,
  "Add component classes to your HTML": "Ajouter des classes de composants à votre HTML",
  "How to use daisyUI classes to style your page?": "Comment utiliser les classes daisyUI pour styliser votre page?",
  "Once you <a href='/docs/install/'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc.": "Une fois que vous avez <a href='/docs/install/'>installer daisyUI</a>, vous pouvez utiliser des classes de composants comme <code>btn</code>, <code>card</code>, etc.",
  "So instead of making a button using only utility classes": "Ainsi, au lieu de créer un bouton en utilisant uniquement des classes utilitaires",
  "You can just use a component class like this": "Vous pouvez simplement utiliser une classe de composants comme celle-ci",
  "Then you can modify the component with daisyUI additional utility classes": "Ensuite, vous pouvez modifier le composant avec des classes d'utilitaires supplémentaires de daisyUI",
  "Or you can modify the component with Tailwind CSS utility classes": "Ou vous pouvez modifier le composant avec les classes utilitaires de Tailwind CSS",
  "Customize daisyUI components": "Personnaliser les composants daisyUI",
  "How to customize daisyUI?": "Comment personnaliser daisyUI",
  "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.": "Les composants daisyUI sont livrés avec de nombreuses variantes nécessaires aux systèmes de conception et vous n'aurez généralement pas besoin de personnaliser quoi que ce soit.",
  "But you can still customize components in many ways.": "Néanmoins vous pouvez toujours personnaliser les composants de plusieurs façons.",
  "Let's say, you want to customize this button:": "Supposons que vous souhaitiez personnaliser ce bouton:",
  "You can use daisyUI utility classes:": "Vous pouvez utiliser les classes utilitaires daisyUI:",
  "You can use Tailwind's utility classes:": "Vous pouvez utiliser les classes utilitaires de Taildwind:",
  "You can customize components on your CSS file, using Tailwind's @apply directive:": "Vous pouvez personnaliser les composants dans votre fichier CSS en utilisant la directive @apply de Tailwind.",
  "You can also:": "Vous pouvez également:",
  "Add your own theme.": "ajouter votre propre thème",
  "Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>.": "Passez au-dessus des décisions de conception de daisyUI, <a href='/docs/config/'>utiliser uniquement une version non stylisée (squelette) de daisyUI</a>.",
  "How to change the default configuration of daisyUI?": "Comment modifier la configuration par défaut de daisyUI?",
  "daisyUI can be configured from your <code>tailwind.config.js</code> file.": "daisyUI peut être configuré à partir de votre fichier <code>tailwind.config.js</code>.",
  "Default config": "Configuration par défaut",
  "Config values explained": "Explication des valeurs de configuration",
  "If it's true, components will have colors and style so you won't need to design anything.": "Si c'est vrai, les composants auront des couleurs et un style, vous n'aurez pas besoin de designer quoi que ce soit.",
  "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.": "Si c'est faux, les composants n'auront aucune couleur et aucun style visuel. Vous pouvez donc concevoir votre propre style sur un squelette de base.",
  "If it's true, all themes will be included.": "Si c'est vrai, tous les thèmes seront inclus.",
  "If it's false, only light and dark themes will be available.": "Si c'est faux, seuls les thèmes clairs et sombres seront disponibles.",
  "If it's an array, only themes in the array will be included and the first theme will be the default theme.": "Si c'est un tableau, seuls les thèmes présent dans le tableau seront inclus et le premier thème sera le thème par défaut.",
  "Read more about <a href='/docs/themes/'>themes</a>": "En savoir plus sur les <a href='/docs/themes/'>themes</a>",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.": "Si c'est vrai, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>quelques styles de base</a> seront ajoutés",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.": "Si c'est vrai, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>des classes utilitaires et responsives</a> seront ajoutées",
  "If it's true, daisyUI shows logs in the terminal while CSS is building.": "Si c'est vrai, daisyUI montre les logs dans le terminal pendant que le CSS se build.",
  "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag.": "Si c'est vrai,votre thème sera écrit de droite à gauche. Vous devez ajouter <code>dir='rtl'</code> à votre balise body.",
  "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically.": "Si vous utilisez daisyUI avec l'option RTL, je vous suggère d'utiliser le plugin <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> pour retourner automatiquement tous vos utilitaires Tailwind.",
  "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.": "Vous permet de choisir un autre thème pour le mode sombre automatique du système. Par défaut, le thème <code>dark</code> (ou un thème personnalisé nommé <code>dark</code>) sera le thème par défaut si aucun thème n'est spécifié et que l'utilisateur utilise le mode sombre sur son système. Avec cette configuration, vous pouvez définir un autre thème comme thème par défaut du mode sombre.",
  "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).": "Ajoute un préfixe au nom de la classe pour toutes les classes daisyUI (y compris les classes de composants, les classes de modificateurs et les classes responsives).",
  "For example: <code>btn</code> will become <code>prefix-btn</code>.": "Par exemple: <code>btn</code> deviendra <code>prefix-btn</code>.",
  "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.": "Si vous utilisez une deuxième bibliothèque CSS qui a des noms de classe similaires, vous pouvez utiliser cette configuration pour éviter les conflits.",
  "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.": "Les classes utilitaires telles que les noms de couleur (par exemple, <code>bg-primary</code>) ou border-radius (par exemple, <code>rounded-box</code>) ne seront pas affectées par cette configuration car elles sont ajoutées en tant qu'extensions aux classes CSS de Tailwind.",
  "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.": "Si vous utilisez l'option daisyUI <code>prefix</code> (comme <code>daisy-</code>) et l'option Tailwind CSS <code>prefix</code> (comme <code>tw-</code>) ensemble, les noms de classe seront préfixés comme ceci: <code>tw-daisy-btn</code>.",
  "How to use daisyUI colors?": "Comment utiliser les couleurs daisyUI?",
  Introduction: Introduction$8,
  "daisyUI is fully themeable and colorable,": "daisyUI est entièrement customizable au niveau de son thème et de ses couleurs,",
  "So instead of using constant color utility classes like:": "Ainsi, au lieu d'utiliser des classes utilitaires de couleur constante comme:",
  "It's suggested to use semantic color utility classes like:": "Il est suggéré d'utiliser des classes utilitaires de couleurs sémantiques telles que:",
  "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.": "Chaque nom de couleur contient des variables CSS et chaque thème daisyUI applique des valeurs de couleur aux classes utilitaires lorsqu'il est appliqué.",
  Benefits: Benefits$8,
  "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces.": "Les noms de couleurs sémantiques ont plus de sens car lorsque nous concevons des interfaces, nous n'utilisons pas simplement n'importe quelle couleur aléatoire. Nous définissons une palette de couleurs spécifique avec des noms comme <code>primaire</code>, <code>secondaire</code>, etc. et nous n'utilisons que ces couleurs spécifiques dans nos interfaces.",
  "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.": "De plus, l'utilisation de noms de couleurs sémantiques rend la customisation des thèmes plus facile. Vous n'avez pas besoin de définir des couleurs en mode sombre pour chaque élément et n'étes pas limité aux seuls thèmes clairs/sombres. vous pouvez avoir plusieurs thèmes disponibles et chaque thème ne contient que quelques lignes de variables CSS.",
  "List of all daisyUI color names": "Liste de tous les noms de couleurs daisyUI",
  "You can use these color names in your theme or in utility classes.": "Vous pouvez utiliser ces noms de couleurs dans votre thème ou dans des classes utilitaires.",
  "Color name + description": "Nom de la couleur + sa description",
  "Required or optional for themes": "Optionnel ou requis pour les thèmes",
  "Example use": "Exemple d'utilisation",
  "How to use": "Comment l'utiliser",
  "Some daisyUI components come with modifier class names and that modifier class name will apply a color.": "Certains composants daisyUI sont livrés avec des noms de classe de modificateur et ce nom de classe de modificateur appliquera une couleur.",
  "For example": "Par exemple",
  "You can also use color names in utility classes just like Tailwind's original color names.": "Vous pouvez également utiliser des noms de couleurs dans des classes utilitaires, tout comme les noms de couleurs originaux de Tailwinds.",
  "These are utility classes that can be used with a color name:": "Ceci est une liste de classes utilitaires qui peuvent être utilisées avec un nom de couleur:",
  "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc.": "Vous pouvez donc utiliser <code>bg-primary</code>, <code>border-secondary</code>, etc.",
  "daisyUI comes with a number of themes, which you can use with no extra effort.": "daisyUI est livré avec un certain nombre de thèmes pré-définis que vous pouvez utiliser sans effort supplémentaire.",
  "Each theme defines a set of colors which will be used on all daisyUI elements.": "Chaque thème définit un ensemble de couleurs qui seront utilisées sur tous les éléments daisyUI.",
  "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:": "Pour utiliser un thème, ajoutez son nom dans <span class=badge>tailwind.config.js</span> et activez-le en ajoutant l'attribut <span class=badge>data-theme</span> à la balise <span class=badge>HTML</span>:",
  "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage.": "Je suggère d'utiliser <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, afin que vous puissiez changer de thème et enregistrer le thème sélectionné dans le local storage du navigateur.",
  "List of themes": "Liste des thèmes",
  "Try them:": "Essayez les:",
  "The default theme is <code>light</code> (or <code>dark</code> for dark mode)": "Le thème par défaut est <code>light</code> (ou <code>dark</code> pour le mode sombre)",
  "but you can <a href='https://daisyui.com/docs/config/'>change the default theme from tailwind.config.js</a>": "mais vous pouvez <a href='https://daisyui.com/docs/config/'>changer le thème par défaut de tailwind.config.js</a>",
  "How to remove unused themes?": "Comment supprimer les thèmes inutilisés?",
  "You can only include the themes you want in your project.": "Vous ne pouvez inclure que les thèmes que vous souhaitez dans votre projet.",
  "This will reduce the size of your CSS file.": "Cela réduira la taille de votre fichier CSS.",
  "In the below example": "Dans l'exemple ci-dessous",
  "<code>cupcake</code> will be the default theme for light mode": "<code>cupcake</code> sera le thème par défaut pour le mode clair",
  "<code>dark</code> will be the default theme for dark mode": "<code>dark</code> sera le thème par défaut pour le mode sombre",
  "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>": "<code>cmyk</code> peut être appliqué sur n'importe quelle balise HTML avec <code>data-theme='cmyk'</code>",
  "How to disable all themes?": "Comment désactiver tous les thèmes?",
  "If you only want the default light and dark themes, set <code>themes</code> config to false.": "Si vous ne souhaitez que les thèmes clair et sombre par défaut, définissez la configuration <code>themes</code> sur false.",
  "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array.": "Si vous ne souhaitez inclure aucun thème et désactiver toutes les couleurs, définissez la configuration <code>themes</code> sur un tableau vide.",
  "How to use a theme only for a section of a page?": "Comment utiliser un thème uniquement pour une section d'une page?",
  "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme.": "Ajoutez <code>data-theme='THEME_NAME'</code> à n'importe quel élément et tout ce qu'il contient aura votre thème.",
  "You can nest themes and there is no limit!": "Vous pouvez imbriquer des thèmes sans limite!",
  "You can force a section of your HTML to only use a specific theme.": "Vous pouvez forcer une section de votre code HTML à n'utiliser qu'un thème spécifique.",
  "How to add a new custom theme?": "Comment ajouter un nouveau thème personnalisé?",
  "You can add a new theme from <code>tailwind.config.js</code> file.": "Vous pouvez ajouter un nouveau thème à partir du fichier <code>tailwind.config.js</code>.",
  "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes.": "Dans l'exemple ci-dessous, j'ai ajouté un nouveau thème appelé <code>mytheme</code> et j'inclus également les thèmes <code>dark</code> et <code>cupcake</code>.",
  "The first theme (<code>mytheme</code>) will be the default theme.": "Le premier thème (<code>mytheme</code>) sera le thème par défaut.",
  "<code>dark</code> theme will be the default theme for dark mode.": "Le thème <code>dark</code> sera le thème par défaut pour le mode sombre.",
  "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button).": "Dans l'exemple ci-dessous, j'ai les couleurs requises. Toutes les autres couleurs seront générées automatiquement (comme la couleur du bouton lorsque vous vous concentrez dessus ou la couleur du texte sur un bouton <code>primary</code>).",
  "CSS variables in daisyUI themes": "Variables CSS dans les thèmes daisyUI",
  "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:": "Il existe quelques variables CSS facultatives que vous pouvez utiliser dans les thèmes daisyUI pour personnaliser les décisions de conception pour chaque thème:",
  "You can also add <a href='/docs/colors/' class='link'>optional color names</a> to have full control over all colors.": "Vous pouvez également ajouter des <a href='/docs/colors/' class='link'>noms de couleurs facultatifs</a> pour avoir un contrôle total sur toutes les couleurs.",
  "Custom CSS for a daisyUI theme": "CSS personnalisé pour un thème daisyUI",
  "You can apply custom style to a daisyUI themes using CSS:": "Vous pouvez appliquer un style personnalisé à un thème daisyUI à l'aide du CSS:",
  "How to customize an existing theme?": "Comment personnaliser un thème existant?",
  "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.": "Dans votre fichier tailwind.config.js, vous pouvez require un thème daisyUI existant et remplacer certaines couleurs.",
  "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:": "Dans l'exemple ci-dessous, je require et diffuse le thème <code>light</code>, je change également ses couleurs <code>primary</code> et <code>primary-focus</code>:",
  "Contribute to translation": "Contribuer à la traduction",
  "Alert informs users about important events.": "Alert informe les utilisateurs des événements importants.",
  "Artboard provides fixed size container to display a demo content on mobile size.": "Artboard fournit un conteneur de taille fixe pour afficher un contenu de démonstration de la taille d'un téléphone portable.",
  "Avatars are used to show a thumbnail representation of an individual or business in the interface.": "Les avatars sont utilisés pour afficher une représentation miniature d'un individu ou d'une entreprise dans l'interface.",
  "Badges are used to inform the user of the status of specific data.": "Les badges sont utilisés pour informer l'utilisateur de l'état d'une donnée spécifique.",
  "Bottom navigation bar allows navigation between primary screens.": "La barre de navigation inférieure permet la navigation entre les écrans principaux.",
  "Breadcrumbs helps users to navigate through the website.": "Le Breadcrumbs aide les utilisateurs à naviguer sur le site Web.",
  "Button group shows buttons next to each other.": "Le groupe de boutons affiche les boutons les uns à côté des autres.",
  "Buttons allow the user to take actions or make choices.": "Les boutons permettent à l'utilisateur d'effectuer des actions ou de faire des choix.",
  "Cards are used to group and display content in a way that is easily readable.": "Les Cards sont utilisées pour regrouper et afficher le contenu d'une manière facilement lisible.",
  "Carousel show images or content in a scrollable area.": "Le carrousel affiche des images ou du contenu dans une zone défilable.",
  "Checkboxes are used to select or deselect a value.": "Les cases à cocher sont utilisées pour sélectionner ou désélectionner une valeur.",
  "Collapse is used for showing and hiding content.": "Collapse est utilisé pour afficher et masquer le contenu.",
  "Countdown gives you a transition effect of changing numbers.": "Le compte à rebours vous donne un effet de transition sur des nombres qui changent.",
  "Divider will be used to separate content vertically or horizontally.": "Le séparateur est utilisé pour séparer le contenu verticalement ou horizontalement.",
  "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.": "Le Drawer est une disposition en grille qui peut afficher/masquer une barre latérale sur le côté gauche ou droit de la page web.",
  "Dropdown can open a menu or any other element when the button is clicked.": "La liste déroulante peut ouvrir un menu ou tout autre élément lorsque le bouton est cliqué.",
  "Footer can contain logo, copyright notice, and links to other pages.": "Le pied de page peut contenir un logo, un avis de droit d'auteur et des liens vers d'autres pages.",
  "Hero is a component for displaying a large box or image with a title and description.": "Hero est un composant permettant d'afficher une grande boîte ou une image avec un titre et une description.",
  "Indicators are used to place an element on the corner of another element.": "Les indicateurs sont utilisés pour placer un élément sur le coin d'un autre élément.",
  "Input group puts an input next to a text or a button.": "Le groupe d'entrée place une entrée à côté d'un texte ou d'un bouton.",
  "Text Input is a simple input field.": "Le Text Input est un simple champ de saisie.",
  "Kbd is used to display keyboard shortcuts.": "Kbd est utilisé pour afficher les raccourcis clavier.",
  "Link adds the missing underline style to links.": "Link ajoute le style de soulignement manquant aux liens.",
  "Mask crops the content of the element to common shapes.": "Le masque découpe le contenu de l'élément en formes communes.",
  "Menu is used to display a list of links vertically or horizontally.": "Le menu est utilisé pour afficher une liste de liens verticalement ou horizontalement.",
  "Code mockup is used to show a block of code in a box that looks like a code editor.": "La maquette de code est utilisée pour afficher un bloc de code dans une boîte qui ressemble à un éditeur de code.",
  "Phone mockup shows a mockup of an iPhone.": "La maquette du téléphone montre une maquette d'un iPhone.",
  "Window mockup shows a box that looks like an operating system window.": "La maquette de fenêtre montre une boîte qui ressemble à une fenêtre du système d'exploitation.",
  "Modal is used to show a dialog or a box when you click a button.": "Modal est utilisé pour afficher une boîte de dialogue ou une boîte lorsque vous cliquez sur un bouton.",
  "Navbar is used to show a navigation bar on the top of the page.": "Navbar est utilisé pour afficher une barre de navigation en haut de la page.",
  "Pagination is a group of buttons that allow the user to navigate between a set of related content.": "Pagination est un groupe de boutons qui permettent à l'utilisateur de naviguer entre un ensemble de contenus connexes.",
  "Progress bar can be used to show the progress of a task or to show the passing of time.": "La barre de progression peut être utilisée pour montrer la progression d'une tâche ou pour montrer le passage du temps.",
  "Radial progress can be used to show the progress of a task or to show the passing of time.": "Radial progress peut être utilisée pour montrer la progression d'une tâche ou pour montrer l'avancement du temps.",
  "Radio buttons allow the user to select one option from a set.": "Les boutons radio permettent à l'utilisateur de sélectionner une option parmi un ensemble.",
  "Range slider is used to select a value by sliding a handle.": "Range slider est utilisé pour sélectionner une valeur en faisant glisser une poignée.",
  "Rating is a set of radio buttons that allow the user to rate something.": "Classement est un ensemble de boutons radio qui permettent à l'utilisateur d'évaluer quelque chose.",
  "Select is used to pick a value from a list of options.": "Select est utilisé pour choisir une valeur dans une liste d'options.",
  "Stack visually puts elements on top of each other.": "Stack place visuellement les éléments les uns sur les autres.",
  "Stat is used to show numbers and data in a box.": "Stat est utilisé pour afficher des nombres et des données dans une boîte.",
  "Steps can be used to show a list of steps in a process.": "Les Étapes peuvent être utilisées pour afficher une liste d'étapes dans un processus.",
  "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.": "Swap vous permet de basculer la visibilité de deux éléments à l'aide d'une case à cocher ou d'un nom de classe.",
  "Tabs can be used to show a list of links in a tabbed format.": "Les onglets peuvent être utilisés pour afficher une liste de liens dans un format à onglets.",
  "Table can be used to show a list of data in a table format.": "Le tableau peut être utilisé pour afficher une liste de données sous forme de tableau.",
  "Textarea allows users to enter text in multiple lines.": "Zone de texte permet aux utilisateurs de saisir du texte sur plusieurs lignes.",
  "Toggle is a checkbox that is styled to look like a switch button.": "Toggle est une case à cocher qui ressemble à un bouton switch.",
  "Tooltip can be used to show a message when hovering over an element.": "L'info-bulle peut être utilisée pour afficher un message lors du survol d'un élément.",
  "Code mockup": "Maquette de code",
  "Phone mockup": "Maquette de téléphone",
  "Window mockup": "Maquette de fenêtre",
  "File Input": "Saisie de fichier",
  "Text Input": "Saisie de texte",
  "Range slider": "Curseur de plage",
  Tabs: Tabs$8,
  "All daisyUI components": "Tous les composants daisyUI",
  "Class name": "Class name",
  Type: Type$8,
  Search: Search$8,
  "daisyUI themes": "thèmes daisyUI",
  "How to use daisyUI themes?": "Comment utiliser les thèmes daisyUI?",
  "daisyUI Theme Generator": "Générateur de thèmes daisyUI",
  "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them.": "Vous pouvez ajouter vos thèmes personnalisés au fichier <span class='badge badge-outline'>tailwind.config.js</span> dans le tableau <span class='badge badge-outline'>daisyui > themes</span>. Sur cette page, vous pouvez choisir les valeurs de couleur requises et voir à quoi ressembleront les composants avec elles.",
  "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)": "Vous pouvez également définir des couleurs facultatives pour avoir plus de contrôle sur les valeurs de couleur (par exemple : la couleur d'un bouton lorsqu'il est focus sur la couleur du texte sur un bouton)",
  "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use.": " Consultez la <a class='link font-bold' href='/docs/colors/'>page des couleurs</a> pour voir tous les noms de couleurs que vous pouvez utiliser.",
  "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)": "Consultez la <a class='link font-bold' href='/docs/themes/'>page des thèmes</a> pour voir toutes les variables CSS que vous pouvez utiliser pour personnaliser la décision de conception du design (exemple : border-radius, animations , etc.)",
  Randomize: Randomize$8,
  Reset: Reset$8,
  Preview: Preview$8,
  "Layout and Typography": "Mise en page et typographie",
  "How to use layouts and typography in daisyUI": "Comment utiliser les mises en page et la typographie dans daisyUI",
  "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.": "La mise en page, le dimensionnement, les grilles, l'espacement, etc. seront tous gérés par les classes utilitaires Tailwind CSS",
  "Read more": "Lire la suite",
  Typography: Typography$8,
  "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.": "Vous devez utiliser le <a href='https://github.com/tailwindlabs/tailwindcss-typography'>plugin TailwindCSS Typography officiel</a>.",
  "It handles everything and it's fully customizable.": "Il gère tout et il est entièrement personnalisable.",
  "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.": "daisyUI ajoute du style à @tailwindcss/typography afin qu'il utilise le même thème que les autres éléments.",
  "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js": "Assurez-vous de require <span class='badge badge-outline'>daisyui</span> APRÈS <span class='badge badge-outline'>@tailwindcss/typography</span> dans tailwind.config.js",
  "Here you can see how elements will look using <code>@tailwindcss/typography</code>.": "Ici, vous pouvez voir à quoi ressembleront les éléments en utilisant <code>@tailwindcss/typography</code>.",
  "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>": "Pour utiliser un préfixe personnalisé, <a class='link' href='/docs/config/#prefix'>ajoutez votre chaîne de préfixe à config</a>",
  Component: Component$8,
  Modifier: Modifier$8,
  Responsive: Responsive$8,
  "Changes the style of a component": "Modifie le style d'un composant",
  "Supports responsive prefixes (sm:, lg:, …)": "Prend en charge les préfixes réactifs (sm:, lg:, …)",
  "Make your theme": "Créer votre thème",
  "More examples": "Plus d'exemples",
  "Support daisyUI's development": "Soutenir le développement de daisyUI",
  "The most popular": "Le plus populaire",
  "component library": "bibliothèque de composants",
  "for Tailwind CSS": "pour Tailwind CSS",
  "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>": "daisyUI ajoute des noms de classes de composants à Tailwind&nbsp;CSS<br /> pour que vous puissiez créer de beaux sites web <span class='border-base-content/20 border-b-2'>plus rapidement que jamais.</span>",
  "don't re-invent<br/>the wheel<br/>every time": "ne réinventez pas la roue à chaque fois",
  "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.": "Dans un projet Tailwind CSS, vous devez écrire des noms de classe utilitaire pour chaque élément. Des milliers de noms de classe juste pour styliser les éléments les plus basiques.",
  "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>": "au lieu d'écrire<br /> <span class='text-error'><span class='font-black'>100</span> noms de classe</span>",
  "For every element, every page, every project,<br/>again and again": "Pour chaque élément, chaque page, chaque projet,<br/>encore et encore",
  "use <span class='text-success'><span class='font-black'>semantic</span><br />class names</span>": "utiliser <span class='text-success'>des noms de classes<br /><span class='font-black'>sémantiques</span></span>",
  "It's descriptive, faster, cleaner and easier to maintain.": "C'est descriptif, plus rapide, plus propre et plus facile à maintenir.",
  Features: Features$8,
  Links: Links$8,
  Message: Message$8,
  "Cleaner HTML": "HTML plus propre",
  Customizable: Customizable$8,
  Themeable: Themeable$8,
  "Pure CSS": "Pure CSS",
  Dashboard: Dashboard$8,
  Notifications: Notifications$8,
  Messages: Messages$8,
  People: People$8,
  Products: Products$8,
  "Use Tailwind CSS but write fewer class names.": "Utilisez Tailwind CSS mais écrivez moins de noms de classe.",
  "Pure CSS. <br />No JS dependency": "Pure CSS. Aucune dépendance JS",
  "Works on all frameworks": "Fonctionne sur tous les frameworks",
  "Design system": "Système de conception",
  "Styling a simple button": "Styliser un bouton simple",
  Result: Result$8,
  "Take Tailwind CSS": "Prenez Tailwind CSS",
  "to the next level": "au niveau supérieur",
  "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like": "daisyUI ajoute des noms de classe à Tailwind CSS<br />pour tous les composants d'interface utilisateur courants.<br />Des noms de classe comme",
  "and many more.": "et bien d'autres.",
  "This allows us to focus on important things<br />instead of styling basic elements for every project.": "Cela nous permet de nous concentrer sur des choses importantes<br />au lieu de styliser des éléments de base pour chaque projet.",
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$8,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$8,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$8,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$8,
  "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.": "Écrivez moins de noms de classe<br />Utilisez des noms de classe de composant<br />modifiez-les en utilisant les utilitaires Tailwind CSS.",
  Click: Click$8,
  "Tailwind only": "Tailwind seulement",
  "Tailwind + daisyUI": "Tailwind + daisyUI",
  Save: Save$8,
  "Accept terms of use": "Accepter les conditions d'utilisation",
  "Submit to newsletter": "Soumettre à la newsletter",
  "Fewer class names": "Moins de noms de classe",
  "Faster development": "Développement plus rapide",
  "Smaller file size": "Taille de fichier plus petite",
  "With daisyUI, you write 80% fewer class names<br />And your HTML size will be about 70% smaller.": "Avec daisyUI, vous écrivez 80% de noms de classe en moins<br />Et la taille de votre HTML sera environ 70% plus petite.",
  "CSS Class names": "Noms de classe CSS",
  "fewer class names": "moins de noms de classe",
  "HTML size": "Taille du HTML",
  "smaller DOM size": "taille du DOM plus petite",
  "Highly customizable": "Hautement personnalisable",
  "Powered by Tailwind&nbsp;CSS utility&nbsp;classes": "Alimenté par les classes utilitaires&nbsp;Tailwind&nbsp;CSS",
  "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes.": "daisyUI est construit au-dessus de Tailwind&nbsp;CSS<br />donc vous pouvez tout personnaliser<br />en utilisant des classes utilitaires.",
  "Pure CSS.": "Pure CSS.",
  "Framework agnostic.": "Framework agnostic.",
  "Works everywhere.": "Fonctionne partout.",
  "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file.": "daisyUI est un plugin pour Tailwind CSS. Il fonctionne sur tous les frameworks JS et n'a pas besoin d'un fichier de bundle JS.",
  "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name.": "Installez daisyUI en tant que dépendance de développement et utilisez les noms de classe comme n'importe quel autre nom de classe Tailwind CSS.",
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$8,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$8,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$8,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$8,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$8,
  "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components.": "Votre site web doit être unique. Créez un thème personnalisé pour vous-même à l'aide du générateur de thèmes daisyUI. Les couleurs que vous choisissez seront appliquées à tous les composants daisyUI.",
  "Learn more about themes": "En savoir plus sur les thèmes",
  "utility classes": "classes utilitaires",
  "endless possibilities": "possibilités infinies",
  "Mix and match daisyUI class names to create unique web pages.": "Mélangez et associez les noms de classes daisyUI pour créer des pages Web uniques.",
  "daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS": "daisyUI est la bibliothèque de composants<br />la plus populaire pour Tailwind&nbsp;CSS",
  "open-source projects using daisyUI": "projets open-source utilisant daisyUI",
  "Free and open-source": "Gratuit et open-source",
  "Built by the community": "Construit par la communauté",
  "daisyUI welcomes contributions from developers around the world": "daisyUI accueille les contributions des développeurs du monde entier",
  "Sponsors and backers": "Sponsors et bailleurs de fonds",
  "Try daisyUI": "Essayer daisyUI",
  "on your favorite framework": "sur votre framework préféré",
  "See all examples": "Voir tous les exemples",
  "Or play with daisyUI on": "Ou jouer avec daisyUI sur",
  "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.": "Les bulles de discussion sont utilisées pour afficher une ligne de conversation et toutes ses données, y compris l'image de l'auteur, le nom de l'auteur, l'heure, etc.",
  "File Input is a an input field for uploading files.": "Le champ de saisie de fichier est un champ de saisie pour le téléchargement de fichiers.",
  "Toast is a wrapper to stack elements, positioned on the corner of page.": "Toast est un wrapper pour empiler des éléments, placé dans le coin de la page.",
  "Admin panel": "Panneau d'administration",
  Updates: Updates$8,
  Stats: Stats$8,
  "Unlimited themes": "Thèmes illimités",
  "with zero effort": "sans effort",
  "daisyUI adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values. Using daisyUI color names, you get Dark Mode and even more themes without adding a new class name.": "daisyUI ajoute un ensemble de noms de couleurs personnalisables à Tailwind CSS et ces nouvelles couleurs utilisent des variables CSS pour les valeurs. En utilisant les noms de couleur daisyUI, vous obtenez un mode sombre et encore plus de thèmes sans ajouter de nouveau nom de classe.",
  "See all themes": "Voir tous les thèmes",
  "Semantic colors": "Couleurs sémantiques",
  "Learn more about colors": "En savoir plus sur les couleurs",
  "Get started": "commencer maintenant",
  "daisyUI 3 is available now!": "daisyUI 3 est disponible maintenant!",
  "Become a sponsor": "Devenir un sponsor",
  "": ""
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Actions: Actions$8,
  Alert: Alert$8,
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$8,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$8,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$8,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$8,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$8,
  Artboard: Artboard$8,
  Avatar: Avatar$8,
  Badge: Badge$8,
  Benefits: Benefits$8,
  Breadcrumbs: Breadcrumbs$8,
  Button: Button$8,
  Card: Card$8,
  Carousel: Carousel$8,
  Checkbox: Checkbox$8,
  Click: Click$8,
  Code: Code$8,
  Collapse: Collapse$8,
  Colors: Colors$8,
  Component: Component$8,
  Config: Config$8,
  Countdown: Countdown$8,
  Customizable: Customizable$8,
  Dashboard: Dashboard$8,
  Divider: Divider$8,
  Drawer: Drawer$8,
  Dropdown: Dropdown$8,
  Features: Features$8,
  Footer: Footer$8,
  Hero: Hero$8,
  Indicator: Indicator$8,
  Install: Install$8,
  Introduction: Introduction$8,
  Kbd: Kbd$8,
  Layout: Layout$8,
  Link: Link$8,
  Links: Links$8,
  Mask: Mask$8,
  Menu: Menu$8,
  Message: Message$8,
  Messages: Messages$8,
  Mockup: Mockup$8,
  Modal: Modal$8,
  Modifier: Modifier$8,
  Navbar: Navbar$8,
  Navigation: Navigation$8,
  Next: Next$8,
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$8,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$8,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$8,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$8,
  Notifications: Notifications$8,
  Or: Or$8,
  Pagination: Pagination$8,
  People: People$8,
  Phone: Phone$8,
  Prev: Prev$8,
  Preview: Preview$8,
  Products: Products$8,
  Progress: Progress$8,
  Radio: Radio$8,
  Randomize: Randomize$8,
  Range: Range$8,
  Rating: Rating$8,
  Reset: Reset$8,
  Responsive: Responsive$8,
  Result: Result$8,
  Save: Save$8,
  Search: Search$8,
  Select: Select$8,
  Stack: Stack$8,
  Stat: Stat$8,
  Stats: Stats$8,
  Steps: Steps$8,
  Swap: Swap$8,
  Tab: Tab$8,
  Table: Table$8,
  Tabs: Tabs$8,
  Textarea: Textarea$8,
  Themeable: Themeable$8,
  Themes: Themes$8,
  Toast: Toast$8,
  Toggle: Toggle$8,
  Tooltip: Tooltip$8,
  Type: Type$8,
  Typography: Typography$8,
  Updates: Updates$8,
  Use: Use$8,
  Warning: Warning$8,
  Window: Window$8,
  __code: __code$8,
  __name: __name$8,
  __status: __status$8,
  changelog: changelog$8,
  components: components$8,
  config: config$8,
  contributing: contributing$8,
  default: fr,
  excluded: excluded$8,
  license: license$8,
  links: links$8,
  pages: pages$8,
  themes: themes$8,
  updated: updated$8
}, Symbol.toStringTag, { value: "Module" }));
const __name$7 = "Indonesia";
const __code$7 = "ID";
const __status$7 = "";
const components$7 = "Komponen";
const themes$7 = "Tema";
const pages$7 = "Halaman";
const config$7 = "Konfigurasi";
const links$7 = "Pranala";
const changelog$7 = "Catatan Perubahan";
const license$7 = "Lisensi";
const contributing$7 = "Kontribusi";
const Install$7 = "Instalasi";
const Use$7 = "Penggunaan";
const Config$7 = "Konfigurasi";
const Colors$7 = "Warna";
const Themes$7 = "Tema";
const Actions$7 = "Aksi";
const Button$7 = "Button";
const Dropdown$7 = "Dropdown";
const Modal$7 = "Modal";
const Swap$7 = "Swap";
const Alert$7 = "Alert";
const Avatar$7 = "Avatar";
const Badge$7 = "Badge";
const Card$7 = "Card";
const Carousel$7 = "Carousel";
const Collapse$7 = "Collapse";
const Countdown$7 = "Countdown";
const Kbd$7 = "Kbd";
const Progress$7 = "Progress";
const Stat$7 = "Stat";
const Table$7 = "Table";
const Tooltip$7 = "Tooltip";
const Checkbox$7 = "Checkbox";
const Radio$7 = "Radio";
const Range$7 = "Range";
const Rating$7 = "Rating";
const Select$7 = "Select";
const Textarea$7 = "Textarea";
const Toggle$7 = "Toggle";
const Layout$7 = "Tata Letak";
const Artboard$7 = "Artboard";
const Divider$7 = "Divider";
const Drawer$7 = "Drawer";
const Footer$7 = "Footer";
const Hero$7 = "Hero";
const Indicator$7 = "Indicator";
const Mask$7 = "Mask";
const Stack$7 = "Stack";
const Toast$7 = "Toast";
const Navigation$7 = "Navigasi";
const Breadcrumbs$7 = "Breadcrumbs";
const Link$7 = "Link";
const Menu$7 = "Menu";
const Navbar$7 = "Navbar";
const Pagination$7 = "Pagination";
const Steps$7 = "Steps";
const Tab$7 = "Tab";
const Mockup$7 = "Mockup";
const Code$7 = "Code";
const Phone$7 = "Phone";
const Window$7 = "Window";
const excluded$7 = "excluded";
const updated$7 = "diperbarui";
const Prev$7 = "Sebelumnya";
const Next$7 = "Selanjutnya";
const Warning$7 = "Peringatan";
const Or$7 = "Atau";
const Introduction$7 = "Pengenalan";
const Benefits$7 = "Keuntungan";
const Tabs$7 = "Tabs";
const Type$7 = "Tipe";
const Search$7 = "Cari";
const Randomize$7 = "Acak";
const Reset$7 = "Atur ulang";
const Preview$7 = "Pratinjau";
const Typography$7 = "Tipografi";
const Component$7 = "Komponen";
const Modifier$7 = "Modifier";
const Responsive$7 = "Responsif";
const Features$7 = "Fitur";
const Links$7 = "Tautan";
const Message$7 = "Pesan";
const Customizable$7 = "Dapat disesuaikan";
const Themeable$7 = "Dapat diubah tema";
const Dashboard$7 = "Dasbor";
const Notifications$7 = "Notifikasi";
const Messages$7 = "Pesan";
const People$7 = "Orang";
const Products$7 = "Produk";
const Result$7 = "Hasil";
const No_more_ugly_HTML_part_1$7 = "Tidak ada";
const No_more_ugly_HTML_part_2$7 = "lagi";
const No_more_ugly_HTML_part_3$7 = "HTML";
const No_more_ugly_HTML_part_4$7 = "yang jelek";
const Click$7 = "Klik";
const Save$7 = "Simpan";
const Apply_your_own_design_decisions_part_1$7 = "Terapkan";
const Apply_your_own_design_decisions_part_2$7 = "keputusan";
const Apply_your_own_design_decisions_part_3$7 = "desain";
const Apply_your_own_design_decisions_part_4$7 = "Anda sendiri";
const Apply_your_own_design_decisions_part_5$7 = "";
const Updates$7 = "Pembaruan";
const Stats$7 = "Statistik";
const id = {
  __name: __name$7,
  __code: __code$7,
  __status: __status$7,
  "Tailwind CSS Components": "Komponen Tailwind CSS",
  "cta-1": "Lihat semua komponen",
  "cta-1-mobile": "Komponen",
  "cta-2": "Cara pemakaian",
  "components-btn": "Komponen",
  "change-theme-btn": "Tema",
  "all-components-btn": "Lihat semua komponen",
  components: components$7,
  themes: themes$7,
  "github-stars": "Bintang pada GitHub",
  "npm-installs": "Instalasi pada NPM",
  "install-title": "Instalasi daisyUI",
  "install-desc": "CSS murni. Bekerja di semua framework. daisyUI dapat digunakan sebagai plugin TailwindCSS atau sebagai library CSS yang independen",
  "install-step-1": "Instal daisyUI sebagai Node package",
  "install-step-2": "Tambahkan daisyUI ke Tailwind CSS sebagai plugin",
  "install-btn": "Panduan Instalasi",
  "footer-tagline": "Component library gratis<br /> Untuk utility-first CSS framework",
  pages: pages$7,
  "how-to-install": "Cara instalasi",
  "how-to-use-components": "Cara membuat komponen",
  "how-to-customize": "Cara mengkustomisasi",
  "how-to-use-themes": "Cara menggunakan tema",
  "color-system": "Sistem warna",
  config: config$7,
  links: links$7,
  changelog: changelog$7,
  license: license$7,
  contributing: contributing$7,
  "available-on": "Tersedia di",
  "try-online": "Coba online",
  "created-by": "Dibuat oleh",
  Install: Install$7,
  Use: Use$7,
  "Customize components": "Kustomisasi komponen",
  Config: Config$7,
  Colors: Colors$7,
  Themes: Themes$7,
  "Theme Generator": "Generator Tema",
  "Layout & Typography": "Tata Letak & Tipografi",
  Actions: Actions$7,
  Button: Button$7,
  Dropdown: Dropdown$7,
  Modal: Modal$7,
  Swap: Swap$7,
  "Data display": "Penampilan data",
  Alert: Alert$7,
  Avatar: Avatar$7,
  Badge: Badge$7,
  Card: Card$7,
  Carousel: Carousel$7,
  "Chat bubble": "Chat bubble",
  Collapse: Collapse$7,
  Countdown: Countdown$7,
  Kbd: Kbd$7,
  Progress: Progress$7,
  "Radial progress": "Radial progress",
  Stat: Stat$7,
  Table: Table$7,
  Tooltip: Tooltip$7,
  "Data input": "Data input",
  Checkbox: Checkbox$7,
  "Text input": "Text input",
  Radio: Radio$7,
  Range: Range$7,
  Rating: Rating$7,
  Select: Select$7,
  Textarea: Textarea$7,
  Toggle: Toggle$7,
  Layout: Layout$7,
  Artboard: Artboard$7,
  "Button group": "Button group",
  Divider: Divider$7,
  Drawer: Drawer$7,
  Footer: Footer$7,
  Hero: Hero$7,
  Indicator: Indicator$7,
  "Input group": "Input group",
  Mask: Mask$7,
  Stack: Stack$7,
  Toast: Toast$7,
  Navigation: Navigation$7,
  Breadcrumbs: Breadcrumbs$7,
  "Bottom navigation": "Bottom navigation",
  Link: Link$7,
  Menu: Menu$7,
  Navbar: Navbar$7,
  Pagination: Pagination$7,
  Steps: Steps$7,
  Tab: Tab$7,
  Mockup: Mockup$7,
  Code: Code$7,
  Phone: Phone$7,
  Window: Window$7,
  excluded: excluded$7,
  "CodePen example page": "Contoh laman pada CodePen",
  "Tailwind Play example page": "Contoh laman pada Tailwind Play",
  "new": "baru",
  updated: updated$7,
  "Tailwind Plugin": "Plugin Tailwind",
  "Use CDN": "Menggunakan CDN",
  "Install daisyUI as a Tailwind CSS plugin": "Instal daisyUI sebagai plugin Tailwind CSS",
  "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> installed.": "Anda harus menginstal <a href='https://nodejs.org/en/download/'>Node.js</a> dan <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a>.",
  "How to install daisyUI as a Tailwind CSS plugin?": "Bagaimana cara menginstal daisyUI sebagai plugin Tailwind CSS?",
  "Install daisyUI": "Instal daisyUI",
  "Then add daisyUI to your <code>tailwind.config.js</code> files": "Lalu tambahkan daisyUI ke dalam <code>tailwind.config.js</code> Anda",
  "daisyUI example repositories": "Contoh repository daisyUI",
  "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.": "Lihat contoh setup daisyUI dari framework dan alat pengembangan yang berbeda.",
  Prev: Prev$7,
  Next: Next$7,
  "Do you have a question?": "Ada pertanyaan?",
  "Do you see a bug?": "Ada bug?",
  "Do you like daisyUI?": "Menyukai daisyUI?",
  "Edit this page on GitHub": "Edit halaman ini pada GitHub",
  "ask the community": "tanya komunitas",
  "open an issue on GitHub": "buka issue pada  GitHub",
  "tweet about it!": "tweet tentang ini!",
  Warning: Warning$7,
  "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large.": "File CDN tidak direkomendasikan untuk production<br/>karena Anda tidak dapat menghapus style yang tidak digunakan sehingga ukuran file bisa membengkak.",
  "You don't need to install anything.": "Anda tidak perlu menginstal apapun.",
  "Just add one of these to the <code>head</code> tag of your HTML": "Gunakan salah satu dari blok kode dibawah ke dalam tag <code>head</code> HTML Anda",
  Or: Or$7,
  "Add component classes to your HTML": "Tambah component class ke dalam HTML Anda",
  "How to use daisyUI classes to style your page?": "Bagaimana cara menggunakan class daisyUI untuk halaman Anda?",
  "Once you <a href='/docs/install/'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc.": "Setelah Anda <a href='/docs/install/'>menginstal daisyUI</a>, Anda bisa menggunakan component class seperti <code>btn</code>, <code>card</code>, dll.",
  "So instead of making a button using only utility classes": "Jadi daripada membuat sebuah tombol menggunakan utility class",
  "You can just use a component class like this": "Anda bisa menggunakan component class seperti ini",
  "Then you can modify the component with daisyUI additional utility classes": "Lalu, Anda bisa memodifikasi komponen di daisyUI menggunakan utility class tambahan",
  "Or you can modify the component with Tailwind CSS utility classes": "Atau Anda bisa memodifikasi komponen di dalam utility class Tailwind CSS",
  "Customize daisyUI components": "Kustomisasi komponen daisyUI",
  "How to customize daisyUI?": "Cara mengkustomisasi daisyUI",
  "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.": "Komponen daisyUI datang dengan beberapa varian yang diperlukan untuk sebuah design system dan Anda biasanya tidak perlu mengkustomisasi apapun.",
  "But you can still customize components in many ways.": "Tapi Anda tetap bisa mengkustomisasi komponen-komponen tersebut dengan berbagai macam cara.",
  "Let's say, you want to customize this button:": "Katakanlah, Anda ingin mengkustomisasi tombol ini:",
  "You can use daisyUI utility classes:": "Anda bisa menggunakan utility class dari daisyUI:",
  "You can use Tailwind's utility classes:": "Anda bisa menggunakan utility class dari daisyUI:",
  "You can customize components on your CSS file, using Tailwind's @apply directive:": "Anda bisa mengkustomisasi komponen langsung dari file CSS Anda, menggunakan direktif @apply milik Tailwind.",
  "You can also:": "Anda juga bisa:",
  "Add your own theme.": "menambahkan tema Anda sendiri",
  "Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>.": "keluar dari desain daisyUI <a href='/docs/config/'>dengan menggunakan versi daisyUI yang tidak memiliki style (skeleton)</a>.",
  "How to change the default configuration of daisyUI?": "Bagaimana cara mengubah konfigurasi bawaan daisyUI?",
  "daisyUI can be configured from your <code>tailwind.config.js</code> file.": "daisyUI bisa dikonfigurasi dari file <code>tailwind.config.js</code> Anda.",
  "Default config": "Konfigurasi bawaan",
  "Config values explained": "Penjelasan nilai konfigurasi",
  "If it's true, components will have colors and style so you won't need to design anything.": "Jika nilainya true, komponen akan mempunyai warna dan style jadi Anda tidak perlu mendesain apapun.",
  "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.": "Jika nilainya false, komponen tidak akan mempunyai warna dan style visual sehingga Anda bisa mendesain style Anda sendiri dari awal.",
  "If it's true, all themes will be included.": "Jika nliainya true, maka seluruh tema akan dimasukkan.",
  "If it's false, only light and dark themes will be available.": "Jika nilainya false, hanya tema terang dan gelap yang akan tersedia.",
  "If it's an array, only themes in the array will be included and the first theme will be the default theme.": "Jika nilainya adalah sebuah array, hanya tema yang terdapat dalam array yang akan dimasukkan dan tema yang pertama akan menjadi tema utama.",
  "Read more about <a href='/docs/themes/'>themes</a>": "Baca selengkapnya tentang <a href='/docs/themes/'>tema</a>",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.": "Jika nilainya true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>hanya beberapa style basis</a> akan ditambahkan",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.": "Jika nilainya true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>class responsive dan utility</a> akan ditambahkan",
  "If it's true, daisyUI shows logs in the terminal while CSS is building.": "Jika nilainya true, daisyUI akan menampilkan log pada terminal ketika CSS sedang dibangun",
  "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag.": "Jika nilainya true, tema Anda akan menjadi kanan-ke-kiri. Anda harus menambahkan <code>dir='rtl'</code> ke tag body Anda.",
  "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically.": "Jika Anda menggunakan daisyUI dengan opsi RTL, Saya merekomendasikan untuk menggunakan plugin <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> untuk membalik semua utility Tailwind Anda secara otomatis.",
  "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.": "Mengizinkan kami untuk menggunakan tema lain selain mode gelap sistem. Secara bawaan, mode <code>dark</code> (atau tema kustom yang bernamakan <code>dark</code>) akan digunakan sebagai tema bawaan jika tidak ada tema buatan yang dispesifikasikan dan pengguna menggunakan mode gelap pada sistemnya. Dengan konfigurasi ini, Anda bisa mengatur tema lain menjadi tema gelap utama.",
  "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).": "Menambahkan prefix untuk seluruh nama class dari daisyUI (termasuk component class, class modifier, dan class responsive).",
  "For example: <code>btn</code> will become <code>prefix-btn</code>.": "Contoh: <code>btn</code> akan menjadi <code>prefix-btn</code>.",
  "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.": "Jika Anda menggunakan library CSS kedua yang memiliki nama class yang mirip, Anda bisa menggunakan konfigurasi ini untuk mencegah konflik.",
  "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.": "utility class seperti nama warna (contoh. <code>bg-primary</code>) atau border-radius (contoh. <code>rounded-box</code>) tidak akan terpengaruh oleh konfigurasi ini karena mereka ditambahkan sebagai ekstensi ke class Tailwind CSS.",
  "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.": "Jika Anda menggunakan opsi <code>prefix</code> daisyUI (seperti <code>daisy-</code>) serta opsi <code>prefix</code> Tailwind CSS (seperti <code>tw-</code>) secara bersamaan, nama class akan memiliki prefix seperti ini: <code>tw-daisy-btn</code>.",
  "How to use daisyUI colors?": "Bagaimana cara menggunakan warna daisyUI?",
  Introduction: Introduction$7,
  "daisyUI is fully themeable and colorable,": "daisyUI sepenuhnya bertema dan berwarna,",
  "So instead of using constant color utility classes like:": "Jadi, alih-alih menggunakan konstan utility warna seperti:",
  "It's suggested to use semantic color utility classes like:": "Disarankan untuk menggunakan utility class semantik seperti:",
  "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.": "Setiap nama warna menggunakan variabel CSS dan setiap tema daisyUI mengaplikasikan nilai warna ke dalam utility class saat diaplikasikan.",
  Benefits: Benefits$7,
  "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces.": "Penamaan warna semantik lebih masuk akal untuk digunakan karena saat kita mendesain antarmuka, kita tidak hanya menggunakan warna secara acak. Kita mendefinisikan palet warna secara spesifik seperti <code>primary</code>, <code>secondary</code>, dll. dan kita hanya menggunakan warna tersebut di dalam antarmuka kita.",
  "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.": "Selain itu, kami juga penamaan warna semantik untuk mempermudah penemaan. Anda tidak perlu mendefinisikan warna gelap untuk setiap elemen dan Anda tidak hanya terbatas kepada tema terang/gelap. Anda bisa memiliki beberapa tema yang tersedia dan setiap tema hanyalah beberapa baris dari variabel CSS.",
  "List of all daisyUI color names": "Daftar seluruh nama class warna daisyUI",
  "You can use these color names in your theme or in utility classes.": "Anda bisa menggunakan nama-nama warna ini pada tema atau utility class Anda.",
  "Color name + description": "Nama warna + deskripsi",
  "Required or optional for themes": "Dibutuhkan atau optional untuk tema",
  "Example use": "Contoh penggunaan",
  "How to use": "Cara penggunaan",
  "Some daisyUI components come with modifier class names and that modifier class name will apply a color.": "Beberapa komponen daisyUI datang dengan beberapa class modifier dan class modifier tersebut akan mengaplikasikan sebuah warna.",
  "For example": "Sebagai contoh",
  "You can also use color names in utility classes just like Tailwind's original color names.": "Anda juga dapat menggunakan nama warna ke dalam utility class seperti layaknya pada Tailwind.",
  "These are utility classes that can be used with a color name:": "Utility di bawah bisa digunakan dengan nama warna:",
  "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc.": "Jadi Anda bisa menggunakan <code>bg-primary</code>, <code>border-secondary</code>, dll.",
  "daisyUI comes with a number of themes, which you can use with no extra effort.": "daisyUI datang dengan beberapa tema bawaan yang bisa digunakan tanpa upaya tambahan.",
  "Each theme defines a set of colors which will be used on all daisyUI elements.": "Setiap tema mendifinisikan sebuah kumpulan warna yang akan diterapkan oleh seluruh elemen daisyUI.",
  "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:": "Untuk menggunakan sebuah tema, tambahkan nama tema tersebut di dalam <span class=badge>tailwind.config.js</span> dan aktifkan dengan menambahkan atribut <span class=badge>data-theme</span> ke dalam tag <span class=badge>HTML</span>:",
  "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage.": "Saya sarankan untuk menggunakan <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a> agar Anda bisa mengubah tema dan menyimpan tema yang dipilih ke dalam local storage.",
  "List of themes": "Daftar tema",
  "Try them:": "Coba:",
  "The default theme is <code>light</code> (or <code>dark</code> for dark mode)": "Tema bawaan adalah <code>light</code> (atau <code>dark</code> mode gelap)",
  "but you can <a href='https://daisyui.com/docs/config/'>change the default theme from tailwind.config.js</a>": "akan tetapi Anda dapat <a href='https://daisyui.com/docs/config/'>mengubah tema bawaan dari tailwind.config.js</a>",
  "How to remove unused themes?": "Bagaimana cara menghapus tema yang tidak diperlukan?",
  "You can only include the themes you want in your project.": "Anda bisa mengatur tema yang Anda inginkan untuk proyek Anda.",
  "This will reduce the size of your CSS file.": "Hal ini akan mengurangi ukuran file CSS Anda.",
  "In the below example": "Berikut ini adalah contoh",
  "<code>cupcake</code> will be the default theme for light mode": "<code>cupcake</code> akan menjadi tema utama",
  "<code>dark</code> will be the default theme for dark mode": "<code>dark</code> akan menjadi tema utama untuk mode gelap",
  "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>": "<code>cmyk</code> bisa diaplikasikan ke tag HTML apapun menggunakan <code>data-theme='cmyk'</code>",
  "How to disable all themes?": "Bagaimana cara menonaktifkan semua tema?",
  "If you only want the default light and dark themes, set <code>themes</code> config to false.": "Jika Anda hanya ingin menggunakan tema terang dan gelap, atur konfigurasi <code>themes</code> menjadi false.",
  "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array.": "Jika Anda tidak ingin menambahkan tema apapun dan menonaktifkan semua warna, atur konfigurasi <code>themes</code> menjadi array kosong.",
  "How to use a theme only for a section of a page?": "Bagaimana cara menggunakan tema untuk sebagian halaman?",
  "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme.": "Tambahkan <code>data-theme='NAMA_TEMA'</code> ke elemen apapun dan seluruh elemen didalamnya akan memiliki tema yang telah Anda pilih.",
  "You can nest themes and there is no limit!": "Anda dapat menerapkan beberapa tema secara bersarang tanpa batas!",
  "You can force a section of your HTML to only use a specific theme.": "Anda bisa memaksa sebuah section dari HTML Anda untuk menggunakan sebuah tema secara spesifik.",
  "How to add a new custom theme?": "Bagaimana cara menambahkan tema baru?",
  "You can add a new theme from <code>tailwind.config.js</code> file.": "Anda dapat menambahkan tema baru dari file <code>tailwind.config.js</code>.",
  "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes.": "Contoh di bawah, Saya menambahkan tema bernama <code>mytheme</code>, Saya juga akan menambahkan tema <code>dark</code> dan <code>cupcake</code>.",
  "The first theme (<code>mytheme</code>) will be the default theme.": "Tema pertama (<code>mytheme</code>) akan menjadi tema utama.",
  "<code>dark</code> theme will be the default theme for dark mode.": "Tema <code>dark</code> akan menjadi tema utama untuk model gelap.",
  "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button).": "Pada contoh di bawah, Saya memiliki seluruh warna yang dibutuhkan. Semua warna lain akan dibuat secara otomatis (Seperti warna dari tombol ketika Anda memfokuskan tombolnya, atau ketika warna teks dari tombol <code>primary</code>).",
  "CSS variables in daisyUI themes": "Variabel CSS pada tema daisyUI",
  "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:": "Ada beberapa variabel CSS opsional yang bisa dipakai untuk mengkustomisasi desain Anda untuk setiap tema:",
  "You can also add <a href='/docs/colors/' class='link'>optional color names</a> to have full control over all colors.": "Anda juga bisa menambahkan <a href='/docs/colors/' class='link'>nama warna opsional</a> untuk mendapatkan kontrol penuh atas seluruh warna.",
  "Custom CSS for a daisyUI theme": "CSS kustom untuk tema daisyUI",
  "You can apply custom style to a daisyUI themes using CSS:": "Anda dapat mengaplikasikan style kustom kepada tema daisyUI menggunakan CSS:",
  "How to customize an existing theme?": "Bagaimana cara mengkustomisasi tema yang sudah ada?",
  "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.": "Pada tailwind.config.js, Anda dapat menambahkan tema daisyUI yang sudah ada dan mengesampingkan beberapa warna.",
  "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:": "Pada contoh di bawah, Saya mengambil dan menyebarkan tema <code>light</code> dan mengubah warna <code>primary</code> dan <code>primary-focus</code>:",
  "Contribute to translation": "Kontribusi penerjemahan",
  "Alert informs users about important events.": "Alert menginformasikan pengguna tentang kejadian penting.",
  "Artboard provides fixed size container to display a demo content on mobile size.": "Artboard menyediakan kontainer berukuran tetap untuk menampilkan sebuah konten demo dalam ukuran mobile.",
  "Avatars are used to show a thumbnail representation of an individual or business in the interface.": "Avatars are used to show a thumbnail representation of an individual or business in the interface.",
  "Badges are used to inform the user of the status of specific data.": "Badge digunakan untuk menginformasikan pengguna tentang status sebuah data secara spesifik.",
  "Bottom navigation bar allows navigation between primary screens.": "Bottom navigation bar memungkinkan navigasi antara layar utama.",
  "Breadcrumbs helps users to navigate through the website.": "Breadcrumb membantu pengguna untuk menavigasi melalui situs web.",
  "Button group shows buttons next to each other.": "Button group menampilkan tombol-tombol yang saling berdampingan.",
  "Buttons allow the user to take actions or make choices.": "Button mengizinkan pengguna untuk melakukan sebuah aksi atau membuat keputusan.",
  "Cards are used to group and display content in a way that is easily readable.": "Card digunakan untuk mengkelompokan dan menyajikan konten sehingga bisa dibaca dengan mudah.",
  "Carousel show images or content in a scrollable area.": "Carousel menyajikan gambar-gambar atau konten dalam area yang bisa digeser.",
  "Checkboxes are used to select or deselect a value.": "Checkbox digunakan untuk memilih atau tidak memilih sebuah nilai.",
  "Collapse is used for showing and hiding content.": "Collapse digunakan untuk menunjukan atau menyembunyikan konten.",
  "Countdown gives you a transition effect of changing numbers.": "Countdown menyajikan sebuah efek transisi perubahan angka.",
  "Divider will be used to separate content vertically or horizontally.": "Divider digunakan untuk memisahkan konten secara vertikal ataupun horizontal.",
  "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.": "Drawer adalah sebuah grid layyout yang bisa menampilkan/menyembunyikan sebuah sidebar di sisi kiri atau kanan dari sebuah halaman.",
  "Dropdown can open a menu or any other element when the button is clicked.": "Dropdown bisa membuka sebuah menu atau elemen lainnya pada saat sebuah tombol ditekan.",
  "Footer can contain logo, copyright notice, and links to other pages.": "Footer dapat berisi logo, pemberitahuan hak cipta, serta tautan ke halaman lain.",
  "Hero is a component for displaying a large box or image with a title and description.": "Hero adalah sebuah komponen untuk menampilkan kotak besar atau gambar dengan judul dan deskripsi.",
  "Indicators are used to place an element on the corner of another element.": "Indicator digunakan untuk ditempatkan di pojokkan elemen lainnya.",
  "Input group puts an input next to a text or a button.": "Input group menempatkan sebuah input di sebelah sebuah teks atau sebuah tombol.",
  "Text Input is a simple input field.": "Text Input mudahnya adalah sebuah bidang inputan.",
  "Kbd is used to display keyboard shortcuts.": "Kbd digunakan untuk menampilkan jalan pintas keyboard.",
  "Link adds the missing underline style to links.": "Link menambahkan styling underline yang hilang pada tautan.",
  "Mask crops the content of the element to common shapes.": "Mask memotong konten pada sebuah elemen ke mengikuti bentuk umum.",
  "Menu is used to display a list of links vertically or horizontally.": "Menu digunakan untuk menampilkan sebuah daftar yang berisi tautan secara vertikal atau horizontal.",
  "Code mockup is used to show a block of code in a box that looks like a code editor.": "Code mockup digunakan untuk menampilkan blok kode dalam sebuah kotak yang terlihat seperti editor kode.",
  "Phone mockup shows a mockup of an iPhone.": "Phone mockup menampilkan sebuah mockup seperti sebuah iPhone.",
  "Window mockup shows a box that looks like an operating system window.": "Window mockup menampilkan sebuah kotak yang terlihat seperti sebuah jendela dari sistem operasi.",
  "Modal is used to show a dialog or a box when you click a button.": "Modal digunakan untuk menampilkan sebuah dialog atau sebuah kotak ketika Anda menekan sebuah tombol.",
  "Navbar is used to show a navigation bar on the top of the page.": "Navbar digunakan untuk menampilkan sebuah bar navigasi yang terletak di atas sebuah halaman.",
  "Pagination is a group of buttons that allow the user to navigate between a set of related content.": "Pagination adalah sebuah kumpulan dari tombol-tombol yang memungkinkan pengguna untuk menavigasi diantara sebuah kumpulan konten yang terkait.",
  "Progress bar can be used to show the progress of a task or to show the passing of time.": "Progress bar digunakan untuk menampilkan kemajuan dari sebuah tugas atau menampilkan berlalunya waktu.",
  "Radial progress can be used to show the progress of a task or to show the passing of time.": "Radial progress dapat digunakan untuk menampilkan kemajuan dari sebuah tugas atau menampilkan berlalunya waktu.",
  "Radio buttons allow the user to select one option from a set.": "Radio button memungkinkan pengguna untuk memilih salah satu opsi dari sebuah kumpulan.",
  "Range slider is used to select a value by sliding a handle.": "Range slider digunakan untuk memilih sebuah nilai dengan cara menggeser sebuah pegangan.",
  "Rating is a set of radio buttons that allow the user to rate something.": "Rating adalah suatu kumpulan dari radio button yang memungkinkan pengguna untuk menilai sesuatu.",
  "Select is used to pick a value from a list of options.": "Select digunakan untuk memilih sebuah nilai dari sebuah daftar opsi.",
  "Stack visually puts elements on top of each other.": "Stack secara visual menumpuk elemen di atas satu sama lain.",
  "Stat is used to show numbers and data in a box.": "Stat digunakan untuk menampilkan nomor dan data pada sebuah kotak.",
  "Steps can be used to show a list of steps in a process.": "Steps bisa digunakan untuk menunjukan kumpulan dari tahapan di dalam suatu proses.",
  "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.": "Swap memungkinkan Anda untuk mengalihkan visibilitas dari dua elemen menggunakan checkbox atau class name.",
  "Tabs can be used to show a list of links in a tabbed format.": "Tabs bisa digunakan untuk menunjukan sebuah daftar atau tautan dalam format tab.",
  "Table can be used to show a list of data in a table format.": "Table bisa digunakan untuk menampilkan sebuah kumpulan data dalam format tabel.",
  "Textarea allows users to enter text in multiple lines.": "Textarea memungkinkan pengguna untuk memasukkan teks dalam beberapa baris.",
  "Toggle is a checkbox that is styled to look like a switch button.": "Toggle adalah sebuah checkbox yang ditata supaya terkesan seperti sebuah tombol switch.",
  "Tooltip can be used to show a message when hovering over an element.": "Tooltip bisa digunakan untuk menampilkan sebuah pesan ketika pengguna melayangkan penunjuk di atas sebuah elemen.",
  "Code mockup": "Code mockup",
  "Phone mockup": "Phone mockup",
  "Window mockup": "Window mockup",
  "File Input": "File Input",
  "Text Input": "Text Input",
  "Range slider": "Range slider",
  Tabs: Tabs$7,
  "All daisyUI components": "Semua komponen daisyUI",
  "Class name": "Class name",
  Type: Type$7,
  Search: Search$7,
  "daisyUI themes": "Tema daisyUI",
  "How to use daisyUI themes?": "Bagaimana cara menggunakan tema daisyUI?",
  "daisyUI Theme Generator": "Generator tema daisyUI",
  "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them.": "Anda dapat menambahkan tema kustom Anda ke dalam file <span class='badge badge-outline'>tailwind.config.js</span> di array <span class='badge badge-outline'>daisyui > themes</span>. Pada halaman ini, Anda akan memilih nilai warna yang dibutuhkan dan melihat bagaimana komponen akan terlihat ketika warna diterapkan.",
  "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)": "Anda juga bisa mendifinisikan warna opsional untuk mendapatkan kontrol lebih terhadap nilai warna (contoh: warna teks dari tombol sedang dalam fokus).",
  "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use.": "Lihat <a class='link font-bold' href='/docs/colors/'>halaman warna</a> untuk melihat seluruh nama warna yang bisa Anda gunakan.",
  "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)": "Lihat <a class='link font-bold' href='/docs/themes/'>halaman tema</a> untuk melihat semua variabel CSS yang bisa Anda gunakan untuk desain (contoh: border-radius, animations, dll.)",
  Randomize: Randomize$7,
  Reset: Reset$7,
  Preview: Preview$7,
  "Layout and Typography": "Tata letak dan Tipografi",
  "How to use layouts and typography in daisyUI": "Cara menggunakan tata letak dan tipografi di daisyUI",
  "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.": "Tata letak, ukuran, grid, tata ruang, dll. semua akan ditangani oleh utility class Tailwind CSS",
  "Read more": "Baca selengkapnya",
  Typography: Typography$7,
  "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.": "Anda harus menggunakan plugin Tipografi resmi dari <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS </a>.",
  "It handles everything and it's fully customizable.": "Tailwind menangani semuanya dan sepenuhnya bisa dikustomisasi.",
  "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.": "daisyUI menambahkan beberapa style ke @tailwindcss/typography sehingga seluruh tema akan menerapkan style yang sama.",
  "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js": "Pastikan Anda menambahkan <span class='badge badge-outline'>daisyui</span> SETELAH <span class='badge badge-outline'>@tailwindcss/typography</span> di dalam tailwind.config.js",
  "Here you can see how elements will look using <code>@tailwindcss/typography</code>.": "Disini Anda dapat melihat bagaimana elemen akan terlihat menggunakan <code>@tailwindcss/typography</code>.",
  "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>": "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>",
  Component: Component$7,
  Modifier: Modifier$7,
  Responsive: Responsive$7,
  "Changes the style of a component": "Mengubah style dari sebuah komponen",
  "Supports responsive prefixes (sm:, lg:, …)": "Mendukung prefix responsif (sm:, lg:, dll)",
  "Make your theme": "Buat tema Anda",
  "More examples": "Contoh lainnya",
  "Support daisyUI's development": "Mendukung pengembangan daisyUI",
  "The most popular": "Yang paling populer",
  "component library": "pustaka komponen",
  "for Tailwind CSS": "untuk Tailwind CSS",
  "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>": "daisyUI menambahkan nama kelas komponen ke Tailwind&nbsp;CSS<br /> sehingga Anda dapat membuat situs web yang indah <span class='border-base-content/20 border-b-2'>lebih cepat dari sebelumnya.</span>",
  "don't re-invent<br/>the wheel<br/>every time": "jangan menemukan kembali roda setiap saat",
  "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.": "Dalam proyek Tailwind CSS, Anda perlu menulis nama kelas utility untuk setiap elemen. Ribuan nama kelas hanya untuk mengatur gaya elemen yang paling dasar.",
  "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>": "daripada menulis<br /> <span class='text-error'><span class='font-black'>100</span> nama kelas</span>",
  "For every element, every page, every project,<br/>again and again": "Untuk setiap elemen, setiap halaman, setiap proyek,<br/>berulang-ulang",
  "use <span class='text-success'><span class='font-black'>semantic</span><br />class names</span>": "gunakan <span class='text-success'><span class='font-black'>semantic</span><br />class names</span>",
  "It's descriptive, faster, cleaner and easier to maintain.": "Itu deskriptif, lebih cepat, lebih bersih dan lebih mudah untuk dipelihara.",
  Features: Features$7,
  Links: Links$7,
  Message: Message$7,
  "Cleaner HTML": "HTML yang lebih bersih",
  Customizable: Customizable$7,
  Themeable: Themeable$7,
  "Pure CSS": "CSS murni",
  Dashboard: Dashboard$7,
  Notifications: Notifications$7,
  Messages: Messages$7,
  People: People$7,
  Products: Products$7,
  "Use Tailwind CSS but write fewer class names.": "Gunakan Tailwind CSS tapi tulis lebih sedikit nama kelas.",
  "Pure CSS. <br />No JS dependency": "Murni CSS. <br />Tidak ada ketergantungan JS",
  "Works on all frameworks": "Bekerja di semua kerangka kerja",
  "Design system": "Sistem desain",
  "Styling a simple button": "Memperindah tombol sederhana",
  Result: Result$7,
  "Take Tailwind CSS": "Ambil Tailwind CSS",
  "to the next level": "ke level selanjutnya",
  "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like": "daisyUI menambahkan nama kelas ke Tailwind CSS<br />untuk semua komponen UI umum.<br />Nama kelas seperti",
  "and many more.": "dan masih banyak lagi.",
  "This allows us to focus on important things<br />instead of styling basic elements for every project.": "Ini memungkinkan kita untuk fokus pada hal-hal penting<br />daripada mengatur elemen dasar untuk setiap proyek.",
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$7,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$7,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$7,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$7,
  "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.": "Tulis lebih sedikit nama kelas<br />Gunakan nama kelas komponen<br />modifikasi menggunakan utilitas Tailwind CSS.",
  Click: Click$7,
  "Tailwind only": "Hanya Tailwind",
  "Tailwind + daisyUI": "Tailwind + daisyUI",
  Save: Save$7,
  "Accept terms of use": "Terima syarat penggunaan",
  "Submit to newsletter": "Kirim ke newsletter",
  "Fewer class names": "Lebih sedikit nama kelas",
  "Faster development": "Pengembangan yang lebih cepat",
  "Smaller file size": "Ukuran file yang lebih kecil",
  "With daisyUI, you write 80% fewer class names<br />And your HTML size will be about 70% smaller.": "Dengan daisyUI, Anda menulis 80% lebih sedikit nama kelas<br />Dan ukuran HTML Anda akan sekitar 70% lebih kecil.",
  "CSS Class names": "Nama kelas CSS",
  "fewer class names": "kelas yang lebih sedikit",
  "HTML size": "ukuran HTML",
  "smaller DOM size": "ukuran DOM yang lebih kecil",
  "Highly customizable": "Sangat dapat disesuaikan",
  "Powered by Tailwind&nbsp;CSS utility&nbsp;classes": "Didukung oleh Tailwind&nbsp;CSS utility&nbsp;classes",
  "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes.": "daisyUI dibangun di atas Tailwind&nbsp;CSS<br />sehingga Anda dapat menyesuaikan segalanya<br />menggunakan kelas utilitas.",
  "Pure CSS.": "Pure CSS.",
  "Framework agnostic.": "Framework agnostic.",
  "Works everywhere.": "Bekerja dimanapun.",
  "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file.": "daisyUI adalah plugin untuk Tailwind CSS. Ini bekerja pada semua framework JS dan tidak membutuhkan file bundel JS.",
  "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name.": "Instal daisyUI sebagai dev dependency dan gunakan nama kelas seperti halnya nama kelas Tailwind CSS lainnya.",
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$7,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$7,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$7,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$7,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$7,
  "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components.": "Website kamu harus unik. Buat tema kustom untuk diri kamu sendiri menggunakan generator tema daisyUI. Warna yang kamu pilih akan diterapkan ke semua komponen daisyUI.",
  "Learn more about themes": "Pelajari lebih lanjut tentang tema",
  "utility classes": "utility classes",
  "endless possibilities": "endless possibilities",
  "Mix and match daisyUI class names to create unique web pages.": "Campur dan cocokkan nama kelas daisyUI untuk membuat halaman web yang unik.",
  "daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS": "daisyUI adalah pustaka komponen<br />yang paling populer untuk Tailwind&nbsp;CSS",
  "open-source projects using daisyUI": "projek open-source yang menggunakan daisyUI",
  "Free and open-source": "Gratis dan open-source",
  "Built by the community": "Dibangun oleh komunitas",
  "daisyUI welcomes contributions from developers around the world": "daisyUI menyambut kontribusi dari para developer di seluruh dunia",
  "Sponsors and backers": "Sponsor dan pendukung",
  "Try daisyUI": "Coba daisyUI",
  "on your favorite framework": "pada framework favorit Anda",
  "See all examples": "Lihat semua contoh",
  "Or play with daisyUI on": "Atau mainkan daisyUI di",
  "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.": "Chat bubbles digunakan untuk menampilkan satu baris percakapan dan semua datanya, termasuk gambar penulis, nama penulis, waktu, dll.",
  "File Input is a an input field for uploading files.": "File Input adalah sebuah input field untuk mengunggah file.",
  "Toast is a wrapper to stack elements, positioned on the corner of page.": "Toast adalah pembungkus untuk menumpuk elemen, yang diposisikan pada pojok halaman.",
  "Admin panel": "Admin panel",
  Updates: Updates$7,
  Stats: Stats$7,
  "Unlimited themes": "Tema tak terbatas",
  "with zero effort": "dengan usaha nol",
  "daisyUI adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values. Using daisyUI color names, you get Dark Mode and even more themes without adding a new class name.": "daisyUI menambahkan sejumlah nama warna yang dapat dikustomisasi ke Tailwind CSS dan warna baru ini menggunakan variabel CSS untuk nilainya. Dengan menggunakan nama warna daisyUI, Anda mendapatkan Dark Mode dan tema lainnya tanpa menambahkan nama kelas baru.",
  "See all themes": "Lihat semua tema",
  "Semantic colors": "Warna semantik",
  "Learn more about colors": "Pelajari lebih lanjut tentang warna",
  "Get started": "mulai sekarang",
  "daisyUI 3 is available now!": "daisyUI 3 sudah tersedia!",
  "Accordion is used for showing and hiding content but only one item can stay open at a time.": "Accordion digunakan untuk menampilkan dan menyembunyikan konten tetapi hanya satu item yang bisa terbuka dalam satu waktu.",
  "Accordion uses the same style as the <a href='/components/collapse/' class='link'>collapse component</a> but it works with radio inputs. You can control which item to be open by checking/unchecking the hidden radio input.": "Accordion menggunakan style yang sama seperti <a href='/components/collapse/' class='link'>komponen collapse</a> tetapi ini bekerja dengan radio input. Anda dapat mengontrol item mana yang dibuka dengan cara centang/hapus centang radio input yang tersembunyi.",
  "Click to open this one and close others": "Klik untuk membuka bagian ini dan menutup yang lainnya",
  "Using Accordion and Join together": "Menggunakan Accordion dan Join bersamaan",
  "All radio inputs with the same name work together and only one of them can be open at a time. If you have more than one set of accordion items on a page, use different names for the radio inputs on each set.": "Semua radio input dengan nama yang sama berfungsi bersama dan hanya ada satu yang bisa dibuka dalam satu waktu. Apabila Anda memiliki lebih dari satu set accordion item pada satu halaman, gunakan nama yang berbeda untuk radio input pada setiap set.",
  "Browser mockup shows a box that looks like a browser window.": "Browser mockup menampilkan sebuah kotak yang terlihat seperti jendela browser.",
  "Join is a container for grouping multiple items, it can be used to group buttons, inputs, or any other element. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.": "Join merupakan kontainer untuk menyatukan banyak item dalam satu grup, bisa digunakan untuk grup button, input, atau elemen lainnya. Join menerapkan border radius pada item pertama dan terakhir. Join dapat digunakan untuk membuat daftar item horizontal dan vertikal.",
  "Become a sponsor": "Menjadi sponsor",
  "": ""
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Actions: Actions$7,
  Alert: Alert$7,
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$7,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$7,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$7,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$7,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$7,
  Artboard: Artboard$7,
  Avatar: Avatar$7,
  Badge: Badge$7,
  Benefits: Benefits$7,
  Breadcrumbs: Breadcrumbs$7,
  Button: Button$7,
  Card: Card$7,
  Carousel: Carousel$7,
  Checkbox: Checkbox$7,
  Click: Click$7,
  Code: Code$7,
  Collapse: Collapse$7,
  Colors: Colors$7,
  Component: Component$7,
  Config: Config$7,
  Countdown: Countdown$7,
  Customizable: Customizable$7,
  Dashboard: Dashboard$7,
  Divider: Divider$7,
  Drawer: Drawer$7,
  Dropdown: Dropdown$7,
  Features: Features$7,
  Footer: Footer$7,
  Hero: Hero$7,
  Indicator: Indicator$7,
  Install: Install$7,
  Introduction: Introduction$7,
  Kbd: Kbd$7,
  Layout: Layout$7,
  Link: Link$7,
  Links: Links$7,
  Mask: Mask$7,
  Menu: Menu$7,
  Message: Message$7,
  Messages: Messages$7,
  Mockup: Mockup$7,
  Modal: Modal$7,
  Modifier: Modifier$7,
  Navbar: Navbar$7,
  Navigation: Navigation$7,
  Next: Next$7,
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$7,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$7,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$7,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$7,
  Notifications: Notifications$7,
  Or: Or$7,
  Pagination: Pagination$7,
  People: People$7,
  Phone: Phone$7,
  Prev: Prev$7,
  Preview: Preview$7,
  Products: Products$7,
  Progress: Progress$7,
  Radio: Radio$7,
  Randomize: Randomize$7,
  Range: Range$7,
  Rating: Rating$7,
  Reset: Reset$7,
  Responsive: Responsive$7,
  Result: Result$7,
  Save: Save$7,
  Search: Search$7,
  Select: Select$7,
  Stack: Stack$7,
  Stat: Stat$7,
  Stats: Stats$7,
  Steps: Steps$7,
  Swap: Swap$7,
  Tab: Tab$7,
  Table: Table$7,
  Tabs: Tabs$7,
  Textarea: Textarea$7,
  Themeable: Themeable$7,
  Themes: Themes$7,
  Toast: Toast$7,
  Toggle: Toggle$7,
  Tooltip: Tooltip$7,
  Type: Type$7,
  Typography: Typography$7,
  Updates: Updates$7,
  Use: Use$7,
  Warning: Warning$7,
  Window: Window$7,
  __code: __code$7,
  __name: __name$7,
  __status: __status$7,
  changelog: changelog$7,
  components: components$7,
  config: config$7,
  contributing: contributing$7,
  default: id,
  excluded: excluded$7,
  license: license$7,
  links: links$7,
  pages: pages$7,
  themes: themes$7,
  updated: updated$7
}, Symbol.toStringTag, { value: "Module" }));
const __name$6 = "日本語";
const __code$6 = "JA";
const __status$6 = "";
const components$6 = "コンポーネント";
const themes$6 = "テーマ";
const pages$6 = "ページ";
const config$6 = "設定";
const links$6 = "リンク";
const changelog$6 = "変更履歴";
const license$6 = "ライセンス";
const contributing$6 = "貢献";
const Install$6 = "インストール";
const Use$6 = "使い方";
const Config$6 = "設定";
const Colors$6 = "色";
const Themes$6 = "テーマ";
const Actions$6 = "アクション";
const Button$6 = "Button ボタン";
const Dropdown$6 = "Dropdown ドロップダウン";
const Modal$6 = "Modal モーダル";
const Swap$6 = "Swap スワップ";
const Alert$6 = "Alert アラート";
const Avatar$6 = "Avatar アバター";
const Badge$6 = "Badge バッジ";
const Card$6 = "Card カード";
const Carousel$6 = "Carousel カルーセル";
const Collapse$6 = "Collapse 折りたたみ";
const Countdown$6 = "Countdown カウントダウン";
const Kbd$6 = "Kbd キーボード";
const Progress$6 = "Progress 進捗";
const Stat$6 = "Stat 統計";
const Table$6 = "Table テーブル";
const Tooltip$6 = "Tooltip ツールチップ";
const Checkbox$6 = "Checkbox チェックボックス";
const Radio$6 = "Radio ラジオボタン";
const Range$6 = "Range 範囲";
const Rating$6 = "Rating 評価";
const Select$6 = "Select 選択";
const Textarea$6 = "Textarea テキストエリア";
const Toggle$6 = "Toggle トグル";
const Layout$6 = "レイアウト";
const Artboard$6 = "Artboard アートボード";
const Divider$6 = "Divider ディバイダー";
const Drawer$6 = "Drawer ドロワー";
const Footer$6 = "Footer フッター";
const Hero$6 = "Hero ヒーロー";
const Indicator$6 = "Indicator インジケーター";
const Mask$6 = "Mask マスク";
const Stack$6 = "Stack スタック";
const Toast$6 = "Toast トースト";
const Navigation$6 = "ナビゲーション";
const Breadcrumbs$6 = "Breadcrumbs ブレッドクラム";
const Link$6 = "Link リンク";
const Menu$6 = "Menu メニュー";
const Navbar$6 = "Navbar ナビバー";
const Pagination$6 = "Pagination ページ付け";
const Steps$6 = "Steps ステップ";
const Tab$6 = "Tab タブ";
const Mockup$6 = "モックアップ";
const Code$6 = "Code コード";
const Phone$6 = "Phone スマホ";
const Window$6 = "Window ウィンドウ";
const excluded$6 = "除外";
const updated$6 = "更新";
const Prev$6 = "前へ";
const Next$6 = "次へ";
const Warning$6 = "警告";
const Or$6 = "または";
const Introduction$6 = "序章";
const Benefits$6 = "利点";
const Tabs$6 = " Tabs タブ";
const Type$6 = "カテゴリ";
const Search$6 = "検索";
const Randomize$6 = "ランダム";
const Reset$6 = "リセット";
const Preview$6 = "プレビュー";
const Typography$6 = "タイポグラフィ";
const Component$6 = "コンポーネント";
const Modifier$6 = "修飾子";
const Responsive$6 = "レスポンシブ";
const Features$6 = "特徴";
const Links$6 = "リンク";
const Message$6 = "メッセージ";
const Customizable$6 = "カスタマイズ可能";
const Themeable$6 = "テーマ化可能";
const Dashboard$6 = "ダッシュボード";
const Notifications$6 = "通知";
const Messages$6 = "メッセージ";
const People$6 = "人々";
const Products$6 = "製品";
const Result$6 = "結果";
const No_more_ugly_HTML_part_1$6 = "醜い";
const No_more_ugly_HTML_part_2$6 = "HTML";
const No_more_ugly_HTML_part_3$6 = "はもう";
const No_more_ugly_HTML_part_4$6 = "不要";
const Click$6 = "クリック";
const Save$6 = "保存";
const Apply_your_own_design_decisions_part_1$6 = "独自の";
const Apply_your_own_design_decisions_part_2$6 = "設計上の";
const Apply_your_own_design_decisions_part_3$6 = "決定を";
const Apply_your_own_design_decisions_part_4$6 = "適用";
const Apply_your_own_design_decisions_part_5$6 = "する";
const Updates$6 = "アップデート";
const Stats$6 = "統計";
const Accordion$2 = "Accordion アコーディオン";
const Deprecated$1 = "Deprecated 非推奨";
const Loading$2 = "Loading ローディング";
const Join$1 = "Join 結合";
const Browser$1 = "Browser ブラウザー";
const ja = {
  __name: __name$6,
  __code: __code$6,
  __status: __status$6,
  "Tailwind CSS Components": "Tailwind CSSコンポーネント",
  "cta-1": "コンポーネントを見る",
  "cta-1-mobile": "コンポーネント",
  "cta-2": "使い方を見る",
  "components-btn": "コンポーネント",
  "change-theme-btn": "テーマ",
  "all-components-btn": "すべてのコンポーネントを表示",
  components: components$6,
  themes: themes$6,
  "github-stars": "Github スター",
  "npm-installs": "NPM インストール",
  "install-title": "daisyUIのインストール",
  "install-desc": "TailwindCSSのプラグインとして、または独立したCSSライブラリとして使用できます <br /> 依存するライブラリはありません",
  "install-step-1": "daisyUI をNode Packageとしてインストールする",
  "install-step-2": "プラグインとしてdaisyUIをTailwindCSSに追加する",
  "install-btn": "インストールガイド",
  "footer-tagline": "ユーティリティファーストのCSSフレームワークと親和性の高い<br />無料のコンポーネントライブラリ",
  pages: pages$6,
  "how-to-install": "インストール",
  "how-to-use-components": "コンポーネント",
  "how-to-customize": "カスタマイズ",
  "how-to-use-themes": "テーマ",
  "color-system": "カラーシステム",
  config: config$6,
  links: links$6,
  changelog: changelog$6,
  license: license$6,
  contributing: contributing$6,
  "available-on": "入手先",
  "try-online": "オンラインでお試しください",
  "created-by": "作者",
  Install: Install$6,
  Use: Use$6,
  "Customize components": "カスタマイズ",
  Config: Config$6,
  Colors: Colors$6,
  Themes: Themes$6,
  "Theme Generator": "テーマを作る",
  "Layout & Typography": "レイアウトとタイポグラフィ",
  Actions: Actions$6,
  Button: Button$6,
  Dropdown: Dropdown$6,
  Modal: Modal$6,
  Swap: Swap$6,
  "Data display": "データの表示",
  Alert: Alert$6,
  Avatar: Avatar$6,
  Badge: Badge$6,
  Card: Card$6,
  Carousel: Carousel$6,
  "Chat bubble": "Chat bubble 吹き出し",
  Collapse: Collapse$6,
  Countdown: Countdown$6,
  Kbd: Kbd$6,
  Progress: Progress$6,
  "Radial progress": "Radial progress 円進捗",
  Stat: Stat$6,
  Table: Table$6,
  Tooltip: Tooltip$6,
  "Data input": "データの入力",
  Checkbox: Checkbox$6,
  "Text input": "Text Input テキスト入力",
  Radio: Radio$6,
  Range: Range$6,
  Rating: Rating$6,
  Select: Select$6,
  Textarea: Textarea$6,
  Toggle: Toggle$6,
  Layout: Layout$6,
  Artboard: Artboard$6,
  "Button group": "Button group ボタングループ",
  Divider: Divider$6,
  Drawer: Drawer$6,
  Footer: Footer$6,
  Hero: Hero$6,
  Indicator: Indicator$6,
  "Input group": "Input group 入力グループ",
  Mask: Mask$6,
  Stack: Stack$6,
  Toast: Toast$6,
  Navigation: Navigation$6,
  Breadcrumbs: Breadcrumbs$6,
  "Bottom navigation": "Bottom navigation ボトムナビゲーション",
  Link: Link$6,
  Menu: Menu$6,
  Navbar: Navbar$6,
  Pagination: Pagination$6,
  Steps: Steps$6,
  Tab: Tab$6,
  Mockup: Mockup$6,
  Code: Code$6,
  Phone: Phone$6,
  Window: Window$6,
  excluded: excluded$6,
  "CodePen example page": "CodePen のサンプルページ",
  "Tailwind Play example page": "Tailwind Play のサンプルページ",
  "new": "新着",
  updated: updated$6,
  "Tailwind Plugin": "Tailwindプラグイン",
  "Use CDN": "CDNを使用する",
  "Install daisyUI as a Tailwind CSS plugin": "daisyUI を Tailwind CSS プラグインとしてインストールします",
  "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> installed.": "<a href='https://nodejs.org/en/download/'>Node.js</a> と <a href='https://tailwindcss.com/docs/installation/'>Taiwind CSS</a>がインストールされている必要があります。",
  "How to install daisyUI as a Tailwind CSS plugin?": "daisyUI を Tailwind CSS プラグインとしてインストールするにはどうすればよいですか？",
  "Install daisyUI": "daisyUI をインストールします",
  "Then add daisyUI to your <code>tailwind.config.js</code> files": "次に、<code>tailwind.config.js</code>ファイルにdaisyUI を追加します",
  "daisyUI example repositories": "daisyUI のサンプルリポジトリ",
  "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.": "さまざまなフレームワークとビルドツールでのdaisyUI とTailwindCSSのセットアップ例を参照してください。",
  Prev: Prev$6,
  Next: Next$6,
  "Do you have a question?": "質問がありますか？",
  "Do you see a bug?": "バグがありますか？",
  "Do you like daisyUI?": "daisyUI が好きですか？",
  "Edit this page on GitHub": "GitHub でこのページを編集する",
  "ask the community": "コミュニティに聞く",
  "open an issue on GitHub": "GitHubでissueを開く",
  "tweet about it!": "是非これについてツイートしてください！",
  Warning: Warning$6,
  "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large.": "CDNファイルは、未使用のスタイルを削除できず、ファイルサイズが大きくなるため、<br/>本番環境にはお勧めしません。",
  "You don't need to install anything.": "何もインストールする必要はありません。",
  "Just add one of these to the <code>head</code> tag of your HTML": "これらの1つをHTMLの<code>head</code>タグに追加するだけです",
  Or: Or$6,
  "Add component classes to your HTML": "HTMLにコンポーネントクラスを追加する",
  "How to use daisyUI classes to style your page?": "daisyUI クラスを使用してページのスタイルを設定するにはどうすればよいですか？",
  "Once you <a href='/docs/install/'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc.": "<a href='/docs/install/'> daisyUI をインストール</a>すると、 <code>btn</code>、<code>card</code>などのコンポーネントクラスを使用できるようになります。",
  "So instead of making a button using only utility classes": "したがって、ユーティリティクラスのみを使用してボタンを作成する代わりに",
  "You can just use a component class like this": "このようなコンポーネントクラスを使用できます",
  "Then you can modify the component with daisyUI additional utility classes": "daisyUI の追加ユーティリティクラスを使用してコンポーネントを変更できます",
  "Or you can modify the component with Tailwind CSS utility classes": "または、TailwindCSSユーティリティクラスを使用してコンポーネントを変更できます",
  "Customize daisyUI components": "daisyUI コンポーネントをカスタマイズする",
  "How to customize daisyUI?": "daisyUI をカスタマイズする方法",
  "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.": "daisyUI コンポーネントには、設計システムに必要な多くのバリエーションが付属しており、通常は何もカスタマイズする必要はありません。",
  "But you can still customize components in many ways.": "ただし、コンポーネントはさまざまな方法でカスタマイズできます。",
  "Let's say, you want to customize this button:": "このボタンをカスタマイズするとします:",
  "You can use daisyUI utility classes:": "daisyUI ユーティリティクラスを使用できます:",
  "You can use Tailwind's utility classes:": "Tailwindのユーティリティクラスを使用できます:",
  "You can customize components on your CSS file, using Tailwind's @apply directive:": "Tailwindの@applyディレクティブを使用して、CSSファイルのコンポーネントをカスタマイズできます:",
  "You can also:": "あなたは以下のことをすることもできます：",
  "Add your own theme.": "独自のテーマを追加する",
  "Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>.": "daisyUI の設計上の決定をオプトアウトする<a href='/docs/config/'>daisyUI のみを使用する</a>。",
  "How to change the default configuration of daisyUI?": "daisyUI のデフォルト設定を変更するにはどうすればよいですか？",
  "daisyUI can be configured from your <code>tailwind.config.js</code> file.": "daisyUI は、<code>tailwind.config.js</code> ファイルから構成できます。",
  "Default config": "デフォルト設定",
  "Config values explained": "設定値の説明",
  "If it's true, components will have colors and style so you won't need to design anything.": "trueの場合、コンポーネントは色とスタイルを持っているので、何もデザインする必要はありません。",
  "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.": "falseの場合、コンポーネントには色や視覚的なスタイルがないため、基本的なスケルトンで独自のスタイルをデザインできます。",
  "If it's true, all themes will be included.": "trueの場合、すべてのテーマが含まれます。",
  "If it's false, only light and dark themes will be available.": "falseの場合、ライトとダークのテーマのみが使用可能になります。",
  "If it's an array, only themes in the array will be included and the first theme will be the default theme.": "配列の場合、配列内のテーマのみが含まれ、最初のテーマがデフォルトのテーマになります。",
  "Read more about <a href='/docs/themes/'>themes</a>": "<a href='/docs/themes/'>テーマ</a>についてもっと読む",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.": "trueの場合、<a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>いくつかの基本スタイル</a>が追加されます",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.": "trueの場合、<a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>レスポンシブクラスとユーティリティクラス</a>が追加されます",
  "If it's true, daisyUI shows logs in the terminal while CSS is building.": "trueの場合、daisyUI はターミナルにログを表示します",
  "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag.": "trueの場合、あなたのテーマは右から左になります。 bodyタグに<code>dir='rtl'</code>を追加する必要があります。",
  "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically.": "daisyUI を使用している場合は、すべてのTailwindユーティリティを自動的に反転させるため、<a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> プラグインを使用することをお勧めします。",
  "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.": "システムのオートダークモードの別のテーマを選択できます。デフォルトでは、テーマが指定されておらず、ユーザーがシステムでダークモードを使用している場合、<code>dark</code>テーマ（または<code>dark</code>という名前のカスタムテーマ）がデフォルトのテーマになります。この構成を使用すると、別のテーマをデフォルトのダークモードテーマに設定できます。",
  "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).": "daisyUI クラス（コンポーネントクラス、修飾子クラス、レスポンシブクラスを含む）のクラス名にプレフィックスを追加します。",
  "For example: <code>btn</code> will become <code>prefix-btn</code>.": "例：<code>btn</code> は <code>prefix-btn</code> になります。",
  "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.": "同様のクラス名を持つ2番目のCSSライブラリを使用している場合は、この設定を使用して競合を回避できます。",
  "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.": "色名（例： <code>bg-primary</code>）やborder-radius（例：<code>rounded-box</code>）などのユーティリティクラスは、Tailwind CSSクラスの拡張機能として追加されるため、この構成の影響を受けません。",
  "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.": "daisyUI の<code>prefix</code>オプション（<code>daisy-</code>など）とTailwindCSSの<code>prefix</code>オプション（<code>tw-</code>など）を一緒に使用すると、クラス名には次のようにプレフィックスが付けられます：<code>tw-daisy-btn</code>。",
  "How to use daisyUI colors?": "daisyUI カラーの使い方は？",
  Introduction: Introduction$6,
  "daisyUI is fully themeable and colorable,": "daisyUI は完全にテーマ化可能で、色付け可能です。",
  "So instead of using constant color utility classes like:": "したがって、次のような一定の色のユーティリティクラスを使用する代わりに：",
  "It's suggested to use semantic color utility classes like:": "次のようなセマンティックカラーユーティリティクラスを使用することをお勧めします。",
  "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.": "daisyUI テーマは、適用時にユーティリティクラスに色の値を適用します。",
  Benefits: Benefits$6,
  "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces.": "インターフェイスを設計するときは、ランダムな色を使用するだけではないため、セマンティックカラーの名前の方が意味があります。<code>primary</code>、<code>secondary</code>などの名前で特定のカラーパレットを定義し、インターフェイスではそれらの特定の色のみを使用します。",
  "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.": "また、セマンティックカラー名を使用すると、テーマ設定が簡単になります。すべての要素にダークモードの色を定義する必要はなく、明るい/暗いテーマだけに制限されることもありません。複数のテーマを使用でき、各テーマは数行のCSS変数です。",
  "List of all daisyUI color names": "daisyUI カラー名のリスト",
  "You can use these color names in your theme or in utility classes.": "これらの色の名前は、テーマまたはユーティリティクラスで使用できます。",
  "Color name + description": "色名+説明",
  "Required or optional for themes": "テーマに必須/任意",
  "Example use": "使用例",
  "How to use": "使い方",
  "Some daisyUI components come with modifier class names and that modifier class name will apply a color.": "daisyUI コンポーネントにはモディファイアクラス名が付属しており、そのモディファイアクラス名は色を適用します。",
  "For example": "例えば",
  "You can also use color names in utility classes just like Tailwind's original color names.": "Tailwindの元の色の名前と同じように、ユーティリティクラスで色の名前を使用することもできます。",
  "These are utility classes that can be used with a color name:": "これらは、色名で使用できるユーティリティクラスです。",
  "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc.": "したがって、<code>bg-primary</code>、<code>border-secondary</code>などを使用できます。",
  "daisyUI comes with a number of themes, which you can use with no extra effort.": "daisyUIでは無駄な労力を費やさずに、多くのテーマを使用することができます。",
  "Each theme defines a set of colors which will be used on all daisyUI elements.": "各テーマは、すべてのdaisyUIの要素で使用される色を定義します。",
  "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:": "テーマを使用するには、<span class=badge>tailwind.config.js</span>にその名前を追加し、<span class=badge>HTML</span>タグに<span class=badge>data-theme</span>属性を追加してアクティブにします:",
  "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage.": "私はテーマをローカルストレージに保存し使用できるように、<a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>を使用することをお勧めします。",
  "List of themes": "テーマのリスト",
  "Try them:": "こちらを試してみてください",
  "The default theme is <code>light</code> (or <code>dark</code> for dark mode)": "デフォルトのテーマは<code>light</code>です。 (<code>dark</code>でダークモードにすることも可能です。)",
  "but you can <a href='https://daisyui.com/docs/config/'>change the default theme from tailwind.config.js</a>": "しかし、<a href='https://daisyui.com/docs/config/'>tailwind.config.css のテーマを変更し、デフォルトのテーマを変更する</a>ことも可能です。",
  "How to remove unused themes?": "使用しないテーマを無効化する方法",
  "You can only include the themes you want in your project.": "あなたはプロジェクトに使用したいテーマだけを含めることもできます。",
  "This will reduce the size of your CSS file.": "これはCSSファイルのサイズを削減することができます。",
  "In the below example": "以下の例では:",
  "<code>cupcake</code> will be the default theme for light mode": "<code>cupcake</code>がライトモードのデフォルトテーマになります:",
  "<code>dark</code> will be the default theme for dark mode": "<code>dark</code>がダークモードのデフォルトテーマになります:",
  "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>": "<code>data-theme='cmyk'</code>を使用して、任意のHTMLタグに<code>cmyk</code>を適用できます:",
  "How to disable all themes?": "すべてのテーマを無効化する方法",
  "If you only want the default light and dark themes, set <code>themes</code> config to false.": "デフォルトのライトとダークのテーマのみを使用したい場合は、<code>themes</code>をfalseに設定してください。",
  "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array.": "もしすべてのテーマと色を無効化したい場合、<code>themes</code>に空の配列を渡してください。",
  "How to use a theme only for a section of a page?": "ページの一部でのみテーマを使用する方法",
  "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme.": "<code>data-theme='THEME_NAME'</code>を要素に追加することで、要素内のすべてにテーマを反映させることができます。",
  "You can nest themes and there is no limit!": "テーマは無限に入れ子にすることができます!",
  "You can force a section of your HTML to only use a specific theme.": "HTMLの一部に特定のテーマのみを使用するように強制することができます。",
  "How to add a new custom theme?": "新しくカスタマイズされたテーマを追加する方法",
  "You can add a new theme from <code>tailwind.config.js</code> file.": "<code>tailwind.config.js</code>ファイルにから新しいテーマを追加することができます。",
  "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes.": "下の例では、<code>mytheme</code>という新しいテーマと<code>dark</code>テーマ、<code>cupcake</code>テーマを追加しています。",
  "The first theme (<code>mytheme</code>) will be the default theme.": "最初のテーマ(<code>mytheme</code>)がデフォルトテーマになります。",
  "<code>dark</code> theme will be the default theme for dark mode.": "<code>dark</code>テーマは、ダークモードのデフォルトテーマになります。",
  "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button).": "",
  "CSS variables in daisyUI themes": "daisyUIテーマでのCSS変数",
  "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:": "daisyUIでは、いくつかの任意なCSS変数を使用して、テーマごとのデザイン設定をカスタマイズすることができます。",
  "You can also add <a href='/docs/colors/' class='link'>optional color names</a> to have full control over all colors.": "また、<a href='/docs/colors/' class='link'>任意の色名</a>を追加して、すべての色を完全に制御することもできます。",
  "Custom CSS for a daisyUI theme": "daisyUIのテーマにカスタマイズされたCSSを使用する",
  "You can apply custom style to a daisyUI themes using CSS:": "CSSを使用して、カスタムスタイルをdaisyUIのテーマに適用することができます。",
  "How to customize an existing theme?": "既存のテーマをカスタマイズする方法",
  "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.": "tailwind.config.jsで、既存のdaisyUIテーマの色を上書きすることができます。",
  "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:": "以下の例は、<code>light</code>テーマを要求し、<code>primary</code>と<code>primary-focus</code>の色を変更しています:",
  "Contribute to translation": "翻訳に貢献する",
  "Alert informs users about important events.": "アラートは、重要なイベントについてユーザーに通知します。",
  "Artboard provides fixed size container to display a demo content on mobile size.": "アートボードは、モバイルサイズでデモコンテンツを表示するための固定サイズのコンテナを提供します。",
  "Avatars are used to show a thumbnail representation of an individual or business in the interface.": "アバターは、インターフェースに個人または企業のサムネイル表現を表示するために使用されます。",
  "Badges are used to inform the user of the status of specific data.": "バッジは、特定のデータのステータスをユーザーに通知するために使用されます。",
  "Bottom navigation bar allows navigation between primary screens.": "ボトムナビゲーションで主要なスクリーン間の移動が可能になります。",
  "Breadcrumbs helps users to navigate through the website.": "ブレッドクラムは、ユーザーがWebサイトをナビゲートするのに役立ちます。",
  "Button group shows buttons next to each other.": "ボタングループには、ボタンが隣り合って表示されます。",
  "Buttons allow the user to take actions or make choices.": "ボタンを使用すると、ユーザーはアクションを実行したり、選択したりできます。",
  "Cards are used to group and display content in a way that is easily readable.": "カードは、読みやすい方法でコンテンツをグループ化して表示するために使用されます。",
  "Carousel show images or content in a scrollable area.": "カルーセルは、スクロール可能な領域に画像またはコンテンツを表示します。",
  "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.": "吹き出しは一連の会話とそのデータ（話者の画像、話者名・時間など）を表示するために使用されます。",
  "Checkboxes are used to select or deselect a value.": "チェックボックスは、値を選択または選択解除するために使用されます。",
  "Collapse is used for showing and hiding content.": "折りたたみは、コンテンツの表示と非表示を切り替える場合に使用されます。",
  "Countdown gives you a transition effect of changing numbers.": "カウントダウンでは、数字が変化する切り替え効果が得られます。",
  "Divider will be used to separate content vertically or horizontally.": "Dividerは、コンテンツを垂直または水平に分離するために使用されます。",
  "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.": "ドロワーは、ページの左側または右側にあるサイドバーを表示/非表示にできるグリッドレイアウトです。",
  "Dropdown can open a menu or any other element when the button is clicked.": "ドロップダウンは、ボタンがクリックされたときにメニューまたはその他の要素を開くことができます。",
  "File Input is a an input field for uploading files.": "ファイル入力はファイルをアップロードするための入力フィールドです。",
  "Footer can contain logo, copyright notice, and links to other pages.": "フッターには、ロゴ、著作権表示、および他のページへのリンクを含めることができます。",
  "Hero is a component for displaying a large box or image with a title and description.": "ヒーローは、タイトルと説明が付いた大きなボックスまたは画像を表示するためのコンポーネントです。",
  "Indicators are used to place an element on the corner of another element.": "インジケーターは、要素を別の要素の隅に配置するために使用されます。",
  "Input group puts an input next to a text or a button.": "入力グループは、テキストまたはボタンの横に入力を配置します。",
  "Text Input is a simple input field.": "テキスト入力は単純な入力フィールドです。",
  "Kbd is used to display keyboard shortcuts.": "Kbdは、キーボードショートカットを表示するために使用されます。",
  "Link adds the missing underline style to links.": "リンクは、欠落している下線スタイルをリンクに追加します。",
  "Mask crops the content of the element to common shapes.": "マスクは、要素のコンテンツを一般的な形状にトリミングします。",
  "Menu is used to display a list of links vertically or horizontally.": "メニューは、リンクのリストを垂直または水平に表示するために使用されます。",
  "Code mockup is used to show a block of code in a box that looks like a code editor.": "コードモックアップは、コードエディタのように見えるボックスにコードのブロックを表示するために使用されます。",
  "Phone mockup shows a mockup of an iPhone.": "スマホのモックアップは、iPhoneのモックアップを示しています。",
  "Window mockup shows a box that looks like an operating system window.": "ウィンドウモックアップは、オペレーティングシステムウィンドウのように見えるボックスを示しています。",
  "Modal is used to show a dialog or a box when you click a button.": "モーダルは、ボタンをクリックしたときにダイアログまたはボックスを表示するために使用されます。",
  "Navbar is used to show a navigation bar on the top of the page.": "ナビバーは、ページの上部にナビゲーションバーを表示するために使用されます。",
  "Pagination is a group of buttons that allow the user to navigate between a set of related content.": "ページ付けは、ユーザーが一連の関連コンテンツ間を移動できるようにするボタンのグループです。",
  "Progress bar can be used to show the progress of a task or to show the passing of time.": "プログレスバーは、タスクの進行状況を表示したり、時間の経過を表示したりするために使用できます。",
  "Radial progress can be used to show the progress of a task or to show the passing of time.": "円進捗は、タスクの進行状況を表示したり、時間の経過を表示したりするために使用できます。",
  "Radio buttons allow the user to select one option from a set.": "ラジオボタンを使用すると、ユーザーはセットから1つのオプションを選択できます。",
  "Range slider is used to select a value by sliding a handle.": "範囲スライダーは、ハンドルをスライドさせて値を選択するために使用します。",
  "Rating is a set of radio buttons that allow the user to rate something.": "評価は、ユーザーが何かを評価できるようにするラジオボタンのセットです。",
  "Select is used to pick a value from a list of options.": "選択は、オプションのリストから値を選択するために使用されます。",
  "Stack visually puts elements on top of each other.": "スタックは、要素を視覚的に重ね合わせます。",
  "Stat is used to show numbers and data in a box.": "統計は、ボックスに数値とデータを表示するために使用されます。",
  "Steps can be used to show a list of steps in a process.": "ステップを使用して、プロセスのステップのリストを表示できます。",
  "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.": "スワップを使用すると、チェックボックスまたはクラス名を使用して2つの要素の表示を切り替えることができます。",
  "Tabs can be used to show a list of links in a tabbed format.": "タブを使用して、リンクのリストをタブ形式で表示できます。",
  "Table can be used to show a list of data in a table format.": "表を使用して、データのリストを表形式で表示できます。",
  "Textarea allows users to enter text in multiple lines.": "テキストエリアを使用すると、ユーザーは複数行にテキストを入力できます。",
  "Toggle is a checkbox that is styled to look like a switch button.": "トグルは、スイッチボタンのように見えるようにスタイル設定されたチェックボックスです。",
  "Toast is a wrapper to stack elements, positioned on the corner of page.": "トーストはスタックのラッパーで、ページの隅に配置されます。",
  "Tooltip can be used to show a message when hovering over an element.": "ツールチップを使用して、要素にカーソルを合わせたときにメッセージを表示できます。",
  "Code mockup": "コードモックアップ",
  "Phone mockup": "スマホのモックアップ",
  "Window mockup": "ウィンドウモックアップ",
  "File Input": "File Input ファイル入力",
  "Text Input": "Text Input テキスト入力",
  "Range slider": "Range slider 範囲スライダー",
  Tabs: Tabs$6,
  "All daisyUI components": "すべての daisyUI コンポーネント",
  "Class name": "クラス名",
  Type: Type$6,
  Search: Search$6,
  "daisyUI themes": "daisyUI テーマ",
  "How to use daisyUI themes?": "daisyUI テーマを使用するには?",
  "daisyUI Theme Generator": "daisyUI テーマ ジェネレーター",
  "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them.": "カスタムテーマは、<span class='badge badge-outline'>tailwind.config.js</span>ファイル内の<span class='badge badge-outline'>daisyui > themes</span>配列に追加することが可能です。このページで、テーマの色を選び、それを使ってコンポーネントがどのように見えるかを確認することができます。",
  "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)": "オプションの色を定義することで、色の値をより細かにコントロールすることができます（例：ボタンにフォーカスが当たったときの色、ボタン上のテキストの色など）。",
  "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use.": "詳しくは<a class='link font-bold' href='/docs/colors/'>カラーページ</a>を見て利用できるすべての色の名前を見てください",
  "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)": "<a class='link font-bold' href='/docs/themes/'>テーマページ</a> で、デザインをカスタマイズするために使用できるすべての CSS 変数を確認してください（例: border-radius, アニメーション、など）。",
  Randomize: Randomize$6,
  Reset: Reset$6,
  Preview: Preview$6,
  "Layout and Typography": "レイアウトとタイポグラフィ",
  "How to use layouts and typography in daisyUI": "daisyUIでのレイアウトとタイポグラフィの使い方",
  "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.": "レイアウト、サイジング、グリッド、スペーシングなどがすべてTailwind CSSのユーティリティクラスで処理されます。",
  "Read more": "もっと詳しく",
  Typography: Typography$6,
  "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.": "公式の<a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS タイポグラフィプラグイン</a>を使用するべきです。",
  "It handles everything and it's fully customizable.": "これはあらゆることに対応し、フルカスタマイズが可能です。",
  "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.": "daisyUIは@tailwindcss/typographyにスタイルを追加し、他の要素と同じテーマを使用するようにします。",
  "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js": "tailwind.config.jsの<span class='badge badge-outline'>@tailwindcss/typography</span>の後に<span class='badge badge-outline'>daisyui</span> が必要であることを確認してください。",
  "Here you can see how elements will look using <code>@tailwindcss/typography</code>.": "ここでは、<code>@tailwindcss/typography</code>を使用して、要素がどのように見えるかを見ることができます。",
  "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>": "独自のプレフィックスを使用するには、<a class='link' href='/docs/config/#prefix'>設定にプレフィックスの文字列を追加します</a>。",
  Component: Component$6,
  Modifier: Modifier$6,
  Responsive: Responsive$6,
  "Changes the style of a component": "コンポーネントのスタイルを変更する",
  "Supports responsive prefixes (sm:, lg:, …)": "レスポンシブ接頭辞（sm:, lg:, ...）に対応。",
  "Make your theme": "テーマを作る",
  "More examples": "その他の例",
  "Support daisyUI's development": "daisyUIの開発をサポート",
  "The most popular": "最も人気な",
  "component library": "コンポーネント<br/>ライブラリ",
  "for Tailwind CSS": "そしてTailwind CSSで利用可能",
  "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>": "daisyUIは、Tailwind&nbsp;CSSにコンポーネントクラス名を追加するので、<span class='border-base-content/20 border-b-2'>これまで以上に簡単に</span>美しいウェブサイトを作ることができます。",
  "don't re-invent<br/>the wheel<br/>every time": "無駄な手間は省こう。",
  "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.": "Tailwind CSSのプロジェクトでは、すべての要素にユーティリティクラス名を記述する必要があります。最も基本的な要素にスタイルを適用するために何千ものクラス名が必要です。",
  "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>": "<span class='text-error'><span class='font-black'>100</span> 個のクラス名</span> を書く代わりに",
  "For every element, every page, every project,<br/>again and again": "すべての要素、すべてのページ、すべてのプロジェクトに対して、<br/>何度も何度も",
  "use <span class='text-success'><span class='font-black'>semantic</span><br />class names</span>": "<span class='text-success'><span class='font-black'>意味のある</span><br />クラス名</span><br />を使おう",
  "It's descriptive, faster, cleaner and easier to maintain.": "それは記述的で、より速く、よりクリーンで、より簡単にメンテナンスできます。",
  Features: Features$6,
  Links: Links$6,
  Message: Message$6,
  "Cleaner HTML": "よりクリーンなHTML",
  Customizable: Customizable$6,
  Themeable: Themeable$6,
  "Pure CSS": "CSSのみ",
  Dashboard: Dashboard$6,
  Notifications: Notifications$6,
  Messages: Messages$6,
  People: People$6,
  Products: Products$6,
  "Use Tailwind CSS but write fewer class names.": "Tailwind CSSを使用して、クラス名を少なく書きます。",
  "Pure CSS. <br />No JS dependency": "CSSのみ。<br />JS依存なし",
  "Works on all frameworks": "すべてのフレームワークで動作します",
  "Design system": "デザインシステム",
  "Styling a simple button": "シンプルなボタンのスタイリング",
  Result: Result$6,
  "Take Tailwind CSS": "Tailwind CSSを",
  "to the next level": "次のレベルに",
  "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like": "daisyUIは、すべての一般的なUIコンポーネントにTailwind CSSのクラス名を追加します。<br />クラス名は",
  "and many more.": "などがあります。",
  "This allows us to focus on important things<br />instead of styling basic elements for every project.": "これにより、プロジェクトごとに基本的な要素のスタイルを設定する代わりに、重要なことに集中できます。",
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$6,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$6,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$6,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$6,
  "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.": "クラス名を少なく書く<br />コンポーネントクラス名を使用する<br />Tailwind CSSのユーティリティを使用して変更する。",
  Click: Click$6,
  "Tailwind only": "Tailwind のみ",
  "Tailwind + daisyUI": "Tailwind + daisyUI",
  Save: Save$6,
  "Accept terms of use": "利用規約に同意する",
  "Submit to newsletter": "ニュースレターに登録する",
  "Fewer class names": "クラス名を少なく",
  "Faster development": "開発を加速",
  "Smaller file size": "ファイルサイズを小さく",
  "With daisyUI, you write 80% fewer class names<br />And your HTML size will be about 70% smaller.": "daisyUIを使用すると、クラス名を80%少なく書くことができます。<br />そして、HTMLのサイズは約70%小さくなります。",
  "CSS Class names": "CSS クラス名",
  "fewer class names": "クラス名を少なく",
  "HTML size": "HTML サイズ",
  "smaller DOM size": "DOMサイズを小さく",
  "Highly customizable": "高度にカスタマイズ可能",
  "Powered by Tailwind&nbsp;CSS utility&nbsp;classes": "Tailwind&nbsp;CSSのユーティリティクラスで動作",
  "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes.": "daisyUIはTailwind&nbsp;CSSの上に構築されているので、ユーティリティクラスを使用してすべてをカスタマイズすることができます。",
  "Pure CSS.": "CSSのみ。",
  "Framework agnostic.": "フレームワークに依存しない。",
  "Works everywhere.": "どこでも動作します。",
  "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file.": "daisyUIはTailwind CSSのプラグインです。すべてのJSフレームワークで動作し、JSバンドルファイルは必要ありません。",
  "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name.": "daisyUIをdev依存関係としてインストールし、他のTailwind CSSのクラス名と同じようにクラス名を使用します。",
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$6,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$6,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$6,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$6,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$6,
  "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components.": "あなたのウェブサイトはユニークであるべきです。daisyUIテーマジェネレーターを使用して、独自のテーマを作成してください。選択した色は、すべてのdaisyUIコンポーネントに適用されます。",
  "Learn more about themes": "テーマについてもっと詳しく",
  "utility classes": "ユーティリティクラス",
  "endless possibilities": "無限の可能性",
  "Mix and match daisyUI class names to create unique web pages.": "daisyUIのクラス名を組み合わせて、ユニークなウェブページを作成します。",
  "daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS": "daisyUIは、Tailwind&nbsp;CSSの最も人気のあるコンポーネントライブラリです。",
  "open-source projects using daisyUI": "daisyUIを使用したオープンソースプロジェクト",
  "Free and open-source": "無料でオープンソース",
  "Built by the community": "コミュニティによって構築されました",
  "daisyUI welcomes contributions from developers around the world": "daisyUIは、世界中の開発者からの貢献を歓迎します。",
  "Sponsors and backers": "スポンサー",
  "Try daisyUI": "daisyUIを試す",
  "on your favorite framework": "お気に入りのフレームワークで",
  "See all examples": "すべての例を見る",
  "Or play with daisyUI on": "または、daisyUIを使って遊ぶ",
  "Admin panel": "管理パネル",
  Updates: Updates$6,
  Stats: Stats$6,
  "Unlimited themes": "無制限のテーマ",
  "with zero effort": "ゼロの努力で",
  "daisyUI adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values. Using daisyUI color names, you get Dark Mode and even more themes without adding a new class name.": "daisyUIは、Tailwind CSSにカスタマイズ可能な色名のセットを追加します。これらの新しい色は、値にCSS変数を使用します。daisyUIの色名を使用すると、新しいクラス名を追加することなく、ダークモードやさらに多くのテーマを使用できます。",
  "See all themes": "すべてのテーマを見る",
  "Semantic colors": "セマンティックカラー",
  "Learn more about colors": "色についてもっと詳しく",
  "Get started": "今すぐ始める",
  "daisyUI 3 is available now!": "daisyUI 3 が利用可能です！",
  "Become a sponsor": "スポンサーになる",
  "related projects": "関連プロジェクト",
  "How to add custom styles for a specific theme?": "特定のテーマにカスタマイズしたスタイルを追加する方法",
  "You can write custom style for your elements only for a specific theme.": "特定のテーマに対してのみ、要素にカスタム・スタイルを記述することができます。",
  "In this example, .btn-twitter class only will have this style on light theme.": "この例では、.btn-twitterクラスはlightテーマでのみこのスタイルになります。",
  "There are 3 ways to use a modal:": "モーダルを使うには3つの方法があります:",
  "Make sure you're using unique IDs for each modal": "各モーダルに固有の ID を使用していることを確認してください。",
  Accordion: Accordion$2,
  "Accordion is used for showing and hiding content but only one item can stay open at a time.": "アコーディオンは、コンテンツの表示と非表示に使用されます。但し一度に表示できるコンテンツは一つです。",
  "All radio inputs with the same name work together and only one of them can be open at a time. If you have more than one set of accordion items on a page, use different names for the radio inputs on each set.": "同じ名前のラジオはすべて一緒に動作し、一度に開くことができるのは1つだけです。ページ上に複数のアコーディオンがある場合、各セットのラジオボタンに異なる名前を使用してください。",
  "Also see <a href='/components/accordion/' class='link'>accordion</a> examples": "<a href='/components/accordion/' class='link'>アコーディオン</a> の例も参照してください。",
  "You need to change to `--value` CSS variable using JS. Value must be a number between 0 and 99.": "JSを使ってCSS変数 `--value` を変更する必要があります。値は0から99の間の数値でなければなりません。",
  "Radial progress needs `--value` CSS variable to work.<br />To change the size, use `--size` CSS variable which has a default value of `4rem`.<br />To change the thickness, use `--thickness` CSS variable which is 10% of the size by default.<br />": "円進捗には CSS変数`--value`が必要です。<br />サイズを変更するには、CSS変数`--size`を使用します。デフォルト値は`4rem`です。<br /> 太さを変更するには、CSS変数`--thickness`を使用します。デフォルト値は、サイズの10%になります。<br />",
  Deprecated: Deprecated$1,
  Loading: Loading$2,
  "Drawer sidebar is hidden by default. You can make it visible on larger screens using <code>lg:drawer-open</code> class (or using other responsive prefixes: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>)": "ドロワーのサイドバーはデフォルトで非表示です。クラス <code>lg:drawer-open</code> (または他のレスポンシブ プレフィックス：<code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>)を使用して、より大きな画面で表示させることができます。 ",
  "Join (group items)": "Join (group items) 結合",
  Join: Join$1,
  "Join is a container for grouping multiple items, it can be used to group buttons, inputs, or any other element. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.": "結合は複数のアイテムをグループ化するためのコンテナです。ボタンや入力、その他の要素をグループ化するために使用できます。 結合は両端のアイテムの外側(ボーダーの角)を丸めます。 結合はアイテムの水平または垂直リストを作成するために使用できます。",
  "Accordion uses the same style as the <a href='/components/collapse/' class='link'>collapse component</a> but it works with radio inputs. You can control which item to be open by checking/unchecking the hidden radio input.": "アコーディオンは<a href='/components/collapse/' class='link'>Collapse 折りたたみ コンポーネント</a>と同じスタイルを使いますが、ラジオボタンで動作します。非表示のラジオボタンをチェックしたり外したりすることで、どの項目を開くかをコントロールできます。",
  Browser: Browser$1,
  "Browser mockup": "ブラウザーモックアップ",
  "Browser mockup shows a box that looks like a browser window.": "ブラウザのモックアップは、ブラウザ・ウィンドウのようなボックスを示しています。",
  "This component is deprecated and will be removed in the next major version. Use <a class='link' href='/components/join'>Join</a> instead.": "このコンポーネントは非推奨であり、次のメジャーバージョンで削除される予定です。代わりに <a class='link' href='/components/join'>Join 結合</a> を使用してください。",
  "Loading shows an animation to indicate that something is loading.": "ローディングは、何かがロードされていることを示すアニメーションを表現します。",
  "": ""
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Accordion: Accordion$2,
  Actions: Actions$6,
  Alert: Alert$6,
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$6,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$6,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$6,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$6,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$6,
  Artboard: Artboard$6,
  Avatar: Avatar$6,
  Badge: Badge$6,
  Benefits: Benefits$6,
  Breadcrumbs: Breadcrumbs$6,
  Browser: Browser$1,
  Button: Button$6,
  Card: Card$6,
  Carousel: Carousel$6,
  Checkbox: Checkbox$6,
  Click: Click$6,
  Code: Code$6,
  Collapse: Collapse$6,
  Colors: Colors$6,
  Component: Component$6,
  Config: Config$6,
  Countdown: Countdown$6,
  Customizable: Customizable$6,
  Dashboard: Dashboard$6,
  Deprecated: Deprecated$1,
  Divider: Divider$6,
  Drawer: Drawer$6,
  Dropdown: Dropdown$6,
  Features: Features$6,
  Footer: Footer$6,
  Hero: Hero$6,
  Indicator: Indicator$6,
  Install: Install$6,
  Introduction: Introduction$6,
  Join: Join$1,
  Kbd: Kbd$6,
  Layout: Layout$6,
  Link: Link$6,
  Links: Links$6,
  Loading: Loading$2,
  Mask: Mask$6,
  Menu: Menu$6,
  Message: Message$6,
  Messages: Messages$6,
  Mockup: Mockup$6,
  Modal: Modal$6,
  Modifier: Modifier$6,
  Navbar: Navbar$6,
  Navigation: Navigation$6,
  Next: Next$6,
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$6,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$6,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$6,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$6,
  Notifications: Notifications$6,
  Or: Or$6,
  Pagination: Pagination$6,
  People: People$6,
  Phone: Phone$6,
  Prev: Prev$6,
  Preview: Preview$6,
  Products: Products$6,
  Progress: Progress$6,
  Radio: Radio$6,
  Randomize: Randomize$6,
  Range: Range$6,
  Rating: Rating$6,
  Reset: Reset$6,
  Responsive: Responsive$6,
  Result: Result$6,
  Save: Save$6,
  Search: Search$6,
  Select: Select$6,
  Stack: Stack$6,
  Stat: Stat$6,
  Stats: Stats$6,
  Steps: Steps$6,
  Swap: Swap$6,
  Tab: Tab$6,
  Table: Table$6,
  Tabs: Tabs$6,
  Textarea: Textarea$6,
  Themeable: Themeable$6,
  Themes: Themes$6,
  Toast: Toast$6,
  Toggle: Toggle$6,
  Tooltip: Tooltip$6,
  Type: Type$6,
  Typography: Typography$6,
  Updates: Updates$6,
  Use: Use$6,
  Warning: Warning$6,
  Window: Window$6,
  __code: __code$6,
  __name: __name$6,
  __status: __status$6,
  changelog: changelog$6,
  components: components$6,
  config: config$6,
  contributing: contributing$6,
  default: ja,
  excluded: excluded$6,
  license: license$6,
  links: links$6,
  pages: pages$6,
  themes: themes$6,
  updated: updated$6
}, Symbol.toStringTag, { value: "Module" }));
const __name$5 = "한국어";
const __code$5 = "KO";
const __status$5 = "";
const components$5 = "컴포넌트 갯수";
const themes$5 = "테마 갯수";
const pages$5 = "페이지";
const config$5 = "설정(Config)";
const links$5 = "링크(Links)";
const changelog$5 = "변경 로그(Changelog)";
const license$5 = "라이선스";
const contributing$5 = "기여하기";
const Install$5 = "설치하기";
const Use$5 = "사용하기";
const Config$5 = "설정(Config)";
const Colors$5 = "색상";
const Themes$5 = "테마";
const Actions$5 = "액션";
const Button$5 = "버튼";
const Dropdown$5 = "드롭다운";
const Modal$5 = "모달";
const Swap$5 = "스왑";
const Alert$5 = "주의";
const Avatar$5 = "아바타";
const Badge$5 = "뱃지";
const Card$5 = "카드";
const Carousel$5 = "캐러셀";
const Collapse$5 = "접기";
const Countdown$5 = "카운트다운";
const Kbd$5 = "키보드(Kbd)";
const Progress$5 = "진행 상황";
const Stat$5 = "통계";
const Table$5 = "표";
const Tooltip$5 = "툴팁";
const Checkbox$5 = "체크박스";
const Radio$5 = "라디오 버튼";
const Range$5 = "범위 슬라이더";
const Rating$5 = "평가";
const Select$5 = "선택";
const Textarea$5 = "문자 입력 영역";
const Toggle$5 = "토글";
const Layout$5 = "레이아웃";
const Artboard$5 = "아트보드";
const Divider$5 = "구분선";
const Drawer$5 = "서랍";
const Footer$5 = "푸터";
const Hero$5 = "주인공";
const Indicator$5 = "표시자";
const Mask$5 = "마스킹";
const Stack$5 = "스택";
const Toast$5 = "Toast";
const Navigation$5 = "내비게이션";
const Breadcrumbs$5 = "위치 표시";
const Link$5 = "링크";
const Menu$5 = "메뉴";
const Navbar$5 = "내비게이션 바";
const Pagination$5 = "페이지네이션";
const Steps$5 = "단계";
const Tab$5 = "탭";
const Mockup$5 = "모형";
const Code$5 = "코드";
const Phone$5 = "핸드폰";
const Window$5 = "윈도우 창";
const excluded$5 = "제외됨";
const updated$5 = "변경됨";
const Prev$5 = "이전";
const Next$5 = "다음";
const Warning$5 = "경고";
const Or$5 = "또는";
const Introduction$5 = "소개";
const Benefits$5 = "이점";
const Tabs$5 = "탭";
const Type$5 = "유형";
const Search$5 = "검색";
const Randomize$5 = "랜덤 선택";
const Reset$5 = "초기화";
const Preview$5 = "미리보기";
const Typography$5 = "타이포그래피";
const Component$5 = "컴포넌트";
const Modifier$5 = "수식자";
const Responsive$5 = "반응형";
const Features$5 = "기능";
const Links$5 = "링크";
const Message$5 = "메시지";
const Customizable$5 = "사용자 정의";
const Themeable$5 = "테마 지원";
const Dashboard$5 = "대시 보드";
const Notifications$5 = "알림";
const Messages$5 = "메시지";
const People$5 = "사람들";
const Products$5 = "제품";
const Result$5 = "결과";
const No_more_ugly_HTML_part_1$5 = "못생긴";
const No_more_ugly_HTML_part_2$5 = "HTML";
const No_more_ugly_HTML_part_3$5 = "은 더";
const No_more_ugly_HTML_part_4$5 = "이상";
const Click$5 = "클릭";
const Save$5 = "저장";
const Apply_your_own_design_decisions_part_1$5 = "자신";
const Apply_your_own_design_decisions_part_2$5 = "의";
const Apply_your_own_design_decisions_part_3$5 = "디자인";
const Apply_your_own_design_decisions_part_4$5 = "결정";
const Apply_your_own_design_decisions_part_5$5 = "적용";
const Updates$5 = "업데이트";
const Stats$5 = "통계";
const ko = {
  __name: __name$5,
  __code: __code$5,
  __status: __status$5,
  "Tailwind CSS Components": "Tailwind CSS 컴포넌트",
  "cta-1": "컴포넌트 보기",
  "cta-1-mobile": "컴포넌트",
  "cta-2": "시작하기",
  "components-btn": "컴포넌트",
  "change-theme-btn": "테마",
  "all-components-btn": "모든 컴포넌트 보기",
  components: components$5,
  themes: themes$5,
  "github-stars": "깃허브 스타",
  "npm-installs": "설치된 NPM 횟수",
  "install-title": "데이지UI 설치하기",
  "install-desc": "순수 CSS. 모든 프레임워크에 적용할 수 있습니다. 데이지UI는 Tailwind CSS 플러그인 또는 독립된 CSS 라이브러리로 사용할 수 있습니다.",
  "install-step-1": "노드 패키지로 데이지UI 설치하기",
  "install-step-2": "Tailwind CSS 플러그인에 데이지UI 추가하기",
  "install-btn": "설치 가이드",
  "footer-tagline": "유틸리티 우선 CSS 프레임워크를 위한 <br /> 무료 컴포넌트 라이브러리",
  pages: pages$5,
  "how-to-install": "설치 방법",
  "how-to-use-components": "컴포넌트 사용법",
  "how-to-customize": "커스터마이징하는 법",
  "how-to-use-themes": "테마 적용하는 법",
  "color-system": "색상 시스템",
  config: config$5,
  links: links$5,
  changelog: changelog$5,
  license: license$5,
  contributing: contributing$5,
  "available-on": "여기에서 사용하기",
  "try-online": "온라인으로 사용해 보기",
  "created-by": "만든 이",
  Install: Install$5,
  Use: Use$5,
  "Customize components": "컴포넌트 커스터마이징하기",
  Config: Config$5,
  Colors: Colors$5,
  Themes: Themes$5,
  "Theme Generator": "테마 생성기",
  "Layout & Typography": "레이아웃 & 타이포그래피",
  Actions: Actions$5,
  Button: Button$5,
  Dropdown: Dropdown$5,
  Modal: Modal$5,
  Swap: Swap$5,
  "Data display": "데이터 표시",
  Alert: Alert$5,
  Avatar: Avatar$5,
  Badge: Badge$5,
  Card: Card$5,
  Carousel: Carousel$5,
  "Chat bubble": "채팅 말풍선",
  Collapse: Collapse$5,
  Countdown: Countdown$5,
  Kbd: Kbd$5,
  Progress: Progress$5,
  "Radial progress": "방사형 진행 상황",
  Stat: Stat$5,
  Table: Table$5,
  Tooltip: Tooltip$5,
  "Data input": "데이터 인풋",
  Checkbox: Checkbox$5,
  "Text input": "텍스트 인풋",
  Radio: Radio$5,
  Range: Range$5,
  Rating: Rating$5,
  Select: Select$5,
  Textarea: Textarea$5,
  Toggle: Toggle$5,
  Layout: Layout$5,
  Artboard: Artboard$5,
  "Button group": "버튼 그룹",
  Divider: Divider$5,
  Drawer: Drawer$5,
  Footer: Footer$5,
  Hero: Hero$5,
  Indicator: Indicator$5,
  "Input group": "인풋 그룹",
  Mask: Mask$5,
  Stack: Stack$5,
  Toast: Toast$5,
  Navigation: Navigation$5,
  Breadcrumbs: Breadcrumbs$5,
  "Bottom navigation": "Bottom navigation",
  Link: Link$5,
  Menu: Menu$5,
  Navbar: Navbar$5,
  Pagination: Pagination$5,
  Steps: Steps$5,
  Tab: Tab$5,
  Mockup: Mockup$5,
  Code: Code$5,
  Phone: Phone$5,
  Window: Window$5,
  excluded: excluded$5,
  "CodePen example page": "코드펜(CodePen) 예제 페이지",
  "Tailwind Play example page": "Tailwind Play 예제 페이지",
  "new": "새로나옴",
  updated: updated$5,
  "Tailwind Plugin": "Tailwind 플러그인으로 사용하기",
  "Use CDN": "CDN으로 사용하기",
  "Install daisyUI as a Tailwind CSS plugin": "Tailwind CSS 플러그인으로 데이지UI 설치하기",
  "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> installed.": "<a href='https://nodejs.org/en/download/'>Node.js</a>와 <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a>를 설치하셔야 합니다.",
  "How to install daisyUI as a Tailwind CSS plugin?": "Tailwind CSS 플러그인으로 데이지UI를 어떻게 설치하나요?",
  "Install daisyUI": "데이지UI를 설치하세요.",
  "Then add daisyUI to your <code>tailwind.config.js</code> files": "그리고 <code>tailwind.config.js</code> 파일에 데이지UI를 추가하세요.",
  "daisyUI example repositories": "데이지UI 예제 레포지토리",
  "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.": "각종 프레임워크와 빌드 도구에서 데이지UI와 Tailwind CSS를 설정하는 예제를 참고하세요.",
  Prev: Prev$5,
  Next: Next$5,
  "Do you have a question?": "질문이 있으신가요?",
  "Do you see a bug?": "버그를 발견하셨나요?",
  "Do you like daisyUI?": "데이지UI가 마음에 드시나요?",
  "Edit this page on GitHub": "깃허브에서 이 페이지 수정하기",
  "ask the community": "커뮤니티에 물어보기",
  "open an issue on GitHub": "깃허브에서 이슈 열기",
  "tweet about it!": "데이지UI에 대해서 트윗하세요!",
  Warning: Warning$5,
  "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large.": "프로덕션에서는 CDN 파일 사용을 추천하지 않습니다. <br/>사용하지 않는 스타일을 제거할 수 없어 파일 크기가 상당히 클 수 있습니다.",
  "You don't need to install anything.": "아무것도 설치할 필요가 없습니다.",
  "Just add one of these to the <code>head</code> tag of your HTML": "다음 중 하나를 HTML에 <code>head</code> 태그로 추가하기만 하면 됩니다.",
  Or: Or$5,
  "Add component classes to your HTML": "HTML에 컴포넌트 클래스 추가하기",
  "How to use daisyUI classes to style your page?": "페이지를 꾸미기 위해 데이지UI 클래스를 어떻게 사용하나요?",
  "Once you <a href='/docs/install/'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc.": "<a href='/docs/install/'>데이지UI를 설치하기만 하면</a>, <code>btn</code>, <code>card</code>와 같은 컴포넌트 클래스를 사용할 수 있습니다.",
  "So instead of making a button using only utility classes": "유틸리티 클래스만을 이용해 버튼을 만드는 것 대신",
  "You can just use a component class like this": "컴포넌트 클래스를 다음과 같이 사용할 수 있습니다.",
  "Then you can modify the component with daisyUI additional utility classes": "그리고 부가적인 데이지UI 유틸리티 클래스를 이용해 컴포넌트를 수정할 수 있습니다.",
  "Or you can modify the component with Tailwind CSS utility classes": "Tailwind CSS 유틸리티 클래스를 이용해서 컴포넌트를 수정할 수도 있습니다.",
  "Customize daisyUI components": "데이지UI 컴포넌트 커스터마이징하기",
  "How to customize daisyUI?": "데이지UI를 커스터마이징하는 방법",
  "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.": "데이지UI 디자인 시스템에 필요한 다양한 유형의 컴포넌트를 제공하며, 일반적으로 어떤 것도 커스터마이징 할 필요가 없습니다.",
  "But you can still customize components in many ways.": "하지만 여전히 여러 방법으로 컴포넌트를 커스터마이징 할 수 있습니다.",
  "Let's say, you want to customize this button:": "이 버튼을 커스터마이징 하고 싶다면:",
  "You can use daisyUI utility classes:": "데이지UI 유틸리티 클래스를 사용해 커스터마이징 할 수 있습니다:",
  "You can use Tailwind's utility classes:": "Tailwind 유틸리티 클래스를 사용해 커스터마이징 할 수 있습니다.",
  "You can customize components on your CSS file, using Tailwind's @apply directive:": "Tailwind의 @apply를 이용해 당신만의 CSS로 커스터마이징 할 수도 있습니다.",
  "You can also:": "이렇게도 할 수 있습니다.",
  "Add your own theme.": "나만의 테마 추가하기",
  "Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>.": "데이지UI의 디자인을 모두 무시하고 <a href='/docs/config/'>스타일 적용이 되지 않은 데이지UI 뼈대 버전</a>만을 이용하기.",
  "How to change the default configuration of daisyUI?": "데이지UI의 기본 설정값을 어떻게 변경하나요?",
  "daisyUI can be configured from your <code>tailwind.config.js</code> file.": "데이지UI의 설정값은 <code>tailwind.config.js</code> 파일에서 변경할 수 있습니다.",
  "Default config": "기본 설정값",
  "Config values explained": "설정값 설명",
  "If it's true, components will have colors and style so you won't need to design anything.": "이 값이 true라면, 컴포넌트에 색상과 스타일이 적용되어 아무것도 디자인할 필요가 없습니다.",
  "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.": "이 값이 false라면, 컴포넌트에 어떤 색상과 스타일도 적용되어 있지 않아 당신만의 스타일을 디자인할 수 있습니다.",
  "If it's true, all themes will be included.": "이 값이 true라면, 모든 테마가 포함됩니다.",
  "If it's false, only light and dark themes will be available.": "이 값이 false라면, 라이트와 다크 테마만 사용할 수 있습니다.",
  "If it's an array, only themes in the array will be included and the first theme will be the default theme.": "이 값이 배열이라면, 배열 안의 테마만이 포함되며, 제일 첫번째 테마가 기본값이 됩니다.",
  "Read more about <a href='/docs/themes/'>themes</a>": "<a href='/docs/themes/'>테마</a>에 대해 더 읽어보세요.",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.": "이 값이 true라면, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>소수의 기본 스타일</a>이 추가됩니다.",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.": "이 값이 true라면, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>반응형 및 유틸리티 클래스</a>가 추가됩니다.",
  "If it's true, daisyUI shows logs in the terminal while CSS is building.": "이 값이 true라면, CSS가 빌드되는 동안 터미널에 로그가 표시됩니다.",
  "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag.": "이 값이 true라면, 테마의 방향은 오른쪽에서 왼쪽이 됩니다. body 태그에 <code>dir='rtl'</code>를 추가해야 합니다.",
  "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically.": "데이지UI를 RTL 옵션으로 이용하신다면, <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> 플러그인을 사용하는 것을 추천드립니다. Tailwind 유틸리티를 자동으로 좌우 반전시켜줍니다.",
  "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.": "이 설정은 시스템의 자동 다크 테마를 위해서 다른 테마를 고를 수 있게 합니다. 기본적으로 사용자가 테마를 지정하지 않고 시스템에서 다크 테마를 사용하고 있다면 <code>dark</code> 테마 (혹은 <code>dark</code>라는 이름을 가진 커스텀 테마)가 기본 테마가 될 것입니다. 이 설정으로 다른 테마를 기본 다크 모드 테마로 설정할 수 있습니다.",
  "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).": "모든 데이지UI 클래스들에 클래스 이름 접두어를 추가합니다(컴포넌트 클래스, 수식자 클래스, 반응형 클래스를 포함합니다).",
  "For example: <code>btn</code> will become <code>prefix-btn</code>.": "예를 들면, <code>btn</code> 을 <code>prefix-btn</code> 로 사용할 수 있습니다.",
  "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.": "유사한 클래스 이름을 가진 두 번째 CSS 라이브러리를 사용하는 경우 이 설정값을 사용하여 충돌을 방지할 수 있습니다.",
  "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.": "색상 이름(<code>bg-primary</code>와 같은) 유틸리티 클래스 혹은 모서리 둥글기(<code>rounded-box</code>와 같은)는 Tailwind CSS 클래스에 확장으로 추가되는 것이기 때문에 이 설정에 영향을 받지 않을 것입니다.",
  "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.": "만약 데이지UI <code>prefix</code> 옵션(<code>daisy-</code>와 같이)과 Tailwind CSS <code>prefix</code> 옵션(like <code>tw-</code>와 같이)을 같이 사용한다면, 클래스 이름은 <code>tw-daisy-btn</code>와 같이 접두어가 적용될 것입니다.",
  "How to use daisyUI colors?": "데이지UI의 색상은 어떻게 사용하나요?",
  Introduction: Introduction$5,
  "daisyUI is fully themeable and colorable,": "데이지UI는 테마와 색상을 100% 적용할 수 있습니다,",
  "So instead of using constant color utility classes like:": "이렇게 상수 색상 유틸리티 클래스를 사용하는 대신에",
  "It's suggested to use semantic color utility classes like:": "이렇게 시맨틱한 색상 유틸리티 클래스를 사용하는 것을 권장합니다.",
  "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.": "각 색상 이름에는 CSS 변수가 포함되어 있고 각 데이지UI 테마는 유틸리티 클래스가 적용될 때 색상 값을 적용합니다.",
  Benefits: Benefits$5,
  "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces.": "시맨틱한 색상 이름은 더 이해하기 쉽습니다. 왜냐하면 인터페이스를 디자인 할 때 그저 임의의 색상을 사용하지 않기 때문입니다. 어떤 특정 색상 팔레트를 <code>primary</code>, <code>secondary</code> 등의 이름으로 정의해 놓으면 인터페이스에서 이 지정 색상들만 사용하게 됩니다.",
  "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.": "게다가 시맨틱한 색상 이름을 사용하면 테마를 만들기도 더 쉽습니다. 모든 엘레먼트마다 다크 모드 색상을 지정할 필요가 없고 라이트/다크 테마에 제한받지 않습니다. 여러 개의 테마를 가질 수 있고 각 테마는 오직 몇 줄의 CSS 변수일 뿐입니다.",
  "List of all daisyUI color names": "데이지UI의 모든 색상 이름 목록",
  "You can use these color names in your theme or in utility classes.": "이 색상 이름을 테마나 유틸리티 클래스에서 사용할 수 있습니다.",
  "Color name + description": "색상 이름 + 설명",
  "Required or optional for themes": "테마에 필수 또는 선택 사항",
  "Example use": "사용 예시",
  "How to use": "사용 방법",
  "Some daisyUI components come with modifier class names and that modifier class name will apply a color.": "어떤 데이지UI 컴포넌트는 수식하는 클래스 이름과 함께 제공되며 해당 클래스 이름은 색상을 적용합니다.",
  "For example": "예를 들면",
  "You can also use color names in utility classes just like Tailwind's original color names.": "Tailwind의 기존 색상 이름과 같은 방법으로 유틸리티 클래스 내에서 색상 이름을 사용할 수도 있습니다.",
  "These are utility classes that can be used with a color name:": "색상 이름과 함께 사용될 수 있는 유틸리티 클래스들입니다.",
  "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc.": "또한 <code>bg-primary</code>, <code>border-secondary</code> 등을 사용할 수도 있습니다.",
  "daisyUI comes with a number of themes, which you can use with no extra effort.": "데이지UI는 추가적인 노력없이 바로 사용할 수 있는 다수의 테마를 가지고 있습니다.",
  "Each theme defines a set of colors which will be used on all daisyUI elements.": "각 테마는 모든 데이지UI 요소에 적용될 색상 세트를 정의합니다.",
  "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:": "테마를 사용하려면, <span class=badge>tailwind.config.js</span>에 테마 이름을 추가하고 <span class=badge>HTML</span> 태그에 <span class=badge>data-theme</span> 속성을 추가하여 활성화하세요:",
  "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage.": "테마를 바꾸고 로컬 저장소에 선택된 테마를 저장하기 위해 <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>를 사용하는 것을 제안드립니다.",
  "List of themes": "테마 목록",
  "Try them:": "이 테마들을 사용해 보세요.",
  "The default theme is <code>light</code> (or <code>dark</code> for dark mode)": "기본 테마는 <code>light</code> (다크 모드일 경우 <code>dark</code>) 입니다.",
  "but you can <a href='https://daisyui.com/docs/config/'>change the default theme from tailwind.config.js</a>": "하지만 <a href='https://daisyui.com/docs/config/'>tailwind.config.js를 통해 기본 테마를 바꿀 수도</a> 있습니다.",
  "How to remove unused themes?": "사용하지 않는 테마들은 어떻게 삭제하나요?",
  "You can only include the themes you want in your project.": "오직 당신의 프로젝트에 사용할 테마만을 포함시킵니다.",
  "This will reduce the size of your CSS file.": "이는 CSS 파일 크기를 줄여줍니다.",
  "In the below example": "아래 예시에서",
  "<code>cupcake</code> will be the default theme for light mode": "<code>cupcake</code>은 라이트 모드의 기본 테마가 될 것 입니다",
  "<code>dark</code> will be the default theme for dark mode": "<code>dark</code>은 다크모드의 기본 테마가 될 것 입니다",
  "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>": "<code>cmyk</code> 는 <code>data-theme='cmyk'</code>와 함께 어떤 HTML 태그에도 적용될 수 있습니다.",
  "How to disable all themes?": "테마를 사용하지 않으려면 어떻게 하나요?",
  "If you only want the default light and dark themes, set <code>themes</code> config to false.": "기본 라이트와 다크 테마만을 사용하고 싶다면, <code>themes</code> 설정값을 false로 놔두세요.",
  "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array.": "어떤 테마나 색상도 사용하고 싶지 않으시면, <code>themes</code> 설정값을 빈 배열로 놔두세요.",
  "How to use a theme only for a section of a page?": "특정 부분에서만 테마를 사용하려면 어떻게 하나요?",
  "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme.": "<code>data-theme='THEME_NAME'</code> 를 요소에 추가하면 그 안에 있는 모든 것에 이 테마가 적용될 것입니다.",
  "You can nest themes and there is no limit!": "테마를 제한없이 계속 중첩할 수 있습니다!",
  "You can force a section of your HTML to only use a specific theme.": "HTML의 어떤 부분이 오직 특정한 테마만을 사용하도록 강제할 수 있습니다.",
  "How to add a new custom theme?": "새로운 커스텀 테마는 어떻게 추가하나요?",
  "You can add a new theme from <code>tailwind.config.js</code> file.": "새 테마는 <code>tailwind.config.js</code> 파일을 통해 추가할 수 있습니다.",
  "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes.": "아래 예시에서, <code>mytheme</code>라고 하는 새로운 테마를 추가하였고, <code>dark</code> 와 <code>cupcake</code> 테마도 포함하였습니다.",
  "The first theme (<code>mytheme</code>) will be the default theme.": "첫번째 테마(<code>mytheme</code>)가 기본 테마가 될 것입니다.",
  "<code>dark</code> theme will be the default theme for dark mode.": "다크 모드의 기본 테마는 <code>dark</code> 테마가 될 것입니다.",
  "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button).": "아래 예시를 보시면, 필수 색상들을 정의해 놓았습니다. 다른 색상들은 자동으로 생성될 것 입니다. (포커싱된 버튼의 색상이나 <code>primary</code> 버튼 위에 있는 텍스트 색상 등과 같은 다른 색상들이요).",
  "CSS variables in daisyUI themes": "데이지UI 테마의 CSS 변수들",
  "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:": "데이지UI 테마에서 매 디자인 결정들을 커스텀할 수 있는 몇몇 선택적인 CSS 변수들이 있습니다.",
  "You can also add <a href='/docs/colors/' class='link'>optional color names</a> to have full control over all colors.": "모든 색상을 완벽하게 컨트롤하기 위해 <a href='/docs/colors/' class='link'>선택적인 색상 이름</a>을 추가할 수도 있습니다.",
  "Custom CSS for a daisyUI theme": "데이지UI 테마의 CSS 커스터마이징하기",
  "You can apply custom style to a daisyUI themes using CSS:": "CSS를 이용해 커스터마이징한 스타일을 데이지UI 테마에 적용할 수 있습니다.",
  "How to customize an existing theme?": "기존에 있는 테마는 어떻게 커스터마이징 하나요?",
  "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.": "tailwind.config.js에서, 기존에 존재하는 데이지UI 테마를 require하고 색상값을 덮어쓰기할 수 있습니다.",
  "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:": "아래 예시에서, <code>light</code> 테마를 require 및 전개하였고 <code>primary</code>와 <code>primary-focus</code> 색상을 변경하였습니다:",
  "Contribute to translation": "번역에 기여하기",
  "Alert informs users about important events.": "주의는 중요한 이벤트를 사용자에게 알려줍니다.",
  "Artboard provides fixed size container to display a demo content on mobile size.": "아트보드는 모바일 크기에서 데모 콘텐츠를 표시할 수 있는 고정 크기 컨테이너를 제공합니다.",
  "Avatars are used to show a thumbnail representation of an individual or business in the interface.": "아바타는 인터페이스에서 개인이나 기업을 대표하는 썸네일을 보여주는 데 사용됩니다.",
  "Badges are used to inform the user of the status of specific data.": "뱃지는 사용자에게 특정 데이터의 상태를 알리는 데 사용됩니다.",
  "Bottom navigation bar allows navigation between primary screens.": "하단 탐색 바는 주요 화면 간의 탐색을 허용합니다.",
  "Breadcrumbs helps users to navigate through the website.": "위치 표시는 사용자들이 웹사이트를 탐색하는 것을 돕습니다.",
  "Button group shows buttons next to each other.": "버튼 그룹은 나란히 있는 버튼들을 보여줍니다.",
  "Buttons allow the user to take actions or make choices.": "버튼은 사용자들이 어떤 작업을 수행하거나 원하는 것을 선택할 수 있도록 합니다.",
  "Cards are used to group and display content in a way that is easily readable.": "카드는 쉽게 읽을 수 있는 방식으로 콘텐츠를 그룹화하고 표시하는 데 사용됩니다.",
  "Carousel show images or content in a scrollable area.": "캐러셀은 스크롤 가능한 영역에 이미지 또는 콘텐츠를 표시합니다.",
  "Checkboxes are used to select or deselect a value.": "체크박스는 값을 선택하거나 선택을 취소하는 데 사용됩니다.",
  "Collapse is used for showing and hiding content.": "접기는 내용을 표시하거나 숨기는 데 사용됩니다.",
  "Countdown gives you a transition effect of changing numbers.": "카운트다운은 숫자를 변경할 때 전환 효과를 제공합니다.",
  "Divider will be used to separate content vertically or horizontally.": "구분선은 콘텐츠를 수직 또는 수평으로 구분하는 데 사용됩니다.",
  "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.": "서랍은 페이지의 왼쪽 또는 오른쪽에 사이드바를 표시하거나 숨길 수 있는 그리드 레이아웃입니다.",
  "Dropdown can open a menu or any other element when the button is clicked.": "드롭다운은 버튼을 클릭해 메뉴 또는 다른 요소를 열 수 있도록 합니다.",
  "Footer can contain logo, copyright notice, and links to other pages.": "바닥글에는 로고, 저작권 알림 및 다른 페이지에 대한 링크가 포함될 수 있습니다.",
  "Hero is a component for displaying a large box or image with a title and description.": "주인공은 제목과 설명이 있는 큰 상자 또는 이미지를 표시하는 구성 요소입니다.",
  "Indicators are used to place an element on the corner of another element.": "표시자는 다른 요소의 모서리에 요소를 배치하는 데 사용됩니다.",
  "Input group puts an input next to a text or a button.": "인풋 그룹은 텍스트 또는 버튼 옆에 인풋을 배치합니다.",
  "Text Input is a simple input field.": "텍스트 인풋은 간단한 입력 필드입니다.",
  "Kbd is used to display keyboard shortcuts.": "키보드(Kbd)는 키보드 단축키를 표시하는 데 사용됩니다.",
  "Link adds the missing underline style to links.": "링크는 누락된 밑줄 스타일을 링크에 추가합니다.",
  "Mask crops the content of the element to common shapes.": "마스킹은 요소의 내용을 공통된 모양으로 자릅니다.",
  "Menu is used to display a list of links vertically or horizontally.": "메뉴는 링크 목록을 수직 또는 수평으로 표시하는 데 사용됩니다.",
  "Code mockup is used to show a block of code in a box that looks like a code editor.": "코드 모형은 코드 편집기처럼 보이는 상자의 코드 블록을 표시하는 데 사용됩니다.",
  "Phone mockup shows a mockup of an iPhone.": "핸드폰 모형은 아이폰의 모형을 보여줍니다.",
  "Window mockup shows a box that looks like an operating system window.": "윈도우 창은 운영체제의 윈도우 창처럼 보이는 상자를 보여줍니다.",
  "Modal is used to show a dialog or a box when you click a button.": "모달은 단추를 클릭할 때 대화 상자나 상자를 표시하는 데 사용됩니다.",
  "Navbar is used to show a navigation bar on the top of the page.": "내비게이션 바는 페이지 상단에 탐색 막대를 표시하는 데 사용됩니다.",
  "Pagination is a group of buttons that allow the user to navigate between a set of related content.": "페이지네이션은 사용자가 관련 내용 집합 사이를 이동할 수 있도록 하는 단추 그룹입니다.",
  "Progress bar can be used to show the progress of a task or to show the passing of time.": "진행 상황은 작업의 진행률을 표시하거나 시간의 흐름을 표시하는 데 사용할 수 있습니다.",
  "Radial progress can be used to show the progress of a task or to show the passing of time.": "방사형 진행 상황은 작업의 진행 상황을 보여주거나 시간의 흐름을 보여주는 데 사용될 수 있습니다.",
  "Radio buttons allow the user to select one option from a set.": "라디오 버튼을 사용하여 세트에서 하나의 옵션을 선택할 수 있습니다.",
  "Range slider is used to select a value by sliding a handle.": "범위 슬라이더는 손잡이를 슬라이드하여 값을 선택하는 데 사용됩니다.",
  "Rating is a set of radio buttons that allow the user to rate something.": "평가는 사용자가 등급을 매길 수 있는 라디오 버튼의 집합입니다.",
  "Select is used to pick a value from a list of options.": "선택은 옵션 목록에서 값을 선택하는 데 사용됩니다.",
  "Stack visually puts elements on top of each other.": "스택은 시각적으로 요소를 서로의 위에 배치합니다.",
  "Stat is used to show numbers and data in a box.": "통계는 상자에 숫자와 데이터를 표시하는 데 사용됩니다.",
  "Steps can be used to show a list of steps in a process.": "단계를 사용하여 프로세스의 단계 목록을 표시할 수 있습니다.",
  "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.": "스왑을 사용하면 체크박스 또는 클래스 이름을 사용하여 두 요소의 가시성을 전환할 수 있습니다.",
  "Tabs can be used to show a list of links in a tabbed format.": "탭을 사용하여 탭 형식의 링크 목록을 표시할 수 있습니다.",
  "Table can be used to show a list of data in a table format.": "표를 사용하여 데이터 목록을 표 형식으로 표시할 수 있습니다.",
  "Textarea allows users to enter text in multiple lines.": "텍스트 영역에서는 텍스트를 여러 줄로 입력할 수 있습니다.",
  "Toggle is a checkbox that is styled to look like a switch button.": "토글은 스위치 버튼처럼 보이도록 스타일링된 체크박스입니다.",
  "Tooltip can be used to show a message when hovering over an element.": "툴팁을 사용하여 마우스가 요소 위를 호버할때 메시지를 표시할 수 있습니다.",
  "Code mockup": "코드 모형",
  "Phone mockup": "핸드폰 모형",
  "Window mockup": "윈도우 창 모형",
  "File Input": "파일 인풋",
  "Text Input": "텍스트 인풋",
  "Range slider": "범위 슬라이더",
  Tabs: Tabs$5,
  "All daisyUI components": "모든 데이지UI 컴포넌트",
  "Class name": "클래스 이름",
  Type: Type$5,
  Search: Search$5,
  "daisyUI themes": "데이지UI 테마",
  "How to use daisyUI themes?": "데이지UI 테마를 어떻게 사용하나요?",
  "daisyUI Theme Generator": "데이지UI 테마 생성기",
  "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them.": "<span class='badge badge-outline'>tailwind.config.js</span> 파일의 <span class='badge badge-outline'>daisyui > themes</span> 배열 안에 당신이 커스터마이징한 테마를 추가할 수 있습니다. 이 페이지에서, 필수 색상값을 선택할 수 있고 컴포넌트가 어떻게 보일지 확인할 수 있습니다.",
  "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)": "선택적인 색상들을 정의해서 색상 값들에 더 많은 제어를 할 수 있습니다(예: 버튼의 텍스트 색상에 초점이 맞춰졌을 때 버튼 색상)",
  "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use.": "사용할 수 있는 모든 색상 이름을 보고 싶으시면 <a class='link font-bold' href='/docs/colors/'>색상 페이지</a>를 확인해보세요.",
  "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)": "디자인 결정에 따라 커스터마이징 할 수 있는 모든 CSS 변수를 보시려면 <a class='link font-bold' href='/docs/themes/'>테마 페이지</a>를 확인해보세요. (예를 들면 border-radius, animations, 등등이 있습니다.)",
  Randomize: Randomize$5,
  Reset: Reset$5,
  Preview: Preview$5,
  "Layout and Typography": "레이아웃과 타이포그래피",
  "How to use layouts and typography in daisyUI": "데이지UI에서 레이아웃과 타이포그래피를 어떻게 사용하나요",
  "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.": "레이아웃, 크기 바꾸기, 그리드, 간격 띄우기, 등등. 모두 Tailwind CSS의 유틸리티 클래스로 처리됩니다.",
  "Read more": "더 알아보기",
  Typography: Typography$5,
  "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.": "공식 <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS 타이포그래피 플러그인</a>을 사용하세요.",
  "It handles everything and it's fully customizable.": "모든 것을 처리할 수 있으며 커스터마이징이 가능합니다.",
  "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.": "데이지UI는 @tailwindcss/typography에 몇몇 스타일을 추가해 서로 다른 요소들이 같은 테마를 사용할 수 있게 합니다.",
  "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js": "tailwind.config.js에서 꼭 <span class='badge badge-outline'>@tailwindcss/typography</span> 다음에 <span class='badge badge-outline'>daisyui</span>를 require 하세요.",
  "Here you can see how elements will look using <code>@tailwindcss/typography</code>.": "<code>@tailwindcss/typography</code>를 사용해 요소들이 어떻게 보일지 확인할 수 있습니다.",
  "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>": "커스텀한 접두어를 사용하기 위해, <a class='link' href='/docs/config/#prefix'>설정에 접두어 문자열을 추가하세요.</a>",
  Component: Component$5,
  Modifier: Modifier$5,
  Responsive: Responsive$5,
  "Changes the style of a component": "컴포넌트의 스타일 변경하기",
  "Supports responsive prefixes (sm:, lg:, …)": "반응형 접두어 지원 (sm:, lg:, …)",
  "Make your theme": "나만의 테마 만들기",
  "More examples": "더 많은 예시",
  "Support daisyUI's development": "daisyUI 개발 지원",
  "The most popular": "가장 인기 있는",
  "component library": "컴포넌트 라이브러리",
  "for Tailwind CSS": "Tailwind CSS를 위한",
  "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>": "데이지UI는 Tailwind&nbsp;CSS에 컴포넌트 클래스 이름을 추가해 <span class='border-base-content/20 border-b-2'>이전보다 더 빠르게</span> 아름다운 웹사이트를 만들 수 있습니다.",
  "don't re-invent<br/>the wheel<br/>every time": "매번 바퀴를 다시 발명하지 마세요",
  "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.": "Tailwind CSS 프로젝트에서는 모든 요소에 대해 유틸리티 클래스 이름을 작성해야 합니다. 가장 기본적인 요소들에 스타일을 적용하기 위해 수천 개의 클래스 이름을 작성해야 합니다.",
  "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>": "대신에<br /> <span class='text-error'><span class='font-black'>100</span> 개의 클래스 이름</span>을 작성하세요",
  "For every element, every page, every project,<br/>again and again": "각 요소, 각 페이지, 각 프로젝트마다,<br/>다시 다시",
  "use <span class='text-success'><span class='font-black'>semantic</span><br />class names</span>": "<span class='text-success'><span class='font-black'>의미 있는</span> 클래스 이름</span>을 사용하세요",
  "It's descriptive, faster, cleaner and easier to maintain.": "설명적이고 빠르고 깨끗하고 유지보수하기 쉽습니다.",
  Features: Features$5,
  Links: Links$5,
  Message: Message$5,
  "Cleaner HTML": "깨끗한 HTML",
  Customizable: Customizable$5,
  Themeable: Themeable$5,
  "Pure CSS": "순수 CSS",
  Dashboard: Dashboard$5,
  Notifications: Notifications$5,
  Messages: Messages$5,
  People: People$5,
  Products: Products$5,
  "Use Tailwind CSS but write fewer class names.": "Tailwind CSS 를 사용하지만 더 적은 클래스 이름으로 작성하세요.",
  "Pure CSS. <br />No JS dependency": "순수 CSS. <br />JS 의존성 없음",
  "Works on all frameworks": "모든 프레임 워크에서 작동합니다.",
  "Design system": "디자인 시스템",
  "Styling a simple button": "간단한 버튼 스타일링하기",
  Result: Result$5,
  "Take Tailwind CSS": "Tailwind CSS",
  "to the next level": "다음 단계로",
  "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like": "daisyUI 는 Tailwind CSS 에 클래스 이름을 추가합니다.<br />모든 일반적인 UI 컴포넌트에 대해서.<br />이런 종류의 클래스 이름들이 있습니다.",
  "and many more.": "그리고 더 많은 것들",
  "This allows us to focus on important things<br />instead of styling basic elements for every project.": "이렇게 하면 프로젝트마다 기본 요소를 스타일링하는 대신<br />중요한 것에 집중할 수 있습니다.",
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$5,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$5,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$5,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$5,
  "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.": "클래스 이름을 적게 쓰세요<br />컴포넌트 클래스 이름을 사용하세요<br />Tailwind CSS 유틸리티를 사용해서 수정하세요.",
  Click: Click$5,
  "Tailwind only": "Tailwind만 사용",
  "Tailwind + daisyUI": "Tailwind + daisyUI",
  Save: Save$5,
  "Accept terms of use": "이용 약관에 동의합니다",
  "Submit to newsletter": "뉴스레터에 가입합니다",
  "Fewer class names": "클래스 이름을 적게 쓰세요",
  "Faster development": "더 빠른 개발",
  "Smaller file size": "더 작은 파일 크기",
  "With daisyUI, you write 80% fewer class names<br />And your HTML size will be about 70% smaller.": "데이지UI를 사용하면 클래스 이름을 80% 더 적게 작성하고<br />HTML 크기를 약 70% 줄일 수 있습니다.",
  "CSS Class names": "CSS 클래스 이름",
  "fewer class names": "더 적은 클래스 이름",
  "HTML size": "HTML 크기",
  "smaller DOM size": "더 작은 DOM 크기",
  "Highly customizable": "매우 유연하게 사용할 수 있습니다",
  "Powered by Tailwind&nbsp;CSS utility&nbsp;classes": "Tailwind&nbsp;CSS 유틸리티&nbsp;클래스를 기반으로 합니다",
  "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes.": "daisyUI는 Tailwind&nbsp;CSS를 기반으로 합니다<br />따라서 유틸리티 클래스를 사용하여 모든 것을 사용자 정의할 수 있습니다",
  "Pure CSS.": "순수 CSS.",
  "Framework agnostic.": "프레임워크에 독립적.",
  "Works everywhere.": "어디에서나 작동합니다.",
  "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file.": "daisyUI는 Tailwind CSS의 플러그인입니다. 모든 JS 프레임워크에서 작동하며 JS 번들 파일이 필요하지 않습니다.",
  "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name.": "daisyUI를 dev dependency로 설치하고 다른 Tailwind CSS 클래스 이름과 마찬가지로 클래스 이름을 사용하십시오.",
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$5,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$5,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$5,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$5,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$5,
  "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components.": "당신의 웹사이트는 특별해야 합니다. daisyUI 테마 생성기를 사용하여 자신만의 테마를 만드세요. 당신이 선택한 색상은 모든 daisyUI 컴포넌트에 적용됩니다.",
  "Learn more about themes": "더 많은 테마 알아보기",
  "utility classes": "유틸리티 클래스",
  "endless possibilities": "무한한 가능성",
  "Mix and match daisyUI class names to create unique web pages.": "daisyUI 클래스 이름을 섞어 고유한 웹 페이지를 만드세요.",
  "daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS": "daisyUI 는 Tailwind&nbsp;CSS 의 가장 인기 있는<br />컴포넌트 라이브러리입니다.",
  "open-source projects using daisyUI": "daisyUI 를 사용한 오픈소스 프로젝트",
  "Free and open-source": "무료이고 오픈소스입니다.",
  "Built by the community": "커뮤니티에 의해 만들어졌습니다.",
  "daisyUI welcomes contributions from developers around the world": "daisyUI 는 전세계의 개발자들의 기여를 환영합니다.",
  "Sponsors and backers": "후원자와 후원자들",
  "Try daisyUI": "daisyUI 를 사용해보세요",
  "on your favorite framework": "좋아하는 프레임워크에서",
  "See all examples": "모든 예제 보기",
  "Or play with daisyUI on": "또는 daisyUI를 사용해보기",
  "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.": "채팅 말풍선은 대화의 한 줄과 그 모든 데이터(작성자 이미지, 작성자 이름, 시간 등)를 표시하는 데 사용됩니다.",
  "File Input is a an input field for uploading files.": "파일 인풋은 파일을 업로드하는 데 사용되는 입력 필드입니다.",
  "Toast is a wrapper to stack elements, positioned on the corner of page.": "토스트는 페이지의 모서리에 위치한 요소를 스택하는 래퍼입니다.",
  "Admin panel": "관리자 패널",
  Updates: Updates$5,
  Stats: Stats$5,
  "Unlimited themes": "무제한 테마",
  "with zero effort": "불필요한 노력 없이",
  "daisyUI adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values. Using daisyUI color names, you get Dark Mode and even more themes without adding a new class name.": "daisyUI는 Tailwind CSS에 사용자 정의 가능한 색상 이름 세트를 추가하며 이 새 색상은 값에 CSS 변수를 사용합니다. daisyUI 색상 이름을 사용하면 새 클래스 이름을 추가하지 않고도 다크 모드 및 더 많은 테마를 얻을 수 있습니다.",
  "See all themes": "모든 테마 보기",
  "Semantic colors": "의미론적인 색상",
  "Learn more about colors": "색상에 대해 자세히 알아보기",
  "Get started": "지금 시작하기",
  "daisyUI 3 is available now!": "daisyUI 3이 지금 사용 가능합니다!",
  "Become a sponsor": "후원자가 되세요",
  "": ""
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Actions: Actions$5,
  Alert: Alert$5,
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$5,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$5,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$5,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$5,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$5,
  Artboard: Artboard$5,
  Avatar: Avatar$5,
  Badge: Badge$5,
  Benefits: Benefits$5,
  Breadcrumbs: Breadcrumbs$5,
  Button: Button$5,
  Card: Card$5,
  Carousel: Carousel$5,
  Checkbox: Checkbox$5,
  Click: Click$5,
  Code: Code$5,
  Collapse: Collapse$5,
  Colors: Colors$5,
  Component: Component$5,
  Config: Config$5,
  Countdown: Countdown$5,
  Customizable: Customizable$5,
  Dashboard: Dashboard$5,
  Divider: Divider$5,
  Drawer: Drawer$5,
  Dropdown: Dropdown$5,
  Features: Features$5,
  Footer: Footer$5,
  Hero: Hero$5,
  Indicator: Indicator$5,
  Install: Install$5,
  Introduction: Introduction$5,
  Kbd: Kbd$5,
  Layout: Layout$5,
  Link: Link$5,
  Links: Links$5,
  Mask: Mask$5,
  Menu: Menu$5,
  Message: Message$5,
  Messages: Messages$5,
  Mockup: Mockup$5,
  Modal: Modal$5,
  Modifier: Modifier$5,
  Navbar: Navbar$5,
  Navigation: Navigation$5,
  Next: Next$5,
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$5,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$5,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$5,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$5,
  Notifications: Notifications$5,
  Or: Or$5,
  Pagination: Pagination$5,
  People: People$5,
  Phone: Phone$5,
  Prev: Prev$5,
  Preview: Preview$5,
  Products: Products$5,
  Progress: Progress$5,
  Radio: Radio$5,
  Randomize: Randomize$5,
  Range: Range$5,
  Rating: Rating$5,
  Reset: Reset$5,
  Responsive: Responsive$5,
  Result: Result$5,
  Save: Save$5,
  Search: Search$5,
  Select: Select$5,
  Stack: Stack$5,
  Stat: Stat$5,
  Stats: Stats$5,
  Steps: Steps$5,
  Swap: Swap$5,
  Tab: Tab$5,
  Table: Table$5,
  Tabs: Tabs$5,
  Textarea: Textarea$5,
  Themeable: Themeable$5,
  Themes: Themes$5,
  Toast: Toast$5,
  Toggle: Toggle$5,
  Tooltip: Tooltip$5,
  Type: Type$5,
  Typography: Typography$5,
  Updates: Updates$5,
  Use: Use$5,
  Warning: Warning$5,
  Window: Window$5,
  __code: __code$5,
  __name: __name$5,
  __status: __status$5,
  changelog: changelog$5,
  components: components$5,
  config: config$5,
  contributing: contributing$5,
  default: ko,
  excluded: excluded$5,
  license: license$5,
  links: links$5,
  pages: pages$5,
  themes: themes$5,
  updated: updated$5
}, Symbol.toStringTag, { value: "Module" }));
const __name$4 = "Português";
const __code$4 = "PT";
const __status$4 = "";
const components$4 = "Componentes";
const themes$4 = "Temas";
const pages$4 = "Páginas";
const config$4 = "Configurações";
const links$4 = "Links";
const changelog$4 = "Histórico de alterações";
const license$4 = "Licença";
const contributing$4 = "Contribuições";
const Install$4 = "Instalar";
const Use$4 = "Usar";
const Config$4 = "Configurações";
const Colors$4 = "Cores";
const Themes$4 = "Temas";
const Actions$4 = "Ações";
const Button$4 = "Botão";
const Dropdown$4 = "Dropdown";
const Modal$4 = "Modal";
const Swap$4 = "Swap";
const Alert$4 = "Alerta";
const Avatar$4 = "Avatar";
const Badge$4 = "Distintivo";
const Card$4 = "Cartão";
const Carousel$4 = "Carrossel";
const Collapse$4 = "Colapso";
const Countdown$4 = "Contagem regressiva";
const Kbd$4 = "Kbd";
const Progress$4 = "Progresso";
const Stat$4 = "Estatística";
const Table$4 = "Tabela";
const Tooltip$4 = "Dica de ferramenta";
const Checkbox$4 = "Caixa de seleção";
const Radio$4 = "Rádio";
const Range$4 = "Faixa";
const Rating$4 = "Avaliação";
const Select$4 = "Selecionar";
const Textarea$4 = "Área de texto";
const Toggle$4 = "Alternar";
const Layout$4 = "Layout";
const Artboard$4 = "Quadro";
const Divider$4 = "Divisor";
const Drawer$4 = "Gaveta";
const Footer$4 = "Rodapé";
const Hero$4 = "Herói";
const Indicator$4 = "Indicador";
const Mask$4 = "Máscara";
const Stack$4 = "Pilha";
const Toast$4 = "Toast";
const Navigation$4 = "Navegação";
const Breadcrumbs$4 = "Navegação hierárquica";
const Link$4 = "Link";
const Menu$4 = "Menu";
const Navbar$4 = "Barra de navegação";
const Pagination$4 = "Paginação";
const Steps$4 = "Passos";
const Tab$4 = "Aba";
const Mockup$4 = "Mockup";
const Code$4 = "Código";
const Phone$4 = "Telefone";
const Window$4 = "Janela";
const excluded$4 = "excluído";
const updated$4 = "atualizado";
const Prev$4 = "Anterior";
const Next$4 = "Próximo";
const Warning$4 = "Aviso";
const Or$4 = "Ou";
const Introduction$4 = "Introdução";
const Benefits$4 = "Benefícios";
const Tabs$4 = "Guias";
const Type$4 = "Escreva";
const Search$4 = "Pesquisar";
const Randomize$4 = "Aleatório";
const Reset$4 = "Redefinir";
const Preview$4 = "Visualizar";
const Typography$4 = "Tipografia";
const Component$4 = "Componente";
const Modifier$4 = "Modificador";
const Responsive$4 = "Responsivo";
const Features$4 = "Recursos";
const Links$4 = "Links";
const Message$4 = "Mensagem";
const Customizable$4 = "Customizável";
const Themeable$4 = "Tema";
const Dashboard$4 = "Painel";
const Notifications$4 = "Notificações";
const Messages$4 = "Mensagens";
const People$4 = "Pessoas";
const Products$4 = "Produtos";
const Result$4 = "Resultado";
const No_more_ugly_HTML_part_1$4 = "Sem mais";
const No_more_ugly_HTML_part_2$4 = "HTML";
const No_more_ugly_HTML_part_3$4 = "feio";
const No_more_ugly_HTML_part_4$4 = "";
const Click$4 = "Clique";
const Save$4 = "Salvar";
const Apply_your_own_design_decisions_part_1$4 = "Aplique";
const Apply_your_own_design_decisions_part_2$4 = "suas";
const Apply_your_own_design_decisions_part_3$4 = "próprias";
const Apply_your_own_design_decisions_part_4$4 = "decisões";
const Apply_your_own_design_decisions_part_5$4 = "de design";
const Updates$4 = "Atualizações";
const Stats$4 = "Estatísticas";
const pt = {
  __name: __name$4,
  __code: __code$4,
  __status: __status$4,
  "Tailwind CSS Components": "Componentes do Tailwind CSS",
  "cta-1": "Ver componentes",
  "cta-1-mobile": "Componentes",
  "cta-2": "Como utilizar?",
  "components-btn": "Componentes",
  "change-theme-btn": "Tema",
  "all-components-btn": "Ver todos os componentes",
  components: components$4,
  themes: themes$4,
  "github-stars": "Estrelas no GitHub",
  "npm-installs": "Instalações do NPM",
  "install-title": "Instale o daisyUI",
  "install-desc": "CSS puro. Funciona em todos os frameworks. O daisyUI pode ser usado como um plugin do Tailwind CSS ou como uma biblioteca CSS independente.",
  "install-step-1": "Instale o daisyUI como um pacote Node",
  "install-step-2": "Adicione o daisyUI ao Tailwind CSS como um plugin",
  "install-btn": "Guia de instalação",
  "footer-tagline": "Biblioteca gratuita de componentes <br /> para frameworks CSS baseados em classes CSS",
  pages: pages$4,
  "how-to-install": "Como instalar",
  "how-to-use-components": "Como utilizar os componentes",
  "how-to-customize": "Como personalizar",
  "how-to-use-themes": "Como usar os temas",
  "color-system": "Sistema de cores",
  config: config$4,
  links: links$4,
  changelog: changelog$4,
  license: license$4,
  contributing: contributing$4,
  "available-on": "Disponível em",
  "try-online": "Experimente online",
  "created-by": "Criado por",
  Install: Install$4,
  Use: Use$4,
  "Customize components": "Personalizar os componentes",
  Config: Config$4,
  Colors: Colors$4,
  Themes: Themes$4,
  "Theme Generator": "Gerador de temas",
  "Layout & Typography": "Layout e Tipografia",
  Actions: Actions$4,
  Button: Button$4,
  Dropdown: Dropdown$4,
  Modal: Modal$4,
  Swap: Swap$4,
  "Data display": "Exibição de dados",
  Alert: Alert$4,
  Avatar: Avatar$4,
  Badge: Badge$4,
  Card: Card$4,
  Carousel: Carousel$4,
  "Chat bubble": "Balão de bate-papo",
  Collapse: Collapse$4,
  Countdown: Countdown$4,
  Kbd: Kbd$4,
  Progress: Progress$4,
  "Radial progress": "Progresso radial",
  Stat: Stat$4,
  Table: Table$4,
  Tooltip: Tooltip$4,
  "Data input": "Entrada de dados",
  Checkbox: Checkbox$4,
  "Text input": "Entrada de texto",
  Radio: Radio$4,
  Range: Range$4,
  Rating: Rating$4,
  Select: Select$4,
  Textarea: Textarea$4,
  Toggle: Toggle$4,
  Layout: Layout$4,
  Artboard: Artboard$4,
  "Button group": "Grupo de botões",
  Divider: Divider$4,
  Drawer: Drawer$4,
  Footer: Footer$4,
  Hero: Hero$4,
  Indicator: Indicator$4,
  "Input group": "Grupo de entrada",
  Mask: Mask$4,
  Stack: Stack$4,
  Toast: Toast$4,
  Navigation: Navigation$4,
  Breadcrumbs: Breadcrumbs$4,
  "Bottom navigation": "Navegação inferior",
  Link: Link$4,
  Menu: Menu$4,
  Navbar: Navbar$4,
  Pagination: Pagination$4,
  Steps: Steps$4,
  Tab: Tab$4,
  Mockup: Mockup$4,
  Code: Code$4,
  Phone: Phone$4,
  Window: Window$4,
  excluded: excluded$4,
  "CodePen example page": "Página de exemplo CodePen",
  "Tailwind Play example page": "Página de exemplo Tailwind Play",
  "new": "novo",
  updated: updated$4,
  "Tailwind Plugin": "Plugin do Tailwind",
  "Use CDN": "Usar CDN",
  "Install daisyUI as a Tailwind CSS plugin": "Instalar o daisyUI como um plugin do Tailwind CSS",
  "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> installed.": "Você precisa ter o <a href='https://nodejs.org/en/download/'>Node.js</a> e o <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> instalados.",
  "How to install daisyUI as a Tailwind CSS plugin?": "Como instalar o daisyUI como um plugin do Tailwind CSS?",
  "Install daisyUI": "Instalar o daisyUI",
  "Then add daisyUI to your <code>tailwind.config.js</code> files": "Em seguida, adicione o daisyUI ao seu arquivo <code>tailwind.config.js</code>",
  "daisyUI example repositories": "Repositórios de exemplos do daisyUI",
  "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.": "Veja exemplos de configuração do daisyUI e do Tailwind CSS em diferentes frameworks e ferramentas.",
  Prev: Prev$4,
  Next: Next$4,
  "Do you have a question?": "Você tem alguma pergunta?",
  "Do you see a bug?": "Você encontrou algum bug?",
  "Do you like daisyUI?": "Você gosta do daisyUI?",
  "Edit this page on GitHub": "Edite esta página no GitHub",
  "ask the community": "pergunte à comunidade",
  "open an issue on GitHub": "abra um issue no GitHub",
  "tweet about it!": "twitte sobre!",
  Warning: Warning$4,
  "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large.": "Os arquivos CDN não são recomendados para produção, <br/>pois você não pode remover estilos não utilizados e o tamanho do arquivo será grande.",
  "You don't need to install anything.": "Você não precisa instalar nada.",
  "Just add one of these to the <code>head</code> tag of your HTML": "Basta adicionar um desses dentro da tag <code>head</code> do seu HTML",
  Or: Or$4,
  "Add component classes to your HTML": "Adicione classes de componentes ao seu HTML",
  "How to use daisyUI classes to style your page?": "Como usar as classes do daisyUI para customizar sua página?",
  "Once you <a href='/docs/install/'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc.": "Depois de ter <a href='/docs/install/'>instalado o daisyUI</a>, você pode usar classes de componentes como <code>btn</code>, <code>card</code>, etc.",
  "So instead of making a button using only utility classes": "Então, em vez de criar um botão usando apenas classes",
  "You can just use a component class like this": "Você pode simplesmente usar uma classe de componente assim",
  "Then you can modify the component with daisyUI additional utility classes": "Em seguida, você pode modificar o componente com classes adicionais do daisyUI",
  "Or you can modify the component with Tailwind CSS utility classes": "Ou você pode modificar o componente com classes do Tailwind CSS",
  "Customize daisyUI components": "Personalizar os componentes do daisyUI",
  "How to customize daisyUI?": "Como personalizar os componentes do daisyUI?",
  "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.": "Os componentes do daisyUI vêm com muitas variantes necessárias para sistemas de design e você geralmente não precisa personalizar nada.",
  "But you can still customize components in many ways.": "Mas você ainda pode personalizar os componentes de várias maneiras.",
  "Let's say, you want to customize this button:": "Digamos que você queira personalizar este botão:",
  "You can use daisyUI utility classes:": "Você pode usar classes do daisyUI:",
  "You can use Tailwind's utility classes:": "Você pode usar as classes do Tailwind:",
  "You can customize components on your CSS file, using Tailwind's @apply directive:": "Você pode personalizar os componentes em seu arquivo CSS, usando a diretiva @apply do Tailwind:",
  "You can also:": "Você também pode:",
  "Add your own theme.": "Adicionar seu próprio tema.",
  "Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>.": "Remover as decisões de design opinativas do daisyUI e <a href='/docs/config/'>usar apenas uma versão sem estilo (esqueleto) do daisyUI</a>.",
  "How to change the default configuration of daisyUI?": "Como alterar a configuração padrão do daisyUI?",
  "daisyUI can be configured from your <code>tailwind.config.js</code> file.": "O daisyUI pode ser configurado a partir do arquivo <code>tailwind.config.js</code>.",
  "Default config": "Configuração padrão",
  "Config values explained": "Explicação dos valores de configuração",
  "If it's true, components will have colors and style so you won't need to design anything.": "Se for verdadeiro, os componentes terão cores e estilo para que você não precise projetar nada.",
  "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.": "Se for falso, os componentes não terão cor nem estilo visual para que você possa projetar seu próprio estilo em um esqueleto básico.",
  "If it's true, all themes will be included.": "Se for verdadeiro, todos os temas serão incluídos.",
  "If it's false, only light and dark themes will be available.": "Se for falso, apenas os temas claro e escuro estarão disponíveis.",
  "If it's an array, only themes in the array will be included and the first theme will be the default theme.": "Se for um array, apenas os temas no array serão incluídos e o primeiro tema será o tema padrão.",
  "Read more about <a href='/docs/themes/'>themes</a>": "Leia mais sobre <a href='/docs/themes/'>temas</a>",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.": "Se for verdadeiro, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>alguns estilos base</a> serão adicionados.",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.": "Se for verdadeiro, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>classes responsivas e utilitárias</a> serão adicionadas.",
  "If it's true, daisyUI shows logs in the terminal while CSS is building.": "Se for verdadeiro, o daisyUI exibe logs no terminal durante a compilação do CSS.",
  "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag.": "Se for verdadeiro, seu tema será da direita para a esquerda. Você precisa adicionar <code>dir='rtl'</code> à tag body.",
  "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically.": "Se você estiver usando o daisyUI com a opção RTL, sugiro usar o plugin <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> para inverter automaticamente todos os utilitários do Tailwind.",
  "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.": "Permite escolher outro tema para o modo escuro automático do sistema. Por padrão, o tema <code>dark</code> (ou um tema personalizado chamado <code>dark</code>) será o tema padrão se nenhum tema for especificado e o usuário estiver usando o modo escuro em seu sistema. Com esta configuração, você pode definir outro tema para ser o tema padrão do modo escuro.",
  "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).": "Adiciona um prefixo ao nome da classe para todas as classes do daisyUI (incluindo classes de componente, classes modificadoras e classes responsivas).",
  "For example: <code>btn</code> will become <code>prefix-btn</code>.": "Por exemplo: <code>btn</code> se tornará <code>prefix-btn</code>.",
  "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.": "Se você estiver usando uma segunda biblioteca CSS com nomes de classe semelhantes, poderá usar essa configuração para evitar conflitos.",
  "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.": "Classes de utilitário como nomes de cores (por exemplo, <code>bg-primary</code>) ou border-radius (por exemplo, <code>rounded-box</code>) não serão afetadas por esta configuração porque estão sendo adicionadas como extensões para classes CSS do Tailwind.",
  "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.": "Se você estiver usando a opção <code>prefix</code> do daisyUI (como <code>daisy-</code>) e a opção <code>prefix</code> do Tailwind CSS (como <code>tw-</code>) juntas, os nomes das classes serão prefixados assim: <code>tw-daisy-btn</code>.",
  "How to use daisyUI colors?": "Como usar as cores do daisyUI?",
  Introduction: Introduction$4,
  "daisyUI is fully themeable and colorable,": "O daisyUI é totalmente tematizável e colorido,",
  "So instead of using constant color utility classes like:": "Em vez de usar classes utilitárias de cor constante como:",
  "It's suggested to use semantic color utility classes like:": "É sugerido usar classes utilitárias de cor semântica como:",
  "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.": "Cada nome de cor contém variáveis CSS e cada tema do daisyUI aplica valores de cor às classes utilitárias quando é aplicado.",
  Benefits: Benefits$4,
  "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces.": "Nomes semânticos de cores fazem mais sentido porque, ao projetar interfaces, não usamos apenas uma cor aleatória. Definimos uma paleta de cores específica com nomes como <code>primary</code>, <code>secondary</code>, etc. e usamos apenas essas cores específicas em nossas interfaces.",
  "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.": "Além disso, o uso de nomes semânticos de cores facilita a criação de temas. Você não precisaria definir cores de modo escuro para cada elemento individual e não estaria limitado apenas a temas claros/escuros. Você pode ter vários temas disponíveis e cada tema é apenas algumas linhas de variáveis CSS.",
  "List of all daisyUI color names": "Lista de todos os nomes de cores do daisyUI",
  "You can use these color names in your theme or in utility classes.": "Você pode usar esses nomes de cores em seu tema ou em classes utilitárias.",
  "Color name + description": "Nome da cor + descrição",
  "Required or optional for themes": "Obrigatório ou opcional para temas",
  "Example use": "Exemplo de uso",
  "How to use": "Como usar",
  "Some daisyUI components come with modifier class names and that modifier class name will apply a color.": "Alguns componentes do daisyUI vêm com nomes de classe modificadores e esse nome de classe modificadora aplicará uma cor.",
  "For example": "Por exemplo",
  "You can also use color names in utility classes just like Tailwind's original color names.": "Você também pode usar nomes de cores em classes utilitárias, assim como os nomes de cores originais do Tailwind.",
  "These are utility classes that can be used with a color name:": "Essas são classes utilitárias que podem ser usadas com um nome de cor:",
  "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc.": "Então você pode usar <code>bg-primary</code>, <code>border-secondary</code>, etc.",
  "daisyUI comes with a number of themes, which you can use with no extra effort.": "O daisyUI vem com uma série de temas, que você pode usar sem esforço adicional.",
  "Each theme defines a set of colors which will be used on all daisyUI elements.": "Cada tema define um conjunto de cores que será usado em todos os elementos do daisyUI.",
  "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:": "Para usar um tema, adicione seu nome em <span class=badge>tailwind.config.js</span> e ative-o adicionando o atributo <span class=badge>data-theme</span> à tag <span class=badge>HTML</span>:",
  "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage.": "Sugiro usar <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, para que você possa alternar temas e salvar o tema selecionado no armazenamento local.",
  "List of themes": "Lista de temas",
  "Try them:": "Experimente-os:",
  "The default theme is <code>light</code> (or <code>dark</code> for dark mode)": "O tema padrão é <code>light</code> (ou <code>dark</code> para o modo escuro)",
  "but you can <a href='https://daisyui.com/docs/config/'>change the default theme from tailwind.config.js</a>": "mas você pode <a href='https://daisyui.com/docs/config/'>alterar o tema padrão no arquivo tailwind.config.js</a>",
  "How to remove unused themes?": "Como remover temas não utilizados?",
  "You can only include the themes you want in your project.": "Você só pode incluir os temas que deseja em seu projeto.",
  "This will reduce the size of your CSS file.": "Isso reduzirá o tamanho do seu arquivo CSS.",
  "In the below example": "No exemplo abaixo",
  "<code>cupcake</code> will be the default theme for light mode": "<code>cupcake</code> será o tema padrão para o modo claro",
  "<code>dark</code> will be the default theme for dark mode": "<code>dark</code> será o tema padrão para o modo escuro",
  "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>": "<code>cmyk</code> pode ser aplicado em qualquer tag HTML com <code>data-theme='cmyk'</code>",
  "How to disable all themes?": "Como desativar todos os temas?",
  "If you only want the default light and dark themes, set <code>themes</code> config to false.": "Se você quiser apenas os temas padrão claro e escuro, defina a configuração <code>themes</code> como false.",
  "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array.": "Se você não quiser incluir nenhum tema e desabilitar todas as cores, defina a configuração <code>themes</code> como um array vazio.",
  "How to use a theme only for a section of a page?": "Como usar um tema apenas para uma seção de uma página?",
  "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme.": "Adicione <code>data-theme='THEME_NAME'</code> a qualquer elemento e tudo dentro terá seu tema.",
  "You can nest themes and there is no limit!": "Você pode aninhar temas e não há limite!",
  "You can force a section of your HTML to only use a specific theme.": "Você pode fazer com que uma seção do seu HTML use apenas um tema específico.",
  "How to add a new custom theme?": "Como adicionar um novo tema personalizado?",
  "You can add a new theme from <code>tailwind.config.js</code> file.": "Você pode adicionar um novo tema do arquivo <code>tailwind.config.js</code>.",
  "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes.": "No exemplo abaixo, adicionei um novo tema chamado <code>mytheme</code> e também incluí os temas <code>dark</code> e <code>cupcake</code>.",
  "The first theme (<code>mytheme</code>) will be the default theme.": "O primeiro tema (<code>mytheme</code>) será o tema padrão.",
  "<code>dark</code> theme will be the default theme for dark mode.": "O tema <code>dark</code> será o tema padrão para o modo escuro.",
  "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button).": "No exemplo abaixo, tenho as cores necessárias. Todas as outras cores serão geradas automaticamente (como a cor do botão quando você o focaliza ou a cor do texto em um botão <code>primary</code>).",
  "CSS variables in daisyUI themes": "Variáveis CSS nos temas do daisyUI",
  "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:": "Existem algumas variáveis CSS opcionais que você pode usar nos temas daisyUI para personalizar as decisões de design para cada tema:",
  "You can also add <a href='/docs/colors/' class='link'>optional color names</a> to have full control over all colors.": "Você também pode adicionar <a href='/docs/colors/' class='link'>nomes de cores opcionais</a> para ter controle total sobre todas as cores.",
  "Custom CSS for a daisyUI theme": "CSS personalizado para um tema daisyUI",
  "You can apply custom style to a daisyUI themes using CSS:": "Você pode aplicar estilos personalizados aos temas daisyUI usando CSS:",
  "How to customize an existing theme?": "Como personalizar um tema existente?",
  "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.": "Em seu tailwind.config.js, você pode escolher um tema daisyUI existente e substituir algumas cores.",
  "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:": "No exemplo abaixo, eu requeri e espalhei o tema <code>light</code> e alterei suas cores <code>primary</code> e <code>primary-focus</code>:",
  "Contribute to translation": "Contribua para a tradução",
  "Alert informs users about important events.": "O alerta informa os usuários sobre eventos importantes.",
  "Artboard provides fixed size container to display a demo content on mobile size.": "O Quadro fornece um contêiner de tamanho fixo para exibir conteúdo de demonstração em uma tela de tamanho móvel.",
  "Avatars are used to show a thumbnail representation of an individual or business in the interface.": "Os avatares são usados para mostrar uma representação em miniatura de um indivíduo ou empresa na interface.",
  "Badges are used to inform the user of the status of specific data.": "Os distintivos são usados para informar o usuário sobre o status de dados específicos.",
  "Bottom navigation bar allows navigation between primary screens.": "A barra de navegação inferior permite a navegação entre telas principais.",
  "Breadcrumbs helps users to navigate through the website.": "As trilhas de navegação ajudam os usuários a navegar pelo site.",
  "Button group shows buttons next to each other.": "O grupo de botões mostra botões lado a lado.",
  "Buttons allow the user to take actions or make choices.": "Os botões permitem que o usuário execute ações ou faça escolhas.",
  "Cards are used to group and display content in a way that is easily readable.": "Os cards são usados para agrupar e exibir conteúdo de forma facilmente legível.",
  "Carousel show images or content in a scrollable area.": "O carrossel exibe imagens ou conteúdo em uma área rolável.",
  "Checkboxes are used to select or deselect a value.": "As caixas de seleção são usadas para selecionar ou desmarcar um valor.",
  "Collapse is used for showing and hiding content.": "O colapso é usado para mostrar e ocultar conteúdo.",
  "Countdown gives you a transition effect of changing numbers.": "A contagem regressiva oferece um efeito de transição de mudança de números.",
  "Divider will be used to separate content vertically or horizontally.": "O divisor será usado para separar o conteúdo vertical ou horizontalmente.",
  "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.": "A gaveta é um layout de grade que pode mostrar/ocultar uma barra lateral no lado esquerdo ou direito da página.",
  "Dropdown can open a menu or any other element when the button is clicked.": "O dropdown pode abrir um menu ou qualquer outro elemento quando o botão é clicado.",
  "Footer can contain logo, copyright notice, and links to other pages.": "O rodapé pode conter um logotipo, aviso de direitos autorais e links para outras páginas.",
  "Hero is a component for displaying a large box or image with a title and description.": "O hero é um componente para exibir uma caixa grande ou imagem com título e descrição.",
  "Indicators are used to place an element on the corner of another element.": "Os indicadores são usados para posicionar um elemento no canto de outro elemento.",
  "Input group puts an input next to a text or a button.": "O grupo de entrada coloca um campo de entrada ao lado de texto ou um botão.",
  "Text Input is a simple input field.": "A entrada de texto é um campo de entrada simples.",
  "Kbd is used to display keyboard shortcuts.": "O kbd é usado para exibir atalhos de teclado.",
  "Link adds the missing underline style to links.": "O link adiciona o estilo de sublinhado ausente aos links.",
  "Mask crops the content of the element to common shapes.": "A máscara corta o conteúdo do elemento para formas comuns.",
  "Menu is used to display a list of links vertically or horizontally.": "O menu é usado para exibir uma lista de links vertical ou horizontalmente.",
  "Code mockup is used to show a block of code in a box that looks like a code editor.": "A simulação de código é usada para mostrar um bloco de código em uma caixa que se parece com um editor de código.",
  "Phone mockup shows a mockup of an iPhone.": "A simulação de telefone mostra um mockup de um iPhone.",
  "Window mockup shows a box that looks like an operating system window.": "A simulação de janela mostra uma caixa que se parece com uma janela do sistema operacional.",
  "Modal is used to show a dialog or a box when you click a button.": "O modal é usado para exibir uma caixa de diálogo ou uma caixa quando você clica em um botão.",
  "Navbar is used to show a navigation bar on the top of the page.": "A barra de navegação é usada para exibir uma barra de navegação no topo da página.",
  "Pagination is a group of buttons that allow the user to navigate between a set of related content.": "A paginação é um grupo de botões que permite ao usuário navegar entre um conjunto de conteúdo relacionado.",
  "Progress bar can be used to show the progress of a task or to show the passing of time.": "A barra de progresso pode ser usada para mostrar o progresso de uma tarefa ou a passagem do tempo.",
  "Radial progress can be used to show the progress of a task or to show the passing of time.": "O progresso radial pode ser usado para mostrar o progresso de uma tarefa ou a passagem do tempo.",
  "Radio buttons allow the user to select one option from a set.": "Os botões de opção permitem que o usuário selecione uma opção de um conjunto.",
  "Range slider is used to select a value by sliding a handle.": "O controle deslizante de intervalo é usado para selecionar um valor deslizando um controle.",
  "Rating is a set of radio buttons that allow the user to rate something.": "O rating é um conjunto de botões de opção que permite que o usuário avalie algo.",
  "Select is used to pick a value from a list of options.": "O select é usado para escolher um valor de uma lista de opções.",
  "Stack visually puts elements on top of each other.": "O stack coloca visualmente elementos um em cima do outro.",
  "Stat is used to show numbers and data in a box.": "O stat é usado para mostrar números e dados em uma caixa.",
  "Steps can be used to show a list of steps in a process.": "Os steps podem ser usados para mostrar uma lista de etapas em um processo.",
  "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.": "O swap permite alternar a visibilidade de dois elementos usando uma caixa de seleção ou um nome de classe.",
  "Tabs can be used to show a list of links in a tabbed format.": "As tabs podem ser usadas para mostrar uma lista de links em um formato de abas.",
  "Table can be used to show a list of data in a table format.": "A tabela pode ser usada para mostrar uma lista de dados em um formato tabular.",
  "Textarea allows users to enter text in multiple lines.": "O textarea permite que os usuários insiram texto em várias linhas.",
  "Toggle is a checkbox that is styled to look like a switch button.": "O toggle é uma caixa de seleção estilizada para se parecer com um botão interruptor.",
  "Tooltip can be used to show a message when hovering over an element.": "O tooltip pode ser usado para exibir uma mensagem ao passar o mouse sobre um elemento.",
  "Code mockup": "Mockup de código",
  "Phone mockup": "Mockup de telefone",
  "Window mockup": "Mockup de janela",
  "File Input": "Input de arquivo",
  "Text Input": "Input de texto",
  "Range slider": "Controle deslizante de intervalo",
  Tabs: Tabs$4,
  "All daisyUI components": "Todos os componentes daisyUI",
  "Class name": "Nome da classe",
  Type: Type$4,
  Search: Search$4,
  "daisyUI themes": "Temas daisyUI",
  "How to use daisyUI themes?": "Como usar temas daisyUI?",
  "daisyUI Theme Generator": "Gerador de temas daisyUI",
  "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them.": "Você pode adicionar seus temas personalizados ao arquivo <span class='badge badge-outline'>tailwind.config.js</span> na array <span class='badge badge-outline'>daisyui > themes</span>. Nesta página, você pode escolher os valores de cor necessários e ver como os componentes ficarão com eles.",
  "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)": "Você também pode definir cores opcionais para ter mais controle sobre os valores de cores (por exemplo: a cor de um botão quando está focado na cor do texto em um botão)",
  "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use.": "Confira a <a class='link font-bold' href='/docs/colors/'>página de cores</a> para ver todos os nomes de cores que você pode usar.",
  "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)": "Confira a <a class='link font-bold' href='/docs/themes/'>página de temas</a> para ver todas as variáveis CSS que você pode usar para personalizar a decisão de design (exemplo: border-radius, animações , etc)",
  Randomize: Randomize$4,
  Reset: Reset$4,
  Preview: Preview$4,
  "Layout and Typography": "Layout e Tipografia",
  "How to use layouts and typography in daisyUI": "Como usar layouts e tipografia no daisyUI",
  "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.": "Layout, dimensionamento, grades, espaçamento, etc. tudo será tratado pelas classes utilitárias do Tailwind CSS",
  "Read more": "Leia mais",
  Typography: Typography$4,
  "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.": "Você deve usar o <a href='https://github.com/tailwindlabs/tailwindcss-typography'>plugin de tipografia TailwindCSS</a> oficial.",
  "It handles everything and it's fully customizable.": "Ele lida com tudo e é totalmente personalizável.",
  "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.": "daisyUI adiciona algum estilo a @tailwindcss/typography para que use o mesmo tema que outros elementos.",
  "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js": "Certifique-se de exigir <span class='badge badge-outline'>daisyui</span> DEPOIS de <span class='badge badge-outline'>@tailwindcss/typography</span> em tailwind.config.js",
  "Here you can see how elements will look using <code>@tailwindcss/typography</code>.": "Aqui você pode ver como os elementos ficarão usando <code>@tailwindcss/typography</code>.",
  "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>": "Para usar um prefixo personalizado, <a class='link' href='/docs/config/#prefix'>adicione sua string de prefixo à configuração</a>",
  Component: Component$4,
  Modifier: Modifier$4,
  Responsive: Responsive$4,
  "Changes the style of a component": "Altera o estilo de um componente",
  "Supports responsive prefixes (sm:, lg:, …)": "Suporta prefixos responsivos (sm:, lg:, …)",
  "Make your theme": "Faça seu tema",
  "More examples": "Mais exemplos",
  "Support daisyUI's development": "Suporte ao desenvolvimento da daisyUI",
  "The most popular": "A mais popular",
  "component library": "biblioteca de componentes",
  "for Tailwind CSS": "para Tailwind CSS",
  "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>": "daisyUI adiciona nomes de classe de componentes ao Tailwind&nbsp;CSS<br /> para que você possa criar sites bonitos <span class='border-base-content/20 border-b-2'>mais rápido do que nunca.</span>",
  "don't re-invent<br/>the wheel<br/>every time": "não reinvente a roda novamente",
  "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.": "Em um projeto Tailwind CSS, você precisa escrever nomes de classes de utilitário para cada elemento. Milhares de nomes de classe apenas para estilizar os elementos mais básicos.",
  "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>": "em vez de escrever<br /> <span class='text-error'><span class='font-black'>100</span> nomes de classe</span>",
  "For every element, every page, every project,<br/>again and again": "Para cada elemento, cada página, cada projeto,<br/>novamente e novamente",
  "use <span class='text-success'><span class='font-black'>semantic</span><br />class names</span>": "use <span class='text-success'>nomes de classes <span class='font-black'>semânticas</span></span>",
  "It's descriptive, faster, cleaner and easier to maintain.": "É descritivo, mais rápido, mais limpo e mais fácil de manter.",
  Features: Features$4,
  Links: Links$4,
  Message: Message$4,
  "Cleaner HTML": "HTML Mais Limpo",
  Customizable: Customizable$4,
  Themeable: Themeable$4,
  "Pure CSS": "CSS puro",
  Dashboard: Dashboard$4,
  Notifications: Notifications$4,
  Messages: Messages$4,
  People: People$4,
  Products: Products$4,
  "Use Tailwind CSS but write fewer class names.": "Use Tailwind CSS, mas escreva menos nomes de classe.",
  "Pure CSS. <br />No JS dependency": "CSS puro. <br />Sem dependência de JS",
  "Works on all frameworks": "Funciona em todos os frameworks",
  "Design system": "Sistema de design",
  "Styling a simple button": "Estilizando um botão simples",
  Result: Result$4,
  "Take Tailwind CSS": "Leve o Tailwind CSS",
  "to the next level": "para o próximo nível",
  "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like": "daisyUI adiciona nomes de classes ao Tailwind CSS<br />para todos os componentes de IU comuns.<br />Nomes de classes como",
  "and many more.": "e muitos mais.",
  "This allows us to focus on important things<br />instead of styling basic elements for every project.": "Isso nos permite focar em coisas importantes<br />em vez de estilizar elementos básicos para cada projeto.",
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$4,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$4,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$4,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$4,
  "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.": "Escreva menos nomes de classe<br />Use nomes de classe de componentes<br />modifique-os usando as classes do Tailwind CSS.",
  Click: Click$4,
  "Tailwind only": "Apenas Tailwind",
  "Tailwind + daisyUI": "Tailwind + daisyUI",
  Save: Save$4,
  "Accept terms of use": "Aceitar termos de uso",
  "Submit to newsletter": "Enviar para newsletter",
  "Fewer class names": "Menos nomes de classe",
  "Faster development": "Desenvolvimento mais rápido",
  "Smaller file size": "Tamanho do arquivo menor",
  "With daisyUI, you write 80% fewer class names<br />And your HTML size will be about 70% smaller.": "Com o daisyUI, você escreve 80% menos nomes de classe<br />E o tamanho do seu HTML será cerca de 70% menor.",
  "CSS Class names": "Nomes de classe CSS",
  "fewer class names": "menos nomes de classe",
  "HTML size": "Tamanho do HTML",
  "smaller DOM size": "tamanho do DOM menor",
  "Highly customizable": "Altamente personalizável",
  "Powered by Tailwind&nbsp;CSS utility&nbsp;classes": "Alimentado por classes utilitárias do Tailwind&nbsp;CSS",
  "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes.": "daisyUI é construído em cima do Tailwind&nbsp;CSS, para que você possa personalizar tudo usando classes utilitárias.",
  "Pure CSS.": "CSS puro.",
  "Framework agnostic.": "Framework agnóstico.",
  "Works everywhere.": "Funciona em qualquer lugar.",
  "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file.": "daisyUI é um plugin para o Tailwind CSS. Funciona em todos os frameworks JS e não precisa de um arquivo bundle JS.",
  "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name.": "Instale o daisyUI como uma dependência de desenvolvimento e use os nomes de classe como qualquer outro nome de classe do Tailwind CSS.",
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$4,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$4,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$4,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$4,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$4,
  "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components.": "Seu site deve ser único. Crie um tema personalizado para você usando o gerador de temas daisyUI. As cores escolhidas serão aplicadas a todos os componentes daisyUI.",
  "Learn more about themes": "Saiba mais sobre temas",
  "utility classes": "classes utilitárias",
  "endless possibilities": "possibilidades infinitas",
  "Mix and match daisyUI class names to create unique web pages.": "Combine nomes de classe daisyUI para criar páginas da web únicas.",
  "daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS": "daisyUI é a biblioteca de componentes mais popular para o Tailwind CSS",
  "open-source projects using daisyUI": "projetos de código aberto usando o daisyUI",
  "Free and open-source": "Gratuito e open-source",
  "Built by the community": "Construído pela comunidade",
  "daisyUI welcomes contributions from developers around the world": "O daisyUI recebe contribuições de desenvolvedores de todo o mundo",
  "Sponsors and backers": "Patrocinadores e apoiadores",
  "Try daisyUI": "Experimente o daisyUI",
  "on your favorite framework": "no seu framework favorito",
  "See all examples": "Ver todos os exemplos",
  "Or play with daisyUI on": "Ou experimente o daisyUI em",
  "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.": "As bolhas de bate-papo são usadas para mostrar uma linha de conversa e todos os seus dados, incluindo a imagem do autor, nome do autor, horário, etc.",
  "File Input is a an input field for uploading files.": "Input de arquivo é um campo de entrada para upload de arquivos.",
  "Toast is a wrapper to stack elements, positioned on the corner of page.": "Toast é um invólucro para empilhar elementos, posicionado no canto da página.",
  "Admin panel": "Painel de administração",
  Updates: Updates$4,
  Stats: Stats$4,
  "Unlimited themes": "Temas ilimitados",
  "with zero effort": "sem esforço",
  "daisyUI adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values. Using daisyUI color names, you get Dark Mode and even more themes without adding a new class name.": "O daisyUI adiciona um conjunto de nomes de cores personalizáveis ao Tailwind CSS, e essas novas cores usam variáveis CSS para os valores. Usando os nomes de cores do daisyUI, você obtém o Modo Escuro e ainda mais temas sem adicionar um novo nome de classe.",
  "See all themes": "Ver todos os temas",
  "Semantic colors": "Cores semânticas",
  "Learn more about colors": "Saiba mais sobre cores",
  "Get started": "Comece agora",
  "daisyUI 3 is available now!": "daisyUI 3 está disponível agora!",
  "Become a sponsor": "Seja um patrocinador",
  "": ""
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Actions: Actions$4,
  Alert: Alert$4,
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$4,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$4,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$4,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$4,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$4,
  Artboard: Artboard$4,
  Avatar: Avatar$4,
  Badge: Badge$4,
  Benefits: Benefits$4,
  Breadcrumbs: Breadcrumbs$4,
  Button: Button$4,
  Card: Card$4,
  Carousel: Carousel$4,
  Checkbox: Checkbox$4,
  Click: Click$4,
  Code: Code$4,
  Collapse: Collapse$4,
  Colors: Colors$4,
  Component: Component$4,
  Config: Config$4,
  Countdown: Countdown$4,
  Customizable: Customizable$4,
  Dashboard: Dashboard$4,
  Divider: Divider$4,
  Drawer: Drawer$4,
  Dropdown: Dropdown$4,
  Features: Features$4,
  Footer: Footer$4,
  Hero: Hero$4,
  Indicator: Indicator$4,
  Install: Install$4,
  Introduction: Introduction$4,
  Kbd: Kbd$4,
  Layout: Layout$4,
  Link: Link$4,
  Links: Links$4,
  Mask: Mask$4,
  Menu: Menu$4,
  Message: Message$4,
  Messages: Messages$4,
  Mockup: Mockup$4,
  Modal: Modal$4,
  Modifier: Modifier$4,
  Navbar: Navbar$4,
  Navigation: Navigation$4,
  Next: Next$4,
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$4,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$4,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$4,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$4,
  Notifications: Notifications$4,
  Or: Or$4,
  Pagination: Pagination$4,
  People: People$4,
  Phone: Phone$4,
  Prev: Prev$4,
  Preview: Preview$4,
  Products: Products$4,
  Progress: Progress$4,
  Radio: Radio$4,
  Randomize: Randomize$4,
  Range: Range$4,
  Rating: Rating$4,
  Reset: Reset$4,
  Responsive: Responsive$4,
  Result: Result$4,
  Save: Save$4,
  Search: Search$4,
  Select: Select$4,
  Stack: Stack$4,
  Stat: Stat$4,
  Stats: Stats$4,
  Steps: Steps$4,
  Swap: Swap$4,
  Tab: Tab$4,
  Table: Table$4,
  Tabs: Tabs$4,
  Textarea: Textarea$4,
  Themeable: Themeable$4,
  Themes: Themes$4,
  Toast: Toast$4,
  Toggle: Toggle$4,
  Tooltip: Tooltip$4,
  Type: Type$4,
  Typography: Typography$4,
  Updates: Updates$4,
  Use: Use$4,
  Warning: Warning$4,
  Window: Window$4,
  __code: __code$4,
  __name: __name$4,
  __status: __status$4,
  changelog: changelog$4,
  components: components$4,
  config: config$4,
  contributing: contributing$4,
  default: pt,
  excluded: excluded$4,
  license: license$4,
  links: links$4,
  pages: pages$4,
  themes: themes$4,
  updated: updated$4
}, Symbol.toStringTag, { value: "Module" }));
const __name$3 = "Русский";
const __code$3 = "RU";
const __status$3 = "";
const components$3 = "Компонентов";
const themes$3 = "Тем";
const pages$3 = "Страницы";
const config$3 = "Конфигурация";
const links$3 = "Ссылки";
const changelog$3 = "Журнал изменений";
const license$3 = "Лицензия";
const contributing$3 = "Вклад в развитие";
const Install$3 = "Установка";
const Use$3 = "Использовать";
const Config$3 = "Конфигурация";
const Colors$3 = "Цвета";
const Themes$3 = "Темы";
const Actions$3 = "Действия";
const Button$3 = "Button";
const Dropdown$3 = "Dropdown";
const Modal$3 = "Modal";
const Swap$3 = "Swap";
const Alert$3 = "Alert";
const Avatar$3 = "Avatar";
const Badge$3 = "Badge";
const Card$3 = "Card";
const Carousel$3 = "Carousel";
const Collapse$3 = "Collapse";
const Countdown$3 = "Countdown";
const Kbd$3 = "Kbd";
const Progress$3 = "Progress";
const Stat$3 = "Stat";
const Table$3 = "Table";
const Tooltip$3 = "Tooltip";
const Checkbox$3 = "Checkbox";
const Radio$3 = "Radio";
const Range$3 = "Range";
const Rating$3 = "Rating";
const Select$3 = "Select";
const Textarea$3 = "Textarea";
const Toggle$3 = "Toggle";
const Layout$3 = "Разметка";
const Artboard$3 = "Artboard";
const Divider$3 = "Divider";
const Drawer$3 = "Drawer";
const Footer$3 = "Footer";
const Hero$3 = "Hero";
const Indicator$3 = "Indicator";
const Mask$3 = "Mask";
const Stack$3 = "Stack";
const Toast$3 = "Toast";
const Navigation$3 = "Навигация";
const Breadcrumbs$3 = "Breadcrumbs";
const Link$3 = "Link";
const Menu$3 = "Menu";
const Navbar$3 = "Navbar";
const Pagination$3 = "Pagination";
const Steps$3 = "Steps";
const Tab$3 = "Tab";
const Mockup$3 = "Макет";
const Code$3 = "Code";
const Phone$3 = "Phone";
const Window$3 = "Window";
const excluded$3 = "исключено";
const updated$3 = "обновлено";
const Prev$3 = "Предыдущий";
const Next$3 = "Далее";
const Warning$3 = "Внимание";
const Or$3 = "Или";
const Introduction$3 = "Введение";
const Benefits$3 = "Преимущества";
const Tabs$3 = "Tabs";
const Type$3 = "Тип";
const Search$3 = "Поиск";
const Randomize$3 = "Рандомизировать";
const Reset$3 = "Сбросить";
const Preview$3 = "Предпросмотр";
const Typography$3 = "Типография";
const Component$3 = "Компонента";
const Modifier$3 = "Модификатор";
const Responsive$3 = "Респонсивный";
const Features$3 = "функции";
const Links$3 = "Ссылки";
const Message$3 = "Сообщение";
const Customizable$3 = "Настройка";
const Themeable$3 = "Темы";
const Dashboard$3 = "Панель";
const Notifications$3 = "Уведомления";
const Messages$3 = "Сообщения";
const People$3 = "Люди";
const Products$3 = "Продукты";
const Result$3 = "Результат";
const No_more_ugly_HTML_part_1$3 = "Нет";
const No_more_ugly_HTML_part_2$3 = "больше";
const No_more_ugly_HTML_part_3$3 = "уродливого";
const No_more_ugly_HTML_part_4$3 = "HTML";
const Click$3 = "Click";
const Save$3 = "Сохранить";
const Apply_your_own_design_decisions_part_1$3 = "Применяйте";
const Apply_your_own_design_decisions_part_2$3 = "собственные";
const Apply_your_own_design_decisions_part_3$3 = "дизайнерские";
const Apply_your_own_design_decisions_part_4$3 = "решения";
const Apply_your_own_design_decisions_part_5$3 = "";
const Updates$3 = "Обновления";
const Stats$3 = "Статистика";
const ru = {
  __name: __name$3,
  __code: __code$3,
  __status: __status$3,
  "Tailwind CSS Components": "Компоненты Tailwind CSS",
  "cta-1": "Компоненты",
  "cta-1-mobile": "Компоненты",
  "cta-2": "Как пользоваться?",
  "components-btn": "Компоненты",
  "change-theme-btn": "Темы",
  "all-components-btn": "Все компоненты",
  components: components$3,
  themes: themes$3,
  "github-stars": "Звезд на Github",
  "npm-installs": "Скачиваний на NPM",
  "install-title": "Установите daisyUI",
  "install-desc": "Чистый CSS. Работает со всеми фреймворками. daisyUI можно использовать как плагин Tailwind CSS или как независимую библиотеку CSS.",
  "install-step-1": "Установите daisyUI как пакет Node",
  "install-step-2": "Добавьте daisyUI в Tailwind CSS в качестве плагина",
  "install-btn": "Руководство по установке",
  "footer-tagline": "Бесплатная библиотека компонентов <br /> Для утилитарных CSS фреймворков",
  pages: pages$3,
  "how-to-install": "Как установить",
  "how-to-use-components": "Как использовать компоненты",
  "how-to-customize": "Как настраивать",
  "how-to-use-themes": "Как использовать темы",
  "color-system": "Цветовая система",
  config: config$3,
  links: links$3,
  changelog: changelog$3,
  license: license$3,
  contributing: contributing$3,
  "available-on": "Доступно",
  "try-online": "Попробовать онлайн",
  "created-by": "Автор",
  Install: Install$3,
  Use: Use$3,
  "Customize components": "Настройка компонентов",
  Config: Config$3,
  Colors: Colors$3,
  Themes: Themes$3,
  "Theme Generator": "Генератор Тем",
  "Layout & Typography": "Разметка и Типография",
  Actions: Actions$3,
  Button: Button$3,
  Dropdown: Dropdown$3,
  Modal: Modal$3,
  Swap: Swap$3,
  "Data display": "Отображение данных",
  Alert: Alert$3,
  Avatar: Avatar$3,
  Badge: Badge$3,
  Card: Card$3,
  Carousel: Carousel$3,
  "Chat bubble": "Chat bubble",
  Collapse: Collapse$3,
  Countdown: Countdown$3,
  Kbd: Kbd$3,
  Progress: Progress$3,
  "Radial progress": "Radial progress",
  Stat: Stat$3,
  Table: Table$3,
  Tooltip: Tooltip$3,
  "Data input": "Ввод данных",
  Checkbox: Checkbox$3,
  "Text input": "Text input",
  Radio: Radio$3,
  Range: Range$3,
  Rating: Rating$3,
  Select: Select$3,
  Textarea: Textarea$3,
  Toggle: Toggle$3,
  Layout: Layout$3,
  Artboard: Artboard$3,
  "Button group": "Button group",
  Divider: Divider$3,
  Drawer: Drawer$3,
  Footer: Footer$3,
  Hero: Hero$3,
  Indicator: Indicator$3,
  "Input group": "Input group",
  Mask: Mask$3,
  Stack: Stack$3,
  Toast: Toast$3,
  Navigation: Navigation$3,
  Breadcrumbs: Breadcrumbs$3,
  "Bottom navigation": "Bottom navigation",
  Link: Link$3,
  Menu: Menu$3,
  Navbar: Navbar$3,
  Pagination: Pagination$3,
  Steps: Steps$3,
  Tab: Tab$3,
  Mockup: Mockup$3,
  Code: Code$3,
  Phone: Phone$3,
  Window: Window$3,
  excluded: excluded$3,
  "CodePen example page": "Примеры CodePen",
  "Tailwind Play example page": "Примеры Tailwind Play",
  "new": "новое",
  updated: updated$3,
  "Tailwind Plugin": "Как плагин Tailwind",
  "Use CDN": "Через CDN",
  "Install daisyUI as a Tailwind CSS plugin": "Установите daisyUI как плагин Tailwind CSS",
  "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> installed.": "Вам необходимо установить <a href='https://nodejs.org/en/download/'>Node.js</a> и <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a>.",
  "How to install daisyUI as a Tailwind CSS plugin?": "Как установить daisyUI в качестве плагина Tailwind CSS?",
  "Install daisyUI": "Установите daisyUI",
  "Then add daisyUI to your <code>tailwind.config.js</code> files": "Затем добавьте daisyUI в <code>tailwind.config.js</code>",
  "daisyUI example repositories": "Репозитории примеров daisyUI",
  "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.": "Посмотрите примеры настройки daisyUI и Tailwind CSS на различных фреймворках и инструментах сборки.",
  Prev: Prev$3,
  Next: Next$3,
  "Do you have a question?": "У вас есть вопрос?",
  "Do you see a bug?": "Вы видите ошибку?",
  "Do you like daisyUI?": "Вам нравится daisyUI?",
  "Edit this page on GitHub": "Редактировать эту страницу на GitHub",
  "ask the community": "задайте вопрос сообществу",
  "open an issue on GitHub": "откройте проблему на GitHub",
  "tweet about it!": "напишите об этом в твиттере",
  Warning: Warning$3,
  "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large.": "Файлы CDN не рекомендуется использовать в продакшене<br/>потому что вы не можете очистить неиспользуемые стили, и размер файла будет большим.",
  "You don't need to install anything.": "Вам не нужно ничего устанавливать.",
  "Just add one of these to the <code>head</code> tag of your HTML": "Просто добавьте один из них в тег <code>head</code> вашего HTML",
  Or: Or$3,
  "Add component classes to your HTML": "Добавьте классы компонентов в ваш HTML",
  "How to use daisyUI classes to style your page?": "Как использовать классы daisyUI для стилизации страницы?",
  "Once you <a href='/docs/install/'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc.": "Как только вы <a href='/docs/install/'>установили daisyUI</a>, вы уже можете использовать такие классы компонентов, как <code>btn</code>, <code>card</code>, и др.",
  "So instead of making a button using only utility classes": "Поэтому вместо того, чтобы создавать кнопку, используя только классы Tailwind CSS",
  "You can just use a component class like this": "Вы можете просто использовать класс компонента следующим образом",
  "Then you can modify the component with daisyUI additional utility classes": "Затем вы можете модифицировать компонент с помощью дополнительных классов",
  "Or you can modify the component with Tailwind CSS utility classes": "Или вы можете изменить компонент с помощью старых добрых классов Tailwind CSS",
  "Customize daisyUI components": "Настройка компонентов daisyUI",
  "How to customize daisyUI?": "Как настроить daisyUI",
  "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.": "Компоненты daisyUI поставляются с множеством вариантов, необходимых для дизайн систем, и обычно вам не придется ничего настраивать.",
  "But you can still customize components in many ways.": "Но вы по-прежнему можете настраивать компоненты различными способами.",
  "Let's say, you want to customize this button:": "Допустим, вы хотите настроить эту кнопку:",
  "You can use daisyUI utility classes:": "Вы можете использовать классы daisyUI:",
  "You can use Tailwind's utility classes:": "Вы можете использовать классы Tailwind:",
  "You can customize components on your CSS file, using Tailwind's @apply directive:": "Вы можете настроить компоненты в вашем CSS-файле, используя директиву Tailwind @apply.",
  "You can also:": "Вы также можете:",
  "Add your own theme.": "добавьте свою собственную тему",
  "Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>.": "отказаться от дизайнерских решений daisyUI <a href='/docs/config/'>и использовать только нестилизованную (скелетную) версию daisyUI</a>.",
  "How to change the default configuration of daisyUI?": "Как изменить конфигурацию daisyUI по умолчанию?",
  "daisyUI can be configured from your <code>tailwind.config.js</code> file.": "daisyUI может быть настроен из <code>tailwind.config.js</code> <br>",
  "Default config": "Конфигурация по умолчанию",
  "Config values explained": "Параметры конфигурации",
  "If it's true, components will have colors and style so you won't need to design anything.": "Если стоит true, то компоненты будут иметь цвета и стиль, так что вам не нужно будет ничего дизайнить.",
  "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.": "Если стоит false, компоненты не будут иметь цвета и визуального стиля, так что вы можете создать свой собственный стиль на базовом скелете.",
  "If it's true, all themes will be included.": "Если стоит true, то все темы будут включены.",
  "If it's false, only light and dark themes will be available.": "Если стоит false, то будут доступны только светлые и темные темы.",
  "If it's an array, only themes in the array will be included and the first theme will be the default theme.": "Если это массив, то будут включены только темы из массива, а первая тема будет темой по умолчанию.",
  "Read more about <a href='/docs/themes/'>themes</a>": "Подробнее о <a href='/docs/themes/'>темах</a>",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.": "Если стоит true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>несколько базовых стилей</a> будет добавлено",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.": "Если стоит true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>респонсивные и утилитарные классы</a> будут добавлены",
  "If it's true, daisyUI shows logs in the terminal while CSS is building.": "Если стоит true, daisyUI будет показывать журнал консоли в терминале во время создания CSS",
  "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag.": "Если стоит true, ваша тема будет справа налево. Вам нужно добавить <code>dir='rtl'</code> в тег body.",
  "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically.": "Если вы используете daisyUI с опцией RTL, я рекомендую использовать <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> плагин для автоматического перекидывания всех ваших утилит Tailwind.",
  "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.": "Позволяет выбрать другую тему для автоматического темного режима системы. По умолчанию, <code>dark</code> (или пользовательская тема под названием <code>dark</code>) будет стандартной темой, если тема не указана и пользователь использует темный режим в своей системе. С помощью этой конфигурации можно установить другую тему в качестве темы по умолчанию для темного режима.",
  "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).": "Добавляет префикс к имени класса для всех классов daisyUI (включая классы компонентов, классы модификаторов и классы респонсивности).",
  "For example: <code>btn</code> will become <code>prefix-btn</code>.": "Например: <code>btn</code> станет <code>prefix-btn</code>.",
  "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.": "Если вы используете вторую библиотеку CSS, которая имеет похожие имена классов, вы можете использовать эту конфигурацию, чтобы избежать конфликтов.",
  "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.": "Утилитарные классы, например, названия цветов (типа <code>bg-primary</code>) или border-radius (типа <code>rounded-box</code>) не будут затронуты этой конфигурацией, поскольку они добавляются как расширения к классам CSS Tailwind.",
  "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.": "Если вы используете daisyUI <code>prefix</code> вариант (типа <code>daisy-</code>) или Tailwind CSS <code>prefix</code> вариант (например <code>tw-</code>) вместе, имена классов будут иметь такой префикс: <code>tw-daisy-btn</code>.",
  "How to use daisyUI colors?": "Как использовать цвета daisyUI?",
  Introduction: Introduction$3,
  "daisyUI is fully themeable and colorable,": "в daisyUI можно создать свою тему,",
  "So instead of using constant color utility classes like:": "Поэтому вместо того, чтобы использовать классы tailwind, например:",
  "It's suggested to use semantic color utility classes like:": "Рекомендуется использовать семантические классы, такие как:",
  "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.": "Имя каждого цвета содержит переменные CSS, и каждая тема daisyUI применяет значения цвета к утилитарным классам при ее применении.",
  Benefits: Benefits$3,
  "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces.": "Семантические названия цветов имеют больше смысла, потому что при разработке интерфейсов мы не просто используем произвольные цвета. Мы определяем конкретную палитру цветов с такими названиями, как <code>primary</code>, <code>secondary</code>, и т.д., и мы используем только эти конкретные цвета в наших интерфейсах.",
  "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.": "Кроме того, использование семантических имен цветов упрощает создание тем. Вам не придется определять цвета темного режима для каждого элемента, и вы не будете ограничены только светлыми/темными темами. Вы можете иметь несколько тем, и каждая тема - это всего лишь несколько строк переменных CSS.",
  "List of all daisyUI color names": "Список всех названий цветов daisyUI",
  "You can use these color names in your theme or in utility classes.": "Вы можете использовать эти названия цветов в своей теме или в классах.",
  "Color name + description": "Название цвета + описание",
  "Required or optional for themes": "Обязательные или необязательные для тем",
  "Example use": "Пример использования",
  "How to use": "Как использовать",
  "Some daisyUI components come with modifier class names and that modifier class name will apply a color.": "Некоторые компоненты daisyUI поставляются с именами классов модификаторов, и имя класса модификатора будет применять цвет.",
  "For example": "Например",
  "You can also use color names in utility classes just like Tailwind's original color names.": "Вы также можете использовать имена цветов в классах, как и оригинальные имена цветов Tailwind.",
  "These are utility classes that can be used with a color name:": "Это вспомогательные классы, которые можно использовать с именем цвета:",
  "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc.": "Таким образом, вы можете использовать <code>bg-primary</code>, <code>border-secondary</code>, и др.",
  "daisyUI comes with a number of themes, which you can use with no extra effort.": "daisyUI поставляется с несколькими темами, которые вы можете использовать без дополнительных усилий.",
  "Each theme defines a set of colors which will be used on all daisyUI elements.": "Каждая тема определяет набор цветов, которые будут использоваться во всех элементах daisyUI.",
  "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:": "Чтобы использовать тему, добавьте ее имя в <span class=badge>tailwind.config.js</span> и активируйте ее, добавив атрибут <span class=badge>data-theme</span> к тегу <span class=badge>HTML</span>:",
  "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage.": "Предлагаем использовать <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, чтобы вы могли переключать темы и сохранять выбранную тему в локальном хранилище.",
  "List of themes": "Список тем",
  "Try them:": "Попробуйте их:",
  "The default theme is <code>light</code> (or <code>dark</code> for dark mode)": "Тема по умолчанию <code>light</code> (или <code>dark</code> для темного режима)",
  "but you can <a href='https://daisyui.com/docs/config/'>change the default theme from tailwind.config.js</a>": "но вы можете <a href='https://daisyui.com/docs/config/'> изменить тему по умолчанию в tailwind.config.js</a>",
  "How to remove unused themes?": "Как удалить неиспользуемые темы?",
  "You can only include the themes you want in your project.": "Вы можете включить в свой проект только те темы, которые вам нужны.",
  "This will reduce the size of your CSS file.": "Это уменьшит размер вашего CSS-файла.",
  "In the below example": "В приведенном ниже примере",
  "<code>cupcake</code> will be the default theme for light mode": "<code>cupcake</code> будет темой по умолчанию для светлого режима",
  "<code>dark</code> will be the default theme for dark mode": "<code>dark</code> будет темой по умолчанию для темного режима",
  "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>": "<code>cmyk</code> может быть применен к любому HTML-тегу с атрибутом <code>data-theme='cmyk'</code>",
  "How to disable all themes?": "Как отключить все темы?",
  "If you only want the default light and dark themes, set <code>themes</code> config to false.": "Если вы хотите использовать только темы по умолчанию, установите значение <code>themes</code> в конфигурации в false.",
  "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array.": "Если вы не хотите включать никакие темы и отключить все цвета, установите значение <code>themes</code> в конфигурации в пустой массив.",
  "How to use a theme only for a section of a page?": "Как использовать тему только для раздела страницы?",
  "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme.": "Добавьте <code>data-theme='THEME_NAME'</code> к любому элементу, и все внутри будет иметь вашу тему.",
  "You can nest themes and there is no limit!": "Вы можете размещать темы в темы, здесь нет никаких ограничений.",
  "You can force a section of your HTML to only use a specific theme.": "Вы можете заставить раздел HTML использовать только определенную тему.",
  "How to add a new custom theme?": "Как добавить новую пользовательскую тему?",
  "You can add a new theme from <code>tailwind.config.js</code> file.": "Вы можете добавить новую тему в <code>tailwind.config.js</code>",
  "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes.": "В приведенном ниже примере я добавил новую тему под названием <code>mytheme</code>, а также включил темы <code>dark</code> и <code>cupcake</code>",
  "The first theme (<code>mytheme</code>) will be the default theme.": "Первая тема (<code>mytheme</code>) будет темой по умолчанию.",
  "<code>dark</code> theme will be the default theme for dark mode.": "<code>dark</code> тема будет темой по умолчанию для темного режима.",
  "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button).": "В приведенном ниже примере у меня есть необходимые цвета. Все остальные цвета будут сгенерированы автоматически (например, цвет кнопки при фокусировке на ней или цвет текста на кнопке <code>primary</code>).",
  "CSS variables in daisyUI themes": "Переменные CSS в темах daisyUI",
  "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:": "Существует несколько дополнительных переменных CSS, которые можно использовать в темах daisyUI для настройки дизайнерских решений для каждой темы:",
  "You can also add <a href='/docs/colors/' class='link'>optional color names</a> to have full control over all colors.": "Вы также можете добавить <a href='/docs/colors/' class='link'>необязательные названия цветов</a>, чтобы иметь полный контроль над всеми цветами.",
  "Custom CSS for a daisyUI theme": "Пользовательский CSS для темы daisyUI",
  "You can apply custom style to a daisyUI themes using CSS:": "Вы можете применить пользовательский стиль к темам daisyUI с помощью CSS:",
  "How to customize an existing theme?": "Как настроить существующую тему?",
  "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.": "В tailwind.config.js, вы можете использовать существующую тему daisyUI и переопределить некоторые цвета.",
  "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:": "Пример:",
  "Contribute to translation": "Внести вклад в перевод",
  "Alert informs users about important events.": "Alert информирует пользователей о важных событиях.",
  "Artboard provides fixed size container to display a demo content on mobile size.": "Artboard предоставляет контейнер фиксированного размера для отображения демонстрационного контента на мобильных устройствах.",
  "Avatars are used to show a thumbnail representation of an individual or business in the interface.": "Avatar используются для отображения в интерфейсе уменьшенного изображения человека или предприятия.",
  "Badges are used to inform the user of the status of specific data.": "Badge используются для информирования пользователя о состоянии определенных данных.",
  "Bottom navigation bar allows navigation between primary screens.": "Bottom navigation bar позволяет переходить между основными экранами.",
  "Breadcrumbs helps users to navigate through the website.": "Breadcrumb помогает пользователям ориентироваться на сайте.",
  "Button group shows buttons next to each other.": "Button group показывает кнопки рядом друг с другом.",
  "Buttons allow the user to take actions or make choices.": "Button позволяют пользователю предпринимать действия или делать выбор.",
  "Cards are used to group and display content in a way that is easily readable.": "Card используются для группировки и отображения содержимого в легко читаемом виде.",
  "Carousel show images or content in a scrollable area.": "Carousel используется для показа изображений или содержимого в прокручиваемой области.",
  "Checkboxes are used to select or deselect a value.": "Checkboxes используются для выбора или отмены выбора значения.",
  "Collapse is used for showing and hiding content.": "Collapse используется для показа и скрытия содержимого.",
  "Countdown gives you a transition effect of changing numbers.": "Countdown дает эффект перехода от одной цифры к другой.",
  "Divider will be used to separate content vertically or horizontally.": "Divider будет использоваться для разделения содержимого по вертикали или горизонтали.",
  "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.": "Drawer - это сетчатый макет, который может показывать/скрывать боковую панель в левой или правой части страницы.",
  "Dropdown can open a menu or any other element when the button is clicked.": "Dropdown может открыть меню или любой другой элемент при нажатии на кнопку.",
  "Footer can contain logo, copyright notice, and links to other pages.": "Footer может содержать логотип, уведомление об авторских правах и ссылки на другие страницы.",
  "Hero is a component for displaying a large box or image with a title and description.": "Hero - это компонент для отображения большого поля или изображения с заголовком и описанием.",
  "Indicators are used to place an element on the corner of another element.": "Indicators используются для размещения элемента на углу другого элемента.",
  "Input group puts an input next to a text or a button.": "Input group помещает элементы ввода рядом с текстом или кнопкой.",
  "Text Input is a simple input field.": "Text Input - это простое поле ввода.",
  "Kbd is used to display keyboard shortcuts.": "Kbd - используется для отображения сочетаний клавиш.",
  "Link adds the missing underline style to links.": "Link - добавляет недостающий стиль подчеркивания к ссылкам.",
  "Mask crops the content of the element to common shapes.": "Mask - обрезает содержимое элемента до общих форм.",
  "Menu is used to display a list of links vertically or horizontally.": "Menu используется для вертикального или горизонтального отображения списка ссылок.",
  "Code mockup is used to show a block of code in a box that looks like a code editor.": "Code используется для отображения блока кода в окне, которое выглядит как редактор кода.",
  "Phone mockup shows a mockup of an iPhone.": "Phone показывает макет iPhone.",
  "Window mockup shows a box that looks like an operating system window.": "Window показывает окно, похожее на окно операционной системы Window ",
  "Modal is used to show a dialog or a box when you click a button.": "Modal используется для отображения диалога или окна при нажатии на кнопку.",
  "Navbar is used to show a navigation bar on the top of the page.": "Navbar используется для отображения навигационной панели в верхней части страницы.",
  "Pagination is a group of buttons that allow the user to navigate between a set of related content.": "Pagination - это группа кнопок, которые позволяют пользователю перемещаться между набором связанного контента.",
  "Progress bar can be used to show the progress of a task or to show the passing of time.": "Progress можно использовать для отображения хода выполнения задачи или для отображения хода времени.",
  "Radial progress can be used to show the progress of a task or to show the passing of time.": "Radial progress можно использовать для отображения хода выполнения задачи или для отображения хода времени.",
  "Radio buttons allow the user to select one option from a set.": "Radio button позволяют пользователю выбрать один вариант из множества.",
  "Range slider is used to select a value by sliding a handle.": "Range slider используется для выбора значения путем перемещения ручки.",
  "Rating is a set of radio buttons that allow the user to rate something.": "Rating - это набор радиокнопок, которые позволяют пользователю оценить что-либо.",
  "Select is used to pick a value from a list of options.": "Select используется для выбора значения из списка опций.",
  "Stack visually puts elements on top of each other.": "Stack визуально накладывает элементы друг на друга.",
  "Stat is used to show numbers and data in a box.": "Stat используется для отображения чисел и данных в поле",
  "Steps can be used to show a list of steps in a process.": "Step можно использовать для отображения списка этапов процесса.",
  "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.": "Swap позволяет переключать видимость двух элементов с помощью флажка или имени класса.",
  "Tabs can be used to show a list of links in a tabbed format.": "Tab можно использовать для отображения списка ссылок в формате вкладок.",
  "Table can be used to show a list of data in a table format.": "Table можно использовать для отображения списка данных в формате таблицы.",
  "Textarea allows users to enter text in multiple lines.": "Textarea позволяет пользователям вводить текст в несколько строк.",
  "Toggle is a checkbox that is styled to look like a switch button.": "Toggle это флажок, который стилизован под кнопку переключения.",
  "Tooltip can be used to show a message when hovering over an element.": "Tooltip можно использовать для отображения сообщения при наведении курсора на элемент.",
  "Code mockup": "Code mockup",
  "Phone mockup": "Phone mockup",
  "Window mockup": "Window mockup",
  "File Input": "File Input",
  "Text Input": "Ввод текста",
  "Range slider": "Range slider",
  Tabs: Tabs$3,
  "All daisyUI components": "Все компоненты daisyUI",
  "Class name": "Класс",
  Type: Type$3,
  Search: Search$3,
  "daisyUI themes": "Темы daisyUI",
  "How to use daisyUI themes?": "Как использовать темы daisyUI?",
  "daisyUI Theme Generator": "Генератор тем daisyUI",
  "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them.": "Вы можете добавить свои пользовательские темы в <span class='badge badge-outline'>tailwind.config.js</span>. На этой странице вы можете выбрать необходимые значения цветов и посмотреть, как будут выглядеть компоненты с ними.",
  "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)": "Вы также можете определить дополнительные цвета, чтобы иметь больше контроля над значениями цвета (например: цвет кнопки, когда она сфокусирована, цвет текста на кнопке).",
  "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use.": "Проверьте <a class='link font-bold' href='/docs/colors/'>страницу цветов</a>, чтобы увидеть все названия цветов, которые вы можете использовать.",
  "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)": "Проверьте <a class='link font-bold' href='/docs/themes/'>страницу тем</a>, чтобы увидеть все переменные CSS, которые можно использовать для настройки дизайнерского решения (пример: border-radius, анимация и т.д.).",
  Randomize: Randomize$3,
  Reset: Reset$3,
  Preview: Preview$3,
  "Layout and Typography": "Разметка и Типография",
  "How to use layouts and typography in daisyUI": "Как использовать макеты и типографию в daisyUI",
  "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.": "Макет, размер, сетки, интервалы и т.д. - все это будет обработано с помощью классов Tailwind CSS.",
  "Read more": "Подробнее",
  Typography: Typography$3,
  "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.": "Вам следует использовать официальный <a href='https://github.com/tailwindlabs/tailwindcss-typography'>плагин для типографии Tailwind CSS</a>.",
  "It handles everything and it's fully customizable.": "Он обрабатывает все и полностью настраивается.",
  "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.": "daisyUI добавляет некоторый стиль к @tailwindcss/typography, чтобы он использовал ту же тему, что и другие элементы.",
  "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js": "Убедитесь, что <span class='badge badge-outline'>daisyui</span> ПОСЛЕ <span class='badge badge-outline'>@tailwindcss/typography</span> в tailwind.config.js",
  "Here you can see how elements will look using <code>@tailwindcss/typography</code>.": "Здесь вы можете увидеть, как будут выглядеть элементы с использованием <code>@tailwindcss/typography</code>.",
  "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>": "Чтобы использовать пользовательский префикс, <a class='link' href='/docs/config/#prefix'>добавьте вашу префиксную строку в конфигурацию</a>",
  Component: Component$3,
  Modifier: Modifier$3,
  Responsive: Responsive$3,
  "Changes the style of a component": "Изменяет стиль компонента",
  "Supports responsive prefixes (sm:, lg:, …)": "Поддерживает префиксы (sm:, lg:, ...)",
  "Make your theme": "Создайте свою тему",
  "More examples": "Больше примеров",
  "Support daisyUI's development": "Поддержите разработку daisyUI",
  "The most popular": "Самая популярная",
  "component library": "библиотека компонентов",
  "for Tailwind CSS": "для Tailwind CSS",
  "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>": "daisyUI добавляет имена классов компонентов в Tailwind&nbsp;CSS<br /> чтобы вы могли создавать красивые веб-сайты <span class='border-base-content/20 border-b-2'>быстрее, чем когда-либо.</span>",
  "don't re-invent<br/>the wheel<br/>every time": "не изобретайте<br/>колесо<br/>каждый раз",
  "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.": "В проекте Tailwind CSS вам нужно писать имена классов для каждого элемента. Тысячи имен классов только для стилизации самых базовых элементов.",
  "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>": "вместо того, чтобы писать<br /> <span class='text-error'><span class='font-black'>100</span> имен классов</span>",
  "For every element, every page, every project,<br/>again and again": "Для каждого элемента, каждой страницы, каждого проекта,<br/>снова и снова",
  "use <span class='text-success'><span class='font-black'>semantic</span><br />class names</span>": "используйте <span class='text-success'><span class='font-black'>семантические</span><br />имена классов</span>",
  "It's descriptive, faster, cleaner and easier to maintain.": "Это описательно, быстро, чисто и легко поддерживать.",
  Features: Features$3,
  Links: Links$3,
  Message: Message$3,
  "Cleaner HTML": "Очистка HTML",
  Customizable: Customizable$3,
  Themeable: Themeable$3,
  "Pure CSS": "Чистый CSS",
  Dashboard: Dashboard$3,
  Notifications: Notifications$3,
  Messages: Messages$3,
  People: People$3,
  Products: Products$3,
  "Use Tailwind CSS but write fewer class names.": "Используйте Tailwind CSS, но пишите меньше имен классов.",
  "Pure CSS. <br />No JS dependency": "Чистый CSS. <br />Нет зависимости от JS",
  "Works on all frameworks": "Работает на всех фреймворках",
  "Design system": "Система дизайна",
  "Styling a simple button": "Стилизация простой кнопки",
  Result: Result$3,
  "Take Tailwind CSS": "Возьмите Tailwind CSS",
  "to the next level": "на следующий уровень",
  "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like": "daisyUI добавляет имена классов в Tailwind CSS<br />для всех общих компонентов пользовательского интерфейса.<br />Имена классов, такие как",
  "and many more.": "и многие другие.",
  "This allows us to focus on important things<br />instead of styling basic elements for every project.": "Это позволяет нам сосредоточиться на важных вещах<br />вместо того, чтобы стилизовать базовые элементы для каждого проекта.",
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$3,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$3,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$3,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$3,
  "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.": "Пишите меньше имен классов<br />Используйте имена классов компонентов<br />Изменяйте их, используя утилиты Tailwind CSS.",
  Click: Click$3,
  "Tailwind only": "Только Tailwind",
  "Tailwind + daisyUI": "Tailwind + daisyUI",
  Save: Save$3,
  "Accept terms of use": "Принять условия использования",
  "Submit to newsletter": "Подписаться на рассылку",
  "Fewer class names": "Меньше классов",
  "Faster development": "Быстрая разработка",
  "Smaller file size": "Меньший размер файла",
  "With daisyUI, you write 80% fewer class names<br />And your HTML size will be about 70% smaller.": "С daisyUI вы пишите на 80% меньше имен классов<br />И ваш HTML будет весить примерно на 70% меньше.",
  "CSS Class names": "Имена CSS классов",
  "fewer class names": "меньше имен классов",
  "HTML size": "HTML размер",
  "smaller DOM size": "меньший размер DOM",
  "Highly customizable": "Высокая настраиваемость",
  "Powered by Tailwind&nbsp;CSS utility&nbsp;classes": "Работает на Tailwind&nbsp;CSS утилитах",
  "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes.": "daisyUI создан на основе Tailwind&nbsp;CSS<br />так что вы можете настроить все<br />используя утилиты.",
  "Pure CSS.": "Чистый CSS.",
  "Framework agnostic.": "Независимый от фреймворка.",
  "Works everywhere.": "Работает везде.",
  "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file.": "daisyUI - это плагин для Tailwind CSS. Он работает на всех фреймворках JS и не требует файл пакетов JS.",
  "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name.": "Установите daisyUI как зависимость разработки и используйте имена классов так же, как любое другое имя класса Tailwind CSS.",
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$3,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$3,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$3,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$3,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$3,
  "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components.": "Ваш веб-сайт должен быть уникальным. Создайте для себя пользовательскую тему с помощью генератора тем daisyUI. Выбранные вами цвета будут применены ко всем компонентам daisyUI.",
  "Learn more about themes": "Узнать больше о темах",
  "utility classes": "утилитарных классов",
  "endless possibilities": "бесконечные возможности",
  "Mix and match daisyUI class names to create unique web pages.": "Смешивайте и сочетайте имена классов daisyUI, чтобы создавать уникальные веб-страницы.",
  "daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS": "daisyUI - самая популярная<br />библиотека компонентов для Tailwind&nbsp;CSS",
  "open-source projects using daisyUI": "проекты с открытым исходным кодом, использующие daisyUI",
  "Free and open-source": "Свободный и открытый исходный код",
  "Built by the community": "Построено сообществом",
  "daisyUI welcomes contributions from developers around the world": "daisyUI приветствует вклад от разработчиков со всего мира",
  "Sponsors and backers": "Спонсоры и поддерживающие",
  "Try daisyUI": "Попробуйте daisyUI",
  "on your favorite framework": "на вашем любимом фреймворке",
  "See all examples": "Смотреть все примеры",
  "Or play with daisyUI on": "Или играйте с daisyUI на",
  "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.": "Chat bubbles используются для отображения одного сообщения и всех его данных, включая изображение автора, имя автора, время и т.д.",
  "File Input is a an input field for uploading files.": "File Input - это поле ввода для загрузки файлов.",
  "Toast is a wrapper to stack elements, positioned on the corner of page.": "Toast - это обертка для элементов, расположенных в углу страницы.",
  "Admin panel": "Панель администратора",
  Updates: Updates$3,
  Stats: Stats$3,
  "Unlimited themes": "Неограниченное количество тем",
  "with zero effort": "без особых усилий",
  "daisyUI adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values. Using daisyUI color names, you get Dark Mode and even more themes without adding a new class name.": "daisyUI добавляет набор настраиваемых имен цветов в Tailwind CSS, и эти новые цвета используют переменные CSS для значений. Используя имена цветов daisyUI, вы получаете Dark Mode и еще больше тем, не добавляя новое имя класса.",
  "See all themes": "Смотреть все темы",
  "Semantic colors": "Семантические цвета",
  "Learn more about colors": "Узнать больше о цветах",
  "Get started": "Начать сейчас",
  "daisyUI 3 is available now!": "daisyUI 3 доступен сейчас!",
  "Become a sponsor": "Стать спонсором",
  "": ""
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Actions: Actions$3,
  Alert: Alert$3,
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$3,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$3,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$3,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$3,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$3,
  Artboard: Artboard$3,
  Avatar: Avatar$3,
  Badge: Badge$3,
  Benefits: Benefits$3,
  Breadcrumbs: Breadcrumbs$3,
  Button: Button$3,
  Card: Card$3,
  Carousel: Carousel$3,
  Checkbox: Checkbox$3,
  Click: Click$3,
  Code: Code$3,
  Collapse: Collapse$3,
  Colors: Colors$3,
  Component: Component$3,
  Config: Config$3,
  Countdown: Countdown$3,
  Customizable: Customizable$3,
  Dashboard: Dashboard$3,
  Divider: Divider$3,
  Drawer: Drawer$3,
  Dropdown: Dropdown$3,
  Features: Features$3,
  Footer: Footer$3,
  Hero: Hero$3,
  Indicator: Indicator$3,
  Install: Install$3,
  Introduction: Introduction$3,
  Kbd: Kbd$3,
  Layout: Layout$3,
  Link: Link$3,
  Links: Links$3,
  Mask: Mask$3,
  Menu: Menu$3,
  Message: Message$3,
  Messages: Messages$3,
  Mockup: Mockup$3,
  Modal: Modal$3,
  Modifier: Modifier$3,
  Navbar: Navbar$3,
  Navigation: Navigation$3,
  Next: Next$3,
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$3,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$3,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$3,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$3,
  Notifications: Notifications$3,
  Or: Or$3,
  Pagination: Pagination$3,
  People: People$3,
  Phone: Phone$3,
  Prev: Prev$3,
  Preview: Preview$3,
  Products: Products$3,
  Progress: Progress$3,
  Radio: Radio$3,
  Randomize: Randomize$3,
  Range: Range$3,
  Rating: Rating$3,
  Reset: Reset$3,
  Responsive: Responsive$3,
  Result: Result$3,
  Save: Save$3,
  Search: Search$3,
  Select: Select$3,
  Stack: Stack$3,
  Stat: Stat$3,
  Stats: Stats$3,
  Steps: Steps$3,
  Swap: Swap$3,
  Tab: Tab$3,
  Table: Table$3,
  Tabs: Tabs$3,
  Textarea: Textarea$3,
  Themeable: Themeable$3,
  Themes: Themes$3,
  Toast: Toast$3,
  Toggle: Toggle$3,
  Tooltip: Tooltip$3,
  Type: Type$3,
  Typography: Typography$3,
  Updates: Updates$3,
  Use: Use$3,
  Warning: Warning$3,
  Window: Window$3,
  __code: __code$3,
  __name: __name$3,
  __status: __status$3,
  changelog: changelog$3,
  components: components$3,
  config: config$3,
  contributing: contributing$3,
  default: ru,
  excluded: excluded$3,
  license: license$3,
  links: links$3,
  pages: pages$3,
  themes: themes$3,
  updated: updated$3
}, Symbol.toStringTag, { value: "Module" }));
const __name$2 = "Українська";
const __code$2 = "UK";
const __status$2 = "";
const components$2 = "Компоненти";
const themes$2 = "Теми";
const pages$2 = "сторінки";
const config$2 = "Налаштування";
const links$2 = "Посилання";
const changelog$2 = "Changelog";
const license$2 = "Ліцензія";
const contributing$2 = "Внесок";
const Install$2 = "Install";
const Use$2 = "Use";
const Config$2 = "Config";
const Colors$2 = "Colors";
const Themes$2 = "Themes";
const Actions$2 = "Actions";
const Button$2 = "Button";
const Dropdown$2 = "Dropdown";
const Modal$2 = "Modal";
const Swap$2 = "Swap";
const Alert$2 = "Alert";
const Avatar$2 = "Avatar";
const Badge$2 = "Badge";
const Card$2 = "Card";
const Carousel$2 = "Carousel";
const Collapse$2 = "Collapse";
const Countdown$2 = "Countdown";
const Kbd$2 = "Kbd";
const Progress$2 = "Progress";
const Stat$2 = "Stat";
const Table$2 = "Table";
const Tooltip$2 = "Tooltip";
const Checkbox$2 = "Checkbox";
const Radio$2 = "Radio";
const Range$2 = "Range";
const Rating$2 = "Rating";
const Select$2 = "Select";
const Textarea$2 = "Textarea";
const Toggle$2 = "Toggle";
const Layout$2 = "Layout";
const Artboard$2 = "Artboard";
const Divider$2 = "Divider";
const Drawer$2 = "Drawer";
const Footer$2 = "Footer";
const Hero$2 = "Hero";
const Indicator$2 = "Indicator";
const Mask$2 = "Mask";
const Stack$2 = "Stack";
const Toast$2 = "Toast";
const Navigation$2 = "Navigation";
const Breadcrumbs$2 = "Breadcrumbs";
const Link$2 = "Link";
const Menu$2 = "Menu";
const Navbar$2 = "Navbar";
const Pagination$2 = "Pagination";
const Steps$2 = "Steps";
const Tab$2 = "Tab";
const Mockup$2 = "Mockup";
const Code$2 = "Code";
const Phone$2 = "Phone";
const Window$2 = "Window";
const excluded$2 = "excluded";
const updated$2 = "updated";
const Prev$2 = "Prev";
const Next$2 = "Next";
const Warning$2 = "Warning";
const Or$2 = "Or";
const Introduction$2 = "Introduction";
const Benefits$2 = "Benefits";
const Tabs$2 = "Tabs";
const Type$2 = "Type";
const Search$2 = "Search";
const Randomize$2 = "Randomize";
const Reset$2 = "Reset";
const Preview$2 = "Preview";
const Typography$2 = "Typography";
const Component$2 = "Component";
const Modifier$2 = "Modifier";
const Responsive$2 = "Responsive";
const Features$2 = "Features";
const Links$2 = "Links";
const Message$2 = "Message";
const Customizable$2 = "Customizable";
const Themeable$2 = "Themeable";
const Dashboard$2 = "Dashboard";
const Notifications$2 = "Notifications";
const Messages$2 = "Messages";
const People$2 = "People";
const Products$2 = "Products";
const Result$2 = "Result";
const No_more_ugly_HTML_part_1$2 = "Більше";
const No_more_ugly_HTML_part_2$2 = "жодного";
const No_more_ugly_HTML_part_3$2 = "потворного";
const No_more_ugly_HTML_part_4$2 = "HTML";
const Click$2 = "Click";
const Save$2 = "Зберегти";
const Apply_your_own_design_decisions_part_1$2 = "Використовуй";
const Apply_your_own_design_decisions_part_2$2 = "своє";
const Apply_your_own_design_decisions_part_3$2 = "власте";
const Apply_your_own_design_decisions_part_4$2 = "дизайн";
const Apply_your_own_design_decisions_part_5$2 = "рішення";
const Updates$2 = "Updates";
const Stats$2 = "Stats";
const uk = {
  __name: __name$2,
  __code: __code$2,
  __status: __status$2,
  "Tailwind CSS Components": "Tailwind CSS Компоненти",
  "cta-1": "Компоненти",
  "cta-1-mobile": "Компоненти",
  "cta-2": "Як користуватися?",
  "components-btn": "Компоненти",
  "change-theme-btn": "Теми",
  "all-components-btn": "Всі Компоненти",
  components: components$2,
  themes: themes$2,
  "github-stars": "Github зірок",
  "npm-installs": "NPM встановлень",
  "install-title": "Інсталювати daisyUI",
  "install-desc": "Pure CSS. Works on all frameworks. daisyUI can be used as a Tailwind CSS plugin or as an independent CSS library",
  "install-step-1": "Інсталюйте daisyUI як пакет Node",
  "install-step-2": "Додайте daisyUI до Tailwind CSS в якості плагіну",
  "install-btn": "Посібник із встановлення",
  "footer-tagline": "Безкоштовна бібліотека компонентів <br /> Перш за все для CSS фреймворків",
  pages: pages$2,
  "how-to-install": "Як інсталювати",
  "how-to-use-components": "Як Використовувати компоненти",
  "how-to-customize": "Як змінити",
  "how-to-use-themes": "Як користуватися темами",
  "color-system": "Система кольорів",
  config: config$2,
  links: links$2,
  changelog: changelog$2,
  license: license$2,
  contributing: contributing$2,
  "available-on": "Доступна на",
  "try-online": "Спробувати онлайн",
  "created-by": "Створена",
  Install: Install$2,
  Use: Use$2,
  "Customize components": "Customize components",
  Config: Config$2,
  Colors: Colors$2,
  Themes: Themes$2,
  "Theme Generator": "Генератор тем",
  "Layout & Typography": "Layout & Typography",
  Actions: Actions$2,
  Button: Button$2,
  Dropdown: Dropdown$2,
  Modal: Modal$2,
  Swap: Swap$2,
  "Data display": "Data display",
  Alert: Alert$2,
  Avatar: Avatar$2,
  Badge: Badge$2,
  Card: Card$2,
  Carousel: Carousel$2,
  "Chat bubble": "Chat bubble",
  Collapse: Collapse$2,
  Countdown: Countdown$2,
  Kbd: Kbd$2,
  Progress: Progress$2,
  "Radial progress": "Radial progress",
  Stat: Stat$2,
  Table: Table$2,
  Tooltip: Tooltip$2,
  "Data input": "Data input",
  Checkbox: Checkbox$2,
  "Text input": "Text input",
  Radio: Radio$2,
  Range: Range$2,
  Rating: Rating$2,
  Select: Select$2,
  Textarea: Textarea$2,
  Toggle: Toggle$2,
  Layout: Layout$2,
  Artboard: Artboard$2,
  "Button group": "Button group",
  Divider: Divider$2,
  Drawer: Drawer$2,
  Footer: Footer$2,
  Hero: Hero$2,
  Indicator: Indicator$2,
  "Input group": "Input group",
  Mask: Mask$2,
  Stack: Stack$2,
  Toast: Toast$2,
  Navigation: Navigation$2,
  Breadcrumbs: Breadcrumbs$2,
  "Bottom navigation": "Bottom navigation",
  Link: Link$2,
  Menu: Menu$2,
  Navbar: Navbar$2,
  Pagination: Pagination$2,
  Steps: Steps$2,
  Tab: Tab$2,
  Mockup: Mockup$2,
  Code: Code$2,
  Phone: Phone$2,
  Window: Window$2,
  excluded: excluded$2,
  "CodePen example page": "CodePen example page",
  "Tailwind Play example page": "Tailwind Play example page",
  "new": "new",
  updated: updated$2,
  "Tailwind Plugin": "Tailwind Plugin",
  "Use CDN": "Use CDN",
  "Install daisyUI as a Tailwind CSS plugin": "Install daisyUI as a Tailwind CSS plugin",
  "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation'>Tailwind CSS</a> installed.": "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation'>Tailwind CSS</a> installed.",
  "How to install daisyUI as a Tailwind CSS plugin?": "How to install daisyUI as a Tailwind CSS plugin?",
  "Install daisyUI": "Install daisyUI",
  "Then add daisyUI to your <code>tailwind.config.js</code> files": "Then add daisyUI to your <code>tailwind.config.js</code> files",
  "daisyUI example repositories": "daisyUI example repositories",
  "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.": "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.",
  Prev: Prev$2,
  Next: Next$2,
  "Do you have a question?": "Do you have a question?",
  "Do you see a bug?": "Do you see a bug?",
  "Do you like daisyUI?": "Do you like daisyUI?",
  "Edit this page on GitHub": "Edit this page on GitHub",
  "ask the community": "ask the community",
  "open an issue on GitHub": "open an issue on GitHub",
  "tweet about it!": "tweet about it!",
  Warning: Warning$2,
  "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large.": "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large.",
  "You don't need to install anything.": "You don't need to install anything.",
  "Just add one of these to the <code>head</code> tag of your HTML": "Just add one of these to the <code>head</code> tag of your HTML",
  Or: Or$2,
  "Add component classes to your HTML": "Add component classes to your HTML",
  "How to use daisyUI classes to style your page?": "How to use daisyUI classes to style your page?",
  "Once you <a href='/docs/install'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc.": "Once you <a href='/docs/install'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc.",
  "So instead of making a button using only utility classes": "So instead of making a button using only utility classes",
  "You can just use a component class like this": "You can just use a component class like this",
  "Then you can modify the component with daisyUI additional utility classes": "Then you can modify the component with daisyUI additional utility classes",
  "Or you can modify the component with Tailwind CSS utility classes": "Or you can modify the component with Tailwind CSS utility classes",
  "Customize daisyUI components": "Customize daisyUI components",
  "How to customize daisyUI?": "How to customize daisyUI?",
  "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.": "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.",
  "But you can still customize components in many ways.": "But you can still customize components in many ways.",
  "Let's say, you want to customize this button:": "Let's say, you want to customize this button:",
  "You can use daisyUI utility classes:": "You can use daisyUI utility classes:",
  "You can use Tailwind's utility classes:": "You can use Tailwind's utility classes:",
  "You can customize components on your CSS file, using Tailwind's @apply directive:": "You can customize components on your CSS file, using Tailwind's @apply directive:",
  "You can also:": "You can also:",
  "Add your own theme.": "Add your own theme.",
  "Opt out of daisyUI's design decisions, and <a href='/docs/config'>only use an unstyled (skeleton) version of daisyUI</a>.": "Opt out of daisyUI's design decisions, and <a href='/docs/config'>only use an unstyled (skeleton) version of daisyUI</a>.",
  "How to change the default configuration of daisyUI?": "How to change the default configuration of daisyUI?",
  "daisyUI can be configured from your <code>tailwind.config.js</code> file.": "daisyUI can be configured from your <code>tailwind.config.js</code> file.",
  "Default config": "Default config",
  "Config values explained": "Config values explained",
  "If it's true, components will have colors and style so you won't need to design anything.": "If it's true, components will have colors and style so you won't need to design anything.",
  "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.": "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.",
  "If it's true, all themes will be included.": "If it's true, all themes will be included.",
  "If it's false, only light and dark themes will be available.": "If it's false, only light and dark themes will be available.",
  "If it's an array, only themes in the array will be included and the first theme will be the default theme.": "If it's an array, only themes in the array will be included and the first theme will be the default theme.",
  "Read more about <a href='/docs/themes'>themes</a>": "Read more about <a href='/docs/themes'>themes</a>",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.": "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.": "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.",
  "If it's true, daisyUI shows logs in the terminal while CSS is building.": "If it's true, daisyUI shows logs in the terminal while CSS is building.",
  "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag.": "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag.",
  "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically.": "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin to flip all your Tailwind utilities automatically.",
  "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.": "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.",
  "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).": "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).",
  "For example: <code>btn</code> will become <code>prefix-btn</code>.": "For example: <code>btn</code> will become <code>prefix-btn</code>.",
  "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.": "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.",
  "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.": "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.",
  "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.": "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.",
  "How to use daisyUI colors?": "How to use daisyUI colors?",
  Introduction: Introduction$2,
  "daisyUI is fully themeable and colorable,": "daisyUI is fully themeable and colorable,",
  "So instead of using constant color utility classes like:": "So instead of using constant color utility classes like:",
  "It's suggested to use semantic color utility classes like:": "It's suggested to use semantic color utility classes like:",
  "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.": "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.",
  Benefits: Benefits$2,
  "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces.": "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces.",
  "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.": "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.",
  "List of all daisyUI color names": "List of all daisyUI color names",
  "You can use these color names in your theme or in utility classes.": "You can use these color names in your theme or in utility classes.",
  "Color name + description": "Color name + description",
  "Required or optional for themes": "Required or optional for themes",
  "Example use": "Example use",
  "How to use": "How to use",
  "Some daisyUI components come with modifier class names and that modifier class name will apply a color.": "Some daisyUI components come with modifier class names and that modifier class name will apply a color.",
  "For example": "For example",
  "You can also use color names in utility classes just like Tailwind's original color names.": "You can also use color names in utility classes just like Tailwind's original color names.",
  "These are utility classes that can be used with a color name:": "These are utility classes that can be used with a color name:",
  "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc.": "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc.",
  "daisyUI comes with a number of themes, which you can use with no extra effort.": "daisyUI comes with a number of themes, which you can use with no extra effort.",
  "Each theme defines a set of colors which will be used on all daisyUI elements.": "Each theme defines a set of colors which will be used on all daisyUI elements.",
  "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:": "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:",
  "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage.": "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage.",
  "List of themes": "List of themes",
  "Try them:": "Try them:",
  "The default theme is <code>light</code> (or <code>dark</code> for dark mode)": "The default theme is <code>light</code> (or <code>dark</code> for dark mode)",
  "but you can <a href='https://daisyui.com/docs/config'>change the default theme from tailwind.config.js</a>": "but you can <a href='https://daisyui.com/docs/config'>change the default theme from tailwind.config.js</a>",
  "How to remove unused themes?": "How to remove unused themes?",
  "You can only include the themes you want in your project.": "You can only include the themes you want in your project.",
  "This will reduce the size of your CSS file.": "This will reduce the size of your CSS file.",
  "In the below example": "In the below example",
  "<code>cupcake</code> will be the default theme for light mode": "<code>cupcake</code> will be the default theme for light mode",
  "<code>dark</code> will be the default theme for dark mode": "<code>dark</code> will be the default theme for dark mode",
  "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>": "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>",
  "How to disable all themes?": "How to disable all themes?",
  "If you only want the default light and dark themes, set <code>themes</code> config to false.": "If you only want the default light and dark themes, set <code>themes</code> config to false.",
  "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array.": "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array.",
  "How to use a theme only for a section of a page?": "How to use a theme only for a section of a page?",
  "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme.": "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme.",
  "You can nest themes and there is no limit!": "You can nest themes and there is no limit!",
  "You can force a section of your HTML to only use a specific theme.": "You can force a section of your HTML to only use a specific theme.",
  "How to add a new custom theme?": "How to add a new custom theme?",
  "You can add a new theme from <code>tailwind.config.js</code> file.": "You can add a new theme from <code>tailwind.config.js</code> file.",
  "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes.": "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes.",
  "The first theme (<code>mytheme</code>) will be the default theme.": "The first theme (<code>mytheme</code>) will be the default theme.",
  "<code>dark</code> theme will be the default theme for dark mode.": "<code>dark</code> theme will be the default theme for dark mode.",
  "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button).": "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button).",
  "CSS variables in daisyUI themes": "CSS variables in daisyUI themes",
  "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:": "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:",
  "You can also add <a href='/docs/colors' class='link'>optional color names</a> to have full control over all colors.": "You can also add <a href='/docs/colors' class='link'>optional color names</a> to have full control over all colors.",
  "Custom CSS for a daisyUI theme": "Custom CSS for a daisyUI theme",
  "You can apply custom style to a daisyUI themes using CSS:": "You can apply custom style to a daisyUI themes using CSS:",
  "How to customize an existing theme?": "How to customize an existing theme?",
  "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.": "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.",
  "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:": "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:",
  "Contribute to translation": "Contribute to translation",
  "Alert informs users about important events.": "Alert informs users about important events.",
  "Artboard provides fixed size container to display a demo content on mobile size.": "Artboard provides fixed size container to display a demo content on mobile size.",
  "Avatars are used to show a thumbnail representation of an individual or business in the interface.": "Avatars are used to show a thumbnail representation of an individual or business in the interface.",
  "Badges are used to inform the user of the status of specific data.": "Badges are used to inform the user of the status of specific data.",
  "Bottom navigation bar allows navigation between primary screens.": "Bottom navigation bar allows navigation between primary screens.",
  "Breadcrumbs helps users to navigate through the website.": "Breadcrumbs helps users to navigate through the website.",
  "Button group shows buttons next to each other.": "Button group shows buttons next to each other.",
  "Buttons allow the user to take actions or make choices.": "Buttons allow the user to take actions or make choices.",
  "Cards are used to group and display content in a way that is easily readable.": "Cards are used to group and display content in a way that is easily readable.",
  "Carousel show images or content in a scrollable area.": "Carousel show images or content in a scrollable area.",
  "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.": "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.",
  "Checkboxes are used to select or deselect a value.": "Checkboxes are used to select or deselect a value.",
  "Collapse is used for showing and hiding content.": "Collapse is used for showing and hiding content.",
  "Countdown gives you a transition effect of changing numbers.": "Countdown gives you a transition effect of changing numbers.",
  "Divider will be used to separate content vertically or horizontally.": "Divider will be used to separate content vertically or horizontally.",
  "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.": "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.",
  "Dropdown can open a menu or any other element when the button is clicked.": "Dropdown can open a menu or any other element when the button is clicked.",
  "File Input is a an input field for uploading files.": "File Input is a an input field for uploading files.",
  "Footer can contain logo, copyright notice, and links to other pages.": "Footer can contain logo, copyright notice, and links to other pages.",
  "Hero is a component for displaying a large box or image with a title and description.": "Hero is a component for displaying a large box or image with a title and description.",
  "Indicators are used to place an element on the corner of another element.": "Indicators are used to place an element on the corner of another element.",
  "Input group puts an input next to a text or a button.": "Input group puts an input next to a text or a button.",
  "Text Input is a simple input field.": "Text Input is a simple input field.",
  "Kbd is used to display keyboard shortcuts.": "Kbd is used to display keyboard shortcuts.",
  "Link adds the missing underline style to links.": "Link adds the missing underline style to links.",
  "Mask crops the content of the element to common shapes.": "Mask crops the content of the element to common shapes.",
  "Menu is used to display a list of links vertically or horizontally.": "Menu is used to display a list of links vertically or horizontally.",
  "Code mockup is used to show a block of code in a box that looks like a code editor.": "Code mockup is used to show a block of code in a box that looks like a code editor.",
  "Phone mockup shows a mockup of an iPhone.": "Phone mockup shows a mockup of an iPhone.",
  "Window mockup shows a box that looks like an operating system window.": "Window mockup shows a box that looks like an operating system window.",
  "Modal is used to show a dialog or a box when you click a button.": "Modal is used to show a dialog or a box when you click a button.",
  "Navbar is used to show a navigation bar on the top of the page.": "Navbar is used to show a navigation bar on the top of the page.",
  "Pagination is a group of buttons that allow the user to navigate between a set of related content.": "Pagination is a group of buttons that allow the user to navigate between a set of related content.",
  "Progress bar can be used to show the progress of a task or to show the passing of time.": "Progress bar can be used to show the progress of a task or to show the passing of time.",
  "Radial progress can be used to show the progress of a task or to show the passing of time.": "Radial progress can be used to show the progress of a task or to show the passing of time.",
  "Radio buttons allow the user to select one option from a set.": "Radio buttons allow the user to select one option from a set.",
  "Range slider is used to select a value by sliding a handle.": "Range slider is used to select a value by sliding a handle.",
  "Rating is a set of radio buttons that allow the user to rate something.": "Rating is a set of radio buttons that allow the user to rate something.",
  "Select is used to pick a value from a list of options.": "Select is used to pick a value from a list of options.",
  "Stack visually puts elements on top of each other.": "Stack visually puts elements on top of each other.",
  "Stat is used to show numbers and data in a box.": "Stat is used to show numbers and data in a box.",
  "Steps can be used to show a list of steps in a process.": "Steps can be used to show a list of steps in a process.",
  "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.": "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.",
  "Tabs can be used to show a list of links in a tabbed format.": "Tabs can be used to show a list of links in a tabbed format.",
  "Table can be used to show a list of data in a table format.": "Table can be used to show a list of data in a table format.",
  "Textarea allows users to enter text in multiple lines.": "Textarea allows users to enter text in multiple lines.",
  "Toggle is a checkbox that is styled to look like a switch button.": "Toggle is a checkbox that is styled to look like a switch button.",
  "Toast is a wrapper to stack elements, positioned on the corner of page.": "Toast is a wrapper to stack elements, positioned on the corner of page.",
  "Tooltip can be used to show a message when hovering over an element.": "Tooltip can be used to show a message when hovering over an element.",
  "Code mockup": "Code mockup",
  "Phone mockup": "Phone mockup",
  "Window mockup": "Window mockup",
  "File Input": "File Input",
  "Text Input": "Text Input",
  "Range slider": "Range slider",
  Tabs: Tabs$2,
  "All daisyUI components": "All daisyUI components",
  "Class name": "Class name",
  Type: Type$2,
  Search: Search$2,
  "daisyUI themes": "daisyUI themes",
  "How to use daisyUI themes?": "How to use daisyUI themes?",
  "daisyUI Theme Generator": "daisyUI Theme Generator",
  "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them.": "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them.",
  "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)": "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)",
  "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use.": "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use.",
  "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)": "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)",
  Randomize: Randomize$2,
  Reset: Reset$2,
  Preview: Preview$2,
  "Layout and Typography": "Layout and Typography",
  "How to use layouts and typography in daisyUI": "How to use layouts and typography in daisyUI",
  "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.": "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.",
  "Read more": "Read more",
  Typography: Typography$2,
  "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.": "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.",
  "It handles everything and it's fully customizable.": "It handles everything and it's fully customizable.",
  "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.": "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.",
  "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js": "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js",
  "Here you can see how elements will look using <code>@tailwindcss/typography</code>.": "Here you can see how elements will look using <code>@tailwindcss/typography</code>.",
  "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>": "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>",
  Component: Component$2,
  Modifier: Modifier$2,
  Responsive: Responsive$2,
  "Changes the style of a component": "Changes the style of a component",
  "Supports responsive prefixes (sm:, lg:, …)": "Supports responsive prefixes (sm:, lg:, …)",
  "Make your theme": "Make your theme",
  "More examples": "More examples",
  "Support daisyUI's development": "Support daisyUI's development",
  "The most popular": "Найпопулярніша",
  "component library": "бібліотека компонентів",
  "for Tailwind CSS": "для Tailwind CSS",
  "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>": "daisyUI додає класи компонентів до Tailwind&nbsp;CSS,<br /> щоб ви мали змогу створювати красиві веб-сайти <span class='border-base-content/20 border-b-2'>швидше, ніж будь-коли.</span>",
  "don't re-invent<br/>the wheel<br/>every time": "не потрібно винаходити<br/>велосипед<br/>кожного разу",
  "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.": "У Tailwind CSS проєкті, вам потрібно писати імена класів для кожного елементу. Тисячі назв класів лише для стилізації найпростіших елементів.",
  "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>": "замість того, щоб писати<br /> <span class='text-error'><span class='font-black'>100</span> класів</span>",
  "For every element, every page, every project,<br/>again and again": "Для кожного елемента, кожної сторінки, кожного проекту,<br/>знову і знову",
  "use <span class='text-success'><span class='font-black'>semantic</span><br />class names</span>": "використовуйте <span class='text-success'><span class='font-black'>семантичні</span><br />назви класів</span>",
  "It's descriptive, faster, cleaner and easier to maintain.": "Це описово, швидше, чистіше та легше в обслуговуванні.",
  Features: Features$2,
  Links: Links$2,
  Message: Message$2,
  "Cleaner HTML": "Cleaner HTML",
  Customizable: Customizable$2,
  Themeable: Themeable$2,
  "Pure CSS": "Pure CSS",
  Dashboard: Dashboard$2,
  Notifications: Notifications$2,
  Messages: Messages$2,
  People: People$2,
  Products: Products$2,
  "Use Tailwind CSS but write fewer class names.": "Use Tailwind CSS but write fewer class names.",
  "Pure CSS. <br />No JS dependency": "Pure CSS. <br />No JS dependency",
  "Works on all frameworks": "Works on all frameworks",
  "Design system": "Design system",
  "Styling a simple button": "Styling a simple button",
  Result: Result$2,
  "Take Tailwind CSS": "Виведи Tailwind CSS",
  "to the next level": "на наступний рівень",
  "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like": "daisyUI додає найзи класів доTailwind CSS<br />для всіх поширених UI компонентів.<br />Класи як",
  "and many more.": "і ще багато інших.",
  "This allows us to focus on important things<br />instead of styling basic elements for every project.": "Це дозволяє нам зосередитися на важливих речах<br />замість того, щоб створювати основні елементи для кожного проекту.",
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$2,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$2,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$2,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$2,
  "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.": "Пишіть менше імен класів<br />Використовуйте імена класів компонентів<br />Змінюйте їх за допомогою утиліт Tailwind CSS.",
  Click: Click$2,
  "Tailwind only": "тільки Tailwind",
  "Tailwind + daisyUI": "Tailwind + daisyUI",
  Save: Save$2,
  "Accept terms of use": "Прийняти умови використання",
  "Submit to newsletter": "Підписатись на розсилку",
  "Fewer class names": "Менше класів",
  "Faster development": "Швидша розробка",
  "Smaller file size": "Менший розмір файлу",
  "With daisyUI, you write 80% fewer class names<br />And your HTML size will be about 70% smaller.": "З daisyUI, ви пишете на 80% меньше класів<br />А ваш розмір HTML буде приблизно на 70% меншим.",
  "CSS Class names": "CSS класи",
  "fewer class names": "меньше класів",
  "HTML size": "розмір HTML",
  "smaller DOM size": "меньше розмір DOM",
  "Highly customizable": "Висока можливість налаштування",
  "Powered by Tailwind&nbsp;CSS utility&nbsp;classes": "На основі Tailwind CSS класів",
  "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes.": "daisyUI створено на основі Tailwind&nbsp;CSS, тому ви можете налаштувати все за допомогою службових класів.",
  "Pure CSS.": "Чистий CSS.",
  "Framework agnostic.": "Framework агностик.",
  "Works everywhere.": "Працює всюди.",
  "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file.": "daisyUI — це плагін для Tailwind CSS. Він працює на всіх фреймворках JS і не потребує пакетного файлу JS.",
  "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name.": "Інсталюйте daisyUI як dev залежність та використовуйте назви класів так само, як будь-які інші CSS класи Tailwind.",
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$2,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$2,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$2,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$2,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$2,
  "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components.": "Ваш сайт має бути унікальним. Створіть власну тему за допомогою генератора тем daisyUI. Кольори, які ви виберете, будуть застосовані до всіх компонентів daisyUI.",
  "Learn more about themes": "Дізнатися більше про теми",
  "utility classes": "допоміжний класів",
  "endless possibilities": "нескінченні можливості",
  "Mix and match daisyUI class names to create unique web pages.": "Комбінуйте імена класів daisyUI для створення унікальних веб-сторінок.",
  "daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS": "daisyUI найпопулярніша<br /> бібліотека компонентів для Tailwind CSS",
  "open-source projects using daisyUI": "опенсорс проєктів, які використовують daisyUI",
  "Free and open-source": "Безкоштовна і з відкритим кодом",
  "Built by the community": "Створена за допомогою ком'юніті",
  "daisyUI welcomes contributions from developers around the world": "daisyUI вітає внески розробників з усього світу",
  "Sponsors and backers": "Спонсори і меценати",
  "Try daisyUI": "Спробуй daisyUI",
  "on your favorite framework": "з вашим улюбленим фреймворком",
  "See all examples": "Всі приклади",
  "Or play with daisyUI on": "або спробуйте daisyUI на",
  "Admin panel": "Admin panel",
  Updates: Updates$2,
  Stats: Stats$2,
  "Unlimited themes": "Необмежена кількість тем",
  "with zero effort": "з нульовим зусиллям",
  "daisyUI adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values. Using daisyUI color names, you get Dark Mode and even more themes without adding a new class name.": "daisyUI додає набір назв кольорів до CSS Tailwind, і ці нові кольори використовують змінні CSS для значень. Використовуючи назви кольорів daisyUI, ви отримуєте темний режим і навіть більше тем без додавання нової назви класу.",
  "See all themes": "Всі теми",
  "Semantic colors": "Semantic colors",
  "Learn more about colors": "Learn more about colors",
  "Get started": "Розпочати",
  "daisyUI 3 is available now!": "daisyUI 3 вже доступна!",
  "Become a sponsor": "Стати спонсором",
  "related projects": "пов'язані проєкти",
  "": ""
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Actions: Actions$2,
  Alert: Alert$2,
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$2,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$2,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$2,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$2,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$2,
  Artboard: Artboard$2,
  Avatar: Avatar$2,
  Badge: Badge$2,
  Benefits: Benefits$2,
  Breadcrumbs: Breadcrumbs$2,
  Button: Button$2,
  Card: Card$2,
  Carousel: Carousel$2,
  Checkbox: Checkbox$2,
  Click: Click$2,
  Code: Code$2,
  Collapse: Collapse$2,
  Colors: Colors$2,
  Component: Component$2,
  Config: Config$2,
  Countdown: Countdown$2,
  Customizable: Customizable$2,
  Dashboard: Dashboard$2,
  Divider: Divider$2,
  Drawer: Drawer$2,
  Dropdown: Dropdown$2,
  Features: Features$2,
  Footer: Footer$2,
  Hero: Hero$2,
  Indicator: Indicator$2,
  Install: Install$2,
  Introduction: Introduction$2,
  Kbd: Kbd$2,
  Layout: Layout$2,
  Link: Link$2,
  Links: Links$2,
  Mask: Mask$2,
  Menu: Menu$2,
  Message: Message$2,
  Messages: Messages$2,
  Mockup: Mockup$2,
  Modal: Modal$2,
  Modifier: Modifier$2,
  Navbar: Navbar$2,
  Navigation: Navigation$2,
  Next: Next$2,
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$2,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$2,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$2,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$2,
  Notifications: Notifications$2,
  Or: Or$2,
  Pagination: Pagination$2,
  People: People$2,
  Phone: Phone$2,
  Prev: Prev$2,
  Preview: Preview$2,
  Products: Products$2,
  Progress: Progress$2,
  Radio: Radio$2,
  Randomize: Randomize$2,
  Range: Range$2,
  Rating: Rating$2,
  Reset: Reset$2,
  Responsive: Responsive$2,
  Result: Result$2,
  Save: Save$2,
  Search: Search$2,
  Select: Select$2,
  Stack: Stack$2,
  Stat: Stat$2,
  Stats: Stats$2,
  Steps: Steps$2,
  Swap: Swap$2,
  Tab: Tab$2,
  Table: Table$2,
  Tabs: Tabs$2,
  Textarea: Textarea$2,
  Themeable: Themeable$2,
  Themes: Themes$2,
  Toast: Toast$2,
  Toggle: Toggle$2,
  Tooltip: Tooltip$2,
  Type: Type$2,
  Typography: Typography$2,
  Updates: Updates$2,
  Use: Use$2,
  Warning: Warning$2,
  Window: Window$2,
  __code: __code$2,
  __name: __name$2,
  __status: __status$2,
  changelog: changelog$2,
  components: components$2,
  config: config$2,
  contributing: contributing$2,
  default: uk,
  excluded: excluded$2,
  license: license$2,
  links: links$2,
  pages: pages$2,
  themes: themes$2,
  updated: updated$2
}, Symbol.toStringTag, { value: "Module" }));
const __name$1 = "繁體中文";
const __code$1 = "ZH";
const __status$1 = "";
const components$1 = "個元件";
const themes$1 = "個主題";
const pages$1 = "頁面";
const config$1 = "設定";
const links$1 = "連結";
const changelog$1 = "更新紀錄";
const license$1 = "授權";
const contributing$1 = "貢獻";
const Install$1 = "安裝";
const Use$1 = "使用";
const Config$1 = "設定";
const Colors$1 = "色彩";
const Themes$1 = "主題";
const Actions$1 = "操作";
const Button$1 = "按鈕";
const Dropdown$1 = "下拉選單";
const Modal$1 = "對話框";
const Swap$1 = "開關";
const Alert$1 = "警示";
const Avatar$1 = "頭像";
const Badge$1 = "徽章";
const Card$1 = "卡片";
const Carousel$1 = "輪播";
const Collapse$1 = "摺疊";
const Countdown$1 = "倒計時";
const Kbd$1 = "鍵盤快捷鍵";
const Progress$1 = "進度條";
const Stat$1 = "統計資料";
const Table$1 = "表格";
const Tooltip$1 = "工具提示";
const Checkbox$1 = "核取方塊";
const Radio$1 = "單選按鈕";
const Range$1 = "滑條";
const Rating$1 = "星級";
const Select$1 = "下拉選單";
const Textarea$1 = "輸入框";
const Toggle$1 = "開關";
const Layout$1 = "版面配置";
const Artboard$1 = "畫板";
const Divider$1 = "分隔線";
const Drawer$1 = "側邊欄";
const Footer$1 = "頁尾";
const Hero$1 = "主圖";
const Indicator$1 = "標記";
const Mask$1 = "遮罩";
const Stack$1 = "堆疊";
const Toast$1 = "快顯通知";
const Navigation$1 = "瀏覽列";
const Breadcrumbs$1 = "階層連結";
const Link$1 = "連結";
const Menu$1 = "選單";
const Navbar$1 = "導覽列";
const Pagination$1 = "分頁";
const Steps$1 = "步驟";
const Tab$1 = "索引標籤";
const Mockup$1 = "樣本";
const Code$1 = "程式碼";
const Phone$1 = "手機";
const Window$1 = "視窗";
const excluded$1 = "已排除";
const updated$1 = "近期更新";
const Prev$1 = "上一頁";
const Next$1 = "下一頁";
const Warning$1 = "警告";
const Or$1 = "或";
const Introduction$1 = "介紹";
const Benefits$1 = "好處";
const Tabs$1 = "索引標籤";
const Type$1 = "類型";
const Search$1 = "搜尋";
const Randomize$1 = "隨機";
const Reset$1 = "重設";
const Preview$1 = "預覽";
const Typography$1 = "字體";
const Component$1 = "元件";
const Modifier$1 = "修改器";
const Responsive$1 = "響應式";
const Features$1 = "特色";
const Links$1 = "連結";
const Message$1 = "訊息";
const Customizable$1 = "可客製化";
const Themeable$1 = "可主題化";
const Dashboard$1 = "儀表板";
const Notifications$1 = "通知";
const Messages$1 = "訊息";
const People$1 = "人員";
const Products$1 = "產品";
const Result$1 = "結果";
const No_more_ugly_HTML_part_1$1 = "不";
const No_more_ugly_HTML_part_2$1 = "再";
const No_more_ugly_HTML_part_3$1 = "有醜陋";
const No_more_ugly_HTML_part_4$1 = "的 HTML";
const Click$1 = "點擊";
const Save$1 = "儲存";
const Apply_your_own_design_decisions_part_1$1 = "應用";
const Apply_your_own_design_decisions_part_2$1 = "您自己";
const Apply_your_own_design_decisions_part_3$1 = "的";
const Apply_your_own_design_decisions_part_4$1 = "設計";
const Apply_your_own_design_decisions_part_5$1 = "決策";
const Updates$1 = "更新";
const Stats$1 = "統計";
const Accordion$1 = "手風琴";
const Deprecated = "已淘汰";
const Loading$1 = "載入指示";
const Join = "聯結";
const zh_hans = {
  __name: __name$1,
  __code: __code$1,
  __status: __status$1,
  "Tailwind CSS Components": "Tailwind CSS 元件",
  "cta-1": "瀏覽元件",
  "cta-1-mobile": "元件",
  "cta-2": "如何使用？",
  "components-btn": "元件",
  "change-theme-btn": "主題",
  "all-components-btn": "查看所有元件",
  components: components$1,
  themes: themes$1,
  "github-stars": "顆 Github 星星",
  "npm-installs": "次 NPM 安裝",
  "install-title": "安裝 daisyUI",
  "install-desc": "純 CSS。支援任何框架。daisyUI 可以作為 Tailwind CSS 的外掛程式或是獨立的 CSS 元件庫使用。",
  "install-step-1": "將 daisyUI 作為 Node 套件安裝",
  "install-step-2": "新增 daisyUI 至 Tailwind CSS 的外掛程式",
  "install-btn": "安裝指南",
  "footer-tagline": "免費的元件庫<br />為公用優先的 CSS 框架設計",
  pages: pages$1,
  "how-to-install": "如何安裝",
  "how-to-use-components": "如何使用元件",
  "how-to-customize": "如何自訂 DaisyUI",
  "how-to-use-themes": "如何使用主題",
  "color-system": "色彩系統",
  config: config$1,
  links: links$1,
  changelog: changelog$1,
  license: license$1,
  contributing: contributing$1,
  "available-on": "獲取管道",
  "try-online": "線上試試",
  "created-by": "作者",
  Install: Install$1,
  Use: Use$1,
  "Customize components": "自訂元件",
  Config: Config$1,
  Colors: Colors$1,
  Themes: Themes$1,
  "Theme Generator": "主題產生器",
  "Layout & Typography": "版面配置 & 字體",
  Actions: Actions$1,
  Button: Button$1,
  Dropdown: Dropdown$1,
  Modal: Modal$1,
  Swap: Swap$1,
  "Data display": "顯示",
  Alert: Alert$1,
  Avatar: Avatar$1,
  Badge: Badge$1,
  Card: Card$1,
  Carousel: Carousel$1,
  "Chat bubble": "聊天氣泡",
  Collapse: Collapse$1,
  Countdown: Countdown$1,
  Kbd: Kbd$1,
  Progress: Progress$1,
  "Radial progress": "環形進度條",
  Stat: Stat$1,
  Table: Table$1,
  Tooltip: Tooltip$1,
  "Data input": "輸入",
  Checkbox: Checkbox$1,
  "Text input": "欄位",
  Radio: Radio$1,
  Range: Range$1,
  Rating: Rating$1,
  Select: Select$1,
  Textarea: Textarea$1,
  Toggle: Toggle$1,
  Layout: Layout$1,
  Artboard: Artboard$1,
  "Button group": "按鈕群組",
  Divider: Divider$1,
  Drawer: Drawer$1,
  Footer: Footer$1,
  Hero: Hero$1,
  Indicator: Indicator$1,
  "Input group": "輸入群組",
  Mask: Mask$1,
  Stack: Stack$1,
  Toast: Toast$1,
  Navigation: Navigation$1,
  Breadcrumbs: Breadcrumbs$1,
  "Bottom navigation": "底部導覽列",
  Link: Link$1,
  Menu: Menu$1,
  Navbar: Navbar$1,
  Pagination: Pagination$1,
  Steps: Steps$1,
  Tab: Tab$1,
  Mockup: Mockup$1,
  Code: Code$1,
  Phone: Phone$1,
  Window: Window$1,
  excluded: excluded$1,
  "CodePen example page": "CodePen 範例頁面",
  "Tailwind Play example page": "Tailwind Play 範例頁面",
  "new": "全新功能",
  updated: updated$1,
  "Tailwind Plugin": "Tailwind 外掛程式",
  "Use CDN": "使用 CDN",
  "Install daisyUI as a Tailwind CSS plugin": "將 daisyUI 安裝為 Tailwind CSS 的外掛程式",
  "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> installed.": "您需先安裝 <a href='https://nodejs.org/en/download/'>Node.js</a> 和 <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a>。",
  "How to install daisyUI as a Tailwind CSS plugin?": "如何將 daisyUI 安裝為 Tailwind CSS 的外掛程式？",
  "Install daisyUI": "安裝 daisyUI",
  "Then add daisyUI to your <code>tailwind.config.js</code> files": "然後將 daisyUI 加入<code>tailwind.config.js</code>",
  "daisyUI example repositories": "daisyUI 範例儲存庫",
  "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.": "看看 daisyUI 和 Tailwind CSS 在不同框架和建置工具上的範例設定。",
  Prev: Prev$1,
  Next: Next$1,
  "Do you have a question?": "有任何疑問嗎？",
  "Do you see a bug?": "遇到問題？",
  "Do you like daisyUI?": "您喜歡 daisyUI 嗎？",
  "Edit this page on GitHub": "在 GitHub 上編輯此頁面",
  "ask the community": "詢問社群",
  "open an issue on GitHub": "在 GitHub 上開立 Issue",
  "tweet about it!": "在 Twitter 上分享吧！",
  Warning: Warning$1,
  "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large.": "不建議在生產環境中使用 CDN 檔案，您將無法清除未使用的樣式，導致檔案龐大。",
  "You don't need to install anything.": "您無須安裝任何套件。",
  "Just add one of these to the <code>head</code> tag of your HTML": "只需在 HTML 的<code>head</code>標籤中加入其中一項",
  Or: Or$1,
  "Add component classes to your HTML": "新增元件類別至 HTML",
  "How to use daisyUI classes to style your page?": "如何使用 daisyUI 的類別 (class) 來設定您的頁面樣式？",
  "Once you <a href='/docs/install/'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc.": "一旦您<a href='/docs/install/'>安裝完 daisyUI</a> 後，您便可以使用元件類別，如 <code>btn</code>、<code>card</code>...等。",
  "So instead of making a button using only utility classes": "所以您不再需要輸入一長串的公用類別",
  "You can just use a component class like this": "僅使用元件類別即可建立按鈕",
  "Then you can modify the component with daisyUI additional utility classes": "接著您可以使用 daisyUI 額外提供的公用類別來細部調整元件",
  "Or you can modify the component with Tailwind CSS utility classes": "或者您可以使用 Tailwind CSS 的公用類別來調整",
  "Customize daisyUI components": "自訂 daisyUI 元件",
  "How to customize daisyUI?": "如何自訂 daisyUI",
  "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.": "daisyUI 的元件自帶許多設計系統所需的變體，您通常不需要自訂任何東西。",
  "But you can still customize components in many ways.": "但您仍可以通過多種方式自訂元件。",
  "Let's say, you want to customize this button:": "假如您想要自訂這個按鈕：",
  "You can use daisyUI utility classes:": "您可以使用 daisyUI 的公用類別：",
  "You can use Tailwind's utility classes:": "Tailwind 的公用類別：",
  "You can customize components on your CSS file, using Tailwind's @apply directive:": "或是在您的 CSS 檔案中使用 Tailwind 的 @apply 指示詞來自訂元件。",
  "You can also:": "您還能：",
  "Add your own theme.": "新增您自己的主題",
  "Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>.": "不使用 daisyUI 的設計理念，<a href='/docs/config/'>改用未套用任何樣式 (骨架) 的 daisyUI</a>。",
  "How to change the default configuration of daisyUI?": "如何更改 daisyUI 的預設設定？",
  "daisyUI can be configured from your <code>tailwind.config.js</code> file.": "daisyUI 可以在<code>tailwind.config.js</code>檔案中調整。",
  "Default config": "以下是預設設定",
  "Config values explained": "設定值說明",
  "If it's true, components will have colors and style so you won't need to design anything.": "如果設為 true，元件將包含顏色及樣式，您無需做任何調整。",
  "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.": "反之，元件將無任何顏色或樣式，以便您設計自己的風格。",
  "If it's true, all themes will be included.": "如果設為 true，將包含所有主題。",
  "If it's false, only light and dark themes will be available.": "反之，僅有亮色和暗色主題可用。",
  "If it's an array, only themes in the array will be included and the first theme will be the default theme.": "如果設為陣列，將包含陣列中的主題，並將首主題設為預設主題。",
  "Read more about <a href='/docs/themes/'>themes</a>": "了解<a href='/docs/themes/'>主題</a>",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.": "如果設為 true，將新增<a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>數個基礎樣式</a>",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.": "如果設為 true，將新增<a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>響應式和公用類別</a>",
  "If it's true, daisyUI shows logs in the terminal while CSS is building.": "如果設為 true， daisyUI 在建置 CSS 時會將紀錄顯示於終端機",
  "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag.": "如果設為 true，您的主題將以右至左顯示。您需要新增<code>dir='rtl'</code>至 body 標籤。",
  "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically.": "如果您啟用了 RTL，建議使用 <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> 外掛程式，以自動翻轉所有 Tailwind 公用類別。",
  "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.": "允許我們為系統的自動暗色模式選取其他主題。預設情況下，如果沒有指定主題，且使用者的系統啟用了暗色模式，預設主題將為<code>dark</code> (或名為<code>dark</code>的自訂主題)。此設定可以指定其他主題做為預設暗色模式主題。",
  "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).": "為所有 daisyUI 類別名稱新增前綴 (包括元件類別、修改器類別以及響應式類別)。",
  "For example: <code>btn</code> will become <code>prefix-btn</code>.": "例如：<code>btn</code>將變成<code>prefix-btn</code>。",
  "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.": "如果您正在使用其他有類似類別名稱的 CSS 元件庫，您可以使用此設定來避免衝突。",
  "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.": "公用類別 (如<code>bg-primary</code>) 或 border-radius (如<code>rounded-box</code>)不受此設定影響，因為它們是以 Tailwind CSS 的類別擴充功能加入的。",
  "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.": "如果您同時使用 daisyUI 的<code>prefix</code>選項 (如 <code>daisy-</code>) 和 Tailwind CSS 的<code>prefix</code> 選項 (如 <code>tw-</code>)，類別名稱的前綴將變成：<code>tw-daisy-btn</code>。",
  "How to use daisyUI colors?": "如何使用 daisyUI 的色彩？",
  Introduction: Introduction$1,
  "daisyUI is fully themeable and colorable,": "daisyUI 完全支援主題化和色彩化，",
  "So instead of using constant color utility classes like:": "所以與其使用常數式的顏色公用類別：",
  "It's suggested to use semantic color utility classes like:": "我們更建議您使用語意式的顏色公用類別，如：",
  "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.": "每個顏色名稱都包含 CSS 變數，且每個 daisyUI 主題套用時都將把顏色數值套用到公用類別。",
  Benefits: Benefits$1,
  "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces.": "在設計界面時，我們不會隨機挑選顏色，所以語意式的顏色名稱更有意義。我們定義了使用<code>primary</code>、<code>secondary</code>等名稱的調色盤，在介面中只使用這些指定顏色。",
  "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.": "此外，使用語意式的顏色名稱將使套用主題更有效率。您不需要在每個元素上定義暗色主題，而且您可以有多個主題可用。每個主題只是一些 CSS 變數的行數。",
  "List of all daisyUI color names": "daisyUI 顏色名稱列表",
  "You can use these color names in your theme or in utility classes.": "您可以在主題或公用類別中使用這些顏色名稱。",
  "Color name + description": "顏色名稱 + 說明",
  "Required or optional for themes": "在建立主題時必填或選填",
  "Example use": "範例",
  "How to use": "如何使用",
  "Some daisyUI components come with modifier class names and that modifier class name will apply a color.": "某些 daisyUI 元件會有修改器類別名稱，該修改器類別名稱將套用顏色。",
  "For example": "例如",
  "You can also use color names in utility classes just like Tailwind's original color names.": "您也可以在公用類別中使用顏色名稱，如同 Tailwind 的原始顏色名稱。",
  "These are utility classes that can be used with a color name:": "以下是可以使用顏色名稱的公用類別：",
  "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc.": "所以您可以使用 <code>bg-primary</code>、<code>border-secondary</code>...。",
  "daisyUI comes with a number of themes, which you can use with no extra effort.": "daisyUI 自帶了數個主題，您可以直接使用。",
  "Each theme defines a set of colors which will be used on all daisyUI elements.": "主題定義了一組用於所有 daisyUI 元素的顏色。",
  "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:": "要使用主題，請在 <span class=badge>tailwind.config.js</span> 中新增其名稱，並在 <span class=badge>HTML</span> 標籤中加入 <span class=badge>data-theme</span> 屬性以啟用：",
  "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage.": "建議使用<a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>，以便切換主題並將所選主題儲存到本機存放區。",
  "List of themes": "主題列表",
  "Try them:": "馬上試試：",
  "The default theme is <code>light</code> (or <code>dark</code> for dark mode)": "預設主題為<code>light</code>(暗色模式時則為<code>dark</code>)",
  "but you can <a href='https://daisyui.com/docs/config/'>change the default theme from tailwind.config.js</a>": "您可以在 <a href='https://daisyui.com/docs/config/'>tailwind.config.js 中更改預設主題</a>",
  "How to remove unused themes?": "如何移除未使用的主題？",
  "You can only include the themes you want in your project.": "您僅能在您的專案中引入您想要的主題。",
  "This will reduce the size of your CSS file.": "這將能縮減 CSS 檔案的大小。",
  "In the below example": "在下方的範例中，",
  "<code>cupcake</code> will be the default theme for light mode": "<code>cupcake</code>將成為亮色模式的預設主題",
  "<code>dark</code> will be the default theme for dark mode": "<code>dark</code>將成為暗色模式的預設主題",
  "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>": "<code>cmyk</code>能夠用<code>data-theme='cmyk'</code>來套用到任意 HTML 標籤",
  "How to disable all themes?": "如何停用所有主題？",
  "If you only want the default light and dark themes, set <code>themes</code> config to false.": "如果您只想要預設的亮色和暗色主題，請將<code>themes</code>設定為 false。",
  "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array.": "如果您不想引入任何主題並停用所有顏色，請將<code>themes</code>陣列清空。",
  "How to use a theme only for a section of a page?": "如何僅將主題套用到頁面的一小部分？",
  "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme.": "將<code>data-theme='THEME_NAME'</code>新增至任何元件，即可使內部元件套用您的主題。",
  "You can nest themes and there is no limit!": "您可以任意將主題套入其他主題中，且沒有上限！",
  "You can force a section of your HTML to only use a specific theme.": "您可以強制設定 HTML 的一部分僅使用指定主題。",
  "How to add a new custom theme?": "如何新增自訂主題？",
  "You can add a new theme from <code>tailwind.config.js</code> file.": "您可以在<code>tailwind.config.js</code>檔案中新增主題。",
  "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes.": "在下方的範例中，我新增了一個叫做<code>mytheme</code>的新主題，並同時引入了<code>dark</code>和<code>cupcake</code>主題。",
  "The first theme (<code>mytheme</code>) will be the default theme.": "第一個主題 (<code>mytheme</code>) 將成為預設主題。",
  "<code>dark</code> theme will be the default theme for dark mode.": "<code>dark</code>主題將成為暗色模式的預設主題。",
  "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button).": "在下方的範例中，我已填入所有必填顏色，其餘顏色將自動產生 (例如當按鈕被選中時的顏色或是<code>primary</code>按鈕的文字顏色)。",
  "CSS variables in daisyUI themes": "daisyUI 主題中的 CSS 變數",
  "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:": "daisyUI 主題中有一些選填的 CSS 變數，您可以使用它們來自訂每個主題的設計理念：",
  "You can also add <a href='/docs/colors/' class='link'>optional color names</a> to have full control over all colors.": "您也可以新增<a href='/docs/colors/' class='link'>選填顏色名稱</a>，以便完全控制所有顏色。",
  "Custom CSS for a daisyUI theme": "為 daisyUI 主題自訂 CSS",
  "You can apply custom style to a daisyUI themes using CSS:": "您可以使用 CSS 將自訂樣式套用到 daisyUI 主題中：",
  "How to customize an existing theme?": "如何自訂現有主題？",
  "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.": "在 tailwind.config.js 檔案中，您可以引入現有的 daisyUI 主題並覆寫某些顏色。",
  "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:": "在下方的範例中，我引入並套用了<code>light</code>主題，並更改它的<code>primary</code>和<code>primary-focus</code>顏色：",
  "Contribute to translation": "協助翻譯",
  "Alert informs users about important events.": "在重要事件發生時提醒使用者。",
  "Artboard provides fixed size container to display a demo content on mobile size.": "提供固定大小的容器來展示行動裝置大小的內容。",
  "Avatars are used to show a thumbnail representation of an individual or business in the interface.": "在介面中顯示代表個人或公司的縮圖。",
  "Badges are used to inform the user of the status of specific data.": "通知使用者指定資料的狀態。",
  "Bottom navigation bar allows navigation between primary screens.": "在主要畫面間進行導覽。",
  "Breadcrumbs helps users to navigate through the website.": "協助使用者瀏覽網站。",
  "Button group shows buttons next to each other.": "顯示相鄰按鈕。",
  "Buttons allow the user to take actions or make choices.": "允許使用者執行動作或做出選擇。",
  "Cards are used to group and display content in a way that is easily readable.": "用於分組並以易讀的形式顯示內容。",
  "Carousel show images or content in a scrollable area.": "在可捲動的區域中顯示圖片或內容。",
  "Checkboxes are used to select or deselect a value.": "用於選擇或取消選擇數值。",
  "Collapse is used for showing and hiding content.": "用於顯示或隱藏內容。",
  "Countdown gives you a transition effect of changing numbers.": "提供數字更動時的切換效果。",
  "Divider will be used to separate content vertically or horizontally.": "以水平或垂直方式分隔內容。",
  "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.": "能夠在頁面左側或右側顯示/隱藏側邊欄的網格樣式。",
  "Dropdown can open a menu or any other element when the button is clicked.": "當按鈕被點擊時開啟選單或其他元素。",
  "Footer can contain logo, copyright notice, and links to other pages.": "可包含 Logo、版權聲明，或其他頁面的連結。",
  "Hero is a component for displaying a large box or image with a title and description.": "顯示帶標題和說明的大型方塊或圖片。",
  "Indicators are used to place an element on the corner of another element.": "將元素置於另一元素的角落。",
  "Input group puts an input next to a text or a button.": "將輸入欄置於文字或按鈕旁邊。",
  "Text Input is a simple input field.": "簡單的輸入欄。",
  "Kbd is used to display keyboard shortcuts.": "用於顯示鍵盤快捷鍵。",
  "Link adds the missing underline style to links.": "為連結加入缺少的底線樣式。",
  "Mask crops the content of the element to common shapes.": "將元素內容裁剪成常見形狀。",
  "Menu is used to display a list of links vertically or horizontally.": "以垂直或水平方式顯示連結清單。",
  "Code mockup is used to show a block of code in a box that looks like a code editor.": "在看似程式碼編輯器的方框中顯示一段程式碼。",
  "Phone mockup shows a mockup of an iPhone.": "顯示 iPhone 外框。",
  "Window mockup shows a box that looks like an operating system window.": "顯示一個看似作業系統視窗的方框。",
  "Modal is used to show a dialog or a box when you click a button.": "在您點擊按鈕時顯示對話框或方框。",
  "Navbar is used to show a navigation bar on the top of the page.": "在頁面上方顯示導覽列。",
  "Pagination is a group of buttons that allow the user to navigate between a set of related content.": "一組按鈕，讓使用者能夠在相關內容間瀏覽。",
  "Progress bar can be used to show the progress of a task or to show the passing of time.": "顯示任務進度或時間流逝。",
  "Radial progress can be used to show the progress of a task or to show the passing of time.": "顯示任務進度或時間流逝。",
  "Radio buttons allow the user to select one option from a set.": "讓使用者從多個選項中選取一個選項。",
  "Range slider is used to select a value by sliding a handle.": "透過滑動控制點來選擇數值。",
  "Rating is a set of radio buttons that allow the user to rate something.": "一組單選按鈕，讓使用者進行評分。",
  "Select is used to pick a value from a list of options.": "從選項列表中挑選數值。",
  "Stack visually puts elements on top of each other.": "使元素看起來像是疊在一起。",
  "Stat is used to show numbers and data in a box.": "在小方框中顯示數字和資料。",
  "Steps can be used to show a list of steps in a process.": "顯示流程的步驟列表。",
  "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.": "讓您能夠使用核取方塊或是類別名稱來切換兩個元素的可見性。",
  "Tabs can be used to show a list of links in a tabbed format.": "以標籤形式顯示連結列表。",
  "Table can be used to show a list of data in a table format.": "以表格形式顯示一長串的資料。",
  "Textarea allows users to enter text in multiple lines.": "讓使用者可以輸入多行文字。",
  "Toggle is a checkbox that is styled to look like a switch button.": "看似開關的核取方塊。",
  "Tooltip can be used to show a message when hovering over an element.": "游標在元素上懸停時顯示訊息。",
  "Code mockup": "程式碼範例",
  "Phone mockup": "手機範例",
  "Window mockup": "視窗範例",
  "File Input": "檔案輸入",
  "Text Input": "欄位",
  "Range slider": "滑條",
  Tabs: Tabs$1,
  "All daisyUI components": "所有 daisyUI 元件",
  "Class name": "類別名稱",
  Type: Type$1,
  Search: Search$1,
  "daisyUI themes": "daisyUI 主題",
  "How to use daisyUI themes?": "如何使用 daisyUI 主題？",
  "daisyUI Theme Generator": "daisyUI 主題產生器",
  "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them.": "您可以在 <span class='badge badge-outline'>tailwind.config.js</span> 檔案中的 <span class='badge badge-outline'>daisyui > themes</span> 陣列中新增自訂主題。在此頁面中，您可以挑選所需的顏色值，並預覽元件外觀。",
  "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)": "您還可以定義選用顏色以近一步控制顏色數值。(例如：按鈕被選中時的顏色和按鈕文字的顏色)",
  "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use.": "前往<a class='link font-bold' href='/docs/colors/'>色彩頁面</a>以查看所有可用的顏色名稱。",
  "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)": "前往<a class='link font-bold' href='/docs/themes/'>主題頁面</a>以查看所有可用的 CSS 變數，以便自訂設計決策 (如：border-radius、animations...等)。",
  Randomize: Randomize$1,
  Reset: Reset$1,
  Preview: Preview$1,
  "Layout and Typography": "版面配置和字體",
  "How to use layouts and typography in daisyUI": "如何在 daisyUI 中使用版面配置與字體",
  "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.": "版面配置，大小，網格，間距等都將由 Tailwind CSS 的公用類別處理。",
  "Read more": "繼續閱讀",
  Typography: Typography$1,
  "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.": "您應使用官方的 <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS 字體外掛程式</a>。",
  "It handles everything and it's fully customizable.": "它能處理所有事情，且完全可以您的需求調整。",
  "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.": "daisyUI 為 @tailwindcss/typography 新增了一些樣式，好讓它的主題與其他元素相同。",
  "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js": "在 tailwind.config.js 中，請先引入 <span class='badge badge-outline'>@tailwindcss/typography</span> 再引入 <span class='badge badge-outline'>daisyui</span>。",
  "Here you can see how elements will look using <code>@tailwindcss/typography</code>.": "您可以在此預覽使用 <code>@tailwindcss/typography</code> 後的元件外觀。",
  "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>": "若要使用自訂前綴，<a class='link' href='/docs/config/#prefix'>請至設定檔中加入前綴字串</a>",
  Component: Component$1,
  Modifier: Modifier$1,
  Responsive: Responsive$1,
  "Changes the style of a component": "更改元件樣式",
  "Supports responsive prefixes (sm:, lg:, …)": "支援動態前綴 (sm:、lg:、…)",
  "Make your theme": "建立您的主題",
  "More examples": "更多範例",
  "Support daisyUI's development": "支持daisyUI的開發",
  "The most popular": "最受歡迎的",
  "component library": "元件庫",
  "for Tailwind CSS": "專為 Tailwind CSS 設計",
  "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>": "daisyUI 將元件類別名稱加入 Tailwind&nbsp;CSS，<br />讓您可以比以往<span class='border-base-content/20 border-b-2'>更快速地</span>建立漂亮的網站。",
  "don't re-invent<br/>the wheel<br/>every time": "不要每次都重新發明輪子",
  "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.": "在 Tailwind CSS 專案中，您需要為每個元素編寫公用類別名稱。數千個類別名稱只是為了樣式化最基本的元素。",
  "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>": "與其寫<br /> <span class='text-error'><span class='font-black'>100</span> 個類別名稱</span>",
  "For every element, every page, every project,<br/>again and again": "為每一個元素、每一個頁面、每一個專案，<br/>一次又一次地重複",
  "use <span class='text-success'><span class='font-black'>semantic</span><br />class names</span>": "不如使用<span class='text-success'><span class='font-black'>語意化</span><br />的類別名稱</span>",
  "It's descriptive, faster, cleaner and easier to maintain.": "它更具描述性，更快速、更乾淨，也更容易維護。",
  Features: Features$1,
  Links: Links$1,
  Message: Message$1,
  "Cleaner HTML": "更乾淨的 HTML",
  Customizable: Customizable$1,
  Themeable: Themeable$1,
  "Pure CSS": "純 CSS",
  Dashboard: Dashboard$1,
  Notifications: Notifications$1,
  Messages: Messages$1,
  People: People$1,
  Products: Products$1,
  "Use Tailwind CSS but write fewer class names.": "使用 Tailwind CSS 但寫更少的類別名稱。",
  "Pure CSS. <br />No JS dependency": "純 CSS。<br />沒有 JS 依賴性",
  "Works on all frameworks": "適用於所有框架",
  "Design system": "設計系統",
  "Styling a simple button": "設計一個簡單的按鈕",
  Result: Result$1,
  "Take Tailwind CSS": "讓 Tailwind CSS",
  "to the next level": "更上一層樓",
  "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like": "daisyUI 為 Tailwind CSS 加入類別名稱<br />以供所有常見的 UI 元件使用。<br />像這樣的類別名稱",
  "and many more.": "等等。",
  "This allows us to focus on important things<br />instead of styling basic elements for every project.": "這讓我們能夠專注在重要的事情上<br />而不是為每個專案設計基本元件。",
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$1,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$1,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$1,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$1,
  "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.": "少打 class 名稱<br />使用元件名稱<br />使用 Tailwind 工具來修改它們。",
  Click: Click$1,
  "Tailwind only": "只有 Tailwind",
  "Tailwind + daisyUI": "Tailwind + daisyUI",
  Save: Save$1,
  "Accept terms of use": "接受使用條款",
  "Submit to newsletter": "訂閱電子報",
  "Fewer class names": "少一點類別名稱",
  "Faster development": "開發更快",
  "Smaller file size": "檔案更小",
  "With daisyUI, you write 80% fewer class names<br />And your HTML size will be about 70% smaller.": "使用 daisyUI，您可以少輸入 80% 的類別名稱<br />並且您的HTML大小將會小70%。",
  "CSS Class names": "CSS 類別名稱",
  "fewer class names": "更少的類別名稱",
  "HTML size": "HTML 大小",
  "smaller DOM size": "DOM 大小",
  "Highly customizable": "高度可自訂",
  "Powered by Tailwind&nbsp;CSS utility&nbsp;classes": "使用 Tailwind&nbsp;CSS 的工具類別驅動",
  "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes.": "daisyUI 是建立在 Tailwind&nbsp;CSS 之上的<br />你可以使用工具類別驅動來客制化所有東西",
  "Pure CSS.": "純 CSS",
  "Framework agnostic.": "適用任何框架",
  "Works everywhere.": "在哪都能運作",
  "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file.": "daisyUI 是一個 Tailwind CSS 的外掛，它可以運行在所有的 JavaScript 框架上，且不需要任何 JavaScript 檔案。",
  "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name.": "安裝 daisyUI 當作開發環境的相依性，並且使用類別名稱就像是其他的 Tailwind CSS 的類別名稱一樣。",
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$1,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$1,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$1,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$1,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$1,
  "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components.": "你的網站應該是獨一無二的。使用 daisyUI 主題產生器為自己製作一個自訂主題。你選擇的顏色將會套用到所有的 daisyUI 元件。",
  "Learn more about themes": "了解更多主題",
  "utility classes": "公用類別",
  "endless possibilities": "無窮可能性",
  "Mix and match daisyUI class names to create unique web pages.": "混合搭配 daisyUI 的類別名稱，創建出獨一無二的網頁。",
  "daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS": "daisyUI 是最受歡迎的<br />Tailwind&nbsp;CSS 元件庫",
  "open-source projects using daisyUI": "使用 daisyUI 的開源專案",
  "Free and open-source": "免費且開源",
  "Built by the community": "由社群建立",
  "daisyUI welcomes contributions from developers around the world": "daisyUI 歡迎來自世界各地的開發者貢獻",
  "Sponsors and backers": "贊助者與支持者",
  "Try daisyUI": "在你喜愛的框架上",
  "on your favorite framework": "試用 daisyUI",
  "See all examples": "查看所有範例",
  "Or play with daisyUI on": "或在這裡試用 daisyUI",
  "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.": "聊天氣泡用於顯示一行對話及其所有資料，包括作者頭像，作者名稱，時間等。",
  "File Input is a an input field for uploading files.": "檔案輸入是上傳檔案的輸入欄位。",
  "Toast is a wrapper to stack elements, positioned on the corner of page.": "快顯通知是一個包裹器，用於包裝元素，並置於頁面角落。",
  "Admin panel": "管理員面板",
  Updates: Updates$1,
  Stats: Stats$1,
  "Unlimited themes": "無限主題",
  "with zero effort": "輕鬆搞定",
  "daisyUI adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values. Using daisyUI color names, you get Dark Mode and even more themes without adding a new class name.": "daisyUI 將一組可自訂的色彩名稱加入 Tailwind CSS 中，這些新色彩使用 CSS 變數作為數值。使用 daisyUI 色彩名稱，您可以獲得深色模式，甚至更多主題，而無需加入新的類別名稱。",
  "See all themes": "查看所有主題",
  "Semantic colors": "語義化色彩",
  "Learn more about colors": "了解更多色彩資訊",
  "Get started": "開始使用",
  "daisyUI 3 is available now!": "daisyUI 3 現已推出！",
  "related projects": "相關專案",
  Accordion: Accordion$1,
  "Accordion is used for showing and hiding content but only one item can stay open at a time.": "用於顯示或隱藏內容，但只能同時開啟一個項目。",
  "Container element": "容器元素",
  Deprecated,
  Loading: Loading$1,
  "Join (group items)": "聯結 (項目群組)",
  Join,
  "Join is a container for grouping multiple items, it can be used to group buttons, inputs, or any other element. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.": "聯結為用於將多個項目組成群組的容器。可以用於按鈕、輸入框、或其他元素上。聯結將對首個和末個項目套用邊框圓角。聯結可以建立垂直或水平項目列表。",
  "Accordion uses the same style as the <a href='/components/collapse/' class='link'>collapse component</a> but it works with radio inputs. You can control which item to be open by checking/unchecking the hidden radio input.": "手風琴使用了與<a href='/components/collapse/' class='link'>折疊元件</a>相同的樣式，但能夠與單選按鈕同時運作。您可以透過勾選/取消勾選隱藏的單選按鈕來控制要開啟哪個項目。",
  "All radio inputs with the same name work together and only one of them can be open at a time. If you have more than one set of accordion items on a page, use different names for the radio inputs on each set.": "所有具相同名稱的單選按鈕將同時運作，並且一次只能開啟一個。如果您的頁面上有多個手風琴項目集合，請在每個集合中使用不同的單選按鈕名稱。",
  "There are 3 ways to use a modal:": "有三種方法能夠使用對話框：",
  "Using <code>&lt;dialog&gt;</code> element: It needs JS to open but it has better accessibility and we can close it using <span class='kbd kbd-xs'>Esc</span> key": "使用 <code>&lt;dialog&gt;</code> 元素: 需要 JS 來開啟，但有更好的易用性，能夠使用 <span class='kbd kbd-xs'>Esc</span> 鍵關閉。",
  "Using a hidden <code>&lt;input type='checkbox'&gt;</code> and <code>&lt;label&gt;</code> to check/uncheck the checkbox and open/close the modal": "使用隱藏的 <code>&lt;input type='checkbox'&gt;</code> and <code>&lt;label&gt;</code> 來勾選/取消勾選核取方塊和開啟/關閉對話框。",
  "Using <code>&lt;a&gt;</code> anchor links: A link adds a parameter to the URL and you only see the modal when the URL has that parameter": `Using a hidden <code>&lt;input type='checkbox'&gt;</code> and <code>&lt;label&gt;</code> to check/uncheck the checkbox and open/close the modal": "",
  "Using <code>&lt;a&gt;</code> anchor links: A link adds a parameter to the URL and you only see the modal when the URL has that parameter`,
  "Make sure you're using unique IDs for each modal": "記得為每個對話框設置唯一 ID。",
  "Also see <a href='/components/accordion/' class='link'>accordion</a> examples": "也請查看<a href='/components/accordion/' class='link'>手風琴</a>範例。",
  "You need to change to `--value` CSS variable using JS. Value must be a number between 0 and 99.": "您需要使用 JS 變更 `--value` CSS 參數。數值必須介於 0 到 99 之間。",
  "Radial progress needs `--value` CSS variable to work.<br />To change the size, use `--size` CSS variable which has a default value of `4rem`.<br />To change the thickness, use `--thickness` CSS variable which is 10% of the size by default.<br />": "環形進度條需要 `--value` CSS 參數才能運作。<br />若要變更大小，請使用 `--size` CSS 參數，其預設值為 `4rem`。<br />若要變更粗細，請使用 `--thickness` CSS 參數，其預設值為其大小的 10%。<br />",
  "This component is deprecated and will be removed in the next major version. Use <a class='link' href='/components/join/'>Join</a> instead.": "此元件已被淘汰，並將在下個主要版本中移除。請改用<a class='link' href='/components/join/'>聯結</a>。",
  "Loading shows an animation to indicate that something is loading.": "載入指示將顯示動畫，指示某事物正在載入。",
  "Drawer sidebar is hidden by default. You can make it visible on larger screens using <code>lg:drawer-open</code> class (or using other responsive prefixes: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>)": "側邊欄預設為隱藏。您可以使用 <code>lg:drawer-open</code> 類別 (或其他響應式前綴：<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code>) 使其在較大螢幕上可見。",
  "Become a sponsor": "成為贊助商",
  "": ""
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Accordion: Accordion$1,
  Actions: Actions$1,
  Alert: Alert$1,
  Apply_your_own_design_decisions_part_1: Apply_your_own_design_decisions_part_1$1,
  Apply_your_own_design_decisions_part_2: Apply_your_own_design_decisions_part_2$1,
  Apply_your_own_design_decisions_part_3: Apply_your_own_design_decisions_part_3$1,
  Apply_your_own_design_decisions_part_4: Apply_your_own_design_decisions_part_4$1,
  Apply_your_own_design_decisions_part_5: Apply_your_own_design_decisions_part_5$1,
  Artboard: Artboard$1,
  Avatar: Avatar$1,
  Badge: Badge$1,
  Benefits: Benefits$1,
  Breadcrumbs: Breadcrumbs$1,
  Button: Button$1,
  Card: Card$1,
  Carousel: Carousel$1,
  Checkbox: Checkbox$1,
  Click: Click$1,
  Code: Code$1,
  Collapse: Collapse$1,
  Colors: Colors$1,
  Component: Component$1,
  Config: Config$1,
  Countdown: Countdown$1,
  Customizable: Customizable$1,
  Dashboard: Dashboard$1,
  Deprecated,
  Divider: Divider$1,
  Drawer: Drawer$1,
  Dropdown: Dropdown$1,
  Features: Features$1,
  Footer: Footer$1,
  Hero: Hero$1,
  Indicator: Indicator$1,
  Install: Install$1,
  Introduction: Introduction$1,
  Join,
  Kbd: Kbd$1,
  Layout: Layout$1,
  Link: Link$1,
  Links: Links$1,
  Loading: Loading$1,
  Mask: Mask$1,
  Menu: Menu$1,
  Message: Message$1,
  Messages: Messages$1,
  Mockup: Mockup$1,
  Modal: Modal$1,
  Modifier: Modifier$1,
  Navbar: Navbar$1,
  Navigation: Navigation$1,
  Next: Next$1,
  No_more_ugly_HTML_part_1: No_more_ugly_HTML_part_1$1,
  No_more_ugly_HTML_part_2: No_more_ugly_HTML_part_2$1,
  No_more_ugly_HTML_part_3: No_more_ugly_HTML_part_3$1,
  No_more_ugly_HTML_part_4: No_more_ugly_HTML_part_4$1,
  Notifications: Notifications$1,
  Or: Or$1,
  Pagination: Pagination$1,
  People: People$1,
  Phone: Phone$1,
  Prev: Prev$1,
  Preview: Preview$1,
  Products: Products$1,
  Progress: Progress$1,
  Radio: Radio$1,
  Randomize: Randomize$1,
  Range: Range$1,
  Rating: Rating$1,
  Reset: Reset$1,
  Responsive: Responsive$1,
  Result: Result$1,
  Save: Save$1,
  Search: Search$1,
  Select: Select$1,
  Stack: Stack$1,
  Stat: Stat$1,
  Stats: Stats$1,
  Steps: Steps$1,
  Swap: Swap$1,
  Tab: Tab$1,
  Table: Table$1,
  Tabs: Tabs$1,
  Textarea: Textarea$1,
  Themeable: Themeable$1,
  Themes: Themes$1,
  Toast: Toast$1,
  Toggle: Toggle$1,
  Tooltip: Tooltip$1,
  Type: Type$1,
  Typography: Typography$1,
  Updates: Updates$1,
  Use: Use$1,
  Warning: Warning$1,
  Window: Window$1,
  __code: __code$1,
  __name: __name$1,
  __status: __status$1,
  changelog: changelog$1,
  components: components$1,
  config: config$1,
  contributing: contributing$1,
  default: zh_hans,
  excluded: excluded$1,
  license: license$1,
  links: links$1,
  pages: pages$1,
  themes: themes$1,
  updated: updated$1
}, Symbol.toStringTag, { value: "Module" }));
const __name = "中文";
const __code = "ZH";
const __status = "";
const components = "组件";
const themes = "主题";
const pages = "页面";
const config = "配置";
const links = "链接";
const changelog = "更新日志";
const license = "协议";
const contributing = "贡献";
const Install = "安装";
const Use = "使用";
const Config = "全局配置";
const Colors = "颜色";
const Themes = "主题";
const Actions = "动作";
const Button = "Button 按钮";
const Dropdown = "Dropdown 下拉菜单";
const Modal = "Modal 对话框";
const Swap = "Swap 调换";
const Accordion = "Accordion 手风琴";
const Alert = "Alert 警告提示";
const Avatar = "Avatar 头像";
const Badge = "Badge 徽章";
const Card = "Card 卡片";
const Carousel = "Carousel 轮播";
const Collapse = "Collapse 折叠面板";
const Countdown = "Countdown 计数";
const Kbd = "Kbd 键盘";
const Loading = "Loading 加载";
const Progress = "Progress 进度条";
const Stat = "Stat 统计展示";
const Table = "Table 表格";
const Tooltip = "Tooltip 文字提示";
const Checkbox = "Checkbox 复选框";
const Radio = "Radio 单选框";
const Range = "Range 范围滑块";
const Rating = "Rating 评分";
const Select = "Select 选择器";
const Textarea = "Textarea 多行文本框";
const Toggle = "Toggle 开关";
const Layout = "布局";
const Artboard = "Artboard 画板";
const Divider = "Divider 分隔线";
const Drawer = "Drawer 抽屉";
const Footer = "Footer 页脚";
const Hero = "Hero";
const Indicator = "Indicator 标志";
const Mask = "Mask 遮罩";
const Stack = "Stack 堆叠";
const Toast = "Toast";
const Navigation = "导航栏";
const Breadcrumbs = "Breadcrumbs 面包屑导航";
const Link = "Link 链接";
const Menu = "Menu 菜单";
const Navbar = "Navbar 导航栏";
const Pagination = "Pagination 分页";
const Steps = "Steps 步骤条";
const Tab = "Tab 选项卡";
const Mockup = "模型";
const Browser = "Browser 浏览器";
const Code = "Code 代码";
const Phone = "Phone 手机";
const Window = "Window 视窗";
const excluded = "除外";
const updated = "更新";
const Prev = "上一节";
const Next = "下一节";
const Warning = "警告";
const Or = "或者";
const Introduction = "介绍";
const Benefits = "收益";
const Tabs = "Tabs";
const Type = "类型";
const Search = "搜索";
const Randomize = "随机一个主题";
const Reset = "重置";
const Preview = "预览";
const Typography = "排版";
const Component = "组件类";
const Modifier = "装饰类";
const Responsive = "响应类";
const Features = "特性";
const Links = "链接";
const Message = "消息";
const Customizable = "可定制";
const Themeable = "可主题化";
const Dashboard = "仪表盘";
const Notifications = "通知";
const Messages = "消息";
const People = "用户";
const Products = "产品";
const Result = "结果";
const No_more_ugly_HTML_part_1 = "不";
const No_more_ugly_HTML_part_2 = "再";
const No_more_ugly_HTML_part_3 = "有丑陋";
const No_more_ugly_HTML_part_4 = "的 HTML";
const Click = "点击";
const Save = "保存";
const Apply_your_own_design_decisions_part_1 = "应用";
const Apply_your_own_design_decisions_part_2 = "您自己的";
const Apply_your_own_design_decisions_part_3 = "设计";
const Apply_your_own_design_decisions_part_4 = "决策";
const Apply_your_own_design_decisions_part_5 = "";
const Updates = "更新";
const Stats = "统计";
const zh_hant = {
  __name,
  __code,
  __status,
  "Tailwind CSS Components": "Tailwind CSS组件",
  "cta-1": "浏览组件",
  "cta-1-mobile": "组件",
  "cta-2": "阅读使用方法",
  "components-btn": "组件",
  "change-theme-btn": "主题",
  "all-components-btn": "查看全部组件",
  components,
  themes,
  "github-stars": "Github 星星",
  "npm-installs": "NPM 安装",
  "install-title": "安装 daisyUI",
  "install-desc": "没有任何依赖, 纯净 CSS。 可以作为 Tailwind CSS 的插件使用或者一个独立 CSS 库",
  "install-step-1": "作为 Node package 安装 daisyUI",
  "install-step-2": "作为 Tailwind CSS 的插件增加 daisyUI",
  "install-btn": "安装指导",
  "footer-tagline": "Free Component library <br /> For utility first CSS frameworks",
  pages,
  "how-to-install": "如何安装",
  "how-to-use-components": "如何使用组件",
  "how-to-customize": "如何自定义",
  "how-to-use-themes": "如何使用主题",
  "color-system": "颜色系统",
  config,
  links,
  changelog,
  license,
  contributing,
  "available-on": "获取渠道",
  "try-online": "在线试用",
  "created-by": "Created by",
  Install,
  Use,
  "Customize components": "自定义组件",
  Config,
  Colors,
  Themes,
  "Theme Generator": "主题生成器",
  "Layout & Typography": "布局 & 排版",
  Actions,
  Button,
  Dropdown,
  Modal,
  Swap,
  "Data display": "数据展示",
  Accordion,
  Alert,
  Avatar,
  Badge,
  Card,
  Carousel,
  "Chat bubble": "Chat bubble 聊天气泡",
  Collapse,
  Countdown,
  Kbd,
  Loading,
  Progress,
  "Radial progress": "Radial progress 圆形进度条",
  Stat,
  Table,
  Tooltip,
  "Data input": "数据输入",
  Checkbox,
  "Text input": "Text input 文字输入框",
  Radio,
  Range,
  Rating,
  Select,
  Textarea,
  Toggle,
  Layout,
  Artboard,
  "Button group": "Button group 按钮组",
  Divider,
  Drawer,
  Footer,
  Hero,
  Indicator,
  "Input group": "Input group 输入框组",
  Mask,
  Stack,
  Toast,
  Navigation,
  Breadcrumbs,
  "Bottom navigation": "Bottom navigation 底部导航栏",
  Link,
  Menu,
  Navbar,
  Pagination,
  Steps,
  Tab,
  Mockup,
  Browser,
  Code,
  Phone,
  Window,
  excluded,
  "CodePen example page": "CodePen 样例",
  "Tailwind Play example page": "Tailwind Play 样例",
  "new": "新增",
  updated,
  "Tailwind Plugin": "Tailwind 插件",
  "Use CDN": "使用 CDN",
  "Install daisyUI as a Tailwind CSS plugin": "作为 Tailwind CSS 的插件来安装 daisyUI",
  "You need <a href='https://nodejs.org/en/download/'>Node.js</a> and <a href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> installed.": "你需要安装 <a href='https://nodejs.org/en/download/'>Node.js</a> 和 <a href='https://tailwindcss.com/docs/installation/'>Taiwind CSS</a>。",
  "How to install daisyUI as a Tailwind CSS plugin?": "如何作为 Tailwind CSS 的插件来安装 daisyUI？",
  "Install daisyUI": "安装 daisyUI",
  "Then add daisyUI to your <code>tailwind.config.js</code> files": "然后，在你的<code>tailwind.config.js</code>文件里追加 daisyUI 的设置",
  "daisyUI example repositories": "daisyUI 样例项目",
  "See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.": "在不同框架和构建工具下的 daisyUI 与 TailwindCSS 的样例项目。",
  Prev,
  Next,
  "Do you have a question?": "你有什么问题么？",
  "Do you see a bug?": "你发现了 bug 么？",
  "Do you like daisyUI?": "你喜欢 daisyUI？",
  "Edit this page on GitHub": "在 GitHub 上编辑本页",
  "ask the community": "向社区提问题",
  "open an issue on GitHub": "在 GitHub 提 issue",
  "tweet about it!": "在 twitter、知乎、微博宣传 daisyui 吧！",
  Warning,
  "CDN files are not recommended for production <br/>because you can't purge unused styles and file size will be large.": "不建议在生产上使用 CDN 的版本<br/>因为你不能对未使用的样式进行裁剪，最终的打包大小会很大。",
  "You don't need to install anything.": "你不需要安装任何依赖。",
  "Just add one of these to the <code>head</code> tag of your HTML": "只需要在你的 HTML 的 <code>head</code>添加下面的代码",
  Or,
  "Add component classes to your HTML": "对你的 HTML 增加组件类",
  "How to use daisyUI classes to style your page?": "如何使用 daisyUI 的组件类来装饰你的页面呢？",
  "Once you <a href='/docs/install/'>installed daisyUI</a>, you can use component classes like <code>btn</code>, <code>card</code>, etc.": "一旦你 <a href='/docs/install/'>安装完成 daisyUI</a>， 你可以通过 <code>btn</code>, <code>card</code> 等等来使用组件类。",
  "So instead of making a button using only utility classes": "不用再像这样通过 Tailwind 原生工具类来制作一个按钮",
  "You can just use a component class like this": "你可以直接使用组件类来这样做",
  "Then you can modify the component with daisyUI additional utility classes": "你可以通过增加 daisyUI 组件类来修改这个组件",
  "Or you can modify the component with Tailwind CSS utility classes": "你也可以通过 TailwindCSS 的工具类来改变这个组件的样式",
  "Customize daisyUI components": "自定义 daisyUI 组件",
  "How to customize daisyUI?": "如何自定义 daisyUI",
  "daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.": "daisyUI 自有的设计系统有很多变量，通常你不需要定义任何变量。",
  "But you can still customize components in many ways.": "但是，你仍然可以通过很多方式来实现你的自定义目标",
  "Let's say, you want to customize this button:": "例如，你想自定义下面这个按钮：",
  "You can use daisyUI utility classes:": "你可以使用 daisyUI 的工具类：",
  "You can use Tailwind's utility classes:": "你可以使用 Tailwind 的工具类：",
  "You can customize components on your CSS file, using Tailwind's @apply directive:": "你可以通过 Tailwind 的 @apply 指令来自定义你的组件。",
  "You can also:": "你也可以：",
  "Add your own theme.": "增加自定义主题",
  "Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>.": "通过 <a href='/docs/config/'>只使用无样式的（骨架）版本的 daisyUI</a> 来完全去掉 daisyUI 的设计元素。",
  "How to change the default configuration of daisyUI?": "如何更改 daisyUI 的默认配置？",
  "daisyUI can be configured from your <code>tailwind.config.js</code> file.": "可以通过 <code>tailwind.config.js</code> 来配置 daisyUI 的配置。",
  "Default config": "默认配置",
  "Config values explained": "配置值说明",
  "If it's true, components will have colors and style so you won't need to design anything.": "如果设置为 true，组件会有默认的颜色和样式，所以你不需要去进行设计。",
  "If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.": "如果设为 false，组件是没有颜色和视觉样式的，所以你可以在一个基本的骨架上设计你自己的颜色和视觉样式。",
  "If it's true, all themes will be included.": "如果设为 true，则会包含所有的主题。",
  "If it's false, only light and dark themes will be available.": "如果设为 false，则只有白天和黑暗模式的主题。",
  "If it's an array, only themes in the array will be included and the first theme will be the default theme.": "如果是一个数组，则只有数组包含的主题会被加载，数组的第一个主题会成为默认主题。",
  "Read more about <a href='/docs/themes/'>themes</a>": "在<a href='/docs/themes/'>阅读更多关于主题的内容",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.": "如果设为 true，<a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>一些基础样式</a> 会被添加。",
  "If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.": "如果设为 true，<a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>响应式和工具类</a>会被添加",
  "If it's true, daisyUI shows logs in the terminal while CSS is building.": "如果设为 true，daisyUI 会在 CSS 构建时在命令行窗口输出日志。",
  "If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag.": "如果设为 true，你的主题会是从右向左展示。你需要在你的 body 标签添加<code>dir='rtl'</code>。",
  "If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically.": "如果你在 daisyUI 中使用 RTL 选项，我建议使用<a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> 插件，因为这个插件可以自动帮助你翻转所有 Tailwind 工具类。",
  "Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.": "选择另一个主题作为系统自动黑暗模式的主题。<code>dark</code> 是默认黑暗模式主题（或者自定义的主题名字是 <code>dark</code>）。通过这个配置，你可以给默认黑暗模式主题设定另一个主题。",
  "Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).": "给 daisyUI 的类名称增加一个前缀（包含所有的组件类，修饰类和响应类）。",
  "For example: <code>btn</code> will become <code>prefix-btn</code>.": "例如：<code>btn</code> 会变为 <code>prefix-btn</code>。",
  "If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.": "如果你还使用其他的 CSS 库，并且有冲突，可以用这个方法来避免冲突问题。",
  "Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.": "颜色名字（例如： <code>bg-primary</code>）或者 border-radius（例如：<code>rounded-box</code>）不会受到这个参数的影响，因为这些参数是作为 Tailwind CSS 类的扩展来设计的。",
  "If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.": "daisyUI 的<code>prefix</code> 的功能（例如<code>daisy-</code>）与 TailwindCSS 的<code>prefix</code> 的功能（例如 <code>tw-</code>）一起使用时，最后的类名是 <code>tw-daisy-btn</code>。",
  "How to use daisyUI colors?": "如何使用 daisyUI 的颜色体系？",
  Introduction,
  "daisyUI is fully themeable and colorable,": "daisyUI 可以完全进行主题化和颜色化，",
  "So instead of using constant color utility classes like:": "你可以不再使用普通颜色工具类的方式：",
  "It's suggested to use semantic color utility classes like:": "建议使用更有语义的颜色工具类：",
  "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.": "每一个颜色名字都有 CSS 变量，每一个 daisyUI 的主题都可以应用到这些颜色类上。",
  Benefits,
  "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces.": "当我们设计接口时，不再使用随机的颜色，而使用更有含义的名字。我们通过例如 <code>primary</code>、<code>Secondary</code> 来定义我们的调色盘颜色。我们只在我们的接口里使用这些特定的颜色。",
  "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.": "通过使用这些更有语义的颜色，主题的实现变得更容易。你不需要为每一个元素定义黑暗模式的颜色，并且你不再受限于只有一套白天/黑暗模式的主题。你可以有多种主题，每一个主题的本质就是一些 CSS 变量。",
  "List of all daisyUI color names": "daisyUI 颜色名",
  "You can use these color names in your theme or in utility classes.": "你可以在你的主题里或者工具类里使用这些颜色名字。",
  "Color name + description": "颜色名+描述",
  "Required or optional for themes": "每一种主题是否必须实现",
  "Example use": "使用样例",
  "How to use": "如何使用",
  "Some daisyUI components come with modifier class names and that modifier class name will apply a color.": "有一些组件类会有可以进行选择颜色的修饰类。",
  "For example": "例如：",
  "You can also use color names in utility classes just like Tailwind's original color names.": "就像在 Tailwind 的原生颜色名字一样，你也可以在工具类里使用这些颜色名字。",
  "These are utility classes that can be used with a color name:": "下面是可以使用颜色名字的工具类：",
  "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc.": "所以你可以使用 <code>bg-primary</code>、<code>border-secondary</code> 等等。",
  "Contribute to translation": "贡献翻译",
  "Accordion is used for showing and hiding content but only one item can stay open at a time.": "手风琴用于显示和隐藏内容，但一次只能打开一个项目。",
  "Alert informs users about important events.": "警告提示用来提示用户重要的事件消息。",
  "Artboard provides fixed size container to display a demo content on mobile size.": "Artboard 提供了固定尺寸的容器，用于在手机尺寸里显示演示内容。",
  "Avatars are used to show a thumbnail representation of an individual or business in the interface.": "头像用于在界面中显示个人或企业的缩略图。",
  "Badges are used to inform the user of the status of specific data.": "徽章是用来通知用户特定数据的状态。",
  "Bottom navigation bar allows navigation between primary screens.": "底部导航栏允许在主屏幕之间导航。",
  "Breadcrumbs helps users to navigate through the website.": "面包屑导航可以帮助用户导航网站。",
  "Button group shows buttons next to each other.": "按钮组展示了一些相邻的按钮。",
  "Buttons allow the user to take actions or make choices.": "按钮可以让用户执行命令或者作出选择。",
  "Cards are used to group and display content in a way that is easily readable.": "卡片用于显示易于阅读的显示内容。",
  "Carousel show images or content in a scrollable area.": "轮播可以在可滚动区域里显示图像或内容。",
  "Checkboxes are used to select or deselect a value.": "复选框用于选择或取消选择值。",
  "Collapse is used for showing and hiding content.": "折叠面板用于显示和隐藏内容。",
  "Countdown gives you a transition effect of changing numbers.": "计数给了你改变数字的过渡效果。",
  "You need to change to `--value` CSS variable using JS. Value must be a number between 0 and 99.": "你需要使用 JS 更改 `--value`CSS 变量。数值必须是一个介于 0 到 99 之间的数字。",
  "Divider will be used to separate content vertically or horizontally.": "分隔线用于垂直或水平分隔内容。",
  "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.": "抽屉是一种可以显示/隐藏页面左侧或右侧的侧边栏的网格布局。",
  "Dropdown can open a menu or any other element when the button is clicked.": "下拉菜单可以在点击按钮时打开菜单或其他元素。",
  "Footer can contain logo, copyright notice, and links to other pages.": "页脚可以包括标志、版权声明和链接到其他网页。",
  "Hero is a component for displaying a large box or image with a title and description.": "Hero 是显示带有标题和描述的大方框或图像的组件。",
  "Indicators are used to place an element on the corner of another element.": "标志用来将元素放置在另一个元素的角落。",
  "Input group puts an input next to a text or a button.": "输入框组将输入放在文本或按钮旁边。",
  "Text Input is a simple input field.": "文字输入框是简单的输入框。",
  "Join is a container for grouping multiple items, it can be used to group buttons, inputs, or any other element. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.": "Join 是用于对多个项目进行分组的容器，它可用于对按钮、输入或任何其他元素进行分组。Join 将边框半径应用于第一个和最后一个项目。Join 可用于创建一个水平或垂直的项目列表。",
  "Kbd is used to display keyboard shortcuts.": "键盘用于显示键盘快捷键的效果。",
  "Loading shows an animation to indicate that something is loading.": "加载会显示动画以指示正在加载某些内容。",
  "Link adds the missing underline style to links.": "链接将缺失的下划线样式添加到链接中。",
  "Mask crops the content of the element to common shapes.": "Mask 将元素的内容修剪成常见的形状。",
  "Menu is used to display a list of links vertically or horizontally.": "菜单用于垂直或水平显示链接列表。",
  "Browser mockup shows a box that looks like a browser window.": "浏览器模型展示了一个看起来像浏览器窗口的框。",
  "Code mockup is used to show a block of code in a box that looks like a code editor.": "代码模型用于在看起来像代码编辑器的方框中显示代码块。",
  "Phone mockup shows a mockup of an iPhone.": "手机模型显示了一个像 iPhone 的模型。",
  "Window mockup shows a box that looks like an operating system window.": "视窗模型展示了一个看起来像操作系统窗口的框。",
  "Modal is used to show a dialog or a box when you click a button.": "对话框用于点击按钮时显示对话框或一个盒子模型。",
  "Navbar is used to show a navigation bar on the top of the page.": "导航栏用于在页面顶部显示导航栏。",
  "Pagination is a group of buttons that allow the user to navigate between a set of related content.": "分页是一组按钮，允许用户在一系列相关内容之间移动。",
  "Progress bar can be used to show the progress of a task or to show the passing of time.": "进度条可以用来显示任务的进展情况，也可以用来显示时间的流逝。",
  "Radial progress can be used to show the progress of a task or to show the passing of time.": "圆形进度条可以用来显示任务的进度，也可以用来显示时间的流逝。",
  "Radio buttons allow the user to select one option from a set.": "使用单选框，用户可以从多个选项中选择一个选项。",
  "Range slider is used to select a value by sliding a handle.": "范围滑块用于滑动选择值。",
  "Rating is a set of radio buttons that allow the user to rate something.": "评价是一组单选按钮，用户可以对某件事进行评价。",
  "Select is used to pick a value from a list of options.": "选择器用于从选项列表中选择值。",
  "Stack visually puts elements on top of each other.": "堆叠使元素在视觉上有重叠的效果。",
  "Stat is used to show numbers and data in a box.": "统计展示用于在方框中显示数值和数据。",
  "Steps can be used to show a list of steps in a process.": "你可以使用步骤条来显示流程步骤的列表。",
  "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.": "使用 Swap，你可以使用复选框或类名来切换两个元素的显示。",
  "Tabs can be used to show a list of links in a tabbed format.": "你可以使用选项卡，以选项卡的形式显示链接列表。",
  "Table can be used to show a list of data in a table format.": "你可以使用表格来显示数据列表。",
  "Textarea allows users to enter text in multiple lines.": "多行文本框允许用户在多行中输入文本。",
  "Toggle is a checkbox that is styled to look like a switch button.": "开关是为了看起来像开关按钮的样式的复选框。",
  "Tooltip can be used to show a message when hovering over an element.": "你可以使用文字提示，当用户使用点击或者鼠标对准某个元素时显示消息。",
  "Browser mockup": "浏览器模型",
  "Code mockup": "代码模型",
  "Phone mockup": "手机模型",
  "Window mockup": "视窗模型",
  "File Input": "文件输入框",
  "Text Input": "文字输入框",
  "Range slider": "范围滑块",
  Tabs,
  "All daisyUI components": "所有的 daisyUI 组件",
  "Class name": "类名",
  Type,
  Search,
  "daisyUI comes with a number of themes, which you can use with no extra effort.": "daisyUI 原生已经有很多精美制作的主题，你可以直接获取它们。",
  "Each theme defines a set of colors which will be used on all daisyUI elements.": "每一个主题都定义了一些全局的变量，这些变量会影响所有的 daisyUI 组件。",
  "To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:": "要使用一个主题，只需要在 <span class=badge>tailwind.config.js</span> 里添加主题名字，然后在 <span class=badge>HTML</span> 标签里添加 <span class=badge>data-theme</span> 属性即可：",
  "I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage.": "我推荐使用 <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>，这样你可以方便的切换主题，并且主题的选择会存储在本地存储里。",
  "List of themes": "主题列表",
  "Try them:": "尝试它们:",
  "The default theme is <code>light</code> (or <code>dark</code> for dark mode)": "默认主题是 <code>light</code>（或者如果是黑暗模式则为 <code>dark</code> ）",
  "but you can <a href='https://daisyui.com/docs/config/'>change the default theme from tailwind.config.js</a>": "你可以通过配置 <a href='https://daisyui.com/docs/config/'>tailwind.config.js</a> 来改变默认的主题选择",
  "How to remove unused themes?": "如何去掉不使用的主题？",
  "You can only include the themes you want in your project.": "在你的项目中只引入你需要的主题。",
  "This will reduce the size of your CSS file.": "这会减小你最终的 CSS 文件。",
  "In the below example": "在下面的例子里",
  "<code>cupcake</code> will be the default theme for light mode": "<code>cupcake</code> 会成为 light 模式的默认主题",
  "<code>dark</code> will be the default theme for dark mode": "<code>dark</code> 会成为 dark 模式的默认主题",
  "<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>": "当 HTML 的 tag 存在 <code>data-theme='cmyk'</code> 时，主题会切换为 <code>cmyk</code> ",
  "How to disable all themes?": "如何禁止所有的主题？",
  "If you only want the default light and dark themes, set <code>themes</code> config to false.": "如果你只想使用默认的 light 和 dark 主题，设置 <code>themes</code> 配置为 false。",
  "If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array.": "如果你不想引入任何主题，并且禁止所有有语义的颜色名字， 设置 <code>themes</code> 配置为一个空数组。",
  "How to use a theme only for a section of a page?": "如何在页面的一部分使用主题？",
  "Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme.": "在你想使用主题的标签添加 <code>data-theme='THEME_NAME'</code> 即可以让这个标签下面使用对应的主题。",
  "You can nest themes and there is no limit!": "你可以嵌套使用主题，可能是无尽的，尝试吧！",
  "You can force a section of your HTML to only use a specific theme.": "你可以强制让你的 HTML 去使用一个特定的主题。",
  "How to add a new custom theme?": "如何增加自定义主题？",
  "You can add a new theme from <code>tailwind.config.js</code> file.": "你可以在你的 <code>tailwind.config.js</code> 文件里添加一个新主题。",
  "In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes.": "在下面这个例子里，我添加了一个新主题叫 <code>mytheme</code> 并且我也引入了 <code>dark</code> 和 <code>cupcake</code> 主题。",
  "The first theme (<code>mytheme</code>) will be the default theme.": "第一个主题 （<code>mytheme</code>） 会成为默认主题。",
  "<code>dark</code> theme will be the default theme for dark mode.": "<code>dark</code> 主题会成为默认的黑暗模式主题。",
  "In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button).": "在下面这个例子里，我只设定了必要的颜色。 其他颜色会自动由 daisyUI 生成 （当一个按钮成为焦点时的颜色，或者一个<code>primary</code> 按钮的文字颜色）。",
  "CSS variables in daisyUI themes": "daisyUI 主题的 CSS 变量",
  "There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:": "如果你想自定义 daisyUI 主题，这里有一些你可以调整的 CSS 变量：",
  "You can also add <a href='/docs/colors/' class='link'>optional color names</a> to have full control over all colors.": "你也可以添加 <a href='/docs/colors/' class='link'>可选颜色名字</a> 来完全控制所有的颜色。",
  "Custom CSS for a daisyUI theme": "给 daisyUI 主题增加自定义 CSS",
  "You can apply custom style to a daisyUI themes using CSS:": "你可以通过 CSS 给 daisyUI 主题增加样式：",
  "How to customize an existing theme?": "如何对已有主题进行自定义设置？",
  "In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.": "在你的 tailwind.config.js，你可以获取一个特定的主题，并且覆盖这个主题的颜色变量。",
  "In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:": "在下面这个例子，我调整了 <code>light</code> 主题，并且改变了这个主题的 <code>primary</code> 和 <code>primary-focus</code> 的颜色：",
  "daisyUI themes": "daisyUI 主题",
  "How to use daisyUI themes?": "如何使用 daisyUI 的主题？",
  "daisyUI Theme Generator": "daisyUI 主题生成器",
  "You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them.": "你可以在 <span class='badge badge-outline'>tailwind.config.js</span> 文件里设置 <span class='badge badge-outline'>daisyui > themes</span> 数组来增加你的自定义主题。在这个页面，你可以查看你定义的颜色影响的组件外观的变化。",
  "You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)": "你可以通过设置可选颜色变量来增加你的控制力（例如：当一个按钮成为焦点时的文字颜色）",
  "Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use.": "查看 <a class='link font-bold' href='/docs/colors/'>颜色页面</a> 来了解你可以更改的颜色名字变量。",
  "Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)": "查看 <a class='link font-bold' href='/docs/themes/'>主题页面</a> 来了解你可以调整的 CSS 变量（例如： border-radius, animations 等等。）",
  Randomize,
  Reset,
  Preview,
  "Layout and Typography": "布局和排版",
  "How to use layouts and typography in daisyUI": "如何在 daisyUI 中使用布局和排版",
  "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.": "布局， 大小， grids， 间隔等等。所有这些可以用 Tailwind CSS 的工具类来调整",
  "Read more": "阅读更多",
  Typography,
  "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.": "你应该使用官方的 <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>.",
  "It handles everything and it's fully customizable.": "这个插件可以操作所有的情况，而且本身就可以调整。",
  "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.": "daisyUI 增加一些样式给  @tailwindcss/typography 所以这些组件可以和其他元素一样获取同样的主题",
  "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js": "确保你在  tailwind.config.js 引用 <span class='badge badge-outline'>daisyui</span> 在<span class='badge badge-outline'>@tailwindcss/typography</span> 的后面",
  "Here you can see how elements will look using <code>@tailwindcss/typography</code>.": "这里你可以看到使用 <code>@tailwindcss/typography</code> 如何影响你的元素：",
  "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>": "为了使用一个自定义前缀， <a class='link' href='/docs/config/#prefix'>在配置文件中增加前缀设置</a>",
  Component,
  Modifier,
  Responsive,
  "Changes the style of a component": "改变一个组件的样式",
  "Supports responsive prefixes (sm:, lg:, …)": "支持响应式前缀 (sm:, lg:, …)",
  "Make your theme": "做一个主题",
  "More examples": "更多示例",
  "Support daisyUI's development": "支持daisyUI的开发",
  "The most popular": "最流行的",
  "component library": "组件库",
  "for Tailwind CSS": "为Tailwind CSS",
  "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>": "daisyUI 将组件类名添加到 Tailwind&nbsp;CSS 中，<br />因此您可以制作美丽的网站 <span class='border-base-content/20 border-b-2'>比以往更快。</span>",
  "don't re-invent<br/>the wheel<br/>every time": "不要每次都重复造轮子",
  "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.": "在Tailwind CSS项目中，您需要为每个元素编写实用程序类名。数千个类名仅用于为最基本的元素定义样式。",
  "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>": "不用再写<br /> <span class='text-error'><span class='font-black'>100</span> 个类名</span>",
  "For every element, every page, every project,<br/>again and again": "对每个元素，每个页面，每个项目，<br/>一遍又一遍",
  "use <span class='text-success'><span class='font-black'>semantic</span><br />class names</span>": "使用 <span class='text-success'><span class='font-black'>语义化</span><br />的类名</span>",
  "It's descriptive, faster, cleaner and easier to maintain.": "更清晰，更快速，更干净，更容易维护",
  Features,
  Links,
  Message,
  "Cleaner HTML": "更干净的 HTML",
  Customizable,
  Themeable,
  "Pure CSS": "纯 CSS",
  Dashboard,
  Notifications,
  Messages,
  People,
  Products,
  "Use Tailwind CSS but write fewer class names.": "使用 Tailwind CSS，但写更少的类名。",
  "Pure CSS. <br />No JS dependency": "纯 CSS. <br />无 JS 依赖",
  "Works on all frameworks": "适用于所有框架",
  "Design system": "设计系统",
  "Styling a simple button": "样式化一个简单的按钮",
  Result,
  "Take Tailwind CSS": "采用 Tailwind CSS",
  "to the next level": "提升至下一级",
  "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like": "daisyUI 为 Tailwind CSS 添加了类名<br />以支持所有常用的 UI 组件。<br />类名如下",
  "and many more.": "等等",
  "This allows us to focus on important things<br />instead of styling basic elements for every project.": "这使我们可以专注于重要的事情<br />而不是为每个项目设置基本元素的样式。",
  No_more_ugly_HTML_part_1,
  No_more_ugly_HTML_part_2,
  No_more_ugly_HTML_part_3,
  No_more_ugly_HTML_part_4,
  "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.": "写更少的类名<br />使用组件类名<br />使用 Tailwind CSS 工具类修改它们。",
  Click,
  "Tailwind only": "仅 Tailwind",
  "Tailwind + daisyUI": "Tailwind + daisyUI",
  Save,
  "Accept terms of use": "接受使用条款",
  "Submit to newsletter": "提交到新闻通讯",
  "Fewer class names": "更少的类名",
  "Faster development": "更快的开发速度",
  "Smaller file size": "更小的文件大小",
  "With daisyUI, you write 80% fewer class names<br />And your HTML size will be about 70% smaller.": "使用 daisyUI，您只需编写 20% 的类名<br />而您的 HTML 大小将缩小约 70%。",
  "CSS Class names": "CSS 类名",
  "fewer class names": "更少的类名",
  "HTML size": "HTML 大小",
  "smaller DOM size": "更小的 DOM 大小",
  "Highly customizable": "高度可定制",
  "Powered by Tailwind&nbsp;CSS utility&nbsp;classes": "基于 Tailwind&nbsp;CSS 实用程序&nbsp;类",
  "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes.": "daisyUI 是基于 Tailwind&nbsp;CSS 的<br />所以您可以使用实用程序类定制一切。",
  "Pure CSS.": "纯 CSS。",
  "Framework agnostic.": "框架不可知。",
  "Works everywhere.": "随处可用。",
  "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file.": "daisyUI 是 Tailwind CSS 的插件。它适用于所有 JS 框架，不需要 JS 捆绑文件。",
  "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name.": "将 daisyUI 作为 dev 依赖项安装，并像任何其他 Tailwind CSS 类名一样使用类名。",
  Apply_your_own_design_decisions_part_1,
  Apply_your_own_design_decisions_part_2,
  Apply_your_own_design_decisions_part_3,
  Apply_your_own_design_decisions_part_4,
  Apply_your_own_design_decisions_part_5,
  "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components.": "您的网站应该是独一无二的。使用daisyUI主题生成器为自己创建一个自定义主题。您选择的颜色将应用于所有daisyUI组件。",
  "Learn more about themes": "了解更多主题相关信息",
  "utility classes": "实用工具类",
  "endless possibilities": "无穷的可能性",
  "Mix and match daisyUI class names to create unique web pages.": "混合并匹配daisyUI类名以创建独特的网页。",
  "daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS": "daisyUI是<br />Tailwind CSS的最受欢迎<br />的组件库",
  "open-source projects using daisyUI": "使用daisyUI的开源项目",
  "Free and open-source": "免费且开源",
  "Built by the community": "由社区构建",
  "daisyUI welcomes contributions from developers around the world": "daisyUI欢迎来自世界各地的开发者的贡献",
  "Sponsors and backers": "赞助商和支持者",
  "Try daisyUI": "尝试daisyUI",
  "on your favorite framework": "在您喜欢的框架上",
  "See all examples": "查看所有示例",
  "Or play with daisyUI on": "或在daisyUI上玩耍",
  "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.": "聊天气泡用于显示一行对话及其所有数据，包括作者图像、作者名称、时间等。",
  "File Input is a an input field for uploading files.": "文件输入框是一个用于上传文件的输入框。",
  "Toast is a wrapper to stack elements, positioned on the corner of page.": "Toast 是一个用于堆叠元素的包装器，位于页面的角落。",
  "Admin panel": "管理面板",
  Updates,
  Stats,
  "Unlimited themes": "无限主题",
  "with zero effort": "不费吹灰之力",
  "daisyUI adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values. Using daisyUI color names, you get Dark Mode and even more themes without adding a new class name.": "daisyUI为Tailwind CSS添加了一组可自定义的颜色名称，这些新颜色使用CSS变量作为值。使用daisyUI颜色名称，您可以获得暗模式和更多主题，而无需添加新的类名称。",
  "See all themes": "查看所有主题",
  "Semantic colors": "语义化颜色",
  "Learn more about colors": "了解更多关于颜色的知识",
  "Get started": "现在开始",
  "daisyUI 3 is available now!": "daisyUI 3 现在可用！",
  "How to add custom styles for a specific theme?": "如何为一个指定的主题添加自定义样式？",
  "You can write custom style for your elements only for a specific theme.": "你只能给一个指定的主题的元素写自定义样式。",
  "In this example, .btn-twitter class only will have this style on light theme.": "在这个例子里，<code>.btn-twitter</code> 类只会在 <code>light</code> 主题中才会有这些样式",
  "Become a sponsor": "成为赞助商",
  "": ""
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Accordion,
  Actions,
  Alert,
  Apply_your_own_design_decisions_part_1,
  Apply_your_own_design_decisions_part_2,
  Apply_your_own_design_decisions_part_3,
  Apply_your_own_design_decisions_part_4,
  Apply_your_own_design_decisions_part_5,
  Artboard,
  Avatar,
  Badge,
  Benefits,
  Breadcrumbs,
  Browser,
  Button,
  Card,
  Carousel,
  Checkbox,
  Click,
  Code,
  Collapse,
  Colors,
  Component,
  Config,
  Countdown,
  Customizable,
  Dashboard,
  Divider,
  Drawer,
  Dropdown,
  Features,
  Footer,
  Hero,
  Indicator,
  Install,
  Introduction,
  Kbd,
  Layout,
  Link,
  Links,
  Loading,
  Mask,
  Menu,
  Message,
  Messages,
  Mockup,
  Modal,
  Modifier,
  Navbar,
  Navigation,
  Next,
  No_more_ugly_HTML_part_1,
  No_more_ugly_HTML_part_2,
  No_more_ugly_HTML_part_3,
  No_more_ugly_HTML_part_4,
  Notifications,
  Or,
  Pagination,
  People,
  Phone,
  Prev,
  Preview,
  Products,
  Progress,
  Radio,
  Randomize,
  Range,
  Rating,
  Reset,
  Responsive,
  Result,
  Save,
  Search,
  Select,
  Stack,
  Stat,
  Stats,
  Steps,
  Swap,
  Tab,
  Table,
  Tabs,
  Textarea,
  Themeable,
  Themes,
  Toast,
  Toggle,
  Tooltip,
  Type,
  Typography,
  Updates,
  Use,
  Warning,
  Window,
  __code,
  __name,
  __status,
  changelog,
  components,
  config,
  contributing,
  default: zh_hant,
  excluded,
  license,
  links,
  pages,
  themes,
  updated
}, Symbol.toStringTag, { value: "Module" }));
const readEnv = (id2, defaultValue = "") => {
  if ({ "VITE_DAISYUI_VERSION": "3.7.5", "VITE_ROOT": "https://daisyui.com", "VITE_GTM": "false", "VITE_ADS": "true", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true }[id2] !== void 0) {
    return { "VITE_DAISYUI_VERSION": "3.7.5", "VITE_ROOT": "https://daisyui.com", "VITE_GTM": "false", "VITE_ADS": "true", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true }[id2];
  }
  return defaultValue;
};
const subString = (input, from, to) => {
  return input.slice(input.indexOf(from) + from.length, input.lastIndexOf(to));
};
const timeago = (timestamp, locale = "en") => {
  let value;
  const diff = ((/* @__PURE__ */ new Date()).getTime() - new Date(timestamp).getTime()) / 1e3;
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  if (years > 0) {
    value = rtf.format(0 - years, "year");
  } else if (months > 0) {
    value = rtf.format(0 - months, "month");
  } else if (days > 0) {
    value = rtf.format(0 - days, "day");
  } else if (hours > 0) {
    value = "today";
  } else {
    value = "";
  }
  return value;
};
const formattedDate = (date) => {
  return new Date(date).toLocaleDateString("en-UK", { dateStyle: "medium" });
};
const translations = /* @__PURE__ */ Object.assign({ "../translation/en.json": __vite_glob_0_0, "../translation/es.json": __vite_glob_0_1, "../translation/fr.json": __vite_glob_0_2, "../translation/id.json": __vite_glob_0_3, "../translation/ja.json": __vite_glob_0_4, "../translation/ko.json": __vite_glob_0_5, "../translation/pt.json": __vite_glob_0_6, "../translation/ru.json": __vite_glob_0_7, "../translation/uk.json": __vite_glob_0_8, "../translation/zh_hans.json": __vite_glob_0_9, "../translation/zh_hant.json": __vite_glob_0_10 });
let localesArray = [];
Object.entries(translations).map(([path2]) => {
  let localeFileName = subString(path2, "/translation/", ".json");
  localesArray.push(localeFileName);
});
const path = "../translation";
const defaultLang = "en";
const currentLang = writable(defaultLang);
const langs = localesArray;
function translate(currentLang2, key, vars, returnFallback) {
  if (!key)
    throw new Error("no key provided to $t()");
  let text = translations[`${path}/${currentLang2}.json`].default[key];
  if (!currentLang2)
    throw new Error(`no translation for key "${key}"`);
  if (!text) {
    if (translations[`${path}/${currentLang2}.json`].default[key] == void 0) {
      if (translations[`${path}/${defaultLang}.json`].default[key] == void 0) {
        return key;
      } else if (returnFallback === false) {
        return key;
      } else {
        console.warn(
          `"${currentLang2}.${key}" translation not found. Showing "${defaultLang}.${key}" instead.`
        );
        return translations[`${path}/${defaultLang}.json`].default[key];
      }
    }
  }
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });
  return text;
}
const t = derived(
  currentLang,
  ($currentLang) => (key, vars = {}, lang = $currentLang, returnFallback = true) => translate(lang, key, vars, returnFallback)
);
export {
  pagesThatDontNeedSidebar as a,
  themes$b as b,
  currentLang as c,
  siteData as d,
  defaultLang as e,
  exampleRepos as f,
  formattedDate as g,
  timeago as h,
  langs as l,
  pages$b as p,
  readEnv as r,
  siteStats as s,
  t
};
