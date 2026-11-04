function ButtonChildren({ funcion, children }) {
    return (
        <button onClick={funcion}>
            {children}
        </button>
    );
}



export default ButtonChildren;




