import { Router } from 'express'
import { rateLimiter, validate } from '../../middleware'
import { UserSchema } from '@qf/schema'
import replyHelper from '../../helper/reply.helper'
import userHandler from './user.handler'

const router = Router()

router.post('/create', rateLimiter(), validate(UserSchema.input), replyHelper(userHandler.create))
router.post('/modify', rateLimiter(), validate(UserSchema.input), replyHelper(userHandler.modify))
router.post('/remove/:id', rateLimiter(), replyHelper(userHandler.remove))
router.get('/page', rateLimiter(), validate(UserSchema.pageQuery), replyHelper(userHandler.page))
router.get('/info/:id', rateLimiter(), replyHelper(userHandler.info))

export default router
