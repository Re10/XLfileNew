import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class UserController {

    @Get("/users")
    getAll() {
        return "This action returns all users";
    }
}