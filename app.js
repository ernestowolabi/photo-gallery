



const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return users

  } catch (error) {
    console.error(error)
  }
}



function getUserDiv(user) {
  return `
      <div class='my-online-user'>
        <div class='user-username'>${user.username}</div>
        <div class='user-online'></div>
      </div>
    `
}

getUsers().then(users => {
  let sampleUser = users[0]
  let userDiv = getUserDiv(sampleUser)
  document.body.innerHTML = `<div class='my-online-users'>
      ${users.map(user => getUserDiv(user)).join('')}
    </div>`
})

