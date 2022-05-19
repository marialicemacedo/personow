import style from "./style.module.scss";

export function Header() {
    return (
        <header className={style.headerContainer}>
            <h1 className={style.typography}>PersoNOW</h1>
            <nav className={style.navigation}>
                <ul className={style.menu}>
                    <li>Sobre nós</li>
                    <li>Contato</li>
                    <li>Personais</li>
                    <li>Propostas</li>
                </ul>
            </nav>
        </header>
    )
}