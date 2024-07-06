/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./Card.css"


let Card = ({ type, price, features }) => {
    return (
        <div className="col-lg-4 child">
            <p style={{ color: "black", textAlign: "center", margin: "20px" }} className="text">{type}</p>
            <h3 style={{ color: "black", textAlign: "center" }}>${price}/month</h3>
            <div className="features">
                {features.map((feat) => (
                    <div>
                        {feat.available ? (<p style={{ color: "black" }} className="text"><i className="fa fa-check  space" aria-hidden="true"></i>{feat.name}</p>) : (<p style={{ color: "rgb(122, 121, 121)" }} className="text"><i className="fa fa-times space" aria-hidden="true"></i>{feat.name}</p>)}
                    </div>
                )
                )
                }
            </div>
            <div className="button">
                <button type="button" className="btn btn-primary" style={{ width: "90%", borderRadius: "20px" }}>BUTTON</button>
            </div>
        </div >
    );
};


export default Card;

