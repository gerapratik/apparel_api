
import { Request, Response } from 'express';
import { ApparelService } from '../services/ApparelService';
import { ApparelItem, OrderItem } from '../models/Apparel';

const apparelService = new ApparelService();

export const updateApparel = (req: Request, res: Response) => {
  const item: ApparelItem = req.body;
  apparelService.updateItem(item);
  res.status(200).json({ message: 'Apparel updated successfully' });
};

export const bulkUpdateApparel = (req: Request, res: Response) => {
  const items: ApparelItem[] = req.body;
  apparelService.bulkUpdateItems(items);
  res.status(200).json({ message: 'Bulk update successful' });
};

export const checkOrderFulfillment = (req: Request, res: Response) => {
  const order: OrderItem[] = req.body;
  const canFulfill = apparelService.canFulfillOrder(order);
  res.status(200).json({ canFulfill });
};

export const calculateOrderCost = (req: Request, res: Response) => {
  const order: OrderItem[] = req.body;
  const cost = apparelService.calculateOrderCost(order);
  if (cost === null) {
    res.status(400).json({ message: 'Order cannot be fulfilled due to insufficient stock' });
  } else {
    res.status(200).json({ totalCost: cost });
  }
};
