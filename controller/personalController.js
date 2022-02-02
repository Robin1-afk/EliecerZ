 const db = require('../config/db')
 const rutas = {}
 
 //consulta
 rutas.getProductos = (req, res) =>{
    const sql = 'SELECT * FROM personal';
    db.query(sql,(err, row, fields)=>{ 
        if(err) throw err; 
        res.json({row});
      }
   )}

 //consulta Id
 rutas.getProductosId = (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT * FROM personal where id = ${id}`;
    db.query(sql,(err, row, fields)=>{ 
        if(err) throw err; 
        res.json({row});
      }
   )}

//Agregar 
 rutas.addProductos = (req, res)=>{
    const {nombre , apellido , cedula, celular, comuna, municipio, barrio} = req.body;
    const sql = `INSERT INTO personal (nombre , apellido , cedula, celular, comuna, municipio, barrio) VALUES
    ('${nombre}','${apellido}','${cedula}','${celular}','${comuna}','${municipio}','${barrio}')`;
    db.query(sql,(err, row, fields)=>{ 
        if(err) throw err; 
        res.json({message : "Dato guardado con exito"}).status
      }
   )}

//  rutas.updateProductos = (req, res)=>{
//     const {nombre} = req.body;
//     const {Id} = req.params;
//     const sql = `UPDATE calendario SET nombre ='${Nombre}' WHERE id = ${id} `;
//     db.query(sql,(err, row, fields)=>{ 
//         if(err) throw err; 
//         res.json({message : "Dato actualizado con exito"})
//       }
//    )
// }

rutas.deleteProductos = (req, res)=>{
    const {id} = req.params;
    const sql = `DELETE FROM personal WHERE id = ${id} `;
    db.query(sql,(err, row, fields)=>{ 
        if(err) throw err; 
        res.json({message : "Dato eliminado con exito"})
      }
   )
}

module.exports = rutas;