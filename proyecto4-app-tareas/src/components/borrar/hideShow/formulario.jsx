import { useState } from "react";
import "./showHide.css";

export const Formulario = () => {
  const [pass, setPass] = useState(true);
  const [valueData, setValueData] = useState("");

  const showHidePassword = () =>{
    setPass(!pass);
  };

  const getAscii = () => String.fromCharCode( Math.floor(Math.random() * (126 - 33 + 1)) + 33 );

  const generaPassword = (e) =>{
    e.preventDefault();
    const ilegalChars = ['@','%','#','$','%','\'','*','´','`','', 'Œ','€','œ','^','\"'];
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    let ascii = "";
    let finalPass = "";
    let lengthPassword = 0;

    lengthPassword = Math.floor(Math.random() * (15 - 8 + 1)) + 8;

    for(let i = 1; i <= lengthPassword; i++){
      
      while(true){
        if(ilegalChars.includes(ascii)){
          ascii = getAscii();
        }else{
          break;
        }
      }

      finalPass += ascii;
      ascii = "";
    };

    if(regex.test(finalPass) === false){
      generaPassword;
    }
      
    setValueData(finalPass);
    
  };

  const handleChange = (e) =>{
    const { value } = e.target;
    setValueData(value);
  };

  return (
    <div>
      <form action="#" className="columnas">
        <input 
          type={
            pass
              ? 'password'
              : 'text'
          } 
          className="showHidePass"
          name="showHide" 
          id="showHide"
          value={valueData}
          onChange={handleChange}
        />
          <button 
            type="button"
            className="boton"
            onClick={() =>showHidePassword(pass)}
          >
            {
              pass
                ? 'Ver Password'
                : 'Ocultar Password'
            }
          </button>
          <button
            className="boton"
            onClick={generaPassword}
          >
            Generar Password
          </button>
      </form>
    </div>
  );
};
