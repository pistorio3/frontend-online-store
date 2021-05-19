import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../css/ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { product: { price, title, thumbnail, id } } = this.props;

    return (
      <Link
        data-testid="product-detail-link"
        to={ {
          pathname: `/products/${id}/details`,
          state: { title } } }
        className="product-card"
      >
        <div data-testid="product">
          <div className="product-title-section">
            <h2 className="product-title">{ title }</h2>
          </div>
          <img className="product-img" src={ thumbnail } alt="Product" />
          <h3 className="product-price">
            R$
            {' '}
            { price }
          </h3>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
}.isRequired;

export default ProductCard;
