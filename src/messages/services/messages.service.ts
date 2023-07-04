import { MessagesRepository } from "../repositories/messages.repository";

export class MessagesService {
    messagesRepo: MessagesRepository;
    
    constructor() {
        // Service is creating it's own dependencies
        // Don't do this on real app
        this.messagesRepo = new MessagesRepository()
    }

    async findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    async findAll() {
        return this.messagesRepo.findAll();
    }

}