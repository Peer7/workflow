const { Login } = require('./lib/Login.js')

module.exports = async () => {
  let Commands = {
    Login: {
      help: {
        usage: "!Login <username> <password> [-<profile>]",
        options: [
          {flag: "-<profile>", desc: "profile configuration to load for this session", example: "-default"}
        ]
      },
      exec: await Login()
    },
    Logout: {
      help: ""
    },
    Get: {},
    Make: {
      Comment: {},
      Issue: {},
      PullRequest: {}
    }
  }
}
