<?php namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @return void
     */
    public function run()
    {
        $user = User::factory()->create([
            'name' => config('development.user.name'),
            'email' =>  config('development.user.email'),
            'password' =>  config('development.user.password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        $user->grantRole('admin');
        $user->save();

        $user = User::factory()->create([
            'name' => 'Test Developer',
            'email' =>  'test@devdashboard.app',
            'password' =>  'testDev2020',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        $user->grantRole('admin');
        $user->save();

        User::factory()->times(60)->create();
    }
}
