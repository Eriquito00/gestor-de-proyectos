import './styles/ButtonMenu.css'

export default function ButtonMenu( { msg, icon, onClick } ) {
  return (
    <button className='button_menu' onClick={onClick}>
        <img src={ icon } className='img_button_menu' />
        <h3 className='h3_button_menu'>{msg}</h3>
    </button>
  )
}