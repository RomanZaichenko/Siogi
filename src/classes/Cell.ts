import Figure from "./Figure.ts";

class Cell {
    private coords = {row: 0, column: 0};
    public isOccupied = false;
    public figureOn : Figure | null;
    public displayRotated : boolean = false;

    public constructor(row: number, col: number, displayRotated: boolean) {
        this.coords.row = row;
        this.coords.column = col;
        this.figureOn = null;
        this.displayRotated = displayRotated;
    }

}



export { Cell };