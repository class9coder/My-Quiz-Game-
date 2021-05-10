class Quiz{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    updateState(){
        database.ref("/").update({
            gameState: state,
        });
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref("constantCount").once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }

    play(){
        background("yellow");
        fill(0);
        textSize(30);
        text("Result Of The Quiz", 40, 450);
        text("----------------------------",320, 65);

        constestent.getPlayerInfo();

        if(allContestants !== undefined){
            debugger;
            var display_answers = 530;
            fill("blue");
            textSize(20);
            text("*NOTE: Contestant who answered correct are highlighted in green color!",130,490);

            for(var plr in allContestants){
                debugger;
                var correctAns = "2";
                if(correctAns === allContestants[plr].answer)
                    fill("green");
                    else
                    fill("red");

                    display_answers+=30;
                    textSize(20);
                    text(allContestants[plr].name + ":" + allContestants[plr].answer, 250, display_answers);
            }
        }
    }
}