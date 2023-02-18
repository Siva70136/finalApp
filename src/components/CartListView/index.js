import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const removeAll = () => {
        removeAllCartItems()
      }

      return (
        <ul className="cart-list">
          <button
            type="button"
            className="button remove"
            onClick={removeAll}
            data-testid="remove"
          >
            Remove all
          </button>
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
