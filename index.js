var currentPlayer
var playerChange
var scoreArray
var gameStatus
var turnCount = 0


//Changes the html text to signal next players turn


//Returns current Player
function getPlayer(){
    if (playerChange == 1){
        currentPlayer = "X"
        return currentPlayer
       
    }
    else if(playerChange == -1){
        currentPlayer = "O"
        return currentPlayer
        
    }
    
}
//Changes player
function playerTurn(){
    playerChange = playerChange * -1
    turnCount += 1
    console.log(turnCount)
    

}
function turnAlert()
{
    
 $('#turnAlert span').text("Player "+ getPlayer() +"'s turn");
}
function checkWinner(){

   
    if(gameStatus == true){
        
         //Check for row wins
    if (scoreArray[0] == scoreArray[1] && scoreArray[2]== scoreArray[1])
    {
        alert(getPlayer()+" Wins r1")
        gameStatus = false
        
    }
    else if (scoreArray[3] == scoreArray[4] && scoreArray[5]== scoreArray[4])
    {
        alert(getPlayer()+" Wins r2")
        gameStatus = false
        
    }
    else if (scoreArray[6] == scoreArray[7] && scoreArray[8]== scoreArray[7])
    {
        alert(getPlayer()+" Wins r3")
        gameStatus = false
        
    }
    
    //check for column wins
    else if (scoreArray[0] == scoreArray[3] && scoreArray[6]== scoreArray[3])
    {
        alert(getPlayer()+" Wins c1")
        gameStatus = false
        
    }
    else if (scoreArray[1] == scoreArray[4] && scoreArray[7]== scoreArray[4])
    {
        alert(getPlayer()+" Wins c2")
        gameStatus = false
        
    }
    else if (scoreArray[2] == scoreArray[5] && scoreArray[8]== scoreArray[5])
    {
        alert(getPlayer()+" Wins c3")
        gameStatus = false
        
    }
    //check for diagonal wins
    else if (scoreArray[0] == scoreArray[4] && scoreArray[8]== scoreArray[4])
    {
        alert(getPlayer()+" Wins d1")
        gameStatus = false
        
    }
    else if (scoreArray[2] == scoreArray[4] && scoreArray[6]== scoreArray[4])
    {
        alert(getPlayer()+" Wins d2")
        gameStatus = false
        
    }
    if(turnCount == 8)
    {
        alert("Tie Game")
    }
    if(gameStatus == false)
      {
        $("#button00").attr('disabled', true);
        $("#button01").attr('disabled', true);
        $("#button02").attr('disabled', true);

        $("#button03").attr('disabled', true);
        $("#button04").attr('disabled', true);
        $("#button05").attr('disabled', true);

        $("#button06").attr('disabled', true);
        $("#button07").attr('disabled', true);
        $("#button08").attr('disabled', true);
      }



    }


}
function beginGame() {
    scoreArray= ["1","2","3","4","5","6","7","8","9",]
    playerChange = 1
    gameStatus = true
    turnCount = 0
    createTable()
    
      $(document).ready(function() {
        $("#button00").click(function(){
          
          $("#button00").html(getPlayer())
          $("#button00").attr("value",getPlayer())
          //$("#button00").attr("value",getPlayer())
          //alert($("#button00").val())
          scoreArray[0] = $("#button00").val()
          console.log(scoreArray) //for testing purposes
          checkWinner()
          playerTurn() //change turn
          turnAlert() // alert next player
          $(this).attr('disabled', true);
          

          }); 
      });

      $(document).ready(function() {
        $("#button01").click(function(){
      
          $("#button01").html(getPlayer())
          $("#button01").attr("value",getPlayer())
          scoreArray[1] = $("#button01").val()
          checkWinner()
          playerTurn()
          turnAlert()
          $(this).attr('disabled', true);

          }); 
      });

      $(document).ready(function() {
        $("#button02").click(function(){
        
          $("#button02").html(getPlayer())
          $("#button02").attr("value",getPlayer())
          scoreArray[2] = $("#button02").val()
          console.log(scoreArray)
          checkWinner()
          playerTurn()
          turnAlert()
          $(this).attr('disabled', true);

          }); 
      });

      $(document).ready(function() {
        $("#button03").click(function(){
        
          $("#button03").html(getPlayer())
          $("#button03").attr("value",getPlayer())
          scoreArray[3] = $("#button03").val()
          checkWinner()
          playerTurn()
          turnAlert()
          $(this).attr('disabled', true);
          }); 
      });

      $(document).ready(function() {
        $("#button04").click(function(){
          
        //alert("button");
          $("#button04").html(getPlayer())
          $("#button04").attr("value",getPlayer())
          scoreArray[4] = $("#button04").val()
          checkWinner()
          playerTurn()
          turnAlert()
          $(this).attr('disabled', true);
          }); 
      });

      $(document).ready(function() {
        $("#button05").click(function(){
        //alert("button");
          $("#button05").html(getPlayer())
          $("#button05").attr("value",getPlayer())
          scoreArray[5] = $("#button05").val()
          checkWinner()
          playerTurn()
          turnAlert()
          $(this).attr('disabled', true);
          }); 
      });

      $(document).ready(function() {
        $("#button06").click(function(){
        //alert("button");
          $("#button06").html(getPlayer())
          $("#button06").attr("value",getPlayer())
          scoreArray[6] = $("#button06").val()
          checkWinner()
          playerTurn()
          turnAlert()
          $(this).attr('disabled', true);
          }); 
      });

      $(document).ready(function() {
        $("#button07").click(function(){
        //alert("button");
          $("#button07").html(getPlayer())
          $("#button07").attr("value",getPlayer())
          scoreArray[7] = $("#button07").val()
          checkWinner()
          playerTurn()
          turnAlert()
          $(this).attr('disabled', true);
          }); 
      });

      $(document).ready(function() {
        $("#button08").click(function(){
        //alert("button");
          $("#button08").html(getPlayer())
          $("#button08").attr("value",getPlayer())
          scoreArray[8] = $("#button08").val()
          checkWinner()
          playerTurn()
          turnAlert()
          $(this).attr('disabled', true);
          }); 
      });

      

    //console.log($("#button00").val())
    /*
    while (gameStatus == true)
    
    {

        for(var i = 0;i<9;i++)
        {
            currentPlayer ="X"
            $("turnAlert").replaceWith("<div>"+$(turnAlert).text("Player " + getPlayer() +"'s turn")+"</div>")
        
        }
        gameStatus== false

    }
    */

    //ask for player to do something
    

    

}

