// Binary search tree - Minified and shaped like a tree!

         n=function(d)
   {this.d=d,this.l,this.r}
   n.prototype.c=function(v)
 {v<=this.d?!this.l?this.l=
  new n(v):this.l.c(v):!this.r
 ?this.r=new n(v):this.r.c(v)}
   n.prototype.f=function(v)
{return v==this.d?!!1:v<this.d?
   !this.l?!!0:this.l.f(v):
   !this.r?!!0:this.r.f(v)}
   n.prototype.p=function(v)
     {this.l&&this.l.p()
          console.log
           (this.d)
           this.r&&
          this.r.p()}

// Single line
n=function(d){this.d=d,this.l,this.r};n.prototype.c=function(v){v<=this.d?!this.l?this.l=new n(v):this.l.c(v):!this.r?this.r=new n(v):this.r.c(v)};n.prototype.f=function(v){return v==this.d?!!1:v<this.d?!this.l?!!0:this.l.f(v):!this.r?!!0:this.r.f(v)};n.prototype.p=function(v){this.l&&this.l.p();console.log(this.d);this.r&&this.r.p()}

// To create a tree with the values [1, 2, 3, 5, 7, 8, 9]
t=new n(5),t.c(8),t.c(1),t.c(2),t.c(9),t.c(7),t.c(3)
// To check if a given value exists;
console.log(t.f(0)) // Should return false
// To display the values in the tree in a sorted order;
console.log(t.p()) // 1, 2, 3, 5, 7, 8, 9
