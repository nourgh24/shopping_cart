import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const Products = ({ 
  products, 
  selectedCategory, 
  setSelectedCategory, 
  addToCart, 
  searchQuery 
}) => {

  if (selectedCategory) {
    const filteredProducts = selectedCategory.products.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="products_view">
        <button onClick={() => setSelectedCategory(null)} className="back-btn">
          ← Back to Categories
        </button>
        <h2> Category:{selectedCategory.categoryName}</h2>
        
        <div className="cat_Products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="product_card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Price: {item.price} $</p>
                <p>Rating: {item.rating} ⭐️</p>
                <div className="card-actions">
                  <button type="button" onClick={() => addToCart(item)} className="add-btn">
                    <FontAwesomeIcon icon={faBasketShopping} style={{ marginLeft: '5px' }} /> 
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p> No Matching results found</p>
          )}
        </div>
      </div>
    );
  }

  const filteredCategories = products.filter(category =>
    category.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="cat_Products">
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category) => (
          <div className="cat_card" key={category.id}
           onClick={() => setSelectedCategory(category)} 
            style={{ cursor: 'pointer' }}>
            <img src={category.image} alt="" />
            <h3>{category.categoryName}</h3>
          </div>
        ))
      ) : (
        <p>No Matching results found</p>
      )}
    </div>
  );
};

export default Products;