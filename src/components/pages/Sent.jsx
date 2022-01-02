import { Link } from 'react-router-dom'
import '../styles/sent.css'

export const Sent = () => {
  return (
    <div className='sent-content'>
      <div className='sent-message'>
        <Link to='/' className='sent-close'>X</Link>
        <h2>Mensagem enviada com sucesso!</h2>
        <p>Em breve retormaremos.</p>
      </div>
    </div>
  )
}