const jwt = require('jsonwebtoken')

//secret é ideal armazenar em um arquivo separado -> .env
const secret = 'siajuweqpasmkauqwqsuqjjsppqppwomanuqdnwu'

exports.auth = (req, res, next) => {

    //Captura o cabeçalho de autenticação
    const authToken = req.headers['authorization']
    //console.log(authToken)
    
    if(authToken != undefined) {

        //Trata o cabeçalho de autenticação gerado, separando "beared xishw...".
        const beared = authToken.split(' ')
        const token = beared[1]

        //Para não quebrar a aplicação se o token foi inválido
        try{

            //Através do token do cabeçalho e o secret será feito a decodificação caso esses parâmetros estejam relacionados, conforme solicitado no sistema de login para gerar token de acesso.
            const decoded =jwt.verify(token, secret)
            //console.log(decoded)

            if(decoded.role == 1) {
                next()
            } else {
                res.status(403)
                res.send('Você não tem permissão para acessar.')
                return
            }
            
        }catch(err) {
            res.status(403)
            res.send('Você não está autenticado')
            return
        }
    } else {
        res.status(403)
        res.send('Você não está autenticado')
        return
    }
}