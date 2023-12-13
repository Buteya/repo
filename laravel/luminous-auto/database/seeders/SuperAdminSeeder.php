<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Creating Super Admin User
        $superAdmin = User::create([
            'firstname' => 'Steve',
            'lastname' => 'Masira',
            'country' => 'Kenya',
            'city' => 'Nairobi',
            'nationality' => 'Kenyan',
            'mobilenumber' => '0700415452', 
            'email' => 'stevemasira@gmail.com',
            'password' => Hash::make('Masira@123')
        ]);
        $superAdmin->assignRole('Super Admin');

        // Creating Admin User
        $admin = User::create([
            'firstname' => 'Wayne',
            'lastname' => 'Wonder',
            'country' => 'Kenya',
            'city' => 'Nairobi',
            'nationality' => 'Kenyan',
            'mobilenumber' => '0700000002', 
            'email' => 'wonder@gmail.com',
            'password' => Hash::make('Wonder@123')
        ]);
        $admin->assignRole('Admin');

        // Creating Product Manager User
        $productManager = User::create([
            'firstname' => 'Chris',
            'lastname' => 'Mayne',
            'country' => 'Kenya',
            'city' => 'Nairobi',
            'nationality' => 'Kenyan',
            'mobilenumber' => '0700415000', 
            'email' => 'mayne@gmail.com',
            'password' => Hash::make('Mayne@123')
        ]);
        $productManager->assignRole('Product Manager');

        // Creating Product Manager User
        $orderManager = User::create([
            'firstname' => 'Ian',
            'lastname' => 'Duncan',
            'country' => 'Kenya',
            'city' => 'Nairobi',
            'nationality' => 'Kenyan',
            'mobilenumber' => '0700015000', 
            'email' => 'duncan@gmail.com',
            'password' => Hash::make('Duncan@123')
        ]);
        $orderManager->assignRole('Order Manager');
    }
}
