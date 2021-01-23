import React from "react";


export default (props) => {
    return (
        <div>
            {
                React.Children.map(props.children,(children)=>{
                    return React.cloneElement(children, { ...props })
                })
            }
        </div>
    )
}
