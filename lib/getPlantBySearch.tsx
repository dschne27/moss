export default async function getPlantById(query : string) {
    const urlQuery = encodeURIComponent(query)
    const res = await fetch(`https://trefle.io/api/v1/plants/search?q=${urlQuery}&page=1&token=${process.env.TREFLE_TOKEN}`)
    
    if (!res.ok) throw new Error('Failed to search for plants.')
    const data = await res.json()
    return data.data
    
}