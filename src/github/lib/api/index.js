let Github = require('github-api')
let logger = require('winston')

module.exports = class GithubApi {
  let session = {}

/*  let repo = {}
  let user = {}
  let branch = {}
  let issue = {}
  let pr = {}
  let commit = {}
  let comment = {}
*/

  constructor (oauth, username, password) {
    if (!oauth) {
      try {
        this.session = new Github({username: username, password: password})
      } catch (e) {
        logger.error(`Couldn't start new Session with Username "${username}" and Password "${password}", error: ${e}`)
      }
    } else {
      try {
        this.session = new Github({oauth: oauth})
      } catch (e) {
        logger.error(`Couldn't start new Session with OAuth token "${oauth}", error: ${e}`)
      }
    }
  }

/*
  async function createSession (username, password, oauth) {}
  async function getOAuthToken (username, password) {}
  async function setRepo (session, repoUrl)
  async function setBranch (session, repoUrl, branchName) {}
  async function fetchCommits (repoUrl, branchName) {}
  async function fetchComments (resourceUrl) {}
  async function forkRepo (repoUrl) {}
  async function createBranch (repoUrl) {}
  async function deleteBranch (repoUrl) {}
  async function addFile (pathSpec, fileUrl, repoUrl, branchName) {}
  async function rmFile (pathSpec, repoUrl, branchName) {}
*/
}
