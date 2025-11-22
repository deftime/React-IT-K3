import './App.css'

//const tracks = null;
const tracks = [
    {
        id: 1,
        title: "Musicfun soundtrack",
        url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
        id: 2,
        title: "Musicfun soundtrack instrumental",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
]

const selectedTrack = 2;

export function App() {

    // if (tracks.length === 0) {
    //     return (
    //         <div className="none">No tracks!</div>
    //     )
    // }

    return (
        <section className="music-player">
            <h1 id={"title"} className={"title"}>
                My player
            </h1>
            <hr/>
            <div className="track-box">
                {!tracks ? <span>Loading...</span> : undefined}
                {tracks && tracks.length === 0 ? <span>NO tracks!</span> : tracks?.map((item) => {
                    return (
                        <div key={item.id} className="track" style={{
                            backgroundColor: item.id === selectedTrack ? 'yellow' : 'none'
                        }}>
                            <div className="name">{item.title}</div>
                            <audio src={item.url} controls={true}/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
