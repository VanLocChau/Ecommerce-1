import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../users/user.service'
import { ConfigService } from '@nestjs/config'
import { AuthService } from '../auths/auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super()
  }

  async validate(username: string, password: string): Promise<any> {
    const { id, role } = await this.authService.validateUser(username, password)
    return { id, role }
  }
}
