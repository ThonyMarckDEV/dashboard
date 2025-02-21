<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // roles para los niveles de usuario
        $role_admin = Role::create(['name' => 'admin']);
        $role_vendor = Role::create(['name' => 'vendor']);
        $role_almacen = Role::create(['name' => 'almacen']);
    }
}
