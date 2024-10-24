import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocalizationService } from './localization.service';
import { CreateLanguageDto, UpdateLanguageDto } from './dtos';

@ApiTags('Language Service')
@Controller('/localization')
export class LocalizationController {
    constructor(private service: LocalizationService) { }

    @ApiOperation({ summary: 'Get all languages' })
    @Get('/languages')
    getLanguages() {
        return this.service.getLanguageList();
    }

    @ApiOperation({ summary: 'Get single language' })
    @Get('/languages/:languageId')
    getSingleLanguage(
        @Param('languageId', new ParseUUIDPipe({ version: '4' })) languageId: string
    ) {
        return this.service.getSingleLanguage(languageId);
    }

    @ApiOperation({ summary: 'Create language' })
    @Post('/languages/add')
    createLanguage(
        @Body() payload: CreateLanguageDto
    ) {
        return this.service.createLanguage(payload);
    }

    @ApiOperation({ summary: 'Update language' })
    @Patch('/languages/update/:languageId')
    updateLanguage(
        @Param('languageId', new ParseUUIDPipe({ version: '4' })) languageId: string,
        @Body() payload: UpdateLanguageDto,
    ) {
        return this.service.updateLanguage(languageId, payload);
    }

    @ApiOperation({ summary: 'Delete language' })
    @Delete('/languages/delete/:id')
    deleteLanguage(
        @Param('id', new ParseUUIDPipe({ version: '4' })) id: string
    ) {
        return this.service.deleteLanguage(id);
    }
}
