<?php declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Attachment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\Searchable\AttachmentsSearchable;
use BayAreaWebPro\SearchableResource\SearchableResource;

class AttachmentController extends Controller
{
    public function __construct()
    {
        //$this->authorizeResource(Attachment::class, 'attachments');
    }

    /**
     * Display a listing of the resource.
     * @param Request $request
     * @return SearchableResource
     */
    public function index(Request $request)
    {
        return SearchableResource::make(Attachment::query())->tap(new AttachmentsSearchable());
    }


    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create(): Response
    {
        return response([
            'entity' => (new Attachment())->toArray()
        ]);
    }

    /**
     * Display the specified resource.
     * @param Attachment $attachment
     * @return Response
     */
    public function show(Attachment $attachment): Response
    {
        return response([
            'entity' => $attachment
        ]);
    }

    /**
     * Display the specified resource.
     * @param Attachment $attachment
     * @return Response
     */
    public function edit(Attachment $attachment): Response
    {
        return response([
            'entity' => $attachment
        ]);
    }

    /**
     * Store Media
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): Response
    {
        $request->validate(Attachment::validationRules());

        $file = $request->file('file');

        $path = $file->storePublicly("attachments/{$request->user()->id}", [
            'disk' => 'public',
        ]);

        return response([
            'message' => 'Attachment Created',
            'file' => Attachment::create([
                'name' => basename($path),
                'size' => $file->getSize(),
                'mime' => $file->getMimeType(),
                'user_id' => $request->user()->id,
            ]),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param Attachment $token
     * @return Response
     */
    public function update(Request $request, Attachment $attachment): Response
    {
        $request->validate(Attachment::validationRules($attachment));

        return response([
            'message' => 'Entity Updated',
            'entity' => $attachment
        ]);
    }

    /**
     * Store Media
     * @param Attachment $attachment
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Attachment $attachment)
    {
        $attachment->delete();
        return response([
            'message' => 'Attachment Destroyed',
        ]);
    }
}
