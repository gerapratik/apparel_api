

import { ApparelItem, OrderItem } from '../models/Apparel';
import fs from 'fs-extra';
import path from 'path';

const dataFilePath = path.join(__dirname, '../data/stock.json');

export class ApparelService {
  private stock: ApparelItem[] = [];

  constructor() {
    this.loadStock();
  }

  private loadStock() {
    if (fs.existsSync(dataFilePath)) {
      this.stock = fs.readJsonSync(dataFilePath);
    }
  }

  private saveStock() {
    fs.writeJsonSync(dataFilePath, this.stock);
  }

  public updateItem(item: ApparelItem) {
    const index = this.stock.findIndex(i => i.code === item.code && i.size === item.size);
    if (index !== -1) {
      this.stock[index] = item;
    } else {
      this.stock.push(item);
    }
    this.saveStock();
  }

  public bulkUpdateItems(items: ApparelItem[]) {
    items.forEach(item => this.updateItem(item));
  }

  public canFulfillOrder(order: OrderItem[]): boolean {
    return order.every(({ code, size, quantity }) => {
      const item = this.stock.find(i => i.code === code && i.size === size);
      return item ? item.quantity >= quantity : false;
    });
  }

  public calculateOrderCost(order: OrderItem[]): number | null {
    let totalCost = 0;
    for (const { code, size, quantity } of order) {
      const item = this.stock.find(i => i.code === code && i.size === size);
      if (!item || item.quantity < quantity) return null;
      totalCost += item.price * quantity;
    }
    return totalCost;
  }
}
