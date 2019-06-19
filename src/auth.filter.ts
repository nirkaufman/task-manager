import {ArgumentsHost, Catch, ExceptionFilter, ForbiddenException} from '@nestjs/common';

@Catch(ForbiddenException)
export class AuthFilter implements ExceptionFilter {
    catch(exception: ForbiddenException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();

        response
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                message: 'Protected method'
            })
    }
}
