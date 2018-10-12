import * as Knex from "knex";

exports.up = (knex: Knex) => {
    return knex.schema.alterTable("Building", (table) => {
        table.foreign("AreaID").references("ID").inTable("Area").onDelete("cascade").onUpdate("cascade");
    })
    .alterTable("Floor", (table) => {
        table.foreign("BuildingID").references("ID").inTable("Building").onDelete("cascade").onUpdate("cascade");
    })
    .alterTable("Room", (table) => {
        table.foreign("FloorID").references("ID").inTable("Floor").onDelete("cascade").onUpdate("cascade");
    })
};

exports.down = (knex: Knex) => {
    return knex.schema.alterTable("Room", (table) => {
        table.dropForeign(["FloorID"]);
    })
    .alterTable("Floor", (table) => {
        table.dropForeign(["BuildingID"]);
    })
    .alterTable("Building", (table) => {
        table.dropForeign(["AreaID"]);
    })
};
