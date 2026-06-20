import {useEffect, useState} from "react";
import {api} from "../api/getTracks";
import type {TrackType} from "../api/getTracks";

export function useTrack(id: string | null) {
    const [selectedTrack, setSelected] = useState<TrackType | null>(null);

    useEffect(() => {
        setSelected(null);
        id && api.getTrack(id).then(json => { setSelected(json.data) })
    }, [id])

    return {
        track: selectedTrack
    }
}