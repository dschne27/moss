export default async function getPlantById(plantId : number) {
    const res = await fetch(`https://trefle.io/api/v1/plants/${plantId}?token=${process.env.TREFLE_TOKEN}`)

    if (!res.ok) throw new Error('Failed to fetch plant data')
    const data = await res.json()
    return data.data
    
}
