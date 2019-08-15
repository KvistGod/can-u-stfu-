/*
 * Dette script definerer klassen Kurv
*/

function Kurv(x, y, bredde, dybde, speed) {
    /* Den første del af funktionen er en "konstruktør".
     * Den tager parametrene og konstruerer et nyt objekt 
     * ud fra dem. Værdierne huskes som hørende til netop 
     * dette objekt ved hjælp af nøgleordet this
     */
    
    this.x = x;
    this.y = y;
    this.bred = bredde;
    this.dyb = dybde;
    this.speed = speed;
    this.col = [250,230,150];

    this.tegn = function() {
        fill(this.col);
        rect(this.x, this.y, this.bred, this.dyb);
    }
    //Gør det muligt at bevæge kurven med tasterne w, s, a & d både med caps lock aktiveret og uden.
    this.move = function(tast) {
        if (tast == 'w' || tast== 'W') {
            this.y -= this.speed;
            if (this.y < 0) {this.y = 0};
        }
        if (tast == 's' || tast == 'S') {
            this.y += this.speed;
            if (this.y > height-this.dyb) {this.y = height - this.dyb};
        }
        if (tast == 'a' || tast == 'A') {
            this.x -= this.speed;
            if (this.x < 0) {this.x = 0};
        }
        if (tast == 'd' || tast == 'D') {
            this.x += this.speed;
            if (this.x > width-this.bred) {this.x = width - this.bred};
        }
    }

    this.grebet = function(xa, ya, ra) {
        if ((ya < this.y+3 && ya > this.y-3) && xa > this.x+ra && xa < this.x+this.bred-ra) {
            return true;
        }
        else {
            return false;
        }
    }
    this.follow = function(){
        if (mousePressed){
            this.x = mouseX - 35; this.y = mouseY - 25;
        }
    }

} 