//get teams data 
const getTeams = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/team`)
    const data = await res.json()
    return data
}

export { getTeams };