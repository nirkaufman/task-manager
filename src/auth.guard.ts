import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean  {
    const token = context.switchToHttp().getRequest().headers.token;
    return token === '123456';
  }
}
