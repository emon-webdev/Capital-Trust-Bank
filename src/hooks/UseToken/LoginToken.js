const setLoginToken = (user) => {
    const currentUser = {
      email: user?.email,
    };
    fetch(`${process.env.REACT_APP_API_KEY}/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('Token', data.Token)
    })
};
export default setLoginToken;