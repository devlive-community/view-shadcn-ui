import * as monaco from 'monaco-editor'

export function disableLanguageValidation(language: string)
{
    const langDefaults = {
        typescript: monaco.languages.typescript.typescriptDefaults,
        javascript: monaco.languages.typescript.javascriptDefaults,
        css: monaco.languages.css.cssDefaults,
        json: monaco.languages.json.jsonDefaults
    }[language]

    if (langDefaults) {
        langDefaults.setDiagnosticsOptions({
            noSyntaxValidation: true,
            noSemanticValidation: true,
            validate: false
        })
    }
}