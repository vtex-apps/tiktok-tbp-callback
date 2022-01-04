interface URLState {
  account: string
  workspace: string
  salesChannelId: number
  passPhrase: string
}

export async function parseParams(ctx: Context, next: () => Promise<void>) {
  const authCode = ctx.URL.searchParams.get('authCode') as string
  const state = (ctx.URL.searchParams.get('state') as unknown) as URLState

  ctx.state.account = state.account
  ctx.state.workspace = state.workspace
  ctx.state.salesChannelId = state.salesChannelId
  ctx.state.passPhrase = state.passPhrase
  ctx.state.authCode = authCode

  await next()
}
