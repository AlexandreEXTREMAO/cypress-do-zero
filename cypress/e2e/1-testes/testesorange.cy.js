describe ('Testes de login', () => {
    it('Login com credenciais inválidas', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()            
    })
})