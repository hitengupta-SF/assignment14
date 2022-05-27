import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Role, Users
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersRoleController {
  constructor(
    @repository(UsersRepository)
    public usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/role', {
    responses: {
      '200': {
        description: 'Role belonging to Users',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Role)},
          },
        },
      },
    },
  })
  async getRole(
    @param.path.number('id') id: typeof Users.prototype.id,
  ): Promise<Role> {
    return this.usersRepository.role(id);
  }
}
