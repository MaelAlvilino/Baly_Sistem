from flask import Flask, request
from flask_cors import CORS
from users import Usuario
from cerberus import Validator


app = Flask (__name__)
CORS(app)

@app.route("/cadastro", methods = ['POST'])
def cadastrar ():
    json = request.get_json()

    # Validador de json cerberus 
    schema = {
        'email': {'type': 'string', 'required': True},
        'telefone': {'type': 'string', 'required': True},
        'cpf': {'type': 'string', 'required': True},
        'nome': {'type': 'string', 'required': True},
        'sobrenome': {'type': 'string', 'required': True},
        'password': {'type': 'string', 'required': True},
    }
    validate = Validator(schema)
    
    # caso não tenha campo retorna error
    if( validate.validate(json) is not True):
        return validate.errors, 400
    
    # json usuario que irá ser passado para o banco
    usuario = Usuario(
        email = json.get('email'),
        telefone = json.get('telefone'),
        cpf = json.get('cpf'),
        nome = json.get('name'),
        sobrenome = json.get('sobrenome'),
        password = json.get('password'),
    )
    cadastrarBanco(usuario)

    return 'usuario criado com sucesso.'


def cadastrarBanco(usuario: Usuario):
    # acrescentar o banco
    pass

app.run(debug=True)