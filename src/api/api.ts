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

export function getTracks(): Promise<{data: TrackType[]}> {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            'api-key': 'e514685f-7e59-43d6-9938-2734fd22d550' // Set key
        }
    }).then(resp => resp.json())
}

export function getTrack(id: string): Promise<{data: TrackType}> {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + id, {
        headers: {
            'api-key': 'e514685f-7e59-43d6-9938-2734fd22d550' // Set key
        }
    }).then(resp => resp.json())
}