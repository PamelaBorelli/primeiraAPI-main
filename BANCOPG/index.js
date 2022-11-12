const express = require("express")
const app = express();
app.use(express.json);
app.listen(8080);

//chamar a conexão do banco
const {pool} = require("./src/database/database");

app.get('/recive', (req,res) =>{
    const testeBanco = async(req)=>{
        const query = "SELECT NOW()";
        await pool.query (query).then((res)=>{
            console.table(res.rows[0])
        });
    };
    return testeBanco();
});

//SELECT *
query = `SELECT * FROM "Nome Tabela"`

app.get("/todosCursos", (req,res) =>{
    const todosCursos = async (res)=>{
        const query = ("Select * FROM "")
            await pool.query (query).then ((res)=>{
                if (res.rows);
        })
    }
})

//SELECT de um unico elemento
query = `SELECT (nomeCurso) From "Nome Tabela" WHERE id== ${id}`




//update
query = `UPDATE SET (nomeCurso) FROM "Nome Tabela" WHERE id == ${id}`

//delet
query = `DELETE FROM "Nome Tabela" WHERE id == $(id)`

app.delete = async (req,res) =>{
    const {id} = parseInt (req.params.id);
    await db.query ('DELETE FROM "Nome Tabela" WHERE id == $(id)');
}




app.post('/register', (req, res)=>{
    const {id, nome, tipo} = req.body
    const inserirBanco = async (res) =>{
        const query = `INSERT INTO "Cursos" ("ID", "nome", "tipo")
        VALUES (${id}, '${nome}', '${tipo}')`;
        await pool.query(query).then((res)=>{
            if(res.rows[0]){
                console.log("foi");
                }else{
                    console.log("Nâo foi");
                }
        })
    }
    return inserirBanco();
})

