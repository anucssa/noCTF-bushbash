import type { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.alterTable("challenge")
		.addColumn("chained_after", "integer")
		.execute();
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.schema
		.alterTable("challenge")
		.dropColumn("chained_after")
		.execute();
}
