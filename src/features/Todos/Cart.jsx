import PropTypes from 'prop-types';
const Cart = ({todo}) => {
    const {title, completed} = todo;
    return (
        <div
              style={{
                width: "200px",
                height: "fit",
                border: "5px solid orangered",
                borderRadius: "10px",
                padding: "5px",
                backgroundColor: "orange",
                color: "black",
              }}
            >
              <h4>Title: {title}</h4>
              <p style={{ fontSize: "12px" }}>
                Status: {completed ? "Completed!" : "Pending..."}
              </p>
            </div>
    );
};

export default Cart;


Cart.propTypes = {
todo: PropTypes.array  
};
