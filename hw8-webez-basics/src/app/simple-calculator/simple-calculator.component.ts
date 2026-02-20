import {
    Click,
    BindValueToNumber,
    EzComponent,
    Input,
    ValueEvent,
    BindValue,
    Change,
} from "@gsilber/webez";
import html from "./simple-calculator.component.html";
import css from "./simple-calculator.component.css";

export class SimpleCalculatorComponent extends EzComponent {
    @BindValueToNumber("first-number")
    private firstNumber: number = 7;

    @BindValueToNumber("second-number")
    private secondNumber: number = 3;

    @BindValue("operation-select")
    private operationSelect: string = "add";

    @BindValueToNumber("result")
    private result: number = 0;

    constructor() {
        super(html, css);
    }

    @Input("first-number")
    onFirstNumberChange(event: ValueEvent) {
        this.firstNumber = +event.value;
    }

    @Input("second-number")
    onSecondNumberChange(event: ValueEvent) {
        this.secondNumber = +event.value;
    }

    @Change("operation-select")
    onOperationChange(event: ValueEvent) {
        this.operationSelect = event.value;
    }

    @Click("calculate-button")
    calculate() {
        const firstNumber = this.firstNumber;
        const secondNumber = this.secondNumber;
        let result = 0;

        if (this.operationSelect === "add") {
            result = firstNumber + secondNumber;
        } else if (this.operationSelect === "subtract") {
            result = firstNumber - secondNumber;
        } else if (this.operationSelect === "multiply") {
            result = firstNumber * secondNumber;
        } else if (this.operationSelect === "divide") {
            result = firstNumber / secondNumber;
        }

        this.result = result;
    }
}
