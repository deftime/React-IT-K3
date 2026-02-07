import {useEffect, useState} from "react";
import {getTracks} from "../api/api";
import type {TrackType} from "../api/api";

export function useTrackList() {
    const [tracks, setTracks] = useState<TrackType[] | null>(null);

    useEffect(() => {
        getTracks().then(json => {
            setTracks(json.data)
        })
    }, []);

    return {
        tracks
    }
}