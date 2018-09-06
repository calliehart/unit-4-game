$(document).ready(function(){

    var powerpuff = {
        startHealth: 140,
        health: 140,
        baseAttack: 11,
        currentAttack: 11,
        counterAttack: 18
    }

    var mojojojo = {
        startHealth: 110,
        health: 110,
        baseAttack: 28,
        currentAttack: 28,
        counterAttack: 11
    }

    var bullet = {
        startHealth: 120,
        health: 120,
        baseAttack: 19,
        currentAttack: 19,
        counterAttack: 16
    }

    var him = {
        startHealth: 150,
        health: 150,
        baseAttack: 8,
        currentAttack: 8,
        counterAttack: 24
    }

    var yourChar = null;
    var defenderChar = null;
    var defenderID = null;
    var yourCharID = null;
    var gameOver = false;
    var winCounter = 0;

//reset function sets board when site loads
function reset() {
    $("#instructions").empty();
    $("#instructions").append("Start By Selecting Your Character");
    $("#healthScoreChar").empty();
    $("#healthScoreDef").empty();
    $("#powerpuff98").appendTo("#charPool");
    $("#mojojojo").appendTo("#charPool");
    $("#bullet").appendTo("#charPool");
    $("#him").appendTo("#charPool");
    if (yourChar !== null) {
        yourChar.currentAttack = yourChar.baseAttack;
        yourChar = null;
    }
    
    $(defenderID).toggleClass("chosenBorder");
    $(yourCharID).toggleClass("chosenBorder");
    defenderChar = null;
    defenderID = null;
    winCounter = 0;
    gameOver = false;
    healthReset();
    
    

};//ends reset()

reset();

function healthReset() {
    powerpuff.health = powerpuff.startHealth;
    mojojojo.health = mojojojo.startHealth;
    him.health = him.startHealth;
    bullet.health = bullet.startHealth;
}

$("#powerpuff98").click(function() {

    if (yourChar === null) {
        yourChar = powerpuff;
        yourCharID = "#powerpuff98";
        $("#powerpuff98").appendTo("#chosenChar");
        $("#bullet").appendTo("#enemiesPool");
        $("#mojojojo").appendTo("#enemiesPool");
        $("#him").appendTo("#enemiesPool");
        $("#instructions").empty();
        $("#instructions").append("Now Choose Your Opponent");
        $("#healthScoreChar").html("Health: " + yourChar.health);
        $("#powerpuff98").toggleClass("chosenBorder");
       

    } else if (defenderChar === null && yourChar !== powerpuff) {
       defenderChar = powerpuff;
       defenderID = "#powerpuff98";
       $("#instructions").empty();
       $("#instructions").append("Let The Fight Begin!!");
       $("#powerpuff98").appendTo("#enemyChar");
       $("#healthScoreDef").html("Health: " + defenderChar.health);
       $("#powerpuff98").toggleClass("chosenBorder");
    }

});//ends #powerpuff98 click function

$("#bullet").click(function() {

    if (yourChar === null) {
        yourChar = bullet;
        yourCharID = "#bullet";
        $("#bullet").appendTo("#chosenChar");
        $("#powerpuff98").appendTo("#enemiesPool");
        $("#mojojojo").appendTo("#enemiesPool");
        $("#him").appendTo("#enemiesPool");
        $("#instructions").empty();
        $("#instructions").append("Now Choose Your Opponent");
        $("#healthScoreChar").html("Health: " + yourChar.health);
        $("#bullet").toggleClass("chosenBorder"); 
       
    } else if (defenderChar === null && yourChar !== bullet) {
        defenderChar = bullet;
        defenderID = "#bullet";
        $("#instructions").empty();
        $("#instructions").append("Let The Fight Begin!!");
        $("#bullet").appendTo("#enemyChar");
        $("#healthScoreDef").html("Health: " + defenderChar.health);
        $("#bullet").toggleClass("chosenBorder");
    } 
    
});//ends #bullet click function

$("#mojojojo").click(function() {

    if (yourChar === null) {
        yourChar = mojojojo;
        yourCharID = "#mojojojo";
        $("#mojojojo").appendTo("#chosenChar");
        $("#powerpuff98").appendTo("#enemiesPool");
        $("#bullet").appendTo("#enemiesPool");
        $("#him").appendTo("#enemiesPool");
        $("#instructions").empty();
        $("#instructions").append("Now Choose Your Opponent");
        $("#healthScoreChar").html("Health: " + yourChar.health); 
        $("#mojojojo").toggleClass("chosenBorder");
        
    } else if (defenderChar === null && yourChar !== mojojojo) {
        defenderChar = mojojojo;
        defenderID = "#mojojojo";
        $("#instructions").empty();
        $("#instructions").append("Let The Fight Begin!!");
        $("#mojojojo").appendTo("#enemyChar");
        $("#healthScoreDef").html("Health: " + defenderChar.health);
        $("#mojojojo").toggleClass("chosenBorder");
    } 
    
});//ends #mojojojo click function

$("#him").click(function() {

    if (yourChar === null) {
        yourChar = him;
        yourCharID = "#him";
        $("#him").appendTo("#chosenChar");
        $("#powerpuff98").appendTo("#enemiesPool");
        $("#mojojojo").appendTo("#enemiesPool");
        $("#bullet").appendTo("#enemiesPool");
        $("#instructions").empty();
        $("#instructions").append("Now Choose Your Opponent");
        $("#healthScoreChar").html("Health: " + yourChar.health);
        $("#him").toggleClass("chosenBorder"); 
        
    } else if (defenderChar === null && yourChar !== him) {
        defenderChar = him;
        defenderID = "#him";
        $("#instructions").empty();
        $("#instructions").append("Let The Fight Begin!!");
        $("#him").appendTo("#enemyChar");
        $("#healthScoreDef").html("Health: " + defenderChar.health);
        $("#him").toggleClass("chosenBorder"); 
    } 
    
});//ends #him click function



$("#attackBTN").click(function() {
    if (gameOver === false) {
        yourChar.health = yourChar.health - defenderChar.counterAttack;
        defenderChar.health = defenderChar.health - yourChar.currentAttack;
        yourChar.currentAttack = yourChar.currentAttack + yourChar.baseAttack;


        $("#healthScoreChar").html("Health: " + yourChar.health);
        $("#healthScoreDef").html("Health: " + defenderChar.health);
        $("#instructions").html("<h4>You took " + defenderChar.counterAttack + " damage.<br>You're opponent took " + yourChar.currentAttack + " damage.</h4>");

        if (yourChar.health <= 0) {
            $("#instructions").empty();
            $("#instructions").append("You Lost!!");
            gameOver = true;
            
        } else if (defenderChar.health <= 0) {
            winCounter++;
            if (winCounter === 3){
                $("#instructions").empty();
                $("#instructions").append("You Won the Game!");
                gameOver = true;
            } else {
                $("#instructions").empty();
                $("#instructions").append("You Won This Round. Choose Next Opponent.");
                defenderChar = null;
                $(defenderID).appendTo("#enemiesDefeated");
                $(defenderID).toggleClass("chosenBorder");
                defenderID = null;
            }
    
        }
    }

});//ends attack button


$("#resetBTN").click(function() {
reset();

});


});//end of Doc Ready