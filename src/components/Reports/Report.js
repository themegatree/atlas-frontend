import React from "react";

const Report = (props) => {
    if (props.data.length > 0) {
        return (
            <div>
                <h2>{props.heading}</h2>
                <div id={props.name + "Data"}>{props.data.map((category) => 
                    <div key={category.type}>
                        <h3>{category.type}: </h3>
                        <p id={category.type + "Percentage"}>Percentage: {category.percentage}%</p>
                        {category.number &&
                            <p> 
                                Number: {category.number}
                            </p>
                        }
                    </div>
                )}
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Report