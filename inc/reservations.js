var conn = require('./db');
module.exports = {

    render(req, res, error, success){

        res.render('reservations', {
        title: 'Resevation - OneAcademy',
        body: req.body,
        error,
        success
     });
  },

    save(fields){

        return new Promise((resolve, reject)=>{

            conn.query(`
            INSERT INTO tb_reserve (nome, email, nascimento, sexo, mensagem)
            VALUES(?, ?, ?, ?, ?)
            `, [
                fields.name,
                fields.email,
                fields.date,
                fields.gender,
                fields.Message
            ], (err, results)=>{
    
                if(err){
                    reject(err);
                } else{
                    resolve(results);
                }

            });

        });

    }

}