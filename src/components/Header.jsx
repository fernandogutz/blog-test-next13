import Link from 'next/link'

import style from './Header.module.css';

const links = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Posts', url: '/posts' },
]

const Header = () => {
    return (
        <header className={style.header}>
            <nav>
                <ul>

                    {
                        links.map(({ label, url }) => (
                            <li key={url}><Link href={url}>{label}</Link></li>
                        ))
                    }

                </ul>
            </nav>
        </header>
    )
}

export default Header