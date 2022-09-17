let faker = require('faker')
let cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()

        let data = {
            name: `${firstName} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: '19999992222',
                address: {
                    postalcode: '13061252',
                    street: 'Rua Monte Prano',
                    number: '19',
                    details: 'casa',
                    district: 'Vila Castelo Branco',
                    city_state: 'Campinas/SP'
                },
                delivery_method: 'Moto',
                cnh: "cnh-digital.jpg"
        }

        return data
    }

}

