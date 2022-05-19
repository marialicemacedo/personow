import style from "./style.module.scss"

import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

import WelcomeImg from "../../assets/welcomeHome.svg";
import DotAreasMinor from "../../assets/dotAreaMinor.svg";
import { Link } from "react-router-dom";

export function Register() {
    return (
        <div className={style.registerContainer}>
            <h1 className={style.typography}>Cadastre-se agora</h1>
            <form action="" className={style.formContainer}>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="text" placeholder="Nome"/>
                    <i>
                        <FaUserAlt />
                    </i>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="email" placeholder="E-mail"/>
                    <i>
                        <MdEmail />
                    </i>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="password" placeholder="Senha"/>
                    <i>
                        <AiFillEye />
                    </i>
                </div>
                <Link to="/register-conclusion">
                    <button type="submit" className={style.buttonRegister}>Cadastrar-se</button>
                </Link>
                <a href="#" className={style.linkToLogin}>Já possui uma conta? <b>Entrar</b></a>
            </form>
            <img src={DotAreasMinor} alt="foto de área com pontos" className={style.dotAreasMinor}/>
            <img src={WelcomeImg} alt="foto de área com pontos" className={style.welcomeImage}/>
            <div className={style.lateralBar}></div>
        </div>
    )
}