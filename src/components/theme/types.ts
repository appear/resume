export interface Theme extends Common {
  color: {
    backgroundColor: string
    text: string
    link: string
  }
}

export interface Common {
  fontSize: number[]
}
