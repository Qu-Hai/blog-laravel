<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post_Content extends Model
{
    protected $table = 'post__contents';
    public $timestamps = false;
    public function post()
    {
        return $this->hasOne(Post::class);
    }
    public function author()
    {
        return $this->hasOne(Author::class);
    }
}
