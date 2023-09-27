export class CreateOidcClientDto {
  client_description: string | null;
  client_name: string;
  client_id: string;
  client_secret: string;
  redirect_uris: string[];
  scope: string;
}
