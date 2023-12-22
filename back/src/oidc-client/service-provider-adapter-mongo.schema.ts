import { Document } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ strict: true, collection: 'client' })
export class ServiceProvider extends Document {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String, index: true })
  entityId: string;

  @Prop({ type: String })
  client_secret: string;
}

export const ServiceProviderSchema =
  SchemaFactory.createForClass(ServiceProvider);
