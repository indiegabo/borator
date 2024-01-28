import { Module } from "@nestjs/common";
import { BoraModule } from "./bora/bora.module";
import { GaboResponderModule } from "./gabo-responder/gabo-responder.module";

@Module({
    imports: [
        BoraModule,
        GaboResponderModule,
    ],
    exports: [],
})
export class CoreModule { }