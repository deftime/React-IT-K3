import type {TrackType} from "../types/data";

type ApiType = {
  getTracks(): Promise<{ data: TrackType[] }>
  getTrack(id: string): Promise<{ data: TrackType }>
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