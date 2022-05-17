//* 1. call back
// 1-là hàm
// 2- được truyền qua đối số
// 3- được gọi lại trong hàm nhận đối số
Array.prototype.map2 = function (callback) {
   var output = [];
   for (var i = 0; i < this.length; ++i) {
      var result = callback(this[i], i);
      output.popush(result);
   }
   return output;
}
var courses = ['js', 'php', 'ruby'];
var html = courses.mapap2(function (coures, index) {
   return `<h2 key={${index}}>${coures}</h2>`
});
//Array.some check full validate

//HTML DOM
-Trình duyệt đọc mã html thành mô hình cây Dom gồm 3 thành phần
   + element(id, class, tag, css selecter, html collection)
   + attribute
   + text
//get element
   //id
   var headingNode = document.getElementById('heading_id');
   //css selecter
   var headingNode = document.querySelector('.heading');
//attribute
headingNode.setAttribute('href','www.ss.com');
headingNode.getAttribute('href');
//text
headingNode.innertext;
headingNode.innerText='new title';
//add element 
headingNode.innerHTML='<h2>thánhe</h2>';
//* <div>----><input> <div contenteditable="">
//preventDefault
-chặn hành vi mặt định
//stopPropagation
-ngăn sự kiện nỗi bọt
//*input:focus~ul{display:block}
//dom event 
   //1.xữ lý nhiều việc khi 1 event xảy ra
   //2.lắng nghe/ hủy bỏ lắng nghe  (gán đi, gán lại, không gỡ bỏ)
//event listener
   //1.xữ lý nhiều việc khi 1 event xảy ra
   //2.lắng nghe/ hủy bỏ lắng nghe
var viec1= function(e){
   console.log('viec1')
}
var viec2= function(e){
   console.log('viec2')
}

var viec3= function(e){
   console.log('viec3')
}
var btn.document.getElementById('BTN');
//lắng nghe
btn.addEventListener(
   'click',
   viec1()
) 
btn.addEventListener(
   'click',
   viec2()
) 
btn.addEventListener(
   'click',
   viec3()
)   
//hủy bỏ lắng nghe sau 3s
setTimeout(function(){
   btn.removeEventListener('click',viec1);
},3000);
//json:
   //1.là 1 định dạng dữ liệu dạng chuỗi
   //2.javaScript Object Notation
   //-Stringify: Từ Javascript type -> JSON 
   //-Parse: Từ JSON-> Javascript type
//promise: xử lí thao tác bất đồng bộ
   //3 trạng thái: pending, fulfilled, rejected
   //giải quyết callback hell
   //1. new Promise
   //2. Executor function
var promise = new Promise(
   //Executor
   function(resolve,reject){
   //Logic
   //Thành công :resolve()
   //thất bại: reject()

});
promise
   .then(function(res){})
   .catch(function(err){})
   .finally(function(){})
//promise methods
   //1.Promise.resolve
var promise= Promise.resolve('Success!');
   //2.Promise.reject
var promise= Promise.reject('Error!');
   //3.Promise.all  logic bất đồng bộ, nhưng không phụ thuộc nhau, chạy song song, đỡ tốn thời gian
   //*lưu ý 1 promise reject thì hỏng hết
var promise1= new Promise(
   function(resolve){
      setTimeout(function(){
         resolve([2,3]);
      },5000);
   }
)
var promise2= new Promise(
   function(resolve){
      setTimeout(function(){
         resolve([1]);
      },5000);
   }
)
var all = Promise.all([promise1,promise2])
   .then(
      function(result){
         var result1= result[0];
         var result2= result[1];
         return result1.concat(result2);
      }
   )

//ES6(2015)
   //1. Let, const
      1.Var/Let,Const : Scope, Hosting
         //Let,const nằm trong code block(Scope)
         //Var được hỗ trợ hosting, thông dịch đưa khai báo biến lên đầu
      2.Const/ Var,Let: Assignment

   //2. Template Literals
      var str1='nguyen';
      var str=`thanhse${str1}`;
   //3. Multi-line String
      const lines='line1\n'+'line2\n'+'line3\n';
      const mlines=`line1
      lin2
      lin3`;
   //4. Arrow function
      const push=(a,b)=>({a,n});
      //Không có context
   //5. Classes
   //* phân cấp rõ ràng hơn constructor funtions
      class Course{
         constructor(name,price){
            this.name=name;
            this.price=price;
         }
         getname(){
            return this.name;
         }
      }
   //6. Default parameter values
      function logger(log='default values'){
         console.log(log);
      }
      logger();
      logger('iform');
   //7. Destructuring
      var array = ['Javascript','PHP','Ruby'];
      var [a,b,c]= array;
   //8. Rest parameters
      var courses={
         namekh:'js',
         price: 2000,
         image:'avatar'
      };
      var [a,...rest]=array;
      var{namekh:newName='default value',...rest}= courses;
   //9. Spread (bỏ dấu ngoặc)
      var array1=['java','ruby','php'];
      var array2 =['React','Dart'];
      var array3=[...array2,...array1];

   //10.Enhanced object literals
      var namex='js',price=1000;
      var course={
         namex,
         price
      };
      var column={
         [name]:'sjx',
         [price]:'1000'
      }
   //11.Tagged template literral
      var brand='F';
      var coure='jsx';
      function highlight([first, ...strings],...values){

         return values.reduce(
            (acc,next)=>[...acc,`<span>${next}</span>`,strings.shift()],
            [first]
         ).join('')
      }
      highlight`Hoclaptrinh ${cours} tại ${brand}!`;
   //12.Modules
      //import
      //export
