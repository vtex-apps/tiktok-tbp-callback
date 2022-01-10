export async function checkHealth(ctx: Context, next: () => Promise<void>) {
  const OK = 200

  ctx.status = OK

  await next()
}
