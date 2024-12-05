import { CoreInitializer } from '@universal-packages/core'

export default class AuthenticationInitializer extends CoreInitializer {
  public static readonly initializerName = 'authentication'
  public static readonly description: string = 'Core Authentication Initializer'

  public readonly templatesLocation: string = `${__dirname}/templates`
}
