export function quoteString(input: string, noQuotes: boolean, doubleQuotes: boolean): string {
    const lines = input.split('\n');
    const processedLines = lines.filter(line => line != '').map(line => noQuotes ? line : doubleQuotes ? `"${line}"` : `'${line}'`);
    return processedLines.join(',');
}