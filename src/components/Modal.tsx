import React from 'react'

interface IBackdrop {
  toggleBackdrop?: () => void
  show: boolean
}

interface IModal extends IBackdrop {
  backgroundImage: string
  children: JSX.Element
}

const Backdrop = ({ toggleBackdrop, show }: IBackdrop) =>
  show ? <div onClick={toggleBackdrop} className='backdrop'></div> : null

const Modal = ({ show, toggleBackdrop, children, backgroundImage }: IModal) => {
  const backgroundStyle = backgroundImage
    ? {
        backgroundSize: 'cover',
        backgroundImage: `url(//image.tmdb.org/t/p/original${backgroundImage})`,
      }
    : {}

  return (
    <div>
      <Backdrop show={show} toggleBackdrop={toggleBackdrop} />
      <div
        style={backgroundStyle}
        className={show ? 'modal show' : 'modal hide'}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
