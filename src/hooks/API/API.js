//get teams data 
const getTeams = async () => {
    const res = await fetch('https://capital-trust-bank-server-ten.vercel.app/team')
    const data = await res.json()
    return data
}


export { getTeams };

