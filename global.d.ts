// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ZButton: typeof import('sekiro-ui')['ZButton']
  }
}

export {}
