import { jsonb, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const travelPlan = pgTable('travelPlan', {
    id: serial('id').primaryKey(),
    plan: jsonb('plan')
});