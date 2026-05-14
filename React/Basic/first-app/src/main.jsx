import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import TeaSet from './Pure Components/TeaSet';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TeaSet />
  </StrictMode>
)
