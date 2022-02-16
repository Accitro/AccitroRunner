import Discord from 'discord.js';
import Accitro from 'accitro';
export interface RunnerOptions {
    discord: Discord.ClientOptions;
    accitro: Accitro.ClientOptions;
    databaseCredentials: Accitro.DatabaseCredentials;
    modules: Array<(client: Accitro.Client) => typeof Accitro.Module>;
}
export declare class Runner {
    constructor(options: RunnerOptions);
    readonly accitro: Accitro.Client;
    readonly discord: Discord.Client;
    readonly modules: Array<Accitro.Module>;
}
