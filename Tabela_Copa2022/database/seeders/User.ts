import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
   await User.createMany([
    {
      email: 'admin@admin.com', password: '123456'
    }
   ])
  }
}
