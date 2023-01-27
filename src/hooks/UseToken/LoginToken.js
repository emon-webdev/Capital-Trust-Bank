
const setLoginToken = (user) => {
    console.log('user',  user)
    const currentUser = {
      email: user?.email,
    };
    
    console.log('currentUser', currentUser)
    fetch(`${process.env.REACT_APP_API_KEY}/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log('token: ', data.Token)
        localStorage.setItem('Token', data.Token)
    })
};

export default setLoginToken;