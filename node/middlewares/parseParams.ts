export async function parseParams(ctx: Context, next: () => Promise<void>) {
  const authCode = ctx.URL.searchParams.get('authCode') as string
  const state = ctx.URL.searchParams.get('state') as string

  const parsedState: URLState = JSON.parse(state)

  ctx.state.account = parsedState.account
  ctx.state.workspace = parsedState.workspace
  ctx.state.salesChannelId = parsedState.salesChannelId
  ctx.state.passPhrase = parsedState.passPhrase
  ctx.state.authCode = authCode

  await next()
}
