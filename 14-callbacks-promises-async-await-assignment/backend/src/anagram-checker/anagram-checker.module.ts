import { Module } from '@nestjs/common';
import { AnagramCheckerController } from './anagram-checker.controller';
import { AnagramCheckerService } from './anagram-checker.service';

@Module({
  controllers: [AnagramCheckerController],
  providers: [AnagramCheckerService]
})
export class AnagramCheckerModule {}
