export interface ColorsProps {
    background: string,
    card: string,
    border: string,
    primary: string,
    text: string,
    notification: string,
    accent: string,
    backdrop: string,
    disabled: string,
    error: string,
}

export interface AppThemeProps {
    colors: ColorsProps,
    dark: boolean,
}

// interface for Theme Context
export interface ThemeContextProps {
    mode: "light" | "dark",
    dark: boolean,
    colors: ColorsProps,
    changeMode: (mode: string) => void,
}