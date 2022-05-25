import style from "./style.module.scss"

import { FiUsers } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoScaleOutline } from "react-icons/io5";
import { CgArrowsV } from "react-icons/cg";

import PersonalSvg from "../../assets/personal.svg";
import DotAreasMinor from "../../assets/dotAreaMinor.svg";
import axios from "axios";
import {useState} from "react";

export function RegisterComplete() {

    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('nome');
    const cpf = urlParams.get('cpf');
    const email = urlParams.get('email');
    const senha = urlParams.get('senha');


    const [genero,setGenero] = useState("");
    const [data_nasc,setDataNasc] = useState("");
    const [peso,setPeso] = useState("");
    const [altura,setAltura] = useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const body = {
            function: "cadastrar",
            nome: nome,
            cpf: cpf,
            email: email,
            senha: senha,
            genero: genero,
            data_nasc: data_nasc,
            peso: peso,
            altura: altura
        }

        axios.post('http://localhost/persoNOW-V0/controller/controle-cliente.php', body 
        )
            .then(response => {
                const {data} = response;
        
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div className={style.registerContainer}>
            <h1 className={style.typography}>Vamos completar o seu perfil</h1>
            <h2 className={style.typographySub}>Isso nos ajudará a saber mais sobre você</h2>
            <form action="" className={style.formContainer} onSubmit={handleSubmit}>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="text" placeholder="Gênero" value={(genero==null || genero===undefined)?"":genero} name="genero"  onChange={(event)=>{setGenero(event.target.value)}}/>
                    <i>
                        <FiUsers />
                    </i>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="date" placeholder="Data de nascimento" value={(data_nasc==null || data_nasc===undefined)?"":data_nasc} name="data_nasc"  onChange={(event)=>{setDataNasc(event.target.value)}}/>
                    <i>
                        <AiOutlineCalendar />
                    </i>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="number" min={0} placeholder="Seu peso" value={(peso==null || peso===undefined)?0:peso} onChange={(event)=>{setPeso(event.target.value)}}/>
                    <i>
                        <IoScaleOutline />
                    </i>
                    <div className={style.inputInform}>
                        <span>kg</span>
                    </div>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="number" min={0} placeholder="Seu altura" value={(altura==null || altura===undefined)?0:altura} onChange={(event)=>{setAltura(event.target.value)}}/>
                    <i>
                        <CgArrowsV />
                    </i>
                    <div className={style.inputInform}>
                        <span>cm</span>
                    </div>
                </div>
                <button type="submit" className={style.buttonRegister}>Salvar</button>
            </form>
            <img src={DotAreasMinor} alt="foto de área com pontos" className={style.dotAreasMinor}/>
            <img src={PersonalSvg} alt="foto de área com pontos" className={style.welcomeImage}/>
            <div className={style.lateralBar}></div>
        </div>
    )
}