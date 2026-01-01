import clsx from 'clsx';
import cls from "../scss/StatusPlate.module.scss";

function StatusPlate(props) {

    const status = {
        0: 'To Do',
        1: 'In progress',
        2: 'Done',
        3: 'Draft'
    }

    return (
        <div className={clsx(
                        cls.statusPlate,
                        cls['plate' + props.status],
                        props.styleVar === 'inDetails' && cls.inDetails
                        )}
        >
            {status[props.status] ?? 'No status'}
        </div>
    )
}

export default StatusPlate