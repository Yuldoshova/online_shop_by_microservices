import { Controller, ParseUUIDPipe } from '@nestjs/common';
import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) { }

  @MessagePattern('createLanguage')
  create(
    @Payload() createLanguageDto: CreateLanguageDto
  ) {
    return this.languageService.create(createLanguageDto);
  }

  @MessagePattern('getAllLanguages')
  findAll() {
    return this.languageService.findAll();
  }

  @MessagePattern('getSingleLanguage')
  findOne(
    @Payload('id', new ParseUUIDPipe({ version: '4' })) id: string
  ) {
    return this.languageService.findOne(id);
  }

  @MessagePattern('updateLanguage')
  update(
    @Payload() updateLanguageDto: UpdateLanguageDto
  ) {
    return this.languageService.update(updateLanguageDto.id, updateLanguageDto);
  }

  @MessagePattern('deleteLanguage')
  remove(
    @Payload('id', new ParseUUIDPipe({ version: '4' })) id: string
  ) {
    return this.languageService.remove(id);
  }
}
