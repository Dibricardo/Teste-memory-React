import {useState} from "react";
function Titulo({ cor }) {
    const [texto, setTexto] = useState("Titulo inicial")
    const [inputText, setInputText] = useState("");

    function cliclou () {
        setTexto(inputText);
    }

    return (
        <div>
            <h1 style= {{color:cor}} >{texto}</h1>
            <input value={inputText} onChange={(e) =>{ setInputText(e.target.value)}} type="text" />
            <button onClick={cliclou}>Mudar</button>
        </div>
    )
}

export default Titulo