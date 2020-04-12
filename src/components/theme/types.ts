export interface Theme extends Common {
  color: {
    background_color: string
    bio_tag: string
    text: string
    link: string
  }
}

export interface Common {
  fontSize: number[]
}
