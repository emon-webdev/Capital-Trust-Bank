//get teams data 
const getTeams = async () => {
    const res = await fetch('http://localhost:5000/team')
    const data = await res.json()
    return data
}


export { getTeams };