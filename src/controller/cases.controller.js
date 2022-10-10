import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { Case } from '../models/Case.js';
import { Note } from '../models/Note.js';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathJson = path.join(__dirname, "../../src/notes.json");


/**
 * Funcion que realiza una consulta a la tabla case de la base de datos 
 * @param {*} req 
 * @param {*} res 
 * @type {Object}
 * @returns {Object} Listado de los casos existentes o Error
 */
export const getCases = async(req, res) => {
  try {
    const cases = await Case.findAll();
    return res.json(cases.reverse());
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

/**
 * Funcion para la creación de un caso
 * @param {{case: string}} req 
 * @param {*} res 
 * @returns {{message: string}} mensajes de creacion del caso o un error de creación
 */
export const createCase = async (req, res) => {
  try {
    const { case: c } = req.body;
    const newCase = await Case.create({
      case: c
    });
    return res.status(200).json({message:"Case created successfully"});
  } catch (error) {
    return res.status(500).json({message:"Could not create this case"});
  }
}


/**
 * Funcion para la actualización del caso filtrado por id
 * @param {{id: number, case: string}} req 
 * @param {*} res 
 * @returns {{message: string}} mensaje de actualización del caso o error al actualizar
 */
export const updateCase = async (req, res) => {
  try {
    const {id} = req.params;
    const caseFind = await Case.findOne({
      where: {
        id
      }
    });
    caseFind.case = req.body.case;
    await caseFind.save();
    return res.status(200).json({message:"Case updated successfully"});
  } catch (error) {
    return res.status(500).json({message:"Could not update this case"});
  }
}


/**
 * Funcion para autllenar el archivo notes.json y descargar el archivo
 * @param {*} req 
 * @param {*} res 
 * @type {{lista: array}}
 * @type {{id:number, case: string}} obtiene la información de la tabla Case
 * @type {{id:number, note: string, caseId: integer }} obtiene la información de la tabla notes, filtrando el caseId
 * @type {Object} 
 * @returns descarga del archivo notes.json
 */
export const getCasesNotes = async (req, res) => {
  try {
    const lista = []
    const cases = await Case.findAll();

    for(let c in cases){
        let id  = cases[c]['id']
        let notes = await Note.findAll({
        where: {caseId: id},
        attributes: ['id', 'note']
      });

      const data = {
        case_id: id,
        notes: notes,
      };

      lista.push(data)
    }
    const jsonNotes = JSON.stringify(lista);
    fs.writeFileSync(pathJson, jsonNotes, 'utf-8')
    return res.download(pathJson)
  } catch (error) {
    return res.status(500).json({message:"Could not dowload this file JSON"});
  }
}
