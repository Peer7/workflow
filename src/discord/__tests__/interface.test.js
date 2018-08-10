const itface = require('../interface.js')

describe('Interface', async () => {
 let Commands
 let Login

 it('Should be an Object', () => {
    expect(itface).toBeObject
    console.log(itface)
  })

  describe('Commands', () => {
    it('should be an object under itface', () => {
      Commands = itface.Commands
      expect(Commands).toBeObject
      console.log(Commands)
    })

    describe('Login', () => {
      it('Should be an object under Commands', () => {
        Login = Commands.Login
        expect(Login).toBeObject
        console.log(Login)
      describe('exec', () => {
        it('Should be a function of Login', () => {
          expect(Login.exec).toBeFunction()
        it('Should be able to return a successful login', () => {
          expect(Login.exec("user name")).toEqual({
            username: "user name"
          })
        })
        it('Should throw if username is blank', () => {
          expect(Login.exec()).toThrow()
        })
        })
      })
      })
    })
  })
})
