import { MailerService } from '@nestjs-modules/mailer'
import { Processor, Process } from '@nestjs/bull'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { HttpStatus } from '@nestjs/common'
import { Inject } from '@nestjs/common/decorators'
import { Job } from 'bull'
import { Cache } from 'cache-manager'
import { Queue } from 'common/constants/queue.constant'

export type EmailInfor = {
  to: string
  subject: string
  html: string
}

export type ForgotPasswordType = {
  code: number
  user_id: string
  new_password: string
  email_infor: EmailInfor
}

@Processor(Queue.sendMail)
export class MailConsummer {
  constructor(
    private readonly mailService: MailerService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  @Process(Queue.register)
  async register(job: Job<EmailInfor>) {
    await this.mailService.sendMail(job.data)
  }

  @Process(Queue.forgetPassword)
  async forgotPassword(job: Job<ForgotPasswordType>) {
    const { code, user_id, new_password, email_infor } = job.data
    await Promise.all([
      this.mailService.sendMail(email_infor),
      this.cacheManager.set(
        JSON.stringify({ code, user_id }),
        JSON.stringify({ user_id, new_password }),
        1000 * 30
      )
    ])
  }
}
