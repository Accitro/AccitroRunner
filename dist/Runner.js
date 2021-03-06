"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInstance = exports.Runner = void 0;
const tslib_1 = require("tslib");
const discord_js_1 = tslib_1.__importDefault(require("discord.js"));
const accitro_1 = tslib_1.__importDefault(require("accitro"));
class Runner {
    constructor(options) {
        this.discord = new discord_js_1.default.Client(options.discord);
        this.accitro = new accitro_1.default.Client(this.discord, options.databaseCredentials, options.accitro);
        this.modules = this.accitro.modules;
        options.listeners && Object.keys(options.listeners).forEach((event) => this.accitro.on(event, options.listeners[event]));
        this.accitro.modules.add(...options.modules.map((classGenerator) => new classGenerator(this.modules)));
    }
    accitro;
    discord;
    modules;
}
exports.Runner = Runner;
const createInstance = (options) => new Runner(options);
exports.createInstance = createInstance;
