$(document).ready (function() {
                var lives=5,drawings=5,wordbool=false,counter=0;
                var categoriesQ=[3];
                var categoriesA=[3];
                var emptyindexes=[];
                var Qindex;
        var $caty = $('.categoryy li').click(function () {
            var categoryy= $caty.index(this);
            localStorage.setItem('category',categoryy);
            });
        //to set the cateogry index as the user choosed
        var category = parseInt(localStorage.getItem('category'));
        //to get the cateogry index as the user choosed
                categoriesQ=[
                    [
                        'A German-born theoretical physicist who developed the theory of relativity ?',
                        'English scientist and mathematician who is most famous for his law of gravitation ?',
                        'The former Lucasian Professor of Mathematics at the University of Cambridge and author of A Brief History of Time ?',
                        'An English naturalist, geologist and biologist, best known for his contributions to the science of evolution ?'                                                                    ,
                        'The founder of the American Telephone and Telegraph Company (AT&T) in 1885 ?',
                        'Swedish chemist, engineer, inventor, businessman, and philanthropist.Known for inventing dynamite ?'                                                                           ,
                        'The founder of the modern science of genetics ?'                            ,
                        'The developer of the concept of the algorithm in mathematics ?'                ,
                        'The father of modern Optics ?'                                              ,
                        'The creator of the C programming language ?'], //scientists
                    
                    ['What country\'s flag has a red maple leaf?',
                     'What is the world\'s most populous country?',
                     'What country is the world\'s top travel destination?',
                     'What country\'s capital is Nairobi?',
                     'Leonardo da Vinci was born in what country?',
                     'Adidas and Volkswagen are companies from what country?',
                     'In what country was Nelson Mandela born?',
                     'What country was the first to land a man on the moon?',
                     'What is the largest country (by size and population) in South America?',
                     'In terms of land area, what is the largest country in the world?'
                    ], //countries
                    
                    ['In which country were the first Olympic Games held?',
                     'What is the name of the Barcelona football stadium ?',
                     'In which sport can you win the Davis Cup?',
                     'Which football team plays its home games at Wembley?',
                     'Which country has won the World Cup the most times?',
                     'Which country calls football ‘calcio’?',
                     'Where was the first ever World Cup held in 1930?',
                     'Which team has been in the top English league for longer than any other?',
                     'Before South Africa, how many World Cups had been played in Africa?',
                     'Name the player that scored the fastest Premier League hat-trick?'],   //sports
                    
                    ['How many oscars did the Titanic movie got?',
                     'Which malformation did Marilyn Monroe have when she was born?',
                     'How many Tomb Raider movies were made?',
                     'What is the name of the prison in the film The Rock?',
                     'Who is the protagonist in the Last Action Hero film?',
                     'What is the pseudonym of Allen Stewart Koningsberg?',
                     'What is the name of the little dragon in the animated movie Mulan?',
                     'Which actor does play Sonny Crockett in Miami Vice 2006?',
                     'Who is the director of Reservoir Dogs?',
                     'Who is the director of the X-files?'
                    ]    //movies
                    
                ];
                categoriesA=[
                    ['ALBERT EINSTEIN','ISAAC NEWTON','STEPHEN HAWKING','CHARLES DARWIN','GRAHAM BELL','ALFRED NOBEL','GREGOR MENDEL','AL KHAWARIZMI','IBN ALHAYTHAM',' DENNIS RITCHIE' ],  //scientists
                    
                    ['CANADA','CHINA','FRANCE','KENYA','ITALY','GERMANY','SOUTH AFRICA','USA','BRAZIL','RUSSIA'],   //countries
                    
                    ['GREECE','CAMP NOU','TENNIS','ENGLAND','BRAZIL','ITALY','AURUGUAY','ARSENAL','NONE','SADIO MANE'],   //sports
                    
                    ['ELEVEN','TWO MOVIES','SIX TOES','ALCATRAZ','ARNOLD SCHWARZENEGGER','WOODY ALLEN','MUSHU','COLIN FARELL','QUENTIN TARANTINO','ROB BOWMAN']    //movies
                ];

                var alphabets = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
                
                function newQuestion()
                {   var ans;
                    Qindex = parseInt(Math.random()*10);
                 var mylength=categoriesA[category][Qindex].length;
                    $(".question").html(categoriesQ[category][Qindex]);
                    for(var i=0;i<mylength;i++)
                    {
                        console.log(categoriesA[category][Qindex][i]);
                        if(categoriesA[category][Qindex][i]==" ")
                            {
                                ans = "<p></p>" ; 
                                $(".answer").append(ans);
                                 categoriesA[category][Qindex]=categoriesA[category][Qindex].replace(" ","");
                                mylength++;
                            }
                        else{
                                ans = "<span></span>" ;
                                $(".answer").append(ans);
                            }
                        
                    }
                }
                
                for(var i=0;i<=alphabets.length-1;i++)
                    {
                        var alphaHtml = "<span class='letter' id='lett"+i+"'>" + alphabets[i] + "</span>" ;
                        $("#alpha").append(alphaHtml); 
                    }
                    $(".letter").each(function(){
                        $(this).bind("click",function(){
                            $(this).css("color","rgba(0,0,0,0.5)");
                            $(this).unbind();
                            var answer = $(this).html();
                            submitAnswer(answer);
                        });
                    });
                function submitAnswer(answer)
                {
                    checkA(categoriesA[category][Qindex],answer);
                }
                function checkA(Qanswer,answer)
                {
                    for(var i=0;i<=Qanswer.length-1;i++)
                    {
                        if(answer==Qanswer[i])
                        {
                            console.log("correct");
                            showLetter(Qanswer[i],i,Qanswer);
                            wordbool = true;
                        }
                        else{
                            console.log("incorrect");
                            // update array of the empty indexes
                            
                        }
                    }
                    if(wordbool==false)
                        {
                            heartLost();
                            draw();
                        }

                    wordbool=false;
                }
                function showLetter(letter,indexOfLetter,Qanswer)
                {
                    var index = indexOfLetter+1;
                    counter++;
                    $(".answer>span:nth-of-type("+index+")").html(letter);
                    
//                    alert(counter+"  "+Qanswer.length)
                    if(counter==Qanswer.length)
                        {
                            $(".bodo").html("You Have Won");
                        }
                }
                newQuestion();
     for(var i=0; i<5; i++)
         {
             var txt ="<img src='heart.png'/>";
             $(".button1").append(txt);             
         }
        function heartLost()
            {
                lives--;
                if(lives==0)
                    {
                        $(".bodo").html("You Have lost");   
                        $(".letter").unbind("click");
                    }
        //        var htmllives = lives+1;
                $(".button1>img:last-child").remove();
            }
    function draw()
    {
        drawings--;
        var draws=['still.png','still_1.png','still_2.png','still_3.png','still_4.png'];
        var newimg= "imgs/"+draws[drawings];
        $("#stickmanimg").attr("src",newimg);
    }
     function playagin()
    {
        location.reload();
    }
    $(".playagain").click(function(){playagin()})
//   function hint()
//    {   var randomarr=[3];
//            var $ea =$(".answer>span").each(function(){
//            var  ch= $(this).html();
//            var booleann = $ea.index(this);
//                console.log(booleann)
//                if(ch=="")
//                {
//                    randomarr.push($ea.index(this));
//                }
//            });
//     var $caty = $('.categoryy li').click(function () {
//            var categoryy= $caty.index(this);
//            localStorage.setItem('category',categoryy);
//            });
//     alert(randomarr);
//    }
//    hint();
            });