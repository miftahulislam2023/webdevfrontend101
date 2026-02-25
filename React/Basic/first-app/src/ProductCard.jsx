const ProductCard = () => {
  return (
    <div className="product-card">
        <span className="badge">LIMITED EDITION</span>
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" alt="Product Image" className="product-image"></img>
        
        <div className="content">
            <span className="category">Minimalist Essentials</span>
            <h2 className="title">Apex Smartwatch</h2>
            <p className="description">Elevate your daily routine with seamless connectivity, health tracking, and 7-day battery life.</p>
            
            <div className="footer">
                <span className="price">$199.00</span>
                <button className="btn-cart">Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard