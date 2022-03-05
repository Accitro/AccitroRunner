import Discord from 'discord.js';
import Accitro from 'accitro';
export interface RunnerOptions {
    discord: Discord.ClientOptions;
    accitro: Accitro.ClientOptions;
    databaseCredentials: Accitro.DatabaseCredentials;
    modules: Array<typeof Accitro.Module>;
    listeners?: {
        [Property in keyof Accitro.ClientEvents]?: (...args: Accitro.ClientEvents[Property]) => Promise<void> | void;
    };
}
export declare class Runner {
    constructor(options: RunnerOptions);
    readonly accitro: Accitro.Client;
    readonly discord: Discord.Client;
    readonly modules: Accitro.ModuleManager;
}
export declare const createInstance: (options: RunnerOptions) => Runner;
