function User(email, name) {
  this.email = email
  this.name = name
  this.online = false
  this.login = function () {
    console.log(this.email, `has logged in`)
  }
}

const userOne = new User(`Karl@Dollmayer.se`, `Karl`)
const userTwo = new User(`Amanda@Häst.se`, `Amanda`)

console.log(userOne)
userTwo.login()
