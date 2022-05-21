import { Router} from 'express'
import { protectedController } from '../controllers';
import jsonWebTokenMiddleware from '../middleware/jsonwebtoken.middleware';
import { ProtecRepository } from '../repository';

const router = Router()
const proteController = new protectedController(new ProtecRepository())

router.get('/',jsonWebTokenMiddleware, proteController.index.bind(proteController))

export const ProtectedRouter = router;