import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { AuthService } from '../auths/auth.service'
import { CurrentUserType } from 'common/types/currentUser.type'

@Injectable()
export class LocalUserStrategy extends PassportStrategy(Strategy) {
  constructor(private authenService: AuthService) {
    super()
  }

  async validate(username: string, password: string): Promise<CurrentUserType> {
    const { id, role, storeRoleId } = await this.authenService.validateUser(
      username,
      password
    )
    return { id, role, storeRoleId }
  }
}
