import style from "./style.module.scss"

import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

import WelcomeImg from "../../assets/welcomeHome.svg";
import DotAreasMinor from "../../assets/dotAreaMinor.svg";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import { getSystemErrorName } from "util";



export function Register() {

    const [nome,setNome] = useState("")
    const [cpf,setCpf] = useState("")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

    return (
        <div className={style.registerContainer}>
            <h1 className={style.typography}>Cadastre-se agora</h1>
            <form action="" className={style.formContainer}>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="text" placeholder="Nome" value={(nome==null || nome===undefined)?"":nome} name="name"  onChange={(event)=>{setNome(event.target.value)}}/>
                    <i>
                        <FaUserAlt />
                    </i>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="text" placeholder="CPF" value={(cpf==null || cpf===undefined)?"":cpf} name="name"  onChange={(event)=>{setCpf(event.target.value)}}/>
                    <i>
                        <FaUserAlt />
                    </i>
                </div>
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
                <Link to={"/register-conclusion?nome="+nome+"&cpf="+cpf+"&email="+email+"&senha="+senha}>
                    <button type="submit" className={style.buttonRegister}>Cadastrar-se</button>
                </Link>
                <Link to="/login">
                    <p className={style.linkToLogin}>Já possui uma conta? <b>Entrar</b></p>
                </Link>
            </form>
            <img src={DotAreasMinor} alt="foto de área com pontos" className={style.dotAreasMinor}/>
            <img src={WelcomeImg} alt="foto de área com pontos" className={style.welcomeImage}/>
            <div className={style.lateralBar}></div>
        </div>
    )
}

