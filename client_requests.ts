import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { UploadImageForTaleResponse, UPLOAD_IMAGE_FOR_TALE, CreateTaleRequestBody, CreateTaleResponse, CREATE_TALE, GetQuickTaleRequestBody, GetQuickTaleResponse, GET_QUICK_TALE, GetRecommendedQuickTalesRequestBody, GetRecommendedQuickTalesResponse, GET_RECOMMENDED_QUICK_TALES, ViewTaleRequestBody, ViewTaleResponse, VIEW_TALE, ReactToTaleRequestBody, ReactToTaleResponse, REACT_TO_TALE } from './interface';

export function uploadImageForTale(
  client: WebServiceClientInterface,
  body: Blob,
): Promise<UploadImageForTaleResponse> {
  return client.send({
    descriptor: UPLOAD_IMAGE_FOR_TALE,
    body,
  });
}

export function createTale(
  client: WebServiceClientInterface,
  body: CreateTaleRequestBody,
): Promise<CreateTaleResponse> {
  return client.send({
    descriptor: CREATE_TALE,
    body,
  });
}

export function getQuickTale(
  client: WebServiceClientInterface,
  body: GetQuickTaleRequestBody,
): Promise<GetQuickTaleResponse> {
  return client.send({
    descriptor: GET_QUICK_TALE,
    body,
  });
}

export function getRecommendedQuickTales(
  client: WebServiceClientInterface,
  body: GetRecommendedQuickTalesRequestBody,
): Promise<GetRecommendedQuickTalesResponse> {
  return client.send({
    descriptor: GET_RECOMMENDED_QUICK_TALES,
    body,
  });
}

export function viewTale(
  client: WebServiceClientInterface,
  body: ViewTaleRequestBody,
): Promise<ViewTaleResponse> {
  return client.send({
    descriptor: VIEW_TALE,
    body,
  });
}

export function reactToTale(
  client: WebServiceClientInterface,
  body: ReactToTaleRequestBody,
): Promise<ReactToTaleResponse> {
  return client.send({
    descriptor: REACT_TO_TALE,
    body,
  });
}
