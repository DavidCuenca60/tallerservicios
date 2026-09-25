import { Injectable } from '@nestjs/common';
import { OrderEntity } from './entities/order.entity';

export interface OrderPriorityResult {
  priority: 'completed' | 'high' | 'medium' | 'normal';
  message: string;
}

@Injectable()
export class OrderPriorityService {
  classify(order: OrderEntity): OrderPriorityResult {
    if (order.status === 'ready') {
      return { priority: 'completed', message: 'Order is ready' };
    }

    if (order.quantity >= 4) {
      return { priority: 'high', message: 'Prepare this order soon' };
    }

    if (order.quantity >= 2) {
      return { priority: 'medium', message: 'Medium priority' };
    }

    return { priority: 'normal', message: 'Normal priority' };
  }
}