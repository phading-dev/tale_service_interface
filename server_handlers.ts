import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { UPLOAD_IMAGE_FOR_TALE, UploadImageForTaleResponse, CREATE_TALE, CreateTaleRequestBody, CreateTaleResponse, GET_QUICK_TALE, GetQuickTaleRequestBody, GetQuickTaleResponse, GET_RECOMMENDED_QUICK_TALES, GetRecommendedQuickTalesRequestBody, GetRecommendedQuickTalesResponse, VIEW_TALE, ViewTaleRequestBody, ViewTaleResponse, REACT_TO_TALE, ReactToTaleRequestBody, ReactToTaleResponse } from './interface';
import { Readable } from 'stream';
import { UserSession } from '@phading/user_service_interface/user_session';

export abstract class UploadImageForTaleHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_IMAGE_FOR_TALE;
  public abstract handle(
    requestId: string,
    body: Readable,
    auth: UserSession,
  ): Promise<UploadImageForTaleResponse>;
}

export abstract class CreateTaleHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_TALE;
  public abstract handle(
    requestId: string,
    body: CreateTaleRequestBody,
    auth: UserSession,
  ): Promise<CreateTaleResponse>;
}

export abstract class GetQuickTaleHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_QUICK_TALE;
  public abstract handle(
    requestId: string,
    body: GetQuickTaleRequestBody,
    auth: UserSession,
  ): Promise<GetQuickTaleResponse>;
}

export abstract class GetRecommendedQuickTalesHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_RECOMMENDED_QUICK_TALES;
  public abstract handle(
    requestId: string,
    body: GetRecommendedQuickTalesRequestBody,
    auth: UserSession,
  ): Promise<GetRecommendedQuickTalesResponse>;
}

export abstract class ViewTaleHandlerInterface implements ServiceHandlerInterface {
  public descriptor = VIEW_TALE;
  public abstract handle(
    requestId: string,
    body: ViewTaleRequestBody,
    auth: UserSession,
  ): Promise<ViewTaleResponse>;
}

export abstract class ReactToTaleHandlerInterface implements ServiceHandlerInterface {
  public descriptor = REACT_TO_TALE;
  public abstract handle(
    requestId: string,
    body: ReactToTaleRequestBody,
    auth: UserSession,
  ): Promise<ReactToTaleResponse>;
}
