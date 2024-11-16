// Generated by ts-to-zod
import { z } from "zod";
import { dataSchema, entrySchema, imageSchema, refSchema } from "./base";
import { stateSchema, entryActionSchema, reactionTypeSchema } from "./enums";
import { EntryAction, State } from "../models/enums";


export const socialNodeSchema = dataSchema.extend({
  status: stateSchema.default(State.NEW),
  updated: z.union([z.date(), z.undefined()]).optional(),
  score: z.union([z.number(), z.undefined()]).optional(),
  id: z.string(),
  type: z.string(),
  version: z.number(),
  by: refSchema,
  on: z.date(),
  action: entryActionSchema.default(EntryAction.CREATE),
  name: z.string().optional(),
  image: imageSchema.optional(),
  views: z.number().optional(),
  reactions: z.number().optional(),
  followers: z.number().optional(),
});

export const commentSchema = socialNodeSchema.extend({
  topic: refSchema,
  description: z.string(),
});

export const edgeSchema = entrySchema.extend({
  id: z.string(),
  type: z.string(),
  version: z.number(),
  by: refSchema,
  on: z.date(),
  action: entryActionSchema,
  from: refSchema,
  to: refSchema,
});

export const reactionSchema = edgeSchema.extend({
  reaction: reactionTypeSchema,
});
