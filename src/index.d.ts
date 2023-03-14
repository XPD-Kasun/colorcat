export interface ElectronAPI {
       showDialog(): void,
       relaunch(): void,
       mode: string
}

declare global {
       interface Window {
              electronAPI: ElectronAPI
       }
}