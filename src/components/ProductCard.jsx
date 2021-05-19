import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../css/ProductCard.css';

class ProductCard extends React.Component {
  render() {

    const { product: { id, price, title, thumbnail }, addToCart } = this.props;


    return (
      <Link
        data-testid="product-detail-link"
        to={ {
          pathname: `/products/${id}/details`,
          state: { title } } }
        className="product-card"
      >
      </Link>

        <img className="product-img" src={ thumbnail } alt="Product" />
        <h3 className="product-price">
          R$
          {' '}
          { price.toFixed(2) }
        </h3>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addToCart(id) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
}.isRequired;

export default ProductCard;
