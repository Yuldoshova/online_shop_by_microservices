import { Injectable } from '@nestjs/common';
import { LocalizationClient } from './localization.client';
import { CreateLanguageDto, UpdateLanguageDto } from './dtos';

@Injectable()
export class LocalizationService {
    constructor(private languageClient: LocalizationClient) { }

    getLanguageList() {
        return this.languageClient.getAllLanguages();
    }

    getSingleLanguage(id: string) {
        return this.languageClient.getSingleLanguage(id);
    }

    createLanguage(payload: CreateLanguageDto) {
        return this.languageClient.createLanguage(payload);
    }

    updateLanguage(id: string, update: UpdateLanguageDto) {
        return this.languageClient.updateLanguage({ id, update });
    }

    deleteLanguage(id: string) {
        return this.languageClient.deleteLanguage(id);
    }
}
