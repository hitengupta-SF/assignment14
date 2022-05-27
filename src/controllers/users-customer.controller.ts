import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Customer, Users
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersCustomerController {
  constructor(
    @repository(UsersRepository)
    public usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/customer', {
    responses: {
      '200': {
        description: 'Customer belonging to Users',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Customer)},
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Users.prototype.id,
  ): Promise<Customer> {
    return this.usersRepository.customer(id);
  }
}
