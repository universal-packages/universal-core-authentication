import { Authentication, AuthenticationOptions } from '@universal-packages/authentication'
import { CoreModule } from '@universal-packages/core'

import { LOG_CONFIGURATION } from './LOG_CONFIGURATION'

export default class AuthenticationModule extends CoreModule<AuthenticationOptions> {
  public static readonly moduleName = 'authentication'
  public static readonly description = 'Authentication core module wrapper'
  public static readonly defaultConfig: AuthenticationOptions = { dynamicsLocation: './src', secret: 'default' }

  public subject: Authentication

  public async prepare(): Promise<void> {
    this.subject = new Authentication(this.config)

    this.subject.on('warning', (event): void => {
      this.logger.log(
        {
          level: 'WARNING',
          title: 'Authentication Dynamic waring',
          message: event.payload.message,
          category: 'AUTH',
          metadata: event.payload
        },
        LOG_CONFIGURATION
      )
    })

    await this.subject.loadDynamics()
  }

  public async release(): Promise<void> {}
}
