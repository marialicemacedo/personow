import style from "./style.module.scss";

import WelcomeImg from "../../assets/welcomeHome.svg";
import DotAreas from "../../assets/dotAreas.svg";
import DotAreasMinor from "../../assets/dotAreaMinor.svg";


export function Home() {
    return (
        <div className={style.homeContainer}>
            <h2 className={style.welcomeMessage}>Bem-vindo(a) ao PersoNOW</h2>
            <img src={WelcomeImg} alt="imagem de boas-vindas" />
            <div className={style.optionsToNavigate}>
                <button type="button">Quero encontrar um personal</button>
                <button type="button">Sou um personal</button>
            </div>
            <img src={DotAreas} alt="foto de área com pontos" className={style.dotAreas}/>
            <img src={DotAreasMinor} alt="foto de área com pontos" className={style.dotAreasMinor}/>
            <div className={style.lateralBar}></div>
        </div>
    )
}