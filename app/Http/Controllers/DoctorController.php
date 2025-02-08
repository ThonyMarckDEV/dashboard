<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Http\Requests\StoreDoctorRequest;
use App\Http\Requests\UpdateDoctorRequest;
use App\Http\Resources\DoctorResource;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DoctorController extends Controller
{
    // funcion para retornar la vista del modulo doctor
    public function listDoctor()
    {
        // autorizacion para que pueda acceder al metodo
        Gate::authorize('viewAny', Doctor::class);
        try {
            $name = request('name');
            $doctors = Doctor::when($name, function ($query, $name) {
                return $query->where('name', 'like', "%$name%");
            })->paginate(20);
            return response()->json([
                'data' => DoctorResource::collection($doctors),
                'pagination' => [
                    'total' => $doctors->total(),
                    'current_page' => $doctors->currentPage(),
                    'per_page' => $doctors->perPage(),
                    'last_page' => $doctors->lastPage(),
                    'from' => $doctors->firstItem(),
                    'to' => $doctors->lastItem(),
                ],
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error al cargar los datos',
                'error' => $th->getMessage(),
            ], 500);
        }
    }
    // funcion index para cargar los datos y el filtro para la tabla del modulo doctor
    public function index()
    {
        Gate::authorize('viewAny', Doctor::class);
        return Inertia::render('Doctor/indexDoctor');
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDoctorRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Doctor $doctor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Doctor $doctor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDoctorRequest $request, Doctor $doctor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Doctor $doctor)
    {
        //
    }
}
