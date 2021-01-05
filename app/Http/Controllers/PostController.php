<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Post_Content;
use App\Models\Author;
use App\Models\Category;
use DB;
class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $post = Post::all()->where('state', '1');
        return response()->json($post, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
        $content = new Post_Content;
        $content->value = $request->value;
        $content->save();
        $post = new Post;

        if($request->file('image')){
            $image = $request->file('image');
            $originalname = time() . '.' . $image->getClientOriginalExtension();
            $dest = public_path('/img');
            $image->move($dest, $originalname);
            $post->image=$originalname;
        }
        $post->title=$request->title;
        $post->description=$request->description;
        
        $post->post__content_id=$content->id;
        $post->author_id= $request->author_id;
        $post->category_id = $request->category_id;
        $post->save();
        $data = Post::findOrFail($post->id);
        
        return response()->json($data, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function first()
    {
        $post = Post::where('state', '1')->first();
        return response()->json($post, 200);
    }
    public function limit()
    {
        $data = DB::table('posts')
        ->join('post__contents', 'posts.post__content_id','=', 'post__contents.id')
        ->join('categories', 'posts.category_id','=', 'categories.id')
        ->where('posts.state',1)->limit(4)->get();
        return response()->json($data, 200);
    }
}
