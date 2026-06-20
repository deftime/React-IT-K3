import {useEffect, useState} from "react";
import {api} from "../api/getTracks";
import type {TrackType} from "../api/getTracks";

export function useTrackList() {
    const [tracks, setTracks] = useState<TrackType[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        api.getTracks().then(json => {
            setTracks(json.data)
        })
          .catch(err => {
              setError(err.message)
              console.log('Tracks data error: ' + err)
          });
    }, []);

    return {
        tracks,
        error
    }
}