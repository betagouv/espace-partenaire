import { IsNotEmpty } from 'class-validator';

export class CreateOidcClientDto {
  clientDescription: string | null;

  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  clientName: string;

  @IsNotEmpty()
  clientId: string;

  @IsNotEmpty()
  clientSecret: string;

  redirectUris: string[] = [];

  postLogoutRedirectUris: string[] = [];

  scope: string[] = [];
}
