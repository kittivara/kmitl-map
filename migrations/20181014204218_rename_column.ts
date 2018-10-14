import * as Knex from "knex";

exports.up = (knex: Knex) => {
    return knex.schema.alterTable("Floor", (table) => {
        table.renameColumn("EntryPoint", "ToUpstair"),
        table.renameColumn("ExitPoint", "ToDownStair")
    });
};

exports.down = (knex: Knex) => {
    return knex.schema.alterTable("Floor", (table) => {
        table.renameColumn("ToUpstair", "EntryPoint"),
        table.renameColumn("ToDownStair", "ExitPoint")
    });
};
