export function setSide(side){
    return{
        type: "GET_SIDE",
        payload: side
    }
}

export function setFlip(flip){
    return{
        type: "GET_FLIP",
        payload: flip
    }
}
