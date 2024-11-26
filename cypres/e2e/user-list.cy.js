describe('User List', () => {
    it('displays the list of users', () => {
      cy.intercept('POST', '/api/graphql', (req) => {
        if (req.body.operationName === 'GetUsers') {
          req.reply({
            data: {
              users: [
                { id: '1', name: 'John Doe' },
                { id: '2', name: 'Jane Smith' },
              ],
            },
          })
        }
      }).as('getUsers')
  
      cy.visit('/')
      cy.wait('@getUsers')
  
      cy.contains('John Doe').should('be.visible')
      cy.contains('Jane Smith').should('be.visible')
    })
  })
  