import './styles/ButtonLogo.css'

export default function ButtonLogo( { logo, color, onClick } ) {
  return (
    <button style={{ backgroundColor: color }} className='button_logo' onClick={ onClick }>
      <img src={ logo } className='logo' />
    </button>
  )
}