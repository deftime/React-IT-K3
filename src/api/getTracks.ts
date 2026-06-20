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

type ApiType = {
    getTracks(): Promise<{data: TrackType[]}>
    getTrack(id: string): Promise<{data: TrackType}>
}

export const api: ApiType = {
    async getTracks() {
        const resp = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': import.meta.env.VITE_API_KEY_PLAYER
            }
        })
        return await resp.json()
    },
    async getTrack(id) {
        const resp = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + id, {
            headers: {
                'api-key': import.meta.env.VITE_API_KEY_PLAYER
            }
        })
        return await resp.json()
    }
}