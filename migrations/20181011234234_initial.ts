import * as Knex from "knex";

exports.up = (knex: Knex) => {
    return knex.schema
    .createTable("Area", (table) => {
        table.increments("ID").primary();
        table.string("DisplayName").notNullable();
        table.string("AreaPlanImage").notNullable();
    })
    .createTable("Building", (table) => {
        table.increments("ID").primary();
        table.string("DisplayName").notNullable();
        table.string("PolygonArea").notNullable();
        table.integer("AreaID").unsigned().notNullable();
    })
    .createTable("Floor",(table) =>{
        table.increments("ID").primary();
        table.string("DisplayName").notNullable();
        table.string("EntryPoint").notNullable();
        table.string("ExitPoint").notNullable();
        table.integer("OrderInBuilding").notNullable();
        table.string("FloorPlanImage").notNullable();
        table.integer("BuildingID").unsigned().notNullable();
    })
    .createTable("Room",(table) =>{
        table.increments("ID").primary();
        table.string("DisplayName").notNullable();
        table.string("PolygonArea").notNullable();
        table.string("DisplayImage").notNullable();
        table.integer("FloorID").unsigned().notNullable();
    })
};

exports.down = (knex: Knex) => {
    return knex.schema.dropTable("Room")
    .dropTable("Floor")
    .dropTable("Building")
    .dropTable("Area");
};
