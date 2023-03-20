import { ReactNode } from 'react';

export interface ElectronAPI {
       showDialog(): void,
       relaunch(): void,
       mode: string
}

export type ReachChildren = ReactNode;

declare global {
       interface Window {
              electronAPI: ElectronAPI
       }
}