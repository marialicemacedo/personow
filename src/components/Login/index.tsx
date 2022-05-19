import style from "./style.module.scss";

import { MdEmail } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

import DotAreasMinor from "../../assets/dotAreaMinor.svg";
import DotAreas from "../../assets/dotAreas.svg";
import TrainerImg from "../../assets/trainer.svg";

export function Login() {
    return (
        <div className={style.registerContainer}>
            <h1 className={style.typography}>Bem-vindo(a)</h1>
            <h2 className={style.typographySub}>Isso nos ajudará a saber mais sobre você</h2>
            <form action="" className={style.formContainer}>
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