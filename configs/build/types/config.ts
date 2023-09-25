export type BuildMode = 'development' | 'production'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildEvn {
  port: number
  mode: BuildMode
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  __IS_DEV__: boolean
  port: number
}
