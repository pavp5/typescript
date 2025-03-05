import Buyable from "./buyable";

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    del(id: number): void {
        this._items = this._items.filter(
            (item: Buyable) => item.id != id
        );
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    sumPrice(discount: number = 0): number {
        let sum: number = this.items.reduce(
            (sum: number, item: Buyable) => sum + item.price, 0
        )
        if (discount > 0) {
            sum = sum * (100 - discount) / 100;
        }
        return sum;
    }

}