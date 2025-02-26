<?php

namespace App\Http\Controllers;

use App\Actions\Pipelines\Filter;
use App\Models\Doctor;
use App\Http\Requests\StoreDoctorRequest;
use App\Http\Requests\UpdateDoctorRequest;
use App\Http\Resources\DoctorResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class DoctorController extends Controller
{
    private const SUCCESS_MESSAGE = 'success';
    private const MESSAGE = 'message';
    private const DATA = 'data';
    private const PAGINATION = 'pagination';
    // funcion para retornar la vista del modulo doctor
    public function listDoctor(): JsonResponse
    {
        // autorizacion para que pueda acceder al metodo
        Gate::authorize('viewAny', Doctor::class);
        try {
            $name = request('name');
            $doctors = Doctor::when($name, function ($query, $name) {
                return $query->where('name', 'like', "%$name%");
            })->paginate(20);
            return response()->json([
                self::DATA => DoctorResource::collection($doctors),
                self::PAGINATION => [
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
    public function store(StoreDoctorRequest $request): JsonResponse
    {
        Gate::authorize('create', Doctor::class);
        $validated = $request->validated();
        // se omite el campo state ya que al crear un nuevo doctor siempre se creara activo
        $validated = $request->safe()->except(['state']);
        $doctor = Doctor::create($validated);
        return response()->json([
            self::SUCCESS_MESSAGE => true,
            self::MESSAGE => 'Doctor creado',
            self::DATA => new DoctorResource($doctor),
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Doctor $doctor): JsonResponse
    {
        Gate::authorize('view', $doctor);
        return response()->json([
            self::SUCCESS_MESSAGE => true,
            self::MESSAGE => 'Doctor encontrado',
            self::DATA => new DoctorResource($doctor),
        ], 200);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDoctorRequest $request, Doctor $doctor): JsonResponse
    {
        Gate::authorize('update', $doctor);
        $validated = $request->validated();
        $doctor->update($validated);
        return response()->json([
            self::SUCCESS_MESSAGE => true,
            self::MESSAGE => 'Doctor actualizado',
            self::DATA => new DoctorResource($doctor),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Doctor $doctor): JsonResponse
    {
        Gate::authorize('delete', $doctor);
        $doctor->delete();
        return response()->json([
            self::SUCCESS_MESSAGE => true,
            self::MESSAGE => 'Doctor eliminado',
        ], 200);
    }
    public function searchDoctor(Request $request)
    {
        $doctors = (new Filter())->execute(null, $request);
        return response()->json([
            self::DATA => DoctorResource::collection($doctors),
            self::PAGINATION => [
                'total' => $doctors->total(),
                'current_page' => $doctors->currentPage(),
                'per_page' => $doctors->perPage(),
                'last_page' => $doctors->lastPage(),
                'from' => $doctors->firstItem(),
                'to' => $doctors->lastItem(),
            ],
        ]);
    }
}
