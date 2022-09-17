import SignupFactory from '../factories/SignupFactory';
import signupPage from '../pages/SignupPage'

describe('Signup', () => {

    beforeEach(function() {
        cy.fixture('deliver').then((d) => {
            this.deliver = d;
        })
    })

    it('User should be deliver', function() {

        let deliver = SignupFactory.deliver()

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()      
        signupPage.modalContentShouldBe('Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
        
    })

    it('Incorrect document', function() {

        let deliver = SignupFactory.deliver()

        deliver.cpf = '000000141aa'

        signupPage.go()
        signupPage.fillForm(this.deliver.cpf_inv)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Incorrect email', function() {

        let deliver = SignupFactory.deliver()

        deliver.email = 'user.com.br'

        signupPage.go()
        signupPage.fillForm(this.deliver.email_inv)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
    })
    
    context('Required fields', function() {

        const message = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'},
        ]

        before(function() {
            signupPage.go()
            signupPage.submit()
        })

        message.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })
    
})