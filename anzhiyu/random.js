var posts=["2024/09/25/hello-world/","2024/09/27/和DC斗智斗勇/","2024/09/27/调整Linux环境/","2024/09/27/为什么寄存器需要建立时间和保持时间约束？——从门级角度理解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };