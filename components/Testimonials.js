import React from "react";

const Testimonials = (props) => {
    let reviews = props.reviews;
    return(
        <div>
            <Card review = {reviews[0]}/>
        </div>
    )
}

export default Testimonials;