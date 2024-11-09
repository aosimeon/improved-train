import type { Config } from '@netlify/functions';

const BUILD_HOOK = 'https://api.netlify.com/build_hooks/672f57e233de735d581c9910';

export default async (req: Request) => {
    await fetch(BUILD_HOOK, {
        method: 'POST',
    })
};

export const config: Config = {
    schedule: '0 0 * * *',
};