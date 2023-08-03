import getPlantbyId from '@/lib/getPlantById';
import './page.module.css'

import { Suspense } from 'react';

type Params = {
    params: {
        id: number
    }
}

export default async function PlantPage({ params: {id}}: Params ) {

    const plant: PlantById = await getPlantbyId(id);
    const plantSpecies: Species[] = plant.species
    const image_url = plant.image_url
    return (
        <>
            <Suspense fallback={<h3>Loading...</h3>}>
                <img src={image_url} alt="" />
                <h1>{plant.common_name}</h1>
                <div>
                    <h3>Plant Info:</h3>
                    <p>Genus: {plant.genus.name}</p>
                </div>
                {plantSpecies.map(species => {
                    return (
                        <div key={species.id}>
                            <h3>Species</h3>
                            <p>Name: {species.common_name}</p>
                        </div>
                    )
                })}
            </Suspense>
        </>
    )
}
