import type { ServiceContext } from '@vtex/api'

export async function redirect(ctx: ServiceContext, next: () => Promise<void>) {
  // TODO: implement redirect function
  console.log("🚀 ~ file: redirect.ts ~ line 4 ~ redirect ~ ctx", ctx)

  await next()
}
