import data from "../data";

function Home() {
    return (
        <>
            <h1>Feature Project</h1>
            <div className="products">
                {
                    data.product.map((product) => (
                        <div className="productdetail" key={product.slug}>
                            <div className="image">
                                <a href={`/product/${product.slug}`}><img src={product.image} alt={product.name} /></a>
                            </div>
                            <div className="productName">
                                <a href={`/product/${product.slug}`}> <p>{product.name}</p></a>
                            </div>
                            <div className="productPrice">
                                <p><strong>₹ {product.price}</strong></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Home;