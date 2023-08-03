import React from 'react'
import Link from 'next/link';
import getAllPlants from '@/lib/getAllPlants'

export default async function Discover() {

    const plantsData : Promise<Plant[]> = getAllPlants();
    const plants = await plantsData

    const plantLinks = (
        <section>
            <h2>
                <Link href={'/'}>Back to Home</Link>
            </h2>
            <br />
            {plants.map(plant => {
                return (
                    <>
                        <p key={plant.id}></p>
                        <Link href={`/plants/${plant.id}`}>{plant.common_name}</Link>
                        <br />
                    </>
                )
            })}
        </section>
    )

    return (
        <>
            <form action="">
                <label htmlFor="">Looking for a specific plant?</label>
                <input type="text" />
                <button>Search</button>
            </form>
            <div>
                {plantLinks}
            </div>
        </>
    )
}
