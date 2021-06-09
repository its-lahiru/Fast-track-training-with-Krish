import { Module } from '@nestjs/common';
import { NthLargestNumberFinderController } from './nth-largest-number-finder.controller';
import { NthLargestNumberFinderService } from './nth-largest-number-finder.service';

@Module({
  controllers: [NthLargestNumberFinderController],
  providers: [NthLargestNumberFinderService]
})
export class NthLargestNumberFinderModule {}
