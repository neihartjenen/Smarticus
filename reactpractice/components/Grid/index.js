import React from "react";

export function Row({children}) {
   return ( 
    <div className={`row`}>{children}</div>
    )
}

export function Col({size, children}) {
    var temp = size;
    return (
        <div className = {temp}>
            {children}
        </div>
    )
}

export function Container({children}) {
    return (
        <div className={"container"}>{children}</div>
    )
}