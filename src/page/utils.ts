

export function removeSwapiUrl(fullUrl: string): string | undefined {
    // fullUrl.s
    return fullUrl.split('swapi.dev').pop()
}