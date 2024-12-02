import { AuthenticationModule } from '../src'

coreJest.runBare({
  coreConfigOverride: {
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe(AuthenticationModule, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    expect(global.authenticationSubject).not.toBeUndefined()
    expect(global.authenticationSubject.options).toEqual({
      debug: true,
      dynamicsLocation: './tests/__fixtures__',
      accumulate: true,
      defaultModule: {
        enabled: true
      },
      modules: {
        default: {
          enabled: true
        }
      },
      secret: 'core-test-secret',
      namespace: 'auth'
    })
  })
})
