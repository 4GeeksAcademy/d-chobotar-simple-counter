import React from "react";

function Card(props) {
    return (
        <div className="col mb-3" >
            <div className="card text-bg-dark mb-3 justify-content-center align-items-center">
                <h5 className="card-title p-3" style={{ fontSize: "7rem" }}>{props.unit !== undefined && props.unit !== null? props.unit : props.children}</h5>
            </div>
        </div>

    );
};

export default Card;