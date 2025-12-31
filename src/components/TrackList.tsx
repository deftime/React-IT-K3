import loader from "../img/loader.svg";
import {useEffect, useState} from "react";
import {Track} from "./Track";

export function TrackList(props) {
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': 'bd6aa3a8-56fe-49ab-8c1e-1092c9534da1' // Set key
            }
        })
            .then(resp => resp.json())
            .then(json => {
                setTracks(json.data)
            })
    }, []);

    function setSelect(id) {
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