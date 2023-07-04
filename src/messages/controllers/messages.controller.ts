import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from '../dtos/create-message.dto';
import { MessagesService } from '../services/messages.service';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService

    constructor() {
        // Don't do this on real app
        // USE DEPENDENCY INJECTION
        this.messagesService = new MessagesService();
    }
    
    @Get()
    listMessages() {
        return this.messagesService.findAll
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    getMessages(@Param('id') id: string) {
        console.log("🚀 ~ file: messages.controller.ts:18 ~ MessagesController ~ getMessages ~ id:", id)
        
    }
}
