export interface ParsedParametersType {
    [key:string]: string;
}

export const parsedParameters = (): ParsedParametersType => {
    if (!document?.location?.search) return {};
    const s = document.location.search;
    const safe = s.length>0 ? s.substring(1) : "";
    const split = safe.split("&");
    const keyValues: string[][] = split.map((s: string) => s.split("="));
    const pp: ParsedParametersType = {};
    for (let i = 0; i < keyValues.length; i++) {
        const kv = keyValues[i];
        pp[kv[0]] = kv[1];
    }
    return pp;
}