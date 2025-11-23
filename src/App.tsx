import './App.css'
import { useState } from "react";

//const tracks = null;
const tracks = [
    {
        id: 1,
        title: "MusicFun MainTheme",
        url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
        id: 2,
        title: "MusicFun Soundtrack",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
    {
        id: 3,
        title: "MusicFun MT",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
]

export function App() {

    const [selectedTrack, setSelected] = useState(null);

    return (
        <section className={'music-player'}>
            <h1 id={'title'} className={'title'}>
                My player
            </h1>
            <hr/>
            <div className={'track-box'}>
                {!tracks ? <span>Loading...</span> : undefined}
                {tracks && tracks.length === 0 ? <span>NO tracks!</span> : tracks?.map((item) => {
                    return (
                        <div key={item.id} className={'track'} style={{
                            background: item.id === selectedTrack ? 'yellow' : 'none'
                        }} onClick={ ()=>{
                            setSelected(item.id)
                        } }>
                            <div className={'name'}>{item.title}</div>
                            <audio src={item.url} controls={true}/>
                        </div>
                    )
                })}
            </div>
            <div className={'btn-reset'} onClick={()=>{
                setSelected(null)
            }}>Reset</div>
        </section>
    )
}
