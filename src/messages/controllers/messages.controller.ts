import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from '../dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {

    }

    @Post()
    createMessages(@Body() body: CreateMessageDto) {
        console.log("🚀 ~ file: messages.controller.ts:12 ~ MessagesController ~ createMessages ~ body:", body)
        
    }

    @Get('/:id')
    getMessages(@Param('id') id: string) {
        console.log("🚀 ~ file: messages.controller.ts:18 ~ MessagesController ~ getMessages ~ id:", id)
        
    }
}
