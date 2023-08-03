import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div>
            <nav>
                <Link href={'/'}>
                    Home
                </Link>
                <Link href={'/discover'}>
                    Discover Plants
                </Link>
                <Link href={'/trending'}>
                    Trending
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
