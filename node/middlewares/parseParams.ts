export async function parseParams(ctx: Context, next: () => Promise<void>) {
  const authCode = ctx.URL.searchParams.get('auth_code') as string

  const state = ctx.URL.searchParams.get('state') as string
  const decodeState = decodeURIComponent(state)
  const parsedState: URLState = JSON.parse(decodeState)

  ctx.state.account = parsedState.account
  ctx.state.workspace = parsedState.workspace
  ctx.state.tradePolicyId = parsedState.tradePolicyId
  ctx.state.passPhrase = parsedState.passPhrase
  ctx.state.authCode = authCode

  await next()
}
