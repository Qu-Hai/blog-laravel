<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public $timestamps = false;
    public function content()
    {
        return $this->belongsTo(Post_Content::class,'post__content_id');
    }
    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }
    
    
}
