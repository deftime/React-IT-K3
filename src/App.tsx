import clsx from 'clsx';
import cls from './scss/App.module.scss';
import {useState} from "react";
import {TrackList} from "./components/TrackList";
import {TrackDetails} from "./components/TrackDetails";

export function App() {
    const [selectedTrackId, setSelectedId] = useState(null);

    return (
        <section className={cls.musicPlayer}>
            <h1 className={cls.title}>
                My player
            </h1>
            <hr/>
            <div className={cls.trackBox}>
                <div className={clsx(cls.side, cls.list)}>
                    <div className={cls.sideTitle}>Tracks</div>
                    <TrackList selectedTrackId={selectedTrackId} setSelectedId={setSelectedId} />
                    <div className={cls.btnReset} onClick={() => {
                        setSelectedId(null)
                        }}>Reset
                    </div>
                </div>
                <div className={clsx(cls.side, cls.details)}>
                    <div className={cls.sideTitle}>Details</div>
                    <TrackDetails id={selectedTrackId} />
                </div>
            </div>
        </section>
    )
}
