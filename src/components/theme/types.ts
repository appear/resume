export interface Theme extends Common {
  color: {
    background_color: string
    bio_tag: string
    text: string
    link: string
    hash_tag: string
  }
}

export interface Common {
  fontSize: number[]
}
