$("#clear").click(function(){
	localStorage.setItem("davedere", "[]");
	$("#towatch").html("");
});
$("#random").click(function(){
	$("#random-chose").html("<b>Film Scelto: </b><i>"+getRandomName()+"</i>");
	$("#random-chose").show();
});
function upgradeLists(){
	$("#main").ready(function(){
		$.get('php/getAllSettings.php',function(data){
			var js=JSON.parse(data);
			var folderName;
			for(i=0;i< js.length;i++){
				if(js[i].key=="folderName"){
					folderName=js[i].value.split(",");
					break;
				}
			}
			for (var i=0; i < folderName.length; i++){
				upgradeList(folderName[i].replace("-",""));
			}
			addEventUpgratedList();
		});
	});
}

function upgradeList(listName){	
		var list=getLista();
		$("#list-"+listName).find('li').each(function(){
			var id=$(this).children().attr("id");
			if(indexInList(list,id)==-1){
				$(this).prepend('<button type="button" class="btn btn-default btn-sm rememberMe">'+
								  '<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>'+
								'</button>');
			}else{
				$(this).prepend('<button type="button" class="btn btn-default btn-sm remembered">'+
								  '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>'+
								'</button>');
			}
			
		});
}
function addEventUpgratedList(){
	$(".rememberMe").click(function(){
		var id=$(this).next().attr("id");
		var name=$(this).next().text();
		var d = new Date();
		var time=d.getTime(); 
		list=getLista();
		insertLista(list,{"id":id,"name":name,"time":time});
		//$("#output").append('<li>'+$(this).text()+'</li>');
	});
}
function insertLista(list,element){
	if(indexInList(list,element.id)==-1){
		list.push(element);
		localStorage.setItem("davedere", JSON.stringify(list));
		updateMemorisedList();
	}
}
function removeLista(id){
	list=getLista();
	//list=findAndRemove(list,"id",id);
	index=indexInList(list,id);
	if(index!=-1)
		list.splice(index, 1);
	localStorage.setItem("davedere", JSON.stringify(list));
	updateMemorisedList();
}
function getLista(){
	var list=localStorage.getItem("davedere");
	if (typeof list == 'undefined') {
		list="[]";
	}
	if(list==null){
		list="[]";
	}
	list=JSON.parse(list);
	return list;
}
function indexInList(list,id){
	for(var i=0;i<list.length;i++){
		if(list[i].id==id){
			return i;
		}
	}
	return -1;
}
function getRandomName(){
	list=getLista();
	return list[Math.floor(Math.random()*list.length)].name;
}
function updateMemorisedList(){
	$("#towatch").html("");
	list=getLista();
	for(var i=0;i<list.length;i++){
		var d = new Date(list[i].time);
		$("#towatch").append('<li value="'+list[i].id+'" onclick="removeLista(\''+list[i].id+'\')"  >'+d.toLocaleString()+' '+list[i].name+'</li>');
	}
}
