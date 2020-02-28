<?php declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Attachment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AttachmentController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Attachment::class, 'attachment');
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

        $path = $file->storePublicly("attachments", [
            'disk' => 'public',
        ]);

        return response([
            'message' => 'Attachment Created',
            'entity' => Attachment::create([
                'name' => basename($path),
                'size' => $file->getSize(),
                'mime' => $file->getMimeType(),
                'user_id' => $request->user()->id,
            ]),
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
