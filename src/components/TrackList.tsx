import loader from "../img/loader.svg";
import {Track} from "./Track";
import {useTrackList} from "../hooks/useTrackList";
import type {SetSelectedIdType} from "../App";

type PropsType = {
    selectedTrackId: string | null
    setSelectedId: SetSelectedIdType
}

export function TrackList(props: PropsType) {
    const trackList = useTrackList();

    return (
        <>
            {!trackList.tracks && <img src={loader} alt="" className={'loader'}/>}
            {trackList.tracks && trackList.tracks.length === 0 ? <span>NO tracks!</span> : trackList.tracks?.map((item) => {
                return (
                    <Track key={item.id}
                           id={item.id}
                           title={item.attributes.title}
                           url={item.attributes.attachments[0].url}
                           onSelect={props.setSelectedId}
                           isSelect={props.selectedTrackId === item.id}
                    />
                )
            })}
        </>
    )
}