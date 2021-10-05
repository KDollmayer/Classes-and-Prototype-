class User {
  constructor(email, name) {
    this.email = email
    this.name = name
    this.score = 0
  }
  login() {
    console.log(this.email, `Just Logged IN`)
    return this
  }
  logout() {
    console.log(this.email, `Just Logged Out`)
    return this
  }
  updateScore() {
    this.score++
    console.log(this.email, `Score is now`, this.score)
    return this
  }
}
class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email
    })
  }
}
const userOne = new User(`Karl@Dollmayer.se`, `Karl`)
const userTwo = new User(`Amanda@Häst.se`, `Amanda`)
const admin = new Admin(`Anna@Anders.se`, `Anna`)

var users = [userOne, userTwo, admin]

admin.deleteUser(userOne)
console.log(users)
