import { OrderPriorityService } from './order-priority.service';
import { OrderEntity } from './entities/order.entity';

describe('OrderPriorityService', () => {
  const service = new OrderPriorityService();


  const buildOrder = (overrides: Partial<OrderEntity>): OrderEntity => {
    return {
      id: 1,
      item: 'Café latte',
      quantity: 1,
      status: 'pending',
      customer: undefined,
      createdAt: new Date(),
    };
  };

  it('normal priority with order of quantity 1', () => {
    const order = buildOrder({ status: 'pending', quantity: 1 });

    const result = service.classify(order);

    expect(result.priority).toBe('normal');
  });

  it('medium priorit with order of quantity 3', () => {
    const order = buildOrder({ status: 'pending', quantity: 3 });

    const result = service.classify(order);

    expect(result.priority).toBe('medium');
  });

  it('high priority with order of quantity 4', () => {
    const order = buildOrder({ status: 'pending', quantity: 4 });

    const result = service.classify(order);

    expect(result.priority).toBe('high');
  });

  it('completed priority with order of quantity 5', () => {
    const order = buildOrder({ status: 'ready', quantity: 5 });

    const result = service.classify(order);

    expect(result.priority).toBe('completed');
  });
});