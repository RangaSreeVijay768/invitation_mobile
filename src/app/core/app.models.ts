export interface ModalResult {
  reason?: string;
  status: string;
  data: any;
}

export interface AppVersionDetails {
  app_name: string;
  app_id: string;
  app_version: string;
}

export class VideoUrlDetails {
  url: string;
  id: string;
  service: string;
}
