 const db = require('../config/db')
 const rutas = {}
 
 //consulta
 rutas.getProductos = (req, res) =>{
    const sql = 'SELECT * FROM agenda';
    db.query(sql,(err, row, fields)=>{ 
        if(err) throw err; 
        res.json({row});
      }
   )}

 //consulta Id
 rutas.getProductosId = (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT * FROM agenda where id = ${id}`;
    db.query(sql,(err, row, fields)=>{ 
        if(err) throw err; 
        res.json({row});
      }
   )}

//Agregar 
 rutas.addProductos = (req, res)=>{
    const {nombre, telefono, fecha, hora, direccion, barrio, tipoEvento, cantPerson,
      sillas, refrigerio, sonido, prensa, avanzada, representante, delegado, observaciones} = req.body;
    const sql = `INSERT INTO agenda (nombre, telefono, fecha, hora, direccion, barrio, tipoEvento, cantPerson,
      sillas, refrigerio, sonido, prensa, avanzada, representante, delegado, observaciones) VALUES
    ('${nombre}', '${telefono}', '${fecha}', '${hora}', '${direccion}', '${barrio}', '${tipoEvento}', '${cantPerson}', '${sillas}'
    , '${refrigerio}', '${sonido}', '${prensa}', '${avanzada}', '${representante}', '${delegado}', '${observaciones}')`;
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
    const sql = `DELETE FROM calendario WHERE id = ${id} `;
    db.query(sql,(err, row, fields)=>{ 
        if(err) throw err; 
        res.json({message : "Dato eliminado con exito"})
      }
   )
}

module.exports = rutas;