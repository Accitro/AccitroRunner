import Discord from 'discord.js'
import Accitro from 'accitro'

export interface RunnerOptions {
  discord: Discord.ClientOptions
  accitro: Accitro.ClientOptions
  databaseCredentials: Accitro.DatabaseCredentials

  modules: Array<(client: Accitro.Client) => typeof Accitro.Module>
}

export class Runner {
  public constructor (options: RunnerOptions) {
    this.discord = new Discord.Client(options.discord)
    this.accitro = new Accitro.Client(this.discord, options.databaseCredentials, options.accitro)
    this.modules = this.accitro.modules
    this.accitro.modules.add(...options.modules.map((classGenerator) => <Accitro.Module> new (<any> (classGenerator(this.accitro)))(this.modules)))
  }

  public readonly accitro: Accitro.Client
  public readonly discord: Discord.Client
  public readonly modules: Accitro.ModuleManager
}

export const createInstance = (options: RunnerOptions) => new Runner(options)
