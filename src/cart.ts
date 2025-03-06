import Buyable from "./buyable";

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        // Проверка наличия товара в корзине
        const existItems: Buyable[] = this._items.filter(
            (el: Buyable) => el.id == item.id
        );
        if (existItems.length == 0) {
            this._items.push(item);
        } else {
            // Проверка наличия свойства "количество"
            if (existItems[0].amount != undefined) existItems[0].amount += 1;
        }

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
            (sum: number, item: Buyable) => sum + this.itemPrice(item), 0
        )
        if (discount > 0) {
            sum = sum * (100 - discount) / 100;
        }
        return sum;
    }

    private itemPrice(item: Buyable) : number {
        if (item.amount != undefined) return item.price * item.amount;
        return item.price;
    }

}