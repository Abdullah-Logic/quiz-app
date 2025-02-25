import { Router } from 'express';
const router = Router()

/* Import Controllers */
import * as controller from '../controllers/controller.js';

/* Questions Routes API */
router.route('/questions')
    .get(controller.getQuestions)
    .post(controller.postQuestions)
    .delete(controller.deleteQuestions)

/* Questions Routes API */
router.route('/result')
    .get(controller.getResult)
    .post(controller.postResult)
    .delete(controller.deleteResult)


export default router; 