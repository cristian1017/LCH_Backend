import { fileURLToPath } from 'url';
import path, { dirname } from 'path'
import  * as ftp from 'basic-ftp';
import moment from 'moment';
moment.locale('es');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathJson = path.join(__dirname, "../../src/notes.json");



/**
 * Funcion para subir el archivo JSON al server FTP
 * @param {*} req 
 * @param {*} res 
 * @type {{host:string, user: string, password: string}}   
 * @type {dateFormat: date} con formato de YYYY-MMMM-Do
 * @returns {{message: string}} mensaje de subida del archivo al server FTP
 */
export const getFTP = async(req, res) => {
  const client = new ftp.Client()
  client.ftp.verbose = true
  let respUpload = ''
  try {
    await client.access({
      host: process.env.HOST_FTP,
      user: process.env.USERNAME_FTP,
      password: process.env.PASSWORD_FTP,
      secure: true
    })
  
    const date = moment();
    const dateFormat = date.format('YYYY-MMMM-Do');

    await client.ensureDir(`/Notes/${dateFormat}`);
    const resp = await client.uploadFrom(pathJson, "notes.json") 
    respUpload = resp
  } catch (error) {
    return res.status(500).json({message: "Could not upload this file JSON on the server FTP"});
  }
  client.close();
  if(respUpload['code'] == 226){
    return res.status(200).json({message:'The file JSON was uploaded successfully to server FTP'});
  }
}