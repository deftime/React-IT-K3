import clsx from 'clsx';
import cls from './scss/App.module.scss';
import {useEffect, useState} from "react";
import loader from './img/loader.svg';

export function App() {

    const [selectedTrackId, setSelectedId] = useState(null);
    const [selectedTrack, setSelected] = useState(null);
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': '***' // Set key
            }
        })
            .then(resp => resp.json())
            .then(json => {
                setTracks(json.data)
            })
    }, []);

    function selectTrack(id) {
        setSelectedId(id);

        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + id, {
            headers: {
                'api-key': '***' // Set key
            }
        })
            .then(resp => resp.json())
            .then(json => {
                setSelected(json.data)
            })

        console.log(selectedTrack);

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
                                     selectTrack(item.id)
                                 }}>
                                <div className={cls.name}>{item.attributes.title}</div>
                                <audio src={item.attributes.attachments[0].url} controls={true}/>
                            </div>
                        )
                    })}
                    <div className={cls.btnReset} onClick={() => {
                        setSelectedId(null)
                        setSelected(null)
                    }}>Reset
                    </div>
                </div>
                <div className={clsx(cls.side, cls.details)}>
                    <div className={cls.sideTitle}>Details</div>
                    {!selectedTrackId && <div className={cls.noTrack}>Select a track!</div>}
                    {selectedTrackId && !selectedTrack && <img src={loader} alt="" className={cls.loader}/>}
                    {selectedTrack && <div className={cls.infoBox}>
                        <div className={cls.name}>{selectedTrack.attributes.title}</div>
                        <div className={cls.date}>{new Date(selectedTrack.attributes.releaseDate).toLocaleDateString()}</div>
                        <div className={cls.duration}>{selectedTrack.attributes.duration} min.</div>
                        <div className={cls.size}>{selectedTrack.attributes.attachments[0].fileSize} Bytes</div>
                        <hr/>
                        <div className={cls.lyrics}>{selectedTrack.attributes.lyrics}</div>
                    </div>}
                </div>
            </div>
        </section>
    )
}
