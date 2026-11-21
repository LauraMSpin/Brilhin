/** Monta o caminho de um arquivo em public/assets respeitando o base do Vite. */
export const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`
