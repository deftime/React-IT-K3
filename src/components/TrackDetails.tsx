import clsx from 'clsx';
import cls from "../scss/TrackDetails.module.scss";
import loader from "../img/loader.svg";
import {useEffect, useState} from "react";

export function TrackDetails(props) {
    const [selectedTrack, setSelected] = useState(null);

    useEffect(() => {
        setSelected(null);
        props.id && fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + props.id, {
            headers: {
                'api-key': 'bd6aa3a8-56fe-49ab-8c1e-1092c9534da1' // Set key
            }
        })
            .then(resp => resp.json())
            .then(json => {
                setSelected(json.data)
            })
    }, [props.id])

    return (
        <>
            {!props.id && <div className={cls.noTrack}>Select a track!</div>}
            {props.id && !selectedTrack && <img src={loader} alt="loader" className={clsx(cls.loader, 'loader')}/>}
            {props.id && selectedTrack && (
                <div className={cls.infoBox}>
                    <div className={cls.name}>{selectedTrack.attributes.title}</div>
                    <div className={cls.date}>{new Date(selectedTrack.attributes.releaseDate).toLocaleDateString()}</div>
                    <div className={cls.duration}>{selectedTrack.attributes.duration} min.</div>
                    <div className={cls.size}>{(selectedTrack.attributes.attachments[0].fileSize / 1048576).toFixed(2)} MB</div>
                    <hr/>
                    <div className={cls.lyrics}>{selectedTrack.attributes.lyrics}</div>
                </div>
            )}
        </>
    )
}