"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runner = void 0;
const tslib_1 = require("tslib");
const discord_js_1 = (0, tslib_1.__importDefault)(require("discord.js"));
const accitro_1 = (0, tslib_1.__importDefault)(require("accitro"));
class Runner {
    constructor(options) {
        this.discord = new discord_js_1.default.Client(options.discord);
        this.accitro = new accitro_1.default.Client(this.discord, options.databaseCredentials, options.accitro);
        this.modules = options.modules.map((Module) => {
            const { accitro: { modules } } = this;
            const module = new Module(modules);
            modules.add(module);
            return module;
        });
    }
    accitro;
    discord;
    modules;
}
exports.Runner = Runner;
