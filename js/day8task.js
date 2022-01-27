                                                                 TASK-8
 1)The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:


      title, which is a String representing the title of the movie
      studio, which is a String representing the studio that made the movie
      rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
      
1)a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

code-
class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
var movie1=new movie("kgf","ramstudio","pg13");
var movie2=new movie('bahubali','sasisudio','r');
console.log(movie1,movie2)

1)B)The constructor for the class Movie will set the class property rating to "PG" as default when no rating provided. 

code-
class movie{
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
var movie1=new movie("kgf","ramstudio");
var movie2=new movie('bahubali','sasisudio','r');
console.log(movie1,movie2)


OUTPUT-movie { title: 'kgf', studio: 'ramstudio', rating: 'PG' } movie { title: 'bahubali', studio: 'sasisudio', rating: 'r' }




1)D)) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”.
                     
                     
code-
class movie{
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
var movie1=new movie('Casino Royale','Eon Productions','PG­13');

console.log(movie1)
 
 
output-
movie {
  title: 'Casino Royale',
  studio: 'Eon Productions',
  rating: 'PG­13'
} 

2)converting uml class diagram t= class.

code-
class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
        
    }
    circle(){
        console.log("this is circle")
    }
    circle(radius){
        console.log("method overriding")
    }
    circle(radius,color){
        console.log(this.radius,this.color+'final method overriding which accepts by javascripot')
    }
    getradius(){
        console.log("the radius of the circle is "+this.radius)
    }
    setradius(newradius){
       this.radius=newradius;

    }
    getcolor(){
        console.log('the color of the circle is '+this.color)
    }

    setcolor(newcolor){
        this.color=newcolor;
    }
    getarea(){
        console.log('the area of circle is '+(Math.PI*Math.pow(this.radius,2)))
    }
    getcircumference(){
        console.log('the circumference of a circle is '+(2*Math.PI*this.radius))
    }

} 
let circle1=new circle(1,"red");

circle1.getradius();
circle1.setradius(2)
circle1.getradius();
circle1.getcolor();
circle1.setcolor("blue");
circle1.getcolor()
circle1.getarea()
circle1.getcircumference()

output-
the radius of the circle is 1
the radius of the circle is 2
the color of the circle is red
the color of the circle is blue
the area of circle is 12.566370614359172
the circumference of a circle is 12.566370614359172

3)Write a “person” class to hold all the details.

code-
class person{
    constructor(name,age,profession){
        this.name=name;
        this.age=age;
        this.profession=profession;
    }
   getname(){
       console.log("name is "+this.name)
   }
   getage(){
       console.log("age is "+this.age);

   }
   getprofession(){
       console.log("profession is "+this.profession)
   }
   setname(newname){
       this.name=newname;
   }
   setage(newage){
       this.age=newage
   }
   setprofession(newprofession){
       this.profession=newprofession
   }

} 
var person1=new person();
person1.setname("sasi");
person1.setage(21);
person1.setprofession("developer");
person1.getname();
person1.getage();
person1.getprofession()

output-
name is sasi
age is 21
profession is developer

4)write a class to calculate uber price.

code-
       class UberPriceCalculator{
    constructor(basefare,CPM,TR,CRD,SBM,ridedistance,bookingfee){
        this.basefare=basefare;
        this.CPM=CPM;
        this.TR=TR;
        this.CRD=CRD;
        this.SBM=SBM;
        this.ridedistance=ridedistance
        this.bookingfee=bookingfee;

    }
    getprice(){
        console.log("THE RIDE PRICE IS "+(this.basefare + ((this.CPM * this.TR) + (this.CRD* this.ridedistance) *this.SBM) + this.bookingfee ))
    }
    
     setprice(newbasefare,newCPM,newTR,newCRD,newSBM,newridedistance,newbookingfee){
            this.basefare=newbasefare;
            this.CPM=newCPM;
            this.TR=newTR;
            this.CRD=newCRD;
            this.SBM=newSBM;
            this.ridedistance=newridedistance
            this.bookingfee=newbookingfee;
    
        }    
}
var cost1=new UberPriceCalculator();
cost1.setprice(100,5,20,15,10,3,20)
cost1.getprice()

output-THE RIDE PRICE IS 670                            
