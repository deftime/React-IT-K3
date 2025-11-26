import clsx from 'clsx';
import cls from './scss/App.module.scss';
import {useEffect, useState} from "react";
import loader from './img/loader.svg';

export function App() {

    const [selectedTrack, setSelected] = useState(null);
    const [tracks, setTracks] = useState(null);

    console.log(tracks);

    useEffect(()=>{
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

    return (
        <section className={cls.musicPlayer}>
            <h1 id={'title'} className={cls.title}>
                My player
            </h1>
            <hr/>
            <div className={cls.trackBox}>
                {!tracks ? <img src={loader} alt="" /> : undefined}
                {tracks && tracks.length === 0 ? <span>NO tracks!</span> : tracks?.map((item) => {
                    return (
                        <div key={item.id} className={cls.track} style={{
                            background: item.id === selectedTrack ? 'yellow' : 'none'
                        }} onClick={ ()=>{
                            setSelected(item.id)
                        } }>
                            <div className={cls.name}>{item.attributes.title}</div>
                            <audio src={item.attributes.attachments[0].url} controls={true}/>
                        </div>
                    )
                })}
            </div>
            <div className={cls.btnReset} onClick={()=>{
                setSelected(null)
            }}>Reset</div>
        </section>
    )
}
