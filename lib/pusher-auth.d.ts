import { AuthorizerGenerator } from 'pusher-js/with-encryption';

export as namespace PusherBatchAuthorizer;

declare const pusherBatchAuthorizer: AuthorizerGenerator;

export = pusherBatchAuthorizer;

declare module 'pusher-js' {
    export interface AuthorizerOptions {
        authDelay?: number;
        useEncryption?: boolean;
    }
}
