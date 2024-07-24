document.getElementById('chooseAdven').addEventListener('click', function() {
    let firstAnswer = window.prompt(`Welcome to Choose your Adventure! You are walking alone in a dark 
    ancient forest, where deep into a path you come across a fork in the road.
    Do you head Left or Right?`)
    if(firstAnswer === 'left'){
        let secondAnswer = window.prompt(`You come across a stray cat. 
            It scampers off down a small hole, just large enough for you to crawl through. 
            Do you "follow" it, or "continue" on your path?`)
        if(secondAnswer === 'follow'){
            let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, 
                nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. 
                They are content with you staying"stay", but you wonder if you should alert the world 
                to this magical safe haven."spread the word"`)
            if(thirdAnswer === 'stay'){
                let fourthAnswer = window.prompt(`You live happily amongst the cats for the rest 
                    of your days. One day, you find a hidden tunnel in the colony. Do you "explore" it or "ignore" it?`);
                if(fourthAnswer === 'explore'){
                    let fifthAnswer = window.prompt(`The tunnel leads you to an ancient underground library filled with magical books. Do you "read" them or "leave" them?`);
                    if(fifthAnswer === 'read'){
                        let sixthAnswer = window.prompt(`You gain immense knowledge and become a powerful wizard. You decide to use your powers to "help" the world or "rule" it.`);
                        if(sixthAnswer === 'help'){
                            window.alert(`You become a legendary hero, known for your wisdom and kindness.`);
                        } else if(sixthAnswer === 'rule'){
                            window.alert(`You become a feared sorcerer, ruling the land with an iron fist.`);
                        }
                    } else if(fifthAnswer === 'leave'){
                        window.alert(`You return to the cat colony, content with your simple life.`);
                    }
                } else if(fourthAnswer === 'ignore'){
                    window.alert(`You continue living peacefully with the cats.`);
                }
            }else if(thirdAnswer === 'spread the word'){
                let fourthAnswer = window.prompt(`After leaving the cat colony, you are never able
                    to find it again; without proof, no one believes your story, which passes into
                    legend nonetheless. Years later, you hear rumors of a similar colony. Do you "investigate" or "ignore" the rumors?`);
                if(fourthAnswer === 'investigate'){
                    let fifthAnswer = window.prompt(`You discover another magical colony, but this time of mystical creatures. Do you "join" them or "leave" them?`);
                    if(fifthAnswer === 'join'){
                        window.alert(`You live out your days in wonder and magic, surrounded by fantastical beings.`);
                    } else if(fifthAnswer === 'leave'){
                        window.alert(`You return to your normal life, forever pondering the mysteries you've encountered.`);
                    }
                } else if(fourthAnswer === 'ignore'){
                    window.alert(`You continue with your life, occasionally reminiscing about magical cats.`)
                }
            }
        }else if(secondAnswer === 'continue'){
            let thirdAnswer = window.prompt(`You come across a chamber that reaches upward to a
                shining light above. There is a long, winding "staircase", and a much quicker, but
                rickety-looking "ladder" that leads up toward the light. Which do you take?`)
            if(thirdAnswer === 'ladder'){
                let fourthAnswer = window.prompt(`After ascending a few feet up the ladder, one of 
                    its rungs snaps, and you comedically fall through each of the rungs below. Sheepish,
                    you return home. However, you notice a hidden passageway in the cave. Do you "enter" it or "ignore" it?`);
                if(fourthAnswer === 'enter'){
                    let fifthAnswer = window.prompt(`The passageway leads to a hidden treasure chamber. Do you "take" the treasure or "leave" it?`);
                    if(fifthAnswer === 'take'){
                        window.alert(`You become incredibly wealthy but live in constant fear of being discovered.`);
                    } else if(fifthAnswer === 'leave'){
                        window.alert(`You leave the treasure and return home, living a modest but peaceful life.`);
                    }
                } else if(fourthAnswer === 'ignore'){
                    window.alert(`You return home, content with your small adventure.`);
                }
            }else if(thirdAnswer === 'staircase'){
                let fourthAnswer = window.prompt(`After ascending the staircase, you discover a shiny
                    blue stone, which you take home and cherish forever.`)
            }
        }
        
    
    } else if(firstAnswer === 'right'){
        let secondAnswer = window.prompt(`You come across a snoring dragon. 
            On the other side of him, you see a shiny chest of treasure"past" the dragon. Another path would 
            lead you "away" from the dragon altogether. Which path do you take?`)
        if(secondAnswer === 'past'){
            let thirdAnswer = window.prompt(`The dragon wakes up and sits upright. You only have a
             moment to respond, to "stay" or "run":`)
            if(thirdAnswer === 'stay'){
                let fourthAnswer = window.prompt(`You and the dragon have an uplifting conversation 
                    about local politics and become lifelong friends. The Dragon's name is Hank and he lets you ride him. 
                    One day, Hank asks for your help to retrieve a stolen artifact. Do you "help" him or "decline"?`);
                if(fourthAnswer === 'help'){
                    let fifthAnswer = window.prompt(`You embark on a thrilling adventure with Hank and successfully retrieve the artifact. Do you "keep" it or "give" it back to Hank?`);
                    if(fifthAnswer === 'keep'){
                        window.alert(`Hank is disappointed but understands. You gain immense power from the artifact.`);
                    } else if(fifthAnswer === 'give'){
                        window.alert(`Hank is grateful and you both continue to have many more adventures together.`);
                    }
                } else if(fourthAnswer === 'decline'){
                    window.alert(`Hank is disappointed but respects your decision. You continue to be friends and have smaller adventures together.`);
                }
            }else if(thirdAnswer = 'run'){
                let fourthAnswer = window.prompt(`Quickly, you run back to the cave's entrance. 
                    Sheepish, you return home. However, you find a map dropped by the dragon. Do you "follow" it or "discard" it?`);
                if(fourthAnswer === 'follow'){
                    let fifthAnswer = window.prompt(`The map leads to an ancient ruin filled with traps and treasures. Do you "explore" or "turn back"?`);
                    if(fifthAnswer === 'explore'){
                        window.alert(`You navigate the traps and discover a hidden treasure, becoming wealthy`)
                    }
                }
            }
        }else if(secondAnswer === 'away'){
            let thirdAnswer = window.prompt(`After walking a while longer, you come across a shiny 
                blue flower. It is so beautiful that you decide you must either "draw it" or "pick it". 
                Which do you do?`)
            if(thirdAnswer === 'draw it'){
                let thirdAnswer = window.prompt(`You draw the flower, capturing only a fraction of 
                    its beauty with your quill. You bring the drawing home, somewhat disappointed, 
                    but over time, discover joy in sharing it with your friends and family, recounting 
                    the story of your days as a sorcerer with the aid of the sketch.`)
            }else if(thirdAnswer === 'pick it'){
                let thirdAnswer = window.prompt(`You pick the flower and bring it home, and all 
                    marvel at its brilliance. However, over time it fades and eventually crumbles 
                    to dust.`)
            }
        }
    }
    
})

