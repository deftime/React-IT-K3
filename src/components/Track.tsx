import clsx from "clsx";
import cls from "../scss/Track.module.scss";

export function Track(props) {
    return (
        <div key={props.id} className={clsx(cls.track, props.isSelect && cls.selected)}
             onClick={()=>{
                 props.onSelect(props.id)
             }}>
            <div className={cls.name}>{props.title}</div>
            <audio src={props.url} controls={true}/>
        </div>
    )
}