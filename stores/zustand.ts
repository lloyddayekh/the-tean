import { Photo } from '@/types/general'
import { create } from 'zustand'

type PhotoStore = {
  photo: Photo
  setPhoto: (photo: Photo) => void
}

export const usePhotoStore = create<PhotoStore>((set) => ({
  photo: {
    albumId: 0,
    id: 0,
    thumbnailUrl: '',
    title: '',
    url: '',
  },
  setPhoto: (photo) => set({ photo }),
}))
