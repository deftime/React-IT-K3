import clsx from 'clsx';
import cls from "../scss/TrackDetails.module.scss";
import loader from "../img/loader.svg";
import {useTrack} from "../hooks/useTrack";

type PropsType = {
    id: string | null
}

export function TrackDetails(props: PropsType) {
    const { track } = useTrack(props.id);

    return (
        <>
            {!props.id && <div className={cls.noTrack}>Select a track!</div>}
            {props.id && !track && <img src={loader} alt="loader" className={clsx(cls.loader, 'loader')}/>}
            {props.id && track && (
                <div className={cls.infoBox}>
                    <div className={cls.name}>{track.attributes.title}</div>
                    <div className={cls.date}>{new Date(track.attributes.releaseDate).toLocaleDateString()}</div>
                    <div className={cls.duration}>{track.attributes.duration} min.</div>
                    <div className={cls.size}>{(track.attributes.attachments[0].fileSize / 1048576).toFixed(2)} MB</div>
                    <hr/>
                    <div className={cls.lyrics}>{track.attributes.lyrics}</div>
                </div>
            )}
        </>
    )
}