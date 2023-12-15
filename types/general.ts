export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface Photo {
  albumId: number
  id: number
  url: string
  title: string
  thumbnailUrl: string
}
