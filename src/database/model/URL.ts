import { prop, Typegoose } from '@hasezoey/typegoose';

export class URL extends Typegoose{

  @prop({ required: true }) 
  hash: string | undefined;

  @prop({ required: true })
  originURL: string | undefined;

  @prop({ required: true })
  shortURL: string | undefined;
}

export const URLModel = new URL().getModelForClass(URL);