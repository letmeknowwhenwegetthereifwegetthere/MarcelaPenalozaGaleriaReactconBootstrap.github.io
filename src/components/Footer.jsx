import React from "react";

const Footer = (props) => {
    const { desc } = props;
    
    return (
        <footer className="bg-secondary text-white p-5 text-center">
            <p>Para ver mas pinturas disponibles aprete boton. </p>
            <button type="button" class="btn btn-primary btn-sm">Buscar mas pinturas</button>
        </footer>
    );
};

export default Footer;