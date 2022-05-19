import style from "./style.module.scss"

import { FiUsers } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoScaleOutline } from "react-icons/io5";
import { CgArrowsV } from "react-icons/cg";

import PersonalSvg from "../../assets/personal.svg";
import DotAreasMinor from "../../assets/dotAreaMinor.svg";

export function RegisterComplete() {
    return (
        <div className={style.registerContainer}>
            <h1 className={style.typography}>Vamos completar o seu perfil</h1>
            <h2 className={style.typographySub}>Isso nos ajudará a saber mais sobre você</h2>
            <form action="" className={style.formContainer}>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="text" placeholder="Gênero"/>
                    <i>
                        <FiUsers />
                    </i>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="date" placeholder="Data de nascimento"/>
                    <i>
                        <AiOutlineCalendar />
                    </i>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="number" min={0} placeholder="Seu peso"/>
                    <i>
                        <IoScaleOutline />
                    </i>
                    <div className={style.inputInform}>
                        <span>kg</span>
                    </div>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input type="number" min={0} placeholder="Seu altura"/>
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