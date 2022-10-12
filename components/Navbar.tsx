import styles from '../styles/Home.module.css';
import Link from 'next/link'
import getConfig from 'next/config'
import { useRouter } from 'next/router'

const { publicRuntimeConfig } = getConfig()

const database_id = publicRuntimeConfig.database_id

const menu = [
    ["/", "Home"],
    ["/database/" + database_id, "Database"],
]


const Navbar = () => {
    const router = useRouter();
    return (
        <div className="grid grid-cols-5 w-[35rem]">
            {
                menu.map(([path1, name1], key) => (
                    <Link key={key} href={path1}>
                        <a 
                            target={path1.includes("http") ? "_blank" : ""}
                            className={`${router.pathname === path1 ? styles.navbarActive : styles.navbar}`}
                        >
                            {name1}
                        </a>
                    </Link>
                ))
            }
        </div>
    )
};

export default Navbar;