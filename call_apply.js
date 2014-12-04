<html>
<head>
</head>
<body>
	<script>
		function add(a,b){
			return a*b;
		}
		function foo(c,d) {
			return c+d;
		}
		var num = add.call(foo,2,3);
		var data = add.apply(foo,[3,3]);
		var f = add.call(this,2,3);
		console.log(num,data,f);


		var aa = 1;
		var b = function a(x){
		    x && aa(--x);
		}
		console.log(aa);

		//javascript永远是先解析声明函数，再解析变量,
		function a (x) {
		    return x * 2;
		}
		var a;
		console.log(a);

		//函数内部，可以引用一个类数组的对象arguments，它并不是真正的数组，代表了函数实际接受参数的集合，
		//可以通过下标对相应参数进行访问，如果修改了此对象的属性，如arguments[index]，则被传进来的第index
		// (如果有的话，下标从0开始) 变量的值也会被修改。
		function bb (x, y, a) {
		    arguments[2] = 10;
		    console.log (a); 
		}
		bb(1, 2, 3);

		//call 调用一个对象的一个方法，以另一个对象替换当前对象。 
		//格式如 call(thisObj, arg1,arg2...argN)；
		//在函数体外部调用call()方法,如果传入null，则默认转成window,如果不传也是一样,即函数中的this指向window。
		function yy () {
		    console.log (this === window);
		}
		console.log(this === window); // true
		yy.call (); // true
		yy.call (null); // true
		yy.call (this); // true
		yy.call (window); // true
		yy(); // true


	</script>
</body>
</html>
