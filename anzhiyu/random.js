var posts=["2024/09/25/hello-world/","2024/09/26/Linux的使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };