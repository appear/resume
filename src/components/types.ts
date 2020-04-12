export type MetaData = {
  title: string
  introduce: string
}

export type ContactType = 'github' | 'phone' | 'mail' | 'blog' | 'linkedIn'

export type Contact = {
  [key in ContactType]?: string
}

export type Project = {
  name: string
  start_date: string
  end_date: string
  summary: string
  link: string
  experiences: string[]
  tags: string[]
}

export type Career = {
  logo: string
  name: string
  summary: string
  department: string
  start_date: string
  end_date: string
  position: string
  projects: Project[]
}

export type Content = {
  title: string
  description: string
}

export type Category = {
  name: string
  contents: Content[]
}

export type Bio = {
  name: string
  job_search: boolean
}
