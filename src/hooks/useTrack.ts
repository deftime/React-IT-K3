import {useEffect, useState} from "react";
import {getTrack} from "../api/api";
import type {TrackType} from "../api/api";

export function useTrack(id: string | null) {
    const [selectedTrack, setSelected] = useState<TrackType | null>(null);

    useEffect(() => {
        setSelected(null);
        id && getTrack(id).then(json => { setSelected(json.data) })
    }, [id])

    return {
        track: selectedTrack
    }
}