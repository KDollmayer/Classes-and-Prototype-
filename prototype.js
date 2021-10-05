function User(email, name) {
  this.email = email
  this.name = name
  this.online = false
}

User.prototype.login = function () {
  this.online = true
  console.log(this.email, `has logged in`)
}
User.prototype.logout = function () {
  this.online = false
  console.log(this.email, `has logged Out`)
}
function Admin(...args) {
  User.apply(this, args)
  this.role = `Super admin`
}
Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email != u.email
  })
}

const userOne = new User(`Karl@Dollmayer.se`, `Karl`)
const userTwo = new User(`Amanda@Häst.se`, `Amanda`)
const admin = new Admin(`Ama@apa.se`, `Ama`)

var users = [userOne, userTwo, admin]

console.log(admin)
