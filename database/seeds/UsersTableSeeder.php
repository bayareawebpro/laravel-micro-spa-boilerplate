<?php

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @return void
     */
    public function run()
    {
        $user = factory(User::class)->create([
            'name' => config('development.user.name'),
            'email' =>  config('development.user.email'),
            'password' =>  config('development.user.password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $user->grantRole('admin');
        $user->save();

    }
}
