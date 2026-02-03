import clsx from 'clsx';
import cls from "../scss/StatusPlate.module.scss";

type PropsType = {
    status: number | undefined
    styleVar: string | null
}

function StatusPlate(props: PropsType) {

    const status: string[] = ['To Do', 'In progress', 'Done', 'Draft']

    return (
        <div className={clsx(
                        cls.statusPlate,
                        cls['plate' + props.status],
                        props.styleVar === 'inDetails' && cls.inDetails
                        )}
        >
            {props.status !== undefined ? status[props.status] : 'No status'}
        </div>
    )
}

export default StatusPlate