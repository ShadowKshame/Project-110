//https://teachablemachine.withgoogle.com/models/Uq1h5x7IL/

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Uq1h5x7IL/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_hand_name").innerHTML = results[0].label;
        document.getElementById("result_hand_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "Nice")
        {
            document.getElementById("update_gesture").innerHTML = "&#128076;";
        }
        if(results[0].label == "Thumbs up")
        {
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if(results[0].label == "Peace")
        {
            document.getElementById("update_gesture").innerHTML = "&#9996;";
        }
        if(results[0].label == "up")
        {
            document.getElementById("update_gesture").innerHTML = "&#9757;";
        }
        if(results[0].label == "fist")
        {
            document.getElementById("update_gesture").innerHTML = "&#9994;";
        }
        if(results[0].label == "L")
        {
            document.getElementById("update_gesture2").innerHTML = "&#128070;";
        }
        if(results[1].label == "Nice")
        {
            document.getElementById("update_gesture2").innerHTML = "&#128076;";
        }
        if(results[1].label == "Thumbs up")
        {
            document.getElementById("update_gesture2").innerHTML = "&#128077;";
        }
        if(results[1].label == "Peace")
        {
            document.getElementById("update_gesture2").innerHTML = "&#9996;";
        }
        if(results[1].label == "up")
        {
            document.getElementById("update_gesture2").innerHTML = "&#9757;";
        }
        if(results[1].label == "fist")
        {
            document.getElementById("update_gesture2").innerHTML = "&#9994;";
        }
        if(results[1].label == "L")
        {
            document.getElementById("update_gesture2").innerHTML = "&#128070;";
        }
    }
}
