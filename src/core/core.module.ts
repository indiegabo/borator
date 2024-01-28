import { Module } from "@nestjs/common";
import { BoraModule } from "./bora/bora.module";

@Module({
    imports: [
        BoraModule,
    ],
    exports: [],
})
export class CoreModule { }