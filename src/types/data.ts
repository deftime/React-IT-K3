type TrackAttachmentsType = {
  fileSize: number
  url: string
}

export type TrackType = {
  id: string
  attributes: {
    title: string
    releaseDate: string
    duration: number
    lyrics: string | null
    attachments: TrackAttachmentsType[]
  }
}