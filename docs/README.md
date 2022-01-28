# TikTok Business Plugin - Callback Handler

This is a secondary app that handles callbacks for the TikTok Business Plugin. Its purpose is to provide a generic, account agnostic route that TikTok will call upon completing the onboarding flow. The redirect URL which is specified in the TikTok App is fixed and should not be bound to any specific account - and for that purpose, this App is going to be installed on the `vtex` account.

## Callback Route

The redirect URL is defined as follows:

```
https://vtex.myvtex.com/v0/tiktok-tbp-callback/redirect
```

And expects the following parameters:

- `state`: A URL-encoded JSON string containing some extra information from the onboarding flow:
  - `account`: The VTEX account which requested integrating to TikTok.
  - `workspace`: The workspace of the VTEX account which requested integrating to TikTok.
  - `tradePolicyId`: The selected trade policy for the integration.
  - `passPhrase`: A random passPhrase to ensure callback security.
- `authCode`: The auth code used to request the access token from TikTok and finish the integration process.

Upon receiving a request, the callback handler will:

- Parse the `state` and `authCode` parameters.
- Try to redirect the request to the VTEX account specified in the `state` parameter, using this URL `https://{workspace}--{account}.myvtex.com/v0/tiktok-tbp/connect` (if `workspace` is different from `master`) or this URL `https://{account}.myvtex.com/v0/tiktok-tbp/connect` (if `workspace` is equal to `master`) and resending the parameters `tradePolicyId`, `passPhrase` and `authCode`.
- That route will be in charge of handling the remaining steps of the integration (validating the `passPhrase`, saving the `tradePolicyId` and the `accessToken` to the app settings, etc).

## Health Route

The health URL is defined as follows:

```
https://vtex.myvtex.com/v0/tiktok-tbp-callback/health
```

- This endpoint aims to wake up the app and to avoid timeout error that occurs if an app in IO doesn't receive a call for a long period of time.
