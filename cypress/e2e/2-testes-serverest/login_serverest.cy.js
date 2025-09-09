describe ('Testes de login', () => {
    it('Login com credenciais inválidas', () => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').type('Alexandre@hotmail.com')
        cy.get('[data-testid="senha"]').type('123456789')
        cy.get('[data-testid="entrar"]').click()   
    })
})

describe ('Testes de cadastro', () => {
    it('Criando cadastro e preenchendo forms', () => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('[data-testid="nome"]').type('Alexandre')
        cy.get('[data-testid="email"]').type('Alexandre@hotmail.com')
        cy.get('[data-testid="password"]').type('123456789')
        cy.get('[data-testid="checkbox"]').click()
        cy.get('[data-testid="cadastrar"]').click()
   
    })
})