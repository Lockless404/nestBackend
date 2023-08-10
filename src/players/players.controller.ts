import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('players')
export class PlayersController {
  //Get /players?type=new --> [players]
  @Get()
  getPlaters(@Query('type') type: string) {
    return [`Get all players with type ${type}`];
  }
  //Get /player/:id --> player
  @Get(':id')
  getPlayer(@Param('id') id: string) {
    return `Get player with id ${id}`;
  }
  //Post /players --> Create player
  @Post()
  createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    return {
      name: createPlayerDto.name,
    };
  }
  //Put /player/:id --> Update player
  @Put()
  updatePlayer(@Param('id') id: string, @Body() updatePlayerDto: CreatePlayerDto) {
    return {
      id,
      name: updatePlayerDto.name,
    };
  }
  //Delete /player/:id --> Delete player
  @Delete(':id')
  deletePlayer(@Param('id') id: string) {
    return `Delete player with id ${id}`;
  }
}
