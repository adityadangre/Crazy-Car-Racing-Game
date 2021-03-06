class levelSelect {
    constructor(){
    }

    selectLevel(){
        camera.y=canvas.height/2;
        textSize(60);
        fill(202, 146, 16);
        stroke(216, 43, 4);
        strokeWeight(10);
        text("Crazy Car Racing Game", (displayWidth-1185)/2-50, (displayHeight-650)/2);
        textSize(40);
        fill("white");
        stroke(216, 43, 4);
        strokeWeight(10);
        text("Start with Level . . . . . . ", (displayWidth)/2-300 , (displayHeight)/2 + 50);

        this.btlevelvisibletrue();

        //bigenner Level selection
        if(mousePressedOver(btbig)){
            this.btlevelvisiblefalse();
            buttonclick.play();
            gameState=1;
            speedlimit=30; 
            carframecount=60; 
            coinframecount=10;
        } 
        if(mouseIsOver(btbig))
            btbig.addImage(btbig2_img);        
        else
        btbig.addImage(btbig1_img); 

        //Intermidiate Level Selection
        if(mousePressedOver(btint)){
            this.btlevelvisiblefalse();
            buttonclick.play();
            gameState=1;
            speedlimit=60; 
            carframecount=40; 
            coinframecount=30;

        } 
        if(mouseIsOver(btint))
            btint.addImage(btint2_img);        
        else
        btint.addImage(btint1_img); 

        //Expert Level Selection
        if(mousePressedOver(btexp)){
            this.btlevelvisiblefalse();
            buttonclick.play();
            gameState=1;
            speedlimit=90; 
            carframecount=20; 
            coinframecount=50;
        } 
        if(mouseIsOver(btexp))
            btexp.addImage(btexp2_img);        
        else
        btexp.addImage(btexp1_img); 
    }

    btlevelvisiblefalse(){
        btbig.visible=false;
        btint.visible=false;
        btexp.visible=false;        
    }
    btlevelvisibletrue(){
        btbig.visible=true;
        btint.visible=true;
        btexp.visible=true;       
    }
}
