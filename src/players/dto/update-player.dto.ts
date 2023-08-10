import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDto } from './create-player.dto';

export class UpdateUserDto extends PartialType(CreatePlayerDto) {}