function createTable(){
    var x = document.getElementById("myTable")


    //add row 1 to table
    var row1 = document.createElement("TR");
    row1.setAttribute("id", "TR1");
    document.getElementById("myTable").appendChild(row1);

   
    //add col 1 to row1
    var col1 = document.createElement("TD");
    var col2 = document.createElement("TD");
    var col3 = document.createElement("TD");
    //add element to first grid node
    var grid00 = document.createElement("BUTTON");
    var grid01 = document.createElement("BUTTON");
    var grid02 = document.createElement("BUTTON");


    col1.appendChild(grid00);
    col2.appendChild(grid01);
    col3.appendChild(grid02);

    document.getElementById("TR1").appendChild(col1);
    document.getElementById("TR1").appendChild(col2);
    document.getElementById("TR1").appendChild(col3);

    //second row
    var row2 = document.createElement("TR");
    row2.setAttribute("id", "TR2");
    document.getElementById("myTable").appendChild(row2);

    var col4 = document.createElement("TD");
    var col5 = document.createElement("TD");
    var col6 = document.createElement("TD");

    var grid03 = document.createElement("BUTTON");
    var grid04 = document.createElement("BUTTON");
    var grid05 = document.createElement("BUTTON");
    col4.appendChild(grid03);
    col5.appendChild(grid04);
    col6.appendChild(grid05);

    document.getElementById("TR2").appendChild(col4);
    document.getElementById("TR2").appendChild(col5);
    document.getElementById("TR2").appendChild(col6);

    //third row

    var row3 = document.createElement("TR");
    row3.setAttribute("id", "TR3");
    document.getElementById("myTable").appendChild(row3);

    var col7 = document.createElement("TD");
    var col8 = document.createElement("TD");
    var col9 = document.createElement("TD");

    var grid06 = document.createElement("BUTTON");
    var grid07 = document.createElement("BUTTON");
    var grid08 = document.createElement("BUTTON");
    col7.appendChild(grid06);
    col8.appendChild(grid07);
    col9.appendChild(grid08);

    document.getElementById("TR3").appendChild(col7);
    document.getElementById("TR3").appendChild(col8);
    document.getElementById("TR3").appendChild(col9);

    grid00.setAttribute("id", "button00");
    grid01.setAttribute("id", "button01");
    grid02.setAttribute("id", "button02");

    grid03.setAttribute("id", "button03");
    grid04.setAttribute("id", "button04");
    grid05.setAttribute("id", "button05");

    grid06.setAttribute("id", "button06");
    grid07.setAttribute("id", "button07");
    grid08.setAttribute("id", "button08");

    $("#button00").html(" &nbsp&nbsp&nbsp&nbsp")
    $("#button01").html(" &nbsp&nbsp&nbsp&nbsp")
    $("#button02").html(" &nbsp&nbsp&nbsp&nbsp")
    $("#button03").html(" &nbsp&nbsp&nbsp&nbsp")
    $("#button04").html(" &nbsp&nbsp&nbsp&nbsp")
    $("#button05").html(" &nbsp&nbsp&nbsp&nbsp")
    $("#button06").html(" &nbsp&nbsp&nbsp&nbsp")
    $("#button07").html(" &nbsp&nbsp&nbsp&nbsp")
    $("#button08").html(" &nbsp&nbsp&nbsp&nbsp")
 
}

function resetTiles(){
    
    $("#myTable > tr").empty();
    beginGame()
}
