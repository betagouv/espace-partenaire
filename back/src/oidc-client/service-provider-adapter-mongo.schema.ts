import { Document } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ strict: true, collection: 'client' })
export class ServiceProvider extends Document {
  @Prop({ type: String })
  name: string;

  @Prop({ type: Boolean })
  active: boolean;

  @Prop({ type: String, unique: true, index: true })
  key: string;

  @Prop({ type: String, index: true })
  entityId: string;

  @Prop({ type: String, index: true })
  email: string;

  @Prop({ type: String })
  client_secret: string;

  @Prop({ type: [String] })
  scopes: string[];

  @Prop({ type: [String] })
  redirect_uris: string[];

  @Prop({ type: [String] })
  post_logout_redirect_uris: string[];
}

export const ServiceProviderSchema =
  SchemaFactory.createForClass(ServiceProvider);