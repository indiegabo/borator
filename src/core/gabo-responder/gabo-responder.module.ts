import { Module } from "@nestjs/common";
import { SharedModule } from "src/shared/shared.module";
import { GaboResponderService } from "./gabo-responder.service";

@Module({
    imports: [
        SharedModule,
    ],
    providers: [GaboResponderService],
})
export class GaboResponderModule { }