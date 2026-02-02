import loader from "../img/loader.svg";
import {useEffect, useState} from "react";
import {Track} from "./Track";
import {getTracks} from "../api/api";
import type {TrackType} from "../api/api";
import type {SetSelectedIdType} from "../App";

type PropsType = {
    selectedTrackId: string | null
    setSelectedId: SetSelectedIdType
}

export function TrackList(props: PropsType) {
    const [tracks, setTracks] = useState<TrackType[] | null>(null);

    useEffect(() => {
        getTracks().then(json => {
            setTracks(json.data)
        })
    }, []);

    function setSelect(id: string) {
        props.setSelectedId(id)
    }

    return (
        <>
            {!tracks && <img src={loader} alt="" className={'loader'}/>}
            {tracks && tracks.length === 0 ? <span>NO tracks!</span> : tracks?.map((item) => {
                return (
                    <Track key={item.id}
                           id={item.id}
                           title={item.attributes.title}
                           url={item.attributes.attachments[0].url}
                           onSelect={setSelect}
                           isSelect={props.selectedTrackId === item.id}
                    />
                )
            })}
        </>
    )
}