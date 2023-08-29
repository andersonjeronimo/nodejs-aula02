const db = require('../models/userModel');

function getUsers(req, res) {
    db.findDocuments('users')
        .then(docs => {
            res.render('users', { title: 'Users', users: docs });
        }).catch(error => {
            res.render('error', { message: "Não foi possivel listar os users", error });
        });
};

function postUser(req, res) {
    const nome = req.body.nome;
    const idade = parseInt(req.body.idade);
    /*Não são campos obrigatórios, insere valores default */
    const senha = req.body.senha? req.body.senha : '123456';
    const email = req.body.email? req.body.email : 'email@email.com';
    db.insertDocument('users', { nome, idade, senha, email })
      .then(result => {
        res.status(201).redirect('/users');
      }).catch(error => {
        res.render('error', { message: "Não foi possivel inserir o user", error });
      });
  }

module.exports = { getUsers, postUser };