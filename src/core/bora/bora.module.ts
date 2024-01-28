import { Module } from "@nestjs/common";
import { SharedModule } from "src/shared/shared.module";
import { BoraService } from "./bora.service";

@Module({
    imports: [
        SharedModule,
    ],
    providers: [BoraService],
})
export class BoraModule { }