import express from 'express';
import ControllerString from '../Controller/StringSpeakController.js';

const StringRouter = express.Router();

const controllerString = new ControllerString();


StringRouter.post('/TextString', controllerString.PostText);


export default StringRouter;
