import classNames from 'classnames'

export function ButtonPrimary(props) {

  const { children, className, ...rest } = props

  return (
    <button className={
      classNames(
        'py-2 px-4 text-white rounded-md hover:opacity-80 ml-5',
        {
          [className]: className
        }
      )}
      {...rest}>
      {children}
    </button>
  )
}
