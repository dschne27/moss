import React from 'react'

export default async function getAllPlants() {
    const res = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.TREFLE_TOKEN}&page=1`)
    
    if (!res.ok) throw new Error('Failed to fetch all plants')
    const data = await res.json()
    return data.data
}
