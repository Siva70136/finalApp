import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0

      cartList.forEach(each => {
        total += each.price * each.quantity
      })

      return (
        <div className="">
          <h1>Order Total &nbsp;{total}/-</h1>
          <p>{cartList.length}&nbsp;Items in cart</p>
          <button className="checkout button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
