<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::create(['name' => 'admin']);
        $doctorRole = Role::create(['name' => 'doctor']);

        // Crear permisos para el modelo Doctor
        Permission::create(['name' => 'create doctors']);
        Permission::create(['name' => 'view doctors']);
        Permission::create(['name' => 'edit doctors']);
        Permission::create(['name' => 'delete doctors']);

        // Asignar permisos al rol admin
        $adminRole->givePermissionTo([
            'create doctors',
            'view doctors',
            'edit doctors',
            'delete doctors',
        ]);

        // Asignar permisos al rol doctor
        $doctorRole->givePermissionTo([
            'view doctors',
        ]);

        // creo usuario

        $user = User::create([
            'name' => 'Junior Martinez Chunga',
            'email' => 'junior15062023@gmail.com',
            'password' => Hash::make('junior123'),
        ]);

        $user->assignRole('admin');
    }
}
