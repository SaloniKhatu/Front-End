var human=
{
	first_name:"Saloni",
	last_name:"Khatu",
	age:18,
 	full_name:function()
 	{
 		return this.first_name+ this.last_name
 	}

}
	console.log(human.full_name());
	//creating object through constructor
	function batsman(name,strikerate,runscored,century)
	{
		this.name=name;
		this.strikerate=strikerate;
		this.runscored=runscored;
		this.century=century;
	}
var dhoni=new batsman("dhoni",1000,2000,800)
var virat=new batsman("virat",7000,1000,890)
var person=new Object()
person.age=18;
person.name="lol";
