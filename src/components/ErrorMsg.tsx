import cls from '../scss/ErrorMsg.module.scss'

type ErrorPropsType = {
  msg: string
}

export function ErrorMsg({ msg }: ErrorPropsType) {
  return (
    <div className={cls.errorMsg}>
      <span>Error: </span>
      {msg}
    </div>
  )
}