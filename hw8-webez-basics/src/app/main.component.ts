import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent, BindValue } from "@gsilber/webez";
import { BoopButtonComponent } from "./boop-button/boop-button.component";
import { SimpleCalculatorComponent } from "./simple-calculator/simple-calculator.component";
import { BoxEditorComponent } from "./box-editor/box-editor.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    @BindValue("example-target")
    private myText: string = "Hello from the TypeScript side!";

    private boopButton: BoopButtonComponent = new BoopButtonComponent();
    private calculator: SimpleCalculatorComponent =
        new SimpleCalculatorComponent();
    private box: BoxEditorComponent = new BoxEditorComponent();

    constructor() {
        super(html, css);
        this.addComponent(this.boopButton, "boop-button");
        this.addComponent(this.calculator, "calculator");
        this.addComponent(this.box, "box");
    }
}
