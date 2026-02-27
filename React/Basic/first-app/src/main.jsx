import { createRoot } from 'react-dom/client'
import Props from './Props.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
    <Props
      phone='017'
      email='miftah@miftahcoding.com'
      address='Dhaka'
    />
  </>
)
