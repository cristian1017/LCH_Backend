import { Note } from '../models/Note.js';
import { QueryTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

/**
 * Funcion que realiza una consulta INNER JOIN 
 * @param {*} req 
 * @param {*} res 
 * @type {Object}
 * @returns {Object} Listado de la consulta filtrada por el INNER JOIN
 */
export const getNotes = async(req, res) => {
  try {
    const note = await sequelize.query('SELECT n.id, n.note, n."caseId", c."case" FROM notes as n INNER JOIN cases as c on n."caseId"  = c.id',{ type: QueryTypes.SELECT })
    return res.json(note.reverse());
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

/**
 * Funcion para la creación de una nota
 * @param {{note: string}} req 
 * @param {*} res 
 * @returns {{message: string}} mensajes de creacion de la nota o un error de creación
 */
export const createNote = async(req, res) => {
  try {
    const {note:n, caseId} = req.body;
    await Note.create({
      note:n,
      caseId
    });
    return res.status(200).json({message:"Note created successfully"});

  } catch (error) {
    return res.status(500).json({message: "Could not create this note"});
  }
}

/**
 * Funcion para la actualización de la nota filtrada por id
 * @param {{id: number, note: string, caseId: number, case: string,}} req 
 * @param {*} res 
 * @returns {{message: string}} mensaje de actualización del caso o error al actualizar
 */
export const updateNote = async(req, res) => {
  try {
    const {id} = req.params;
    const noteFind = await Note.findOne({
      where: {
        id
      }
    });
    noteFind.set(req.body)
    await noteFind.save();
    return res.status(200).json({message:"Note updated successfully"});
  } catch (error) {
    return res.status(500).json({message:"Could not update this note"});
  }
}

/**
 * 
 * @param {{id: number}} req 
 * @param {*} res 
 * @returns {{message: string}} mensaje de eliminación de la nota o de error.
 */
export const deleteNote = async(req, res) => {
  try {
    const {id} = req.params;

    await Note.destroy({
      where: {
        id
      }
    });
    return res.status(200).json({message:"Note delete successfully"});
  } catch (error) {
    return res.status(500).json({message:"Could not delete this note"});
  }
}

