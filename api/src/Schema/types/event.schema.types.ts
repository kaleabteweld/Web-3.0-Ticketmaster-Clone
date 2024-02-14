import mongoose from "mongoose";
import Joi from 'joi';
import { IOrganizer } from "./organizer.schema.types";
import { ITicketType } from "../ticket.schema";
import { ICategory } from "./category.schema.types";

export interface IEvent extends mongoose.Document {
    name: string
    posterURL: string
    description: String
    startDate: Date
    endDate: Date
    location: String
    venue: String
    organizer: mongoose.Types.ObjectId | IOrganizer
    categorys: mongoose.Schema.Types.ObjectId[] | ICategory
    ticketTypes: mongoose.Schema.Types.ObjectId[] | ITicketType
}

//Dynamic methods
export interface IEventMethods {
}

// Extend the Document type with IUserMethods
export interface IEventDocument extends IEvent, IEventMethods, mongoose.Document {
}

// statics methods
export interface IEventModel extends mongoose.Model<IEventDocument> {
    validator<T>(userInput: T, schema: Joi.ObjectSchema<T>): Promise<any>
    getById(_id: string): Promise<IEventDocument | null>
}