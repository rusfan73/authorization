context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://m.mybook.ru/dashboard/')
  })

  // https://on.cypress.io/interacting-with-elements

   it('.click() - click on a DOM element', () => {
    cy.clearCookies()
    cy.reload()
    cy.get('.Header__enter').click()
    cy.get('#id_email')
      .type('testuser2@ya.com')
    cy.get('#id_password')
      .type('test1234q')
    cy.get('.Button__primaryButton').click()
    cy.contains('Добро пожаловать')  
   })

   it('.click() - click on a DOM element', () => {
    cy.clearCookies()
    cy.reload()
    cy.get('.Header__enter').click()
    cy.get('#id_email')
      .type('testuser2@ya.com')
    cy.get('#id_password')
      .type('test1234')
    cy.get('.Button__primaryButton').click()
    cy.contains('Неверно введен пароль')  
   })
   
})