import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable} from 'rxjs';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const requestInfo = {
      time: new Date().toLocaleTimeString(),
      controller: context.getClass().name,
      method: context.getHandler().name
    };

    console.log(requestInfo);
    return next.handle();
  }
}
