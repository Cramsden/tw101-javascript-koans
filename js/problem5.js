"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */

function changeElementText(element, answer) {
    $(element).text(answer);
}

function urduTextReverser(advertisementText){
    var adLength = 0;
    var adInput = [];
    var adInput1 = "";
    var adInput2 = "";
    var adInput3 = "";
    var adOutput = "";

    for(var i=0; i<advertisementText.length; i++)
    {
        adLength += advertisementText[i].length;
        var adInputToAdd = advertisementText[i].join(" ");
        adInput.push(adInputToAdd);
        if(i ==1)
        {
            for(var j=0; j<advertisementText[i].length/2;j++)
            {
                var end = advertisementText[i].length-j-1;
                var temp = advertisementText[i][end];
                advertisementText[i][end] = advertisementText[i][j];
                advertisementText[i][j] = temp;
            }
        }
        var adOutputToAdd = advertisementText[i].join(" ");
        adOutput += adOutputToAdd;
        adOutput += " ";
    }

    changeElementText("#adBefore1", adInput[0]);
    changeElementText("#adBefore2", adInput[1]);
    changeElementText("#adBefore3", adInput[2]);
    changeElementText("#adResult", adOutput);
    changeElementText("#count", adLength);

}