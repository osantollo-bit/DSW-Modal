
function Button({funcion, children}){
    return(
        <button onClick={funcion}>{children}</button>
    )
}

export default Button;