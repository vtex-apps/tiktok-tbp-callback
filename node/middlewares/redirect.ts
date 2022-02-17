import type { ServiceContext } from '@vtex/api'

export async function redirect(ctx: ServiceContext, next: () => Promise<void>) {
  const redirectState = ctx.state as State

  const redirectUri = `https://${
    redirectState.workspace && redirectState.workspace !== 'master'
      ? `${redirectState.workspace}--`
      : ''
  }${redirectState.account}.myvtex.com/admin/tiktok-loading?authCode=${
    redirectState.authCode
  }&tradePolicyId=${redirectState.tradePolicyId}&passPhrase=${
    redirectState.passPhrase
  }`

  ctx.redirect(redirectUri)

  await next()
}
