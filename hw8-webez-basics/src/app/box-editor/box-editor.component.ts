import {
    EzComponent,
    BindValueToNumber,
    BindStyleToNumberAppendPx,
    ValueEvent,
    Input,
    BindValue,
    BindStyle,
    Change,
} from "@gsilber/webez";
import html from "./box-editor.component.html";
import css from "./box-editor.component.css";

export class BoxEditorComponent extends EzComponent {
    @BindStyleToNumberAppendPx("image", "padding")
    @BindValueToNumber("padding-input")
    private padding: number = 0;

    @BindStyleToNumberAppendPx("image", "margin")
    @BindValueToNumber("margin-input")
    private margin: number = 0;

    @BindStyle("image", "backgroundColor")
    @BindValue("background-select")
    private background: string = "red";

    constructor() {
        super(html, css);
    }

    @Input("padding-input")
    onPaddingChange(event: ValueEvent) {
        this.padding = +event.value;
    }

    @Input("margin-input")
    onMarginChange(event: ValueEvent) {
        this.margin = +event.value;
    }

    @Change("background-select")
    onBackgroundChange(event: ValueEvent) {
        this.background = event.value;
    }
}
