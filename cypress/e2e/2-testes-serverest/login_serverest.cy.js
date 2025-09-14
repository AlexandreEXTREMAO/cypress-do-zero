describe ('Testes de login', () => {
    it('Login com credenciais válidas', () => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').type('Alexandree@hotmail.com')
        cy.get('[data-testid="senha"]').type('12345678')
        cy.get('[data-testid="entrar"]').click()   
    })
})

describe ('Testes de login', () => {
    it('Login com credenciais inválidas', () => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').type('Alexandree@hotmail.com')
        cy.get('[data-testid="senha"]').type('123456789')
        cy.get('[data-testid="entrar"]').click()
        cy.get('.alert').contains('Email e/ou senha inválidos')   
    })
})