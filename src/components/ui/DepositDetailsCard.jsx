import "./DepositDetailsCard.scss"
import PropTypes from 'prop-types'

function DepositDetailsCard({ price, description, priceColor }) {
  return (
    <>
      <div className="card">
        <p
          className="amount"
          style={{ color: priceColor }}
        >
          {price}
        </p>
        <p>{description}</p>
      </div>
    </>
  )
}

DepositDetailsCard.propTypes = {
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priceColor: PropTypes.string.isRequired
}

export default DepositDetailsCard