//optional  chaining (?.)
   var data={names:'ss',datas:'1'};
   console.log(data?.names);
   console.log(data?.filde);
//-improve javascript
//1.IIFE
   //hàm gọi ngay lúc định nghĩa
   //sử dụng ";" trước IIFE vì thói quen code ko ";"
   //là hàm private (có thể dùng đệ quy trong myFunc)
   //mã chạy ngay trong phạm vi mới, không ảnh hưởng đế dự án(viết thư viện)
   ;(myFunc=(message)=>{
      console.log(message);
   })('chao ban!')
   const app = (function(){
      //private
      const cars=[];
      return{  
         add(car){
            cars.push(car);
         },
         edit(index,car){
            cars[index]= car;
         },
         edit(index){
            cars.splice(index,1);
         },
      }
   })
//2.Closures (tính khép kín, bao đóng của hàm);
   function createCounter(){
      let counter=0;
      function increate(){
         return ++counter;
      }
      return increate;
   }
   const couter = createCounter();
   couter1();
   couter1();
   function createLogger(namespace){
      function logger(message){
         console.log(`[${namespace}] ${message}`);
      }
      return logger;
   }
   const infoLogger= createLogger('info');
   infoLogger('thong tin');

   function createStorage(key){
      const store= JSON.parse(local.getItem(key))??{};
      const save=()=>{
         local.setItem(key, JSON.stringify(store))
      }
      const storage={
         get(key){
            return store[key]
         },
         set(key,value){
            store[key]=value;
            save();
         },
         remove(key){
            delete store[key];
            save()
         }
      }
      return storage;
   }
   const ProfileSetting= createStorage('profile_setting');
   ProfileSetting.set('full_name','nguyen thanh se');

//3.Scope -phạm vi
   //global- Toàn cục
   //code block let,const
   //local scope - hàm: var, function
//4.Hoisting phần khai báo sẽ được đưa lên đầu phạm vi
   //hoisting với var , function
   console.log(age)//undefine
   console.log(name) //error
   console.log(sum(2,3))//5
   var age;
   const name
   function sum(a,b){
      return a+b;
   }
   //hoisting với let ,const
      //được hoisting nhưng không được khởi tạo giá trị, được đưa vào vùng tạm thời không truy cập được
   {
      console.log(age)//err
      let age;
   }
//5.Strick mode
   //chế độ nghiêm ngặt
//6.This keyword
   const iPhone7={
      //Thuộc tính- Property
      name: 'iPhone 7',
      color: 'Pink',
      weight: 300,
      //Phương thức - method
      takePhoto(){
         console.log(this);
      },
      objChild:{
         methodChild(){
            console.log(this);
         }
      }
   }
//7.Bind method
   this.firstname= 'thuan';
   const teacher={
      firstname: 'se',
      getName(){
         return this.firstname
      }
   }
   console.log(teacher.get())//se
   const getTeacherName= teacher.getName;
   console.log(getTeacherName())//thuan
   const getTeacherName1= teacher.getName.bind(teacher);
   console.log(getTeacherName1())//se
   //ứng dụng
   const $= document.querySelector.bind(document);
   const $$=document.querySelectorAll.bind(document);
   const header= $('.heading');
//8.Call method
   //bind+ call () = .call()
   //kế thừa
   function Animal(name,weight){
      this.name= name
      this.weight= weight

   }
   function Chicken(name,weight,legs){
      Animal.call(this,name,weight);
      this.legs= legs
   }
   const ThanhSe= new Chicken('thanh',40,2);
//9.Apply method như call nhưng truyền đối số theo array
//10.Catching, throwing errors
//11.Promise
//12.Async function, await
//value types & Reference types
   //value types (tham trị)
   -String
   -Number
   -Boolean
   -BigInt
   -Symbol
   -undefined
   -null
   //Reference types (tham chiếu)
   -Object
   -Array
   -Function
      //Side effect 
      const car={
         name:'BMW'
      }
      function createCar(obj){
         obj= JSON.parse(JSON.stringify(obj));
         obj.name= 'Mercedes';
         return obj;
      }
      const newCar= createCar(car);
      console.log(newCar,car);

//----reactjs-------
reactjs,nodejs: v18.1.0
react native : v0.68
//useEffect, useMemmo, useCallback, diffreen delay
   
   //useEffect
      //callback luôn được gọi sau khi component mounted
      //cleanup funtions được gọi trước khi component unmounted
      1/useEffect(callback);
      //callback luôn được gọi mỗi khi rerender
      //gọi callback sau khi dom thay đổi
      useEfect(()=>{
         //logic
         //cleanup funtions
         return()=>{
         console.log('unmounting...');
         //window.removeEventListener
         }
      })
      2/useEffect(callback,[]);
      //call back được gọi 1 lần khi component được mounted
      3/useEffect(callback,[despendencies]);
      //call back được gọi lại mỗi khi despendencies thay đổi
   //useLayoutEffect
   //memo xữ lí tránh rerender không cần thết warrapper component
      //check props componet có bị thay đổi không để rerender
   //useMemmo
      const total = useMemmo(()=>{
         const result= products.reduce((result,prod)=>{
            return result+ priceod.price
         },0);
         return restesult;
      },[products]);
   //useCallback
      const handleIncrease= useCallback(()=>{
         stretCount(prevCount=>pending+1);
      },[]);
   

//redux thunk and saga

//native and react native