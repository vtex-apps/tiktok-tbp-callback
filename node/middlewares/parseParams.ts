import type { ServiceContext } from '@vtex/api'

export async function parseParams(ctx: ServiceContext, next: () => Promise<void>) {
  // TODO: implement parseParams function
  const authCode = ctx.URL.searchParams.get('authCode')
  console.log("🚀 ~ file: redirect.ts ~ line 6 ~ redirect ~ code", authCode)
  const state = ctx.URL.searchParams.get('state')
  console.log("🚀 ~ file: redirect.ts ~ line 8 ~ redirect ~ state", state)

  await next()
}
