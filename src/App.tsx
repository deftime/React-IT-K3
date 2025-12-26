import clsx from 'clsx';
import cls from './scss/App.module.scss';
import {useEffect, useState} from "react";
import loader from './img/loader.svg';

export function App() {

    const [selectedTrackId, setSelectedId] = useState(null);
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': 'a34b9cfb-e9cc-46bc-8985-5f6746df6e8f' // Set key
            }
        })
            .then(resp => resp.json())
            .then(json => {
                setTracks(json.data)
            })
    }, []);

    function selectTrack(id) {
        setSelectedId(id);
    }

    return (
        <section className={cls.musicPlayer}>
            <h1 id={'title'} className={cls.title}>
                My player
            </h1>
            <hr/>
            <div className={cls.trackBox}>
                <div className={clsx(cls.side, cls.list)}>
                    <div className={cls.sideTitle}>Tracks</div>
                    {!tracks && <img src={loader} alt="" className={cls.loader}/>}
                    {tracks && tracks.length === 0 ? <span>NO tracks!</span> : tracks?.map((item) => {
                        return (
                            <div key={item.id} className={clsx(cls.track, item.id === selectedTrackId && cls.selected)}
                                 onClick={() => {
                                     setSelectedId(item.id)
                                 }}>
                                <div className={cls.name}>{item.attributes.title}</div>
                                <audio src={item.attributes.attachments[0].url} controls={true}/>
                            </div>
                        )
                    })}
                    <div className={cls.btnReset} onClick={() => {
                        setSelectedId(null)
                    }}>Reset
                    </div>
                </div>
                <div className={clsx(cls.side, cls.details)}>
                    <div className={cls.sideTitle}>Details</div>
                    <div className={cls.infoBox}>

                    </div>
                </div>
            </div>
        </section>
    )
}
