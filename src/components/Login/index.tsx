import style from "./style.module.scss";

import { MdEmail } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

import DotAreasMinor from "../../assets/dotAreaMinor.svg";
import DotAreas from "../../assets/dotAreas.svg";
import TrainerImg from "../../assets/trainer.svg";
import {useState} from "react";
import axios from "axios";

export function Login() {
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const body = {
            function: "logar",
            email: email,
            senha: senha
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
            <h1 className={style.typography}>Bem-vindo(a)</h1>
            <h2 className={style.typographySub}>Isso nos ajudará a saber mais sobre você</h2>
            <form action="" className={style.formContainer} onSubmit={handleSubmit}>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="email" placeholder="E-mail" value={(email==null || email===undefined)?"":email} name="email"  onChange={(event)=>{setEmail(event.target.value)}}/>
                    <i>
                        <MdEmail />
                    </i>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="password" placeholder="Senha" value={(senha==null || senha===undefined)?"":senha} name="senha"  onChange={(event)=>{setSenha(event.target.value)}}/>
                    <i>
                        <AiFillEye />
                    </i>
                </div>
                <button type="submit" className={style.buttonRegister}>Entrar</button>
                <a href="#" className={style.linkToLogin}>Aina não possui uma conta? <b>Cadastre-se agora</b></a>
            </form>
            <img src={DotAreasMinor} alt="foto de área com pontos" className={style.dotAreasMinor}/>
            <img src={DotAreas} alt="foto de aŕeas com pontos" className={style.dotAreas} />
            <img src={TrainerImg} alt="foto de área com pontos" className={style.welcomeImage}/>
            <div className={style.lateralBar}></div>
        </div>
    )
}