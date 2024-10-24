import { Injectable, OnModuleInit } from '@nestjs/common';
import {
    ClientProxy,
    ClientProxyFactory,
    Transport,
} from '@nestjs/microservices';

@Injectable()
export class LocalizationClient implements OnModuleInit {
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                port: 3004,
                host: 'localhost',
            },
        });
    }

    async onModuleInit() {
        await this.client.connect();
    }

    createLanguage(payload) {
        return this.client.send('createLanguage', payload);
    }

    getAllLanguages() {
        return this.client.send('getAllLanguages', '');
    }

    getSingleLanguage(id: string) {
        return this.client.send('getSingleLanguage', id);
    }

    updateLanguage(payload) {
        return this.client.send('updateLanguage', payload);
    }

    deleteLanguage(id: string) {
        return this.client.send('deleteLanguage', id);
    }
}
