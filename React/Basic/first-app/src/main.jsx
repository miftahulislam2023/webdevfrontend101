import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card'
import ProductCard from './ProductCard'
createRoot(document.getElementById('root')).render(
  <>
    <Card>
      <ProductCard/>
      <ProductCard/>
    </Card>
  </>
)
