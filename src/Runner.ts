import Discord from 'discord.js'
import Accitro from 'accitro'

export interface RunnerOptions {
  discord: Discord.ClientOptions
  accitro: Accitro.ClientOptions
  databaseCredentials: Accitro.DatabaseCredentials

  modules: Array<typeof Accitro.Module>
}

export class Runner {
  public constructor (options: RunnerOptions) {
    this.discord = new Discord.Client(options.discord)
    this.accitro = new Accitro.Client(this.discord, options.databaseCredentials, options.accitro)

    this.modules = options.modules.map((Module) => {
      const { accitro: { modules } } = this
      const module = <Accitro.Module> new (<any> Module)(modules)

      modules.add(module)
      return module
    })
  }

  public readonly accitro: Accitro.Client
  public readonly discord: Discord.Client

  public readonly modules: Array<Accitro.Module>
}
